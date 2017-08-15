function onSignIn(googleUser) {
    console.log('User signed in!');
    var profile = googleUser.getBasicProfile();
    //change userName text, img source, & email text based on profile
    $(".userName").text(profile.getName());
    $("img").attr("src", profile.getImageUrl());
    $(".email").text(profile.getEmail());
}

//called when "sign out" button clicked
function onSignOut() {
    //should sign user out and toggleHidden
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.')
        //setting back to default
        $(".userName").text("Amir");
        $("img").attr("src", "assets/placeholder.png");
        $(".email").text("example@example.com");
    });
}



var URL = "http://pebble-pickup.herokuapp.com/tweets/random";   
$.ajax(
   {
       url:URL,
       success:function(data)
       {
           var text = data.tweet;
           console.log(data.tweet);
           $("body").append("<h1>" + text + "</h1>");  
       }
   }
)
function text() {
var twilio = require('twilio');

var accountSid = 'AC74d4f90ab9fbb884673cfd4527502e20'; // Your Account SID from www.twilio.com/console
var authToken = '0ced94894c4d721083afc1de4f1f1be0';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: "If you're reading this it works",
    to: '+16465815008',  // Text this number
    from: '+13477123890' // From a valid Twilio number
})
.then((message) => console.log(message.sid));
}