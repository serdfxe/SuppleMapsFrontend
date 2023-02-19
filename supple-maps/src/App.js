import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import useToken from './components/useToken/useToken'

import HomePage from './HomePage';

import GlobalStyles from './GlobalStyles';
import Article from './Pages/art/Article/Article';
import MainPage from './Pages/MainPage/MainPage';

import RegisterPage from './Pages/auth/RegisterPage/RegisterPage';
import LoginPage from './Pages/auth/LoginPage/LoginPage';
import AccountPage from './Pages/account/Account/AccountPage';
import MapPage from './Pages/map/Map/MapPage';
import api_url from './config';
import HistoryPage from './Pages/history/HistoryPage';
import SavedPathsPage from './Pages/saved_paths/SavedPathsPage';


function App() {
  const { token, removeToken, setToken } = useToken();

  useEffect(() => {
    fetch(api_url + '/auth/isloggedin', {headers: {
      Authorization: 'Bearer ' + token
    }, method: "GET"})
    .then(resp => {
      if (resp.ok) {
        console.log("OK!")
      } else {
        setToken(null);
      }
    })
  }, []);

  return (
    <>
      <GlobalStyles/>
      <BrowserRouter>
        {!token && token !== "" && token !== undefined ?
        <Routes>
        <Route path="auth">
          <Route path="" element={<Navigate to="/auth/signup"/>}/>
          <Route path="signup" element={<RegisterPage token={token} setToken={setToken}/>}/>
          <Route path="signin" element={<LoginPage token={token} setToken={setToken}/>}/>
        </Route>
        <Route path="*" element={<Navigate to="/auth/"/>}/>
      </Routes> 
        :(
          <>
            <Routes>
              <Route path="app">
                <Route path="" element={<Navigate to="map" />}/>
                <Route path="map" element={<MapPage token={token}/>} />
                <Route path="main" element={<MainPage/>} />
                <Route path="account" element={<AccountPage token={token}/>} />
                <Route path="art" element={<Navigate to="/app/main"/>} />
                <Route path="art/:art_id" element={<Article token={token}/>} />
                <Route path="saved_paths" element={<SavedPathsPage token={token}/>} />
                <Route path="search" element={<HomePage/>} />
                <Route path="history" element={<HistoryPage token={token}/>} />
                <Route path="settings" element={<HomePage/>} />
              </Route>
              <Route path="auth">
                <Route path="" element={<Navigate to="auth/signup"/>}/>
                <Route path="signup" element={<RegisterPage token={token} setToken={setToken}/>}/>
                <Route path="signin" element={<LoginPage token={token} setToken={setToken}/>}/>
              </Route>
              <Route path="*" element={<Navigate to="/app"/>}/>
            </Routes>  
          </>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
