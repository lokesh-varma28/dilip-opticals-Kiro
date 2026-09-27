import React from 'react';
import { Outlet } from 'react-router-dom';
import AnnouncementBar from './AnnouncementBar';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

export function Layout() {
  return (
    <div className="page-wrapper">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <ScrollToTop />
      <AnnouncementBar />
      <Navbar />
      <main className="main-content" id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
