import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const marketingItems = [
    { name: '3 KW Systems', path: '/marketing/3kw' },
    { name: '5 KW Systems', path: '/marketing/5kw' },
    { name: '10 KW to 500 KW Commercial and Industrial', path: '/marketing/commercial-industrial' },
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

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="nav-header sticky top-0 z-50 bg-white shadow-sm">
      <div className="w-full flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
          <img 
            src="/assets/Logo.jpg" 
            alt="Green Power Solar Energy" 
            className="h-8 sm:h-10 w-auto object-contain"
          />
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
          <Link
            to="/gallery"
            className={`nav-link ${isActive('/gallery') ? 'bg-gray-100' : ''}`}
          >
            Gallery
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
          className="lg:hidden p-2 -mr-2 text-gray-700 hover:text-green-600 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          style={{ top: '73px' }}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-[73px] left-0 right-0 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto max-h-[calc(100vh-73px)] ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col">
          {/* Main Navigation Links */}
          <Link 
            to="/" 
            className={`px-6 py-4 border-b border-gray-100 hover:bg-green-50 transition-colors ${isActive('/') ? 'bg-green-50 text-green-600 font-semibold' : 'text-gray-700'}`}
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`px-6 py-4 border-b border-gray-100 hover:bg-green-50 transition-colors ${isActive('/about') ? 'bg-green-50 text-green-600 font-semibold' : 'text-gray-700'}`}
            onClick={handleLinkClick}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`px-6 py-4 border-b border-gray-100 hover:bg-green-50 transition-colors ${isActive('/contact') ? 'bg-green-50 text-green-600 font-semibold' : 'text-gray-700'}`}
            onClick={handleLinkClick}
          >
            Contact Us
          </Link>
          <Link 
            to="/why-choose-us" 
            className={`px-6 py-4 border-b border-gray-100 hover:bg-green-50 transition-colors ${isActive('/why-choose-us') ? 'bg-green-50 text-green-600 font-semibold' : 'text-gray-700'}`}
            onClick={handleLinkClick}
          >
            Why Choose Us
          </Link>
          <Link 
            to="/gallery" 
            className={`px-6 py-4 border-b border-gray-100 hover:bg-green-50 transition-colors ${isActive('/gallery') ? 'bg-green-50 text-green-600 font-semibold' : 'text-gray-700'}`}
            onClick={handleLinkClick}
          >
            Gallery
          </Link>
          
          {/* Accordion for Sub-menus */}
          <Accordion type="multiple" className="w-full">
            {/* Marketing Accordion */}
            <AccordionItem value="marketing" className="border-b border-gray-100">
              <AccordionTrigger className="px-6 py-4 hover:bg-green-50 text-gray-700 font-semibold hover:no-underline">
                Marketing
              </AccordionTrigger>
              <AccordionContent className="px-0 pb-0">
                <div className="bg-gray-50">
                  {marketingItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block px-10 py-3 text-sm hover:bg-green-100 transition-colors border-b border-gray-200 last:border-b-0 ${isActive(item.path) ? 'bg-green-100 text-green-600 font-semibold' : 'text-gray-600'}`}
                      onClick={handleLinkClick}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Sales Accordion */}
            <AccordionItem value="sales" className="border-b border-gray-100">
              <AccordionTrigger className="px-6 py-4 hover:bg-green-50 text-gray-700 font-semibold hover:no-underline">
                Sales
              </AccordionTrigger>
              <AccordionContent className="px-0 pb-0">
                <div className="bg-gray-50">
                  {salesItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block px-10 py-3 text-sm hover:bg-green-100 transition-colors border-b border-gray-200 last:border-b-0 ${isActive(item.path) ? 'bg-green-100 text-green-600 font-semibold' : 'text-gray-600'}`}
                      onClick={handleLinkClick}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Service Accordion */}
            <AccordionItem value="service" className="border-b border-gray-100">
              <AccordionTrigger className="px-6 py-4 hover:bg-green-50 text-gray-700 font-semibold hover:no-underline">
                Service
              </AccordionTrigger>
              <AccordionContent className="px-0 pb-0">
                <div className="bg-gray-50">
                  {serviceItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block px-10 py-3 text-sm hover:bg-green-100 transition-colors border-b border-gray-200 last:border-b-0 ${isActive(item.path) ? 'bg-green-100 text-green-600 font-semibold' : 'text-gray-600'}`}
                      onClick={handleLinkClick}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </nav>
  );
};