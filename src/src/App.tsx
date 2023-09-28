/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import './App.css';
import LoginPage from './Components/Pages/LoginPage/login';
import Header from './Components/Common/Header/header';
import { Provider } from 'react-redux';
import store from './Components/Redux/store';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import StateDashboard from './Components/Pages/StateDashboard/stateDashboard';
import UlbManagement from './Components/Pages/UlbManagement/ulbManagement';
import UserManagement from './Components/Pages/UserManagement/userManagement';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route  path='/' element={<LoginPage />} />
            <Route path="/state-dashboard" element={<StateDashboard />} />
            <Route path="/ulb-management" element={<UlbManagement />} />
            <Route path="/user-management" element={<UserManagement />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
