/*
*
*/
'use strict';

var NodeHelper = require("node_helper");

var path = require("path");

var fs = require('fs');

var MusicPlayer = require('musicplayer-api').MusicPlayer
var player = null;

module.exports = NodeHelper.create({

  start: function() {
	var self = this;
	console.log("Starting node helper for: " + this.name);
	self.initPlayer();
  },

  initPlayer: function() {
	this.player = new MusicPlayer()
  },

  socketNotificationReceived: function(notification, payload) {
	var self = this;
	
	if (notification == "INIT_PLAYER") {
		self.initPlayer(payload);
	}
	else if (notification == "PLAY_MUSIC") {
		
	}
	else if (notification == "STOP_MUSIC") {
		this.player.stop();
	}
	else if (notification == "PAUSE_MUSIC") {
		this.player.pause();
	}
	else if (notification == "PLAY_NEXT") {
		this.player.playNext();
	}
	 
  },

});
