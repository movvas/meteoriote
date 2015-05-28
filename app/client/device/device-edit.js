
Template.deviceEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentDeviceId = this._id;
    var deviceProperties = {
      deviceName: $(e.target).find('[name=deviceName]').val(),
      deviceDescription: $(e.target).find('[name=deviceDescription]').val(),
      unitId: $(e.target).find('[name=unitId]').val(),
      unitToken: $(e.target).find('[name=unitToken]').val()
    }

    Devices.update(currentDeviceId, {$set: deviceProperties}, function() {
      Router.go('/about');
    });
  }
});
