gapi.load('auth2', function() {
        gapi.auth2.init();
      });
var database = firebase.database().ref();
// database.push({test:"test"})



$(function(){
$("#receiptButton").click(function(e){
    e.preventDefault();
 var store =  $("#textOne").val();
  var desc = $("#textTwo").val();
  var money = $("#textThree").val();

var auth2 =  gapi.auth2.getAuthInstance();
 var id = auth2.currentUser.Ab.El;


  var obj = {
      store : store,
      desc: desc,
      money: money,
      id: id,
      content: "Investment"
      
  
  }

  database.push(obj);
});

})

$(function(){
$("#receiptButton1").click(function(e){
    e.preventDefault();
 var store =  $("#textFour").val();
  var desc = $("#textFive").val();
  var money = $("#textSix").val();

var auth2 =  gapi.auth2.getAuthInstance();
 var id = auth2.currentUser.Ab.El;


  var obj = {
      store : store,
      desc: desc,
      money: money,
      id: id,
      content: "Donations"
      
  
  }

  database.push(obj);
});

})

$(function(){
$("#receiptAddButton").click(function(e){
    e.preventDefault();
 var store =  $("#textOne").val();
  var desc = $("#textTwo").val();
  var money = $("#textThree").val();

var auth2 =  gapi.auth2.getAuthInstance();
 var id = auth2.currentUser.Ab.El;
    console.log("test")

  var obj = {
      store : store,
      desc: desc,
      money: money,
      id: id,
      content: "Receipt"
      
  
  }

  database.push(obj);
});

})





var user = firebase.auth().currentUser;

if (user=null){
console.log("log in")
}
else if(user) {
console.log("ur logged in")
} else {
  // No user is signed in.
}



database.on("value", function(rowData){
    var row = rowData.val()
    var key = Object.keys(rowData.val())[0];
    // for(var i in row){
    //     var key = Object.keys(rowData.val())[i]
    //     console.log(key)
    // }
    // console.log(row[key]);
    // console.log(key)
    console.log(row)
})