import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import EyewearPage from './pages/EyewearPage';
import EyewearDetailPage from './pages/EyewearDetailPage';
import StoresPage from './pages/StoresPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="eyewear" element={<EyewearPage />} />
        <Route path="eyewear/:id" element={<EyewearDetailPage />} />
        <Route path="stores" element={<StoresPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
