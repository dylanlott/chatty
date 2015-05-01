'use strict';

angular.module('chattyApp')

app.factory('MessageService', function($http) {

	this.getMessages = function() {
		var dfd = $q.defer(); 
		$http({
			method: 'GET',
			url: 'http://localhost:8080'
		}).then(function(res) {
			dfd.resolve(ParsedResponse); 
		});
		return dfd.promise; 
	}

    this.postMessage = function(){
    	var dfd = $q.defer();
    	$http({
    		method: 'POST',
    		url: 'http://localhost:8080'
    	}).then(function(msg) {
    		var ParsedMessage = msg;
    		dfd.Resolve(ParsedMessage);
    	});
    	return dfd.promise; 
    }

 });
