
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