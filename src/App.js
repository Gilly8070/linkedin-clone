import React, {useEffect} from 'react';
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Login from './components/Login';
import { auth } from './firebase';
import { logout, login } from './features/userSlice';
import Widget from './components/Widget';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      } 
      else {
        // user logged out
        dispatch(logout());
      }
    })
  }, [])
  return (
    <div className="app">
      <Header />
      {
        !user ? (
          <Login />
        ) : (
          <div className="app__body">
              <Sidebar />
              <Feed />
              <Widget />
          </div>
        )}
    </div>
  );
}

export default App;
