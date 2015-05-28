Template.deviceActive.onCreated(function() {
  Session.setDefault('unitId', 123456789101112131415161);
  Session.setDefault('unitToken', 1234567891011121314151611234567891011121);

  var unitId = this.deviceId;
  Session.set('unitId', unitId);

  var token = this.accessToken;
  Session.set('unitToken', unitToken);
});

Template.deviceActive.helpers({
  unitId: function() {
    var unitId = this.deviceId;
    Session.set('unitId', unitId);
    return unitId;
  },
  unitToken: function() {
    var unitToken = this.deviceId;
    Session.set('unitToken', unitToken);
    return unitToken;
  }
  // },
  // unit: function() {
  //   var currentDeviceId = Session.get('unitId');
  //   return Devices.findOne({_id: currentDeviceId});
  // }
});
