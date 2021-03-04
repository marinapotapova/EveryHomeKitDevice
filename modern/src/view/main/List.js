/**
 * This view is an example list of people.
 */
Ext.define("EveryHomeKitDevice.view.main.List", {
  extend: "Ext.grid.Grid",
  xtype: "mainlist",

  requires: ["EveryHomeKitDevice.store.Personnel"],

  title: "Personnel",

  store: {
    type: "personnel",
  },

  columns: [
    {
      text: "Scenes",
      dataIndex: "name",
      width: 100,
      cell: {
        userCls: "bold",
      },
    },
    {
      text: "Accessories",
      dataIndex: "email",
      width: 230,
    },
    {
      text: "Rooms",
      dataIndex: "phone",
      width: 150,
    },
  ],

  listeners: {
    select: "onItemSelected",
  },
});
