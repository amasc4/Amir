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