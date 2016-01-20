angular.module('starter.services', [])

.factory('Cities', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var cities = [{
    id: 2013348,
    name: 'Владивосток',
    desc: 'Столица Приморского Края',
    emblem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coat_of_arms_of_Vladivostok_%282014%29.png/800px-Coat_of_arms_of_Vladivostok_%282014%29.png'
  }];

  return {
    all: function() {
      return cities;
    },
    get: function(id) {
      for (var i = 0; i < chats.length; i++) {
        if (cities[i].id === parseInt(id)) {
          return cities[i];
        }
      }
      return null;
    }
  };
});
