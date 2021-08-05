import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import Backdrop from './components/Backdrop';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import TeslaAccount from './components/TeslaAccount';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // user is loged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        //user is signed out
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route exact path='/'>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <>
              <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
              {isMenuOpen && <Backdrop />}
            </>
            <Home />
          </Route>

          <Route exact path='/login'>
            {user ? <Redirect to='/teslaaccount' /> : <Login />}
          </Route>

          <Route exact path='/signup'>
            <SignUp />
          </Route>

          <Route exact path='/teslaaccount'>
            {!user ? (
              <Redirect to='/login' />
            ) : (
              <>
                <TeslaAccount
                  isMenuOpen={isMenuOpen}
                  setIsMenuOpen={setIsMenuOpen}
                />
                <>
                  <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                  {isMenuOpen && <Backdrop />}
                </>
              </>
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
