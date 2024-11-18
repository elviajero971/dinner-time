class RecipesController < ApplicationController
  def index
    if params[:search]
      search = params[:search].downcase
      @recipes = Recipe.where("lower(name) LIKE ?", "%#{search}%")
    else
      @recipes = Recipe.all
    end

    render json: @recipes
  end
end
