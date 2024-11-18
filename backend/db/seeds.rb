Recipe.destroy_all

require 'json'

json_data = File.read('db/recipes-en.json')

recipes = JSON.parse(json_data)

recipes.each do |recipe|
  Recipe.create!(
    title: recipe['title'],
    cook_time: recipe['cook_time'],
    prep_time: recipe['prep_time'],
    ingredients: recipe['ingredients'].join(', '), # Join ingredients as a string
    ratings: recipe['ratings'],
    category: recipe['category'],
    author: recipe['author'],
    image_url: recipe['image']
  )
end
