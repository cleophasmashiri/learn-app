import React from 'react';
import { Star } from 'lucide-react';
import { Course } from '../types';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Link to={`/course/${course.id}`} className="group">
      <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="p-4">
          <h3 className="font-semibold text-lg group-hover:text-purple-600 transition-colors">
            {course.title}
          </h3>
          <p className="text-sm text-gray-600 mt-1">{course.instructor}</p>
          <div className="flex items-center mt-2">
            <span className="text-yellow-400 font-bold">{course.rating.toFixed(1)}</span>
            <div className="flex items-center ml-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(course.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600 ml-2">
              ({course.totalStudents.toLocaleString()} students)
            </span>
          </div>
          <div className="mt-3">
            <span className="font-bold text-lg">${course.price.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}