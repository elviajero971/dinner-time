import React from 'react';
import Recipe from '../../Recipe/Recipe.jsx';
import './RecipesListContainer.css';

const RecipesListContainer = ({ recipes, lastRecipeRef }) => (
    <ul className="recipes-container">
        {recipes.map((recipe, index) => (
            <Recipe
                ref={recipes.length === index + 1 ? lastRecipeRef : null}
                key={recipe.id}
                recipe={recipe}
            />
        ))}
    </ul>
);

export default RecipesListContainer;
