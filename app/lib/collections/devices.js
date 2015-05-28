Devices = new Mongo.Collection('devices');

var Schemas = {};

Schemas.Device = new SimpleSchema({
  deviceName: {
    type: String,
    label: "Name",
    max: 20
  },
  deviceDescription: {
    type: String,
    label: "Description",
    max: 200
  },
  unitId: {
    type: String,
    label: "Device ID",
  },
  unitToken: {
    type: String,
    label: "Access Token"
  },
  userId: {
    type: String,
    label: "Title"
  }
});

Devices.attachSchema(Schemas.Device);

Devices.allow({
  insert: function(userId, doc){
    return doc && doc.userId === userId;
  },
  update: function(userId, doc){
    return doc && doc.userId === userId;
  },
});
