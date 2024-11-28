// src/components/Recipe/Recipe.jsx
import React, { forwardRef } from 'react';
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Recipe.css';

// Use forwardRef to handle the ref properly
const Recipe = forwardRef(({ recipe }, ref) => {
    const navigate = useNavigate();

    const navigateToRecipe = () => {
        navigate(`/recipe/${recipe.id}`);
    }

    return (
        <li className="recipe-card" ref={ref} onClick={navigateToRecipe}>
            <h2>{recipe.title}</h2>
            <LazyLoadImage
                className="recipe-image"
                src={recipe.image_url}
                alt={recipe.title}
                effect="blur"
                height="200"
                width="200"
            />
        </li>
    );
});

export default Recipe;
