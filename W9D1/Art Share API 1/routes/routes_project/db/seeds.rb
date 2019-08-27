# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([{username: 'Kevin'}, {username: 'Jordan'}, {username: 'test'}, {username: 'JoshGordon'}])

artworks = Artwork.create([{title: 'Mona Lisa' , image_url: "/ML" , artist_id: 4 },
  {title: 'Cool Art' , image_url: "/CoolA" , artist_id: 3 },
 {title: 'Luke Skyrunner' , image_url: "/LSK" , artist_id: 2 }])

shares = ArtworkShare.create([{ artwork_id: 1, viewer_id: 1}, 
    { artwork_id: 3, viewer_id: 2},
    { artwork_id: 1, viewer_id: 3}
    ])