/**
 * This view is an example list of people.
 */
Ext.define("EveryHomeKitDevice.view.main.List", {
  extend: "Ext.grid.Panel",
  xtype: "mainlist",

  requires: ["EveryHomeKitDevice.store.Devices"],

  title: "Devices",

  store: {
    type: "devices",
    //filters: [],
  },

  columns: [{ text: "Accessories", dataIndex: "accessories", flex: 1 }],

  listeners: {
    select: "onItemSelected",
  },
});
