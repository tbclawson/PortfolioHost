import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import CustomAppBar from './components/AppBar';



function App() {

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (projects.length === 0) {
      const fetchProjects = async () => {
        setLoading(true);
        setTimeout(async () => {
          try {
            const response = await axios.get('http://192.168.50.200:5098/api/Projects');
            setProjects(response.data);
          } catch (err) {
            setError(`Unable to load projects at this time.\n${err}`);
            console.error(err);
          } finally {
            setLoading(false);
          }
        }, 1500);
      };
      fetchProjects();
    }
  }, [projects.length]);


  


  return (
    <Router>
      {/* <CustomAppBar></CustomAppBar> */}
      <Routes>
        <Route path = "/" element={<Home projects={projects} loading={loading} error={error}/>} />
        {/* <Route path = "/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
  
  
}

export default App
