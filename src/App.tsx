import React from 'react';
import './App.css';


import Header from './components/header/Header';
import AboutMePage from './pages/AboutMePage';
import SkillsPage from './pages/SkillsPage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className='font-fjalla w-full bg-custom-purple'>
      <Header />
      <AboutMePage />
      <SkillsPage />
      <ProjectPage />
      <ContactPage />
    </div>
  );
}

export default App;
