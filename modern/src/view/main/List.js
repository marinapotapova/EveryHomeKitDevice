/**
 * This view is an example list of people.
 */
Ext.define("EveryHomeKitDevice.view.main.List", {
  extend: "Ext.grid.Grid",
  xtype: "mainlist",

  requires: ["EveryHomeKitDevice.store.Devices", "Ext.field.Toggle"],

  title: "Devices",

  store: {
    type: "devices",
  },
  columns: [
    {
      xtype: "rownumberer",
    },
    { text: "Accessories", dataIndex: "accessories", flex: 1 },
  ],
  /*columns: [
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
*/
  listeners: {
    select: "onItemSelected",
  },
});
