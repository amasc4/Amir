// var clientId = '436983518531-3remj6gnl27ia4dh0u79j3vibrgrhtt3.apps.googleusercontent.com';
//      var apiKey = 'AIzaSyD_6yetINaYFhY-EO-EaeHEn0Lde-Zp1u8';
//      var scopes = 'https://www.googleapis.com/auth/gmail.readonly';







// function handleClientLoad() {
//        gapi.client.setApiKey(apiKey);
//        window.setTimeout(checkAuth, 1);
//      }
//      function checkAuth() {
//        gapi.auth.authorize({
//          client_id: clientId,
//          scope: scopes,
//          immediate: true
//        }, handleAuthResult);
//      }
//      function handleAuthClick() {
//        gapi.auth.authorize({
//          client_id: clientId,
//          scope: scopes,
//          immediate: false
//        }, handleAuthResult);
//        return false;
//      }
//      function handleAuthResult(authResult) {
//        if(authResult && !authResult.error) {
//          loadGmailApi();
//          $('#authorize-button').remove();
//          $('.table-inbox').removeClass("hidden");
//        } else {
//          $('#authorize-button').removeClass("hidden");
//          $('#authorize-button').on('click', function(){
//            handleAuthClick();
//          });
//        }
//      }
//      function loadGmailApi() {
//        gapi.client.load('gmail', 'v1', displayInbox);
//      }
//      function displayInbox() {
//        var request = gapi.client.gmail.users.messages.list({
//          'userId': 'me',
//          'q' : 'subject:"Thank You For Purchasing" OR subject:"Order Confirmation" OR "subject: Order Confirmed" OR "subject: Payment Details" OR "subject: Your Order of" OR "subject: Your Order" OR "subject: Your Package" OR "subject: Purchase Confirmation" OR "subject: Your Receipt" OR "subject: Order Details" OR "from:shipment-tracking@amazon.com" OR "from:mcinfo@ups.com"',
//          'labelIds': 'INBOX',
//          'maxResults': 100
//        });
//        request.execute(function(response) {
//          $.each(response.messages, function() {
//            var messageRequest = gapi.client.gmail.users.messages.get({
//              'userId': 'me',
//              'id': this.id
//            });
//            messageRequest.execute(appendMessageRow);
//          });
//        });
//      }

     
//      function appendMessageRow(message) {
//        $('.table-inbox tbody').append(
//          '<tr>\
//            <td>'+ getHeader(message.payload.headers, 'From')+'</td>\
//            <td>\
//              <a href="#message-modal-' + message.id +
//                '" data-toggle="modal" id="message-link-' + message.id+'">' +
//                getHeader(message.payload.headers, 'Subject') +
//              '</a>\
//            </td>\
//            <td>'+getHeader(message.payload.headers, 'Date')+'</td>\
//          </tr>'
//        );
//        $('body').append(
//          '<div class="modal fade" id="message-modal-' + message.id +
//              '" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">\
//            <div class="modal-dialog modal-lg">\
//              <div class="modal-content">\
//                <div class="modal-header">\
//                  <button type="button"\
//                          class="close"\
//                          data-dismiss="modal"\
//                          aria-label="Close">\
//                    <span aria-hidden="true">&times;</span></button>\
//                  <h4 class="modal-title" id="myModalLabel">' +
//                    getHeader(message.payload.headers, 'Subject') +
//                  '</h4>\
//                </div>\
//                <div class="modal-body">\
//                  <iframe id="message-iframe-'+message.id+'" srcdoc="<p>Loading...</p>">\
//                  </iframe>\
//                </div>\
//              </div>\
//            </div>\
//          </div>'
//        );


//      function getHeader(headers, index) {
//        var header = '';
//        $.each(headers, function(){
//          if(this.name === index){
//            header = this.value;
//          }
//        });
//        return header;
//      }
//      var encodedBody;
   
//      function getBody(message) {
//        encodedBody = '';
//        if(typeof message.parts === 'undefined')
//        {
//          encodedBody = message.body.data;
//        }
//        else
//        {
//          encodedBody = getHTMLPart(message.parts);
//        }
//      encodedBody = encodedBody.replace(/-/g, '+').replace(/_/g, '/').replace(/\s/g, '');
//      decodedBody = decodeURIComponent(escape(window.atob(encodedBody)));
//        return decodedBody;
//      }

//    //   getBody("love");
//    //   console.log(decodedBody);
//      function getHTMLPart(arr) {
//        for(var x = 0; x <= arr.length; x++)
//        {
//          if(typeof arr[x].parts === 'undefined')
//          {
//            if(arr[x].mimeType === 'text/html')
//            {
//              return arr[x].body.data;
//            }
//          }
//          else
//          {
//            return getHTMLPart(arr[x].parts);
//          }
//        }
//        return '';
//      }




    