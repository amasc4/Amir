$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    var userFirstName = data.results[0]
    console.log(userFirstName.name.first)
    console.log(userFirstName.name.last)
    console.log(userFirstName.picture.thumbnail)
    console.log(userFirstName.location.state)
    $("body").append("<h1> Name: " + userFirstName.name.first + " " + userFirstName.name.last + " State: " + userFirstName.location.state)
  }
});