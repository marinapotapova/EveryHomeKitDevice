/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
  extend: "EveryHomeKitDevice.Application",

  name: "EveryHomeKitDevice",

  requires: [
    // This will automatically load all classes in the EveryHomeKitDevice namespace
    // so that application classes do not need to require each other.
    "EveryHomeKitDevice.*",
  ],

  // The name of the initial view to create.
  mainView: "EveryHomeKitDevice.view.main.Main",
});
