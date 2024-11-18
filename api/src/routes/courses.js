import express from 'express';
import { body } from 'express-validator';
import multer from 'multer';
import Course from '../models/Course.js';
import { auth, instructorOnly } from '../middleware/auth.js';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// Get all courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find()
      .populate('instructor', 'name')
      .select('-lessons');
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get single course
router.get('/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id)
      .populate('instructor', 'name')
      .populate('reviews.user', 'name');
    
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Create course (instructors only)
router.post('/',
  auth,
  instructorOnly,
  upload.single('thumbnail'),
  [
    body('title').trim().notEmpty(),
    body('description').trim().notEmpty(),
    body('price').isFloat({ min: 0 }),
    body('category').trim().notEmpty()
  ],
  async (req, res) => {
    try {
      const course = new Course({
        ...req.body,
        instructor: req.user._id,
        thumbnail: req.file.path
      });
      
      await course.save();
      res.status(201).json(course);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  }
);

// Update course
router.patch('/:id',
  auth,
  instructorOnly,
  async (req, res) => {
    try {
      const course = await Course.findOneAndUpdate(
        { _id: req.params.id, instructor: req.user._id },
        req.body,
        { new: true }
      );

      if (!course) {
        return res.status(404).json({ message: 'Course not found' });
      }

      res.json(course);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  }
);

// Add review
router.post('/:id/reviews',
  auth,
  [
    body('rating').isInt({ min: 1, max: 5 }),
    body('comment').trim().notEmpty()
  ],
  async (req, res) => {
    try {
      const course = await Course.findById(req.params.id);
      
      if (!course) {
        return res.status(404).json({ message: 'Course not found' });
      }

      const review = {
        user: req.user._id,
        rating: req.body.rating,
        comment: req.body.comment
      };

      course.reviews.push(review);
      
      // Update course rating
      const totalRating = course.reviews.reduce((sum, item) => sum + item.rating, 0);
      course.rating = totalRating / course.reviews.length;
      
      await course.save();
      res.status(201).json(course);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  }
);