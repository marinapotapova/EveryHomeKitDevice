Ext.define("EveryHomeKitDevice.store.Devices", {
  extend: "Ext.data.Store",

  alias: "store.devices",
  storeId: "devices",
  model: "EveryHomeKitDevice.model.Devices",

  data: {
    items: [
      {
        room: "Living Room",
        accessories: "LG TV",
      },
      {
        room: "Living Room",
        accessories: "Main Lights",
      },
      {
        room: "Living Room",
        accessories: "Ecobee",
      },
      {
        room: "Living Room",
        accessories: "TV Lights",
      },
      {
        room: "Living Room",
        accessories: "Apple TV",
      },
      {
        room: "Hallway",
        accessories: "Main Lock",
      },
      {
        room: "Kitchen",
        accessories: "Kitchen Lights",
      },
      {
        room: "Bedroom",
        accessories: "Lamp",
      },
      {
        room: "Upstairs",
        accessories: "Ecobee",
      },
      {
        room: "Upstairs",
        accessories: "Play room lights",
      },
      {
        room: "Upstairs",
        accessories: "Lamp",
      },
    ],
  },

  proxy: {
    type: "memory",
    reader: {
      type: "json",
      rootProperty: "items",
    },
  },
});
