'use strict';

angular.module('chattyApp')
  
app.controller('MessageCtrl', function ($scope, MessageService) {

  	$scope.messages = [];

	MessageService.getMessages().then(function(res) {
		$scope.messages = response.data;
		// console.log($scope.messages); 
	});

	$scope.addMessage = function(){
		MessageService.postMessage(newMessage); 

		//repop the messages from server 
		MessageService.getMessages().then(function(res) {
			$scope.messages = response.data;
		})

		//reset the message box to blank
		$scope.newMessage = '';  
	}

  });
