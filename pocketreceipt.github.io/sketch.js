function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  $(".active1").append("  /                                Welcome " + profile.getName() );
  $("#dropdown_menu").text(profile.getName());
  $("#header_account").text("Account Info");
  $(".subheader_account").text("Here is all your account info!")
  var name = profile.getName()
  var pic = profile.getImageUrl()
  var email = profile.getEmail()
  var id = profile.getId()
  var nameSet = "<br /><h3> Name: " + name + "</h3>"
  var picSet ="<img class='profileimg' src='" + pic + "'>"
  var emailSet = "<br /><h3> Pocket Receipt Email: " + email + "</h3><br />"
  var accountPage = document.getElementById("accountpostlogin")
  var idSet = "<h3> Pocket Receipt id: " + id + "</h3>"
  $(accountPage).append(nameSet)
  $(accountPage).append(picSet)
  $(accountPage).append(emailSet)
  $(accountPage).append(idSet)
  $(accountPage).append("<br /><br /><br /><p align='center'>To change your account info please do so <a href='https://support.google.com/accounts/answer/27442?hl=en'>here </a></p>")
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
        $("#header_account").text("Log In");
        location.reload(true);
    });
    location.reload(true);
}



function Button() {
    var input1 = document.getElementById("textOne").value
    var input2 = document.getElementById("textTwo").value
    var input3 = document.getElementById("textThree").value
    var receiptAdd = "<h5 class='md-1'>" + input1 + " </h5>"
    var receiptAdd1 = "<small>" + input2 + "</small>"
    var receiptadd2 = "<p class='mb-1'>" + input3 + "</p>"
    var issatest = document.getElementById("overlist");
    var header = document.createElement("a");
    header.className = "list-group-item list-group-item-action flex-column align-items-start";
    header.setAttribute("id", "receiptadd")
    $(header).append(receiptAdd)
    $(header).append(receiptadd2)
    $(header).append(receiptAdd1)

    console.log(header);
    issatest.append(header);
};

function ButtonTax1() {
    var input1 = document.getElementById("textOne").value
    var input2 = document.getElementById("textTwo").value
    var input3 = document.getElementById("textThree").value
    var receiptAdd = "<h5 class='md-1'>" + input1 + " </h5>"
    var receiptAdd1 = "<small>" + input2 + "</small>"
    var receiptadd2 = "<p class='mb-1'>" + input3 + "</p>"
    var issatest1 = document.getElementById("overlist1");
    var header = document.createElement("a");
    var toPinToo = document.getElementById("idpin")
    header.className = "list-group-item list-group-item-action flex-column align-items-start";
    header.setAttribute("id", "receiptadd")
    $(header).append(receiptAdd)
    $(header).append(receiptadd2)
    $(header).append(receiptAdd1)


    console.log(header);
    issatest1.append(header);
};

function ButtonTax2() {
    var input4 = document.getElementById("textFour").value
    var input5 = document.getElementById("textFive").value
    var input6 = document.getElementById("textSix").value
    var receiptAdd3 = "<h5 class='md-1'>" + input4 + " </h5>"
    var receiptAdd4 = "<small>" + input5 + "</small>"
    var receiptadd5 = "<p class='mb-1'>" + input6 + "</p>"
    var issatest2 = document.getElementById("overlist2");
    var header1 = document.createElement("a");
    header1.className = "list-group-item list-group-item-action flex-column align-items-start";
    header1.setAttribute("id", "receiptadd")
    $(header1).append(receiptAdd3)
    $(header1).append(receiptadd5)
    $(header1).append(receiptAdd4)

    console.log(header1);
    issatest2.append(header1);
};



// var div = "<div> +" name + "<p> </p>"
// + "</div";



// $("body".append(div)