# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

d1 = Date.new(1999,2,3)
d2 = Date.new(1998,12,31)
d3 = Date.new(1992,6,5)
d4 = Date.new(1458,4,1)
d5 = Date.new(1692,5,1)
d6 = Date.new(1776,7,4)
d7 = Date.new(1,1,1)

cats = Cat.create(
    [
        {birth_date: d1, name: "Bobby", color: "black", sex: "M", description: "Aint right"},
        {birth_date: d2, name: "Nirmal", color: "black", sex: "F", description: "Extremely adorable"},
        {birth_date: d3, name: "Hank", color: "black", sex: "M", description: "Enjoys propane"},
        {birth_date: d4, name: "Peggy", color: "black", sex: "F", description: "Teaches spanish"},
        {birth_date: d5, name: "Dale", color: "black", sex: "M", description: "Will throw sand"},
        {birth_date: d6, name: "FreedomCat", color: "white", sex: "M", description: "Small cat"},
        {birth_date: d7, name: "Garfield", color: "orange", sex: "M", description: "Primordial being"}
    ]
)