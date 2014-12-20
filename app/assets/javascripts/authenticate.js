OAuth.initialize('SSJZjuzSYsPi9UCKdSBRqV7XFls');

//Using redirection (option 2)
// OAuth.redirect('meetup', "/auth/meetup");

OAuth.popup('meetup')
.done(function(result) { //OAuth.io provider
    console.log(result)
    // do some stuff with result
})
.fail(function (err) {
    console.log(err)
});

// //Example with Google
// OAuth.redirect('meetup', 'http://localhost:3000/auth/meetup');
// //in your callback page (can be the same page)
// OAuth.callback('meetup').done(function(google) {
//   //make API calls with `google`
// }).fail(function(err) {
//   //todo when the OAuth flow failed
// })