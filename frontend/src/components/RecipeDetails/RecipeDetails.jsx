// src/components/RecipeDetails/RecipeDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './RecipeDetails.css';

const RecipeDetails = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate(); // Use the navigate hook

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await fetch(`http://localhost:3001/recipes/${id}`);
                const data = await response.json();
                setRecipe(data);
            } catch (error) {
                console.error('Error fetching recipe details:', error);
            }
            setLoading(false);
        };

        fetchRecipe();
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!recipe) {
        return <p>Recipe not found.</p>;
    }

    return (
        <div className="recipe-details">
            <button className="back-button" onClick={() => navigate('/')}>
                &larr; Back to Recipes List
            </button>
            <h1>{recipe.title}</h1>
            <img className="recipe-image" src={recipe.image_url} alt={recipe.title} />
            <p><strong>Cook Time:</strong> {recipe.cook_time} minutes</p>
            <p><strong>Prep Time:</strong> {recipe.prep_time} minutes</p>
            <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
            <p><strong>Category:</strong> {recipe.category}</p>
            <p><strong>Author:</strong> {recipe.author}</p>
            <p><strong>Ratings:</strong> {recipe.ratings} / 5</p>
        </div>
    );
};

export default RecipeDetails;
