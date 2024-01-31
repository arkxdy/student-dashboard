import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Template/Navbar';
import Footer from './components/Template/Footer';
import HomePage from './components/Student/StudendDashboard'
import PasswordGenerator from './components/PasswordGenerator';
import CurrencyConverter from './components/CurrencyConverter';
import ReactDom from 'react-dom/client'
import useCurrencyInfo from './hooks/useCurrencyInfo';
import StudentDashboard from './components/Student/StudendDashboard';

function App() {

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
