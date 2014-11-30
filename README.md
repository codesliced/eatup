# EATUP

Eat dinner for free all week by smartly surveying meetup.

## Setup

* `bundle`
* `rails s`
* `cp .env.template .env`

### Create Meetup Consumer

* Navigate to [create consumer page](https://secure.meetup.com/meetup_api/oauth_consumers/create).
* **Name** whatever
* **Application Website** https://github.com/codesliced/eatup
* **Redirect URI** http://localhost:3000 

### Test
*Verify consumer is set up correctly.*

* On [home page](http://localhost:3000/), click [sign in with meetup](http://localhost:3000/auth/meetup).
* **Pass** Meetup page with a button to authorize the app.
* **Fail** Meetup page with error.
