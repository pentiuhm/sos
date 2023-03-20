function sendMessages() {
    var recipients = ['+91 9836578565', '+91 7439114374', '+91 8777249216'];
    for (var i = 0; i < recipients.length; i++) {
      client.messages
        .create({
          body: 'Emergency! Please send help. Nearest police station: ' + nearestPolice,
          from: '+15073534760',
          to: recipients[i]
        })
        .then(message => console.log(message.sid));
    }
  }  
document.getElementById('sos-button').addEventListener('click', function() {
    // Call the API and send a message to 3 people
  });
  function callPolice() {
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      var request = new XMLHttpRequest();
      request.open('GET', 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + lat + ',' + lng + '&radius=500&type=police&key=YOUR_API_KEY');
      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          var data = JSON.parse(request.responseText);
          var nearestPolice = data.results[0].name;
          // Call the nearest police station
        } else {
          console.log('Error');
        }
      };
      request.onerror = function() {
        console.log('Error');
      };
      request.send();
    });
  }