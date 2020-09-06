# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(username: 'The Best', iqs: [Iq.create(iq: '100')])
User.create(username: 'The Worst', iqs: [Iq.create(iq: '50')])
User.create(username: 'Woohoo', iqs: [Iq.create(iq: '120')])
User.create(username: 'TeeHee', iqs: [Iq.create(iq: '80')])
User.create(username: 'Woza', iqs: [Iq.create(iq: '190')])
