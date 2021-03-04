/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 */
Ext.define("EveryHomeKitDevice.view.main.Main", {
  extend: "Ext.tab.Panel",
  xtype: "app-main",

  requires: ["Ext.MessageBox", "Ext.layout.Fit"],

  controller: "main",
  viewModel: "main",

  defaults: {
    tab: {
      iconAlign: "top",
    },
  },

  tabBarPosition: "top",

  items: [
    // TODO - Replace the content of this view to suit the needs of your application.
    {
      title: "Hallway",
      // iconCls: "x-fa fa-home",
      layout: "fit",
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

      layout: "fit",
      // The following grid shares a store with the classic version's grid as well!
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

      layout: "fit",
      // The following grid shares a store with the classic version's grid as well!
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

      layout: "fit",
      // The following grid shares a store with the classic version's grid as well!
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

      layout: "fit",
      // The following grid shares a store with the classic version's grid as well!
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
