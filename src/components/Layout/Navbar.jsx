import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Sun } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const marketingItems = [
    { name: '3 KW Systems', path: '/marketing/3kw' },
    { name: '5 KW Systems', path: '/marketing/5kw' },
    { name: '10 KW to 500 KW Commercial and Industrial Systems', path: '/marketing/commercial-industrial' },
  ];

  const salesItems = [
    { name: 'Panel Solar', path: '/sales/panel-solar' },
    { name: 'Inverter', path: '/sales/inverter' },
    { name: 'Charge Controller', path: '/sales/charge-controller' },
    { name: 'Others', path: '/sales/others' },
  ];

  const serviceItems = [
    { name: 'New Project Installation (3–10 KW)', path: '/service/installation' },
    { name: 'Old Project Repairing', path: '/service/repair' },
    { name: 'AMC (Only Industrial)', path: '/service/amc' },
  ];

  return (
    <nav className="nav-header">
      <div className="w-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <Sun className="h-8 w-8 text-green-600" />
          <span className="heading-3 text-green-600">Green Power Solar Energy</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          <Link
            to="/"
            className={`nav-link ${isActive('/') ? 'bg-gray-100' : ''}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`nav-link ${isActive('/about') ? 'bg-gray-100' : ''}`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${isActive('/contact') ? 'bg-gray-100' : ''}`}
          >
            Contact Us
          </Link>
          <Link
            to="/why-choose-us"
            className={`nav-link ${isActive('/why-choose-us') ? 'bg-gray-100' : ''}`}
          >
            Why Choose Us
          </Link>

          {/* Marketing Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="nav-link flex items-center space-x-1">
              <span>Marketing</span>
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {marketingItems.map((item) => (
                <DropdownMenuItem key={item.path} asChild>
                  <Link to={item.path}>{item.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Sales Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="nav-link flex items-center space-x-1">
              <span>Sales</span>
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {salesItems.map((item) => (
                <DropdownMenuItem key={item.path} asChild>
                  <Link to={item.path}>{item.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Service Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="nav-link flex items-center space-x-1">
              <span>Service</span>
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {serviceItems.map((item) => (
                <DropdownMenuItem key={item.path} asChild>
                  <Link to={item.path}>{item.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4 p-4 bg-white rounded-lg border border-gray-200">
          <div className="flex flex-col space-y-2">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact Us</Link>
            <Link to="/why-choose-us" className="nav-link">Why Choose Us</Link>
            
            <div className="py-2">
              <p className="font-semibold text-gray-600 mb-2">Marketing</p>
              {marketingItems.map((item) => (
                <Link key={item.path} to={item.path} className="nav-link ml-4">
                  {item.name}
                </Link>
              ))}
            </div>
            
            <div className="py-2">
              <p className="font-semibold text-gray-600 mb-2">Sales</p>
              {salesItems.map((item) => (
                <Link key={item.path} to={item.path} className="nav-link ml-4">
                  {item.name}
                </Link>
              ))}
            </div>
            
            <div className="py-2">
              <p className="font-semibold text-gray-600 mb-2">Service</p>
              {serviceItems.map((item) => (
                <Link key={item.path} to={item.path} className="nav-link ml-4">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};