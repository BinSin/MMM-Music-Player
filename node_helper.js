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
		self.initPlayer();
	}
	else if (notification == "PLAY_MUSIC") {
		if(payload == "HAPPY") {
			player.addTrack("");
		}
		else if(payload == "SAD") {
			player.addTrack("");
		}
		else if(payload == "ANGRY") {
			player.addTrack("");
		}
		else if(payload == "CONFUSED") {
			player.addTrack("");
		}
		else if(payload == "DISGUSTED") {
			player.addTrack("");
		}
		else if(payload == "SURPRISED") {
			player.addTrack("");
		}
		else if(payload == "CALM") {
			player.addTrack("");
		}
		else {
			
		}	
	}
	else if (notification == "RESET_PLAYER_LISTS") {
		this.player.removeAllTracks();
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
