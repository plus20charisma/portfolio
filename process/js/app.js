var app = angular.module('portfolio', []);

app.controller('galleryCtrl', ['$scope', function($scope) {

  $scope.portfolio = [
    {
      "name": "name1",
      "image": "image1",
      "thumb": "thumb1",
      "desc": "desc1"
    },
    {
      "name": "name2",
      "image": "image2",
      "thumb": "thumb2",
      "desc": "desc2"
    },
    {
      "name": "name3",
      "image": "image3",
      "thumb": "thumb3",
      "desc": "desc3"
    },
    {
      "name": "name4",
      "image": "image4",
      "thumb": "thumb4",
      "desc": "desc4"
    },
    {
      "name": "name5",
      "image": "image5",
      "thumb": "thumb5",
      "desc": "desc5"
    },
    {
      "name": "name6",
      "image": "image6",
      "thumb": "thumb6",
      "desc": "desc6"
    },
    {
      "name": "name7",
      "image": "image7",
      "thumb": "thumb7",
      "desc": "desc7"
    },
    {
      "name": "name8",
      "image": "image8",
      "thumb": "thumb8",
      "desc": "desc8"
    },
    {
      "name": "name9",
      "image": "image9",
      "thumb": "thumb9",
      "desc": "desc9"
    },
    {
      "name": "name10",
      "image": "image10",
      "thumb": "thumb10",
      "desc": "desc10"
    },
    {
      "name": "name11",
      "image": "image11",
      "thumb": "thumb11",
      "desc": "desc11"
    },
    {
      "name": "name12",
      "image": "image12",
      "thumb": "thumb12",
      "desc": "desc12"
    },
    {
      "name": "name13",
      "image": "image13",
      "thumb": "thumb13",
      "desc": "desc13"
    },
    {
      "name": "name14",
      "image": "image14",
      "thumb": "thumb14",
      "desc": "desc14"
    },
    {
      "name": "name15",
      "image": "image15",
      "thumb": "thumb15",
      "desc": "desc15"
    }
  ]

}]);

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});