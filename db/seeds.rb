# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

Category.destroy_all

(1..6).to_a.each do |item|
  category = Category.create(name: Faker::University.name, user_id: Faker::IDNumber.valid)
  (1..100).each do |article|
    category.articles.create(short_description: "Thủ tướng nói sẽ rút thời gian thuê đất đặc khu #{Faker::Beer.yeast}, không giữ 99 năm", content: "Bên hành lang Quốc#{Faker::Beer.yeast} hội #{Faker::Beer.yeast}sáng 7/6, Thủ tướng #{Faker::Beer.yeast}Nguyễn Xuân#{Faker::Beer.yeast} Phúc#{Faker::Beer.yeast} khẳng định #{Faker::Beer.yeast}sẽ rút #{Faker::Beer.yeast}thời gian #{Faker::Beer.yeast}cho thuê #{Faker::Beer.yeast} đất đặc khu #{Faker::Beer.yeast}kinh tế, không#{Faker::Beer.yeast} giữ nguyên#{Faker::Beer.yeast} mức cố định#{Faker::Beer.yeast} 99 năm", author: Faker::Twitter.screen_name, thumbnail_image: Faker::Avatar.image, full_images: Faker::Avatar.image("my-own-slug"), title: Faker::Twitter.screen_name)
  end
end
