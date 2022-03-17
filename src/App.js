import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Loader from './components/Loader/Loader';
import useHttp from './hooks/use-http';
import SocialBar from './layouts/SocialBar/SocialBar';
import Footer from './layouts/Footer/Footer';
import Header from './layouts/Header/Header';


const HomePage = React.lazy(() => import('./pages/HomePage/HomePage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage/AboutPage'));
const ProjectsPage = React.lazy(() => import('./pages/ProjectsPage/ProjectsPage'));


function App() {

  const { data, isLoading } = useHttp("personal");
  if (!data) return (<Loader />);
  document.title=data.firstName || "welcome";

  return (

    <div className="App">

      <Header data={data} />
      <main>
        <Suspense fallback={<div><Loader /></div>}>
          <Routes>
            <Route path="/home" element={<HomePage data={data} isLoading={isLoading} />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage resume={data.resume} />} />
            <Route path="/*" element={<HomePage  data={data} isLoading={isLoading}/>} />
          </Routes>
        </Suspense>


      </main>
        <SocialBar data={data} />
      <Footer  email={data.socialMedia.emai} />
    </div>


  );
}

export default App;
