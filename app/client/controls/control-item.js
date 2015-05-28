

  Session.setDefault('pinState', 0);

  Template.led.helpers({
    device: function() {
      return Session.get('unitId');
    },
    token: function() {
      return Session.get('unitToken');
    },
    pinState: function () {
      var unitId = Session.get('unitId');
      var unitToken = Session.get('unitToken');
      Meteor.http.get(
        "https://api.particle.io/v1/devices/" +
        unitId +
        "/pin?access_token=" +
       unitToken,
        function (err, data ){
          console.log(data.data.result );
          Session.set('pinState', data.data.result);
        });
      if(Session.get('pinState')==1) {
        document.getElementById("lightButton").value="Turn OFF";
      } else {
        document.getElementById("lightButton").value="Turn ON";
      }
      return Session.get('pinState');
    }
  });

  Template.led.events({
    'click button': function () {
      var unitId = "54ff6b066672524849200167";
      var unitToken = "dcb98d8057f3a74e2234d4a44a80cbfbafb3d183";
      // var unitId = Session.get('deviceID');
      // var unitToken = Session.get('accessToken');
      Meteor.http.post(
        "https://api.particle.io/v1/devices/" +
        unitId +
        "/pinToggle?access_token="
        + unitToken,
        function (err, data ){
        // console.log("HTTP POST response received");
        // console.log(data);
        // Session.set('pinState', data.data.result);
      });
    }
  });
