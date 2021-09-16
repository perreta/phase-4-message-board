# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
puts "Seeding"


User.create(username: 'Vic', bio: 'Ruby on Rails is open source software', profile_picture: "https://i.imgur.com/gvVN7Kq.jpeg", password: "1234567")
User.create(username: 'Viv', bio: 'Ruby on Rails is close source software', profile_picture: "https://i.imgur.com/tHn7Bg2.jpeg", password: "1234567"),
User.create(username: "jack", bio: Faker::Quote.famous_last_words, profile_picture:Faker::Avatar.image, password:"1234567" )
User.create(username: "jill", bio: Faker::Quote.famous_last_words, profile_picture:Faker::Avatar.image, password:"1234567" )
User.create(username: "yoda", bio: Faker::Quote.yoda, profile_picture:"https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2019/12/20/Pictures/_0745b0ec-231b-11ea-8c10-7db3e225203f.jpg", password:"1234567" )

Post.create(text: 'Learning to build a modern web application is daunting. Ruby on Rails makes it much easier and more fun. It includes everything you need to build fantastic applications, and you can learn it with the support of our large, friendly community.', user_id: User.all.sample.id
Post.create(text: Faker::Quotes::Shakespeare.hamlet_quote, user_id: User.all.sample.id)

# (user_id:User.all.sample.id)

20.times do
    Post.create(text: Faker::Lorem.paragraph, user_id:userID.sample)
end

puts "Done Seeding"