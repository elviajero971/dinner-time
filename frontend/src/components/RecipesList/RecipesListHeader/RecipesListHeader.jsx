import React from 'react';
import './RecipesListHeader.css';

const RecipesListHeader = ({ recipesCount }) => (
    <h1>List of Recipes: {recipesCount}</h1>
);

export default RecipesListHeader;
