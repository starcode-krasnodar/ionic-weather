angular.module('starter.services', [])
    .factory('Cities', function() {
      var cities = [{
        id: 524901,
        name: 'Москва',
        desc: 'Столица нашей Родины',
        emblem: 'http://upload.wikimedia.org/wikipedia/commons/d/da/Coat_of_Arms_of_Moscow.png'
      }, {
        id: 542420,
        name: 'Краснодар',
        desc: 'Южная столица Родины',
        emblem: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Coat_of_Arms_of_Krasnodar_%28Krasnodar_krai%29.png'
      }, {
        id: 540761,
        name: 'Кропоткин',
        desc: 'Моя родина',
        emblem: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Coat_of_Arms_of_Kropotkin_%28Krasnodar_krai%29.png'
      }];
      return {
        all: function() {
          return cities;
        },
        get: function(id) {
          for (var i = 0; i < cities.length; i++) {
            if (cities[i].id === parseInt(id)) {
              return cities[i];
            }
          }
          return null;
        }
      };
    });