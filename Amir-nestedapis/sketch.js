$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
        var info = data.results[0]
        console.log(info.nat)
        $("body").append("<h1> Name: " + info.name.first + " " + info.name.last + "<br /> Location: " + info.location.city +" <br /> Email: " +  info.email + "</h1>")
    }
})



