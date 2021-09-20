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
- re-format forms for better styling (react bootstrap)

NEXT SESSION:
- add action/fetch request to create ride on backend 
- add ride component to view ride summary/details
- render ride component(s) on user show component

FUTURE SESSIONS:
- start adding ability to create a ride (full CRUD for ride)
- start adding ride show and index pages (allow for users to view rides posted by other users)
- add ride filtering function 


