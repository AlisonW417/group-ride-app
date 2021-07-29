# Group Ride Application Notes
## Summary
Revisiting my LV Group Rides sinatra project to utilize ruby on rails as a backend and react frontend 

### User Stories
A user can...
- create, update and delete their own rides
- view rides created by other users
- sign up for a ride 
- comment on a ride?
- add images for a ride

### Models 
- User (has_many rides, has_many signups, has_many added_rides, through signups, source: ride)
- Ride (belongs_to user, has_many signups, has_many added_users, through signups, source: user)
- Comment? ()
- Signup? (belongs_to ride, belongs_to user)

