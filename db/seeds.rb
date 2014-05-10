# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Company.create(name: "J&J")
Company.create(name: "Houghton")
Company.create(name: "Weatherford's")

Person.create(company_id: 1, first_name: "Pat", last_name: "White", city: "Boston", state: "MA", email: "byob@gmail.com")
Person.create(company_id: 1, first_name: "Jana", last_name: "Speels", city: "Boston", state: "MA", email: "job@gmail.com")
Person.create(company_id: 2, first_name: "Jeb", last_name: "Hanson", city: "Boston", state: "MA", email: "love@gmail.com")
Person.create(company_id: 2, first_name: "Wilma", last_name: "Cristobal", city: "Boston", state: "MA", email: "my@gmail.com")
Person.create(company_id: 2, first_name: "Heath", last_name: "Jeramiah", city: "Boston", state: "MA", email: "job@gmail.com")
Person.create(company_id: 3, first_name: "Ferrel", last_name: "Raymond", city: "Boston", state: "MA", email: "eula@gmail.com")
