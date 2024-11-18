import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RecipesList = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch data from the Rails API
        axios.get('http://localhost:3001/recipes')
            .then(response => {
                setRecipes(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('There was an error fetching the recipes!', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading recipes...</p>;
    }

    return (
        <div>
            <h1>Recipes List</h1>
            {recipes.length === 0 ? (
                <p>No recipes available.</p>
            ) : (
                <div className="recipes-container">
                    {recipes.map(recipe => (
                        <div key={recipe.id} className="recipe-card">
                            <h2>{recipe.title}</h2>
                            <img src={recipe.image_url} alt={recipe.title} className="recipe-image" />
                            <p>Cook Time: {recipe.cook_time} mins</p>
                            <p>Prep Time: {recipe.prep_time} mins</p>
                            <p>Author: {recipe.author}</p>
                            <p>Ratings: {recipe.ratings}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default RecipesList;
