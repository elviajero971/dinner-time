require 'json'
require 'benchmark'

time_take_destroy = Benchmark.measure do
  Recipe.destroy_all # Be cautious; this will delete all existing records.
end
puts "Time taken to destroy all records: #{time_take_destroy.real.round(2)} seconds"

json_data = File.read('db/recipes-en.json')
recipes = JSON.parse(json_data)

time_taken = Benchmark.measure do
  recipes.each do |recipe|
    Recipe.create!(
      title: recipe['title'],
      cook_time: recipe['cook_time'],
      prep_time: recipe['prep_time'],
      ingredients: recipe['ingredients'].join(', '),
      ratings: recipe['ratings'],
      category: recipe['category'],
      author: recipe['author'],
      image_url: recipe['image']
    )
  end
end

puts "Database seeded successfully with #{recipes.size} records."
puts "Time taken to create all records: #{time_taken.real.round(2)} seconds"
