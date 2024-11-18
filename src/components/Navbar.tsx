import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Menu, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-2xl font-bold text-purple-600">LearnHub</Link>
            <div className="hidden md:block relative flex-1 max-w-2xl">
              <input
                type="text"
                placeholder="Search for anything..."
                className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:border-purple-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/teach" className="hidden md:block hover:text-purple-600">Teach on LearnHub</Link>
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>
            <Link to="/profile" className="hidden md:block">
              <User className="h-6 w-6" />
            </Link>
            <button className="md:hidden">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}