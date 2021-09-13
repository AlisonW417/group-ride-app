# Group Ride Application Notes
## Summary
Revisiting my LV Group Rides sinatra project to utilize ruby on rails as a backend and react frontend 

## User Stories
A user can...
- create, update and delete their own rides
- view rides created by other users
- sign up for a ride 
- comment on a ride?
- add images for a ride

## Models 
### User (has_many rides, has_many signups, has_many added_rides, through signups, source: ride)
- attributes: username, email, password_digest
### Ride (belongs_to user, has_many signups, has_many added_users, through signups, source: user)
- attributes: name, starting_location, time, date, difficulty_level, distance, description, user_id
### Comment? ()
- attributes: content
### Signup (belongs_to ride, belongs_to user)
- attributes: ride_id, user_id, status (boolean)

### To Do:
- add serializers to backend 
- finish signup feature (additional actions to login the user)
- reset signup form
- continue with user-related fetch request to login and logout

NEXT SESSIONS:
- add functionality to log out
- add ability to find current user (if already logged in)
- add fetch request to find the current user (create sessions controller on backend)

