# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Artwork.destroy_all
ArtworkShare.destroy_all
Comment.destroy_all

u1 = User.create(username: 'Kevin')
u2 = User.create(username: 'Jordan')
u3 = User.create(username: 'test')
u4 = User.create(username: 'JoshGordon')

a1 = Artwork.create(title: 'Mona Lisa' , image_url: "/ML" , artist_id: u4.id)
a2 = Artwork.create(title: 'Cool Art' , image_url: "/CoolA" , artist_id: u3.id)
a3 = Artwork.create(title: 'Luke Skyrunner' , image_url: "/LSK" , artist_id: u2.id)

s1 = ArtworkShare.create(artwork_id: a1.id, viewer_id: u1.id) 
s2 = ArtworkShare.create(artwork_id: a3.id, viewer_id: u2.id)
s3 = ArtworkShare.create(artwork_id: a1.id, viewer_id: u3.id)
  
c1 = Comment.create(user_id: u2.id, artwork_id: a2.id, body: "haha, this is horrible!")
c2 = Comment.create(user_id: u4.id, artwork_id: a1.id, body: "Not enough cats!")
c3 = Comment.create(user_id: u3.id, artwork_id: a1.id, body: "more cowbell.")
c4 = Comment.create(user_id: u4.id, artwork_id: a3.id, body: "I Can Haz Cheezburger?!?!? N00b!")
