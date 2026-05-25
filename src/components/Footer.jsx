
import React from 'react';
import { Link } from 'react-router-dom';
import { Atom, Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 font-bold text-xl mb-4">
              <Atom className="h-6 w-6 text-primary" />
              <span>Quantumporter</span>
            </div>
            <p className="text-sm text-secondary-foreground/80 max-w-xs">
              Your trusted source for quantum science and technology news, research, and insights.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  News Feed
                </Link>
              </li>
              <li>
                <Link to="/archives" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Archives
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/60">
          <p>&copy; 2026 Quantumporter. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-secondary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-secondary-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
