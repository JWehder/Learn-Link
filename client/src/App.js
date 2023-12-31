import React, { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useLocation, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Ebooks from './components/Ebooks';
import Courses from './components/Courses';
import CompletedCourses from './components/CompletedCourses';
import Community from './components/Community';
import Settings from './components/Settings';
import Ebook from './components/Ebook';
import Dashboard from './components/Home';
import ResetPassword from './components/ResetPassword';
import { useStore } from './stores/useUsersStore';

function App() {
 const location = useLocation();
 const checkUser = useStore(state => state.getUser)

 useEffect(() => {
  checkUser()
  }, [])

  return (
    <div className="App">
      <AnimatePresence >
        <Routes location={location} key={location.pathname}>
          <Route exact path='/test' element={<Dashboard />} />
          <Route exact path='/' element={<SignIn />} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='/home' element={<Sidebar />} />
          <Route exact path='/home/dashboard' element={<Home />} />
          <Route exact path='/home/ebooks' element={<Ebooks />} />
          <Route exact path='/home/courses' element={<Courses />} />
          <Route exact path='/home/completedcourses' element={<CompletedCourses />} />
          <Route exact path='/home/community' element={<Community />} />
          <Route exact path='/home/settings' element={<Settings />} />
          <Route exact path='/home/ebooks/1' element={<Ebook />} />
          <Route exact path='/resetpassword' element={<ResetPassword />}/>
        </Routes>
      </AnimatePresence>
    </div>
  );

}

export default App;
