
var deviceHoooks = {
  before: {
    update: function(doc) {
      if(Meteor.userId()){
        doc.userId = Meteor.userId();
      }
      return doc;
    }
  }
}


AutoForm.addHooks('insertDeviceForm', deviceHooks);
AutoForm.addHooks('updateDeviceForm', deviceHoooks);
