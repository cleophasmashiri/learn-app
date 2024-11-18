import React from 'react';
import CourseCard from '../components/CourseCard';

const featuredCourses = [
  {
    id: '1',
    title: 'Complete Web Development Bootcamp 2024',
    description: 'Learn web development from scratch to advanced level',
    instructor: 'Dr. Angela Yu',
    price: 89.99,
    rating: 4.8,
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    category: 'Web Development',
    totalStudents: 125000,
    lastUpdated: '2024-02',
  },
  {
    id: '2',
    title: 'Machine Learning A-Z™: AI, Python & R',
    description: 'Learn Machine Learning from basics to advanced',
    instructor: 'Kirill Eremenko',
    price: 94.99,
    rating: 4.7,
    thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c',
    category: 'Data Science',
    totalStudents: 98000,
    lastUpdated: '2024-01',
  },
  {
    id: '3',
    title: 'iOS & Swift - The Complete iOS App Development Bootcamp',
    description: 'From beginner to iOS app developer with just one course',
    instructor: 'Dr. Angela Yu',
    price: 99.99,
    rating: 4.9,
    thumbnail: 'https://images.unsplash.com/photo-1621839673705-6617adf9e890',
    category: 'Mobile Development',
    totalStudents: 85000,
    lastUpdated: '2024-03',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Learn what matters. Excel in your career.
            </h1>
            <p className="text-xl mb-8">
              Choose from over 100,000 online video courses with new additions published every month
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Explore Courses
            </button>
          </div>
        </div>
      </div>

      {/* Featured Courses */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8">Featured Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Top Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {['Development', 'Business', 'Design', 'Marketing', 'IT & Software', 'Personal Development', 'Photography', 'Music'].map((category) => (
              <div
                key={category}
                className="p-6 border rounded-lg hover:border-purple-600 hover:shadow-md transition-all cursor-pointer"
              >
                <h3 className="font-semibold">{category}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}