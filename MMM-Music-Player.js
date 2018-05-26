/*
 * Author : BinSin
 * https://github.com/BinSin/MMM-Music-Player:
 */

Module.register("MMM-Music-Player", {
  defaults: {
  },

  start: function() {
	var self = this;
	Log.log("Starting module: " + this.name);
	self.sendSocketNotification("INIT_MUSIC", self.config);
  },

  notificationReceived: function(notification, payload, sender) {
	var self = this;
	if(sender) {
		if (notification == "PLAY_MUSIC_RECOGNITION") {
			console.log("play music start~");
			self.sendSocketNotification("PLAY_MUSIC", self.config);
		}
	}
  },

  socketNotificationReceived: function(notification, payload) {
	var self = this;
	if(notification == "SUCCESS_PLAY_MUSIC") {
		console.log("success play music : " +  payload);
	}
  },

});
