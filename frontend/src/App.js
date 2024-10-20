import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/LOgin/Login';
import Signin from './Pages/LOgin/Signin/Signin';
import Nav from './components/Navbar/Nav';
import Footer from './components/Footer/Footer';
import PrivateComponent from './components/PrivateComponent';
import About from './Pages/About/About';
import CgTracker from './Pages/Tools/Cgpa Tracker/CgTracker';
import Todo from './Pages/Tools/To-do list/Todo';
import UpComingEvent from './Pages/Tools/Upcoming events/UpComingEvent';
import Schdule from './Pages/Tools/Schedule/Schdule';
import ExamCounter from './Pages/Tools/Exam Counter/ExamCounter';
import NotesOrganisation from './Pages/Tools/Notes organisation/NotesOrganisation';
import JoinCommunity from './Pages/Community/Join our Community/JoinCommunity';
import AskQuestion from './Pages/Community/AskQuestion/AskQuestion';


function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/about-us' element={<About />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='/signin' element={<Signin />}></Route>

          <Route element={<PrivateComponent />} >

            <Route exact path='/tools/cgpa-tracker' element={<CgTracker />}></Route>
            <Route exact path='/tools/to-do-list' element={<Todo />}></Route>
            <Route exact path='/tools/upcomming-event' element={<UpComingEvent />}></Route>
            <Route exact path='/tools/schedule' element={<Schdule />}></Route>
            <Route exact path='/tools/exam-counter' element={<ExamCounter />}></Route>
            <Route exact path='/tools/notes-organisation' element={<NotesOrganisation />}></Route>

          </Route>

          <Route element={<PrivateComponent />} >

            <Route exact path='/community/join-our-community' element={<JoinCommunity />}></Route>
            <Route exact path='/community/ask-question' element={<AskQuestion />}></Route>

          </Route>



        </Routes>

        <Footer />

      </BrowserRouter>

    </>
  );
}

export default App;
