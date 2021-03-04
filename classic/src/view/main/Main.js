/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define("EveryHomeKitDevice.view.main.Main", {
  extend: "Ext.tab.Panel",
  xtype: "app-main",

  requires: [
    "Ext.plugin.Viewport",
    "Ext.window.MessageBox",

    "EveryHomeKitDevice.view.main.MainController",
    "EveryHomeKitDevice.view.main.MainModel",
    "EveryHomeKitDevice.view.main.List",

    "EveryHomeKitDevice.store.Devices",
  ],

  controller: "main",
  viewModel: "main",
  iconCls: "fa-home",
  title: "Every HomeKit Device",
  ui: "navigation",

  defaults: {
    bodyPadding: 20,
  },

  items: [
    {
      title: "Hallway",

      // The following grid shares a store with the classic version's grid as well!
      items: [
        {
          xtype: "mainlist",
          store: {
            type: "devices",
            filters: [
              {
                property: "room",
                value: "Hallway",
              },
            ],
          },
        },
      ],
    },
    {
      title: "Living Room",

      items: [
        {
          xtype: "mainlist",
          store: {
            type: "devices",
            filters: [
              {
                property: "room",
                value: "Living Room",
              },
            ],
          },
        },
      ],
    },
    {
      title: "Kitchen",
      //iconCls: "fa-users",
      items: [
        {
          xtype: "mainlist",
          store: {
            type: "devices",
            filters: [
              {
                property: "room",
                value: "Kitchen",
              },
            ],
          },
        },
      ],
    },
    {
      title: "Bedroom",

      items: [
        {
          xtype: "mainlist",
          store: {
            type: "devices",
            filters: [
              {
                property: "room",
                value: "Bedroom",
              },
            ],
          },
        },
      ],
    },
    {
      title: "Upstairs",
      items: [
        {
          xtype: "mainlist",
          store: {
            type: "devices",
            filters: [
              {
                property: "room",
                value: "Upstairs",
              },
            ],
          },
        },
      ],
    },
  ],
});
