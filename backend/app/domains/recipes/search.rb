module Recipes
  class Search
    def initialize(params)
      @params = params
    end

    def call
      recipes = Recipe.all

      recipes = recipes.where("title ILIKE ?", "%#{params[:title]}%") if params[:title].present?
      recipes = recipes.where("description ILIKE ?", "%#{params[:description]}%") if params[:description].present?
      recipes = recipes.where("ingredients ILIKE ?", "%#{params[:ingredients]}%") if params[:ingredients].present?
      recipes = recipes.where("directions ILIKE ?", "%#{params[:directions]}%") if params[:directions].present?
      recipes = recipes.where("prep_time <= ?", params[:prep_time]) if params[:prep_time].present?
      recipes = recipes.where("cook_time <= ?", params[:cook_time]) if params[:cook_time].present?
      recipes = recipes.where("servings <= ?", params[:servings]) if params[:servings].present?
      recipes = recipes.where("difficulty <= ?", params[:difficulty]) if params[:difficulty].present?

      recipes
    end

    private

    attr_reader :params
  end
end