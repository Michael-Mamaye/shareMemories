import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

import Navbar from './components/Navbar/NavBars'
import List from './components/pages/List'
import Home from './components/pages/Home'
import ContactUs from './components/Contact/ContactUs'
import Create from './components/pages/Create'
import Footer from './components/Footer/Footer'
import { getPosts } from './actions/posts';
import ScrollToTop from './components/scrollToTop'


const App = () => { 
  const [currentId] = useState(0);
  const dispatch = useDispatch();
 

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

 
  return (
    <React.Fragment>
      <Router>
         <ScrollToTop/>
         <Navbar/>
         <Switch>
           <Route path='/' exact>
            <Home/>
           </Route>
           <Route path='/memories' exact>
             <List/>
           </Route>
           <Route path='/create' exact>
             <Create/>
           </Route>
           <Route path='/contact' exact>
             <ContactUs/>
           </Route>
         </Switch>
         <Footer/>
      </Router>
   
    </React.Fragment>
  );
};

export default App;
