

json.array! @guests do |guest| 
  next if !guest.age.between?(40,50)
  json.partial! '/api/guests/guest', guest: guest
  json.name guest.name
  json.age guest.age 
  json.favorite_color guest.favorite_color
end

   