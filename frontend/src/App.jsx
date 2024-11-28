// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipesList/RecipesList';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                <Routes>
                    <Route path="/" element={<RecipeList />} />
                    <Route path="/recipe/:id" element={<RecipeDetails />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
