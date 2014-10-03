function Sushi(){
  this.x = Math.random() * 750;
  this.y = Math.random() * 750;
  this.diameter = 30 + Math.random() * 50;
  this.speed = 1000 + Math.random() * 3500;


  this.render = function() {
    var moreSushi = $('<div></div>');
    var whichSushi = parseInt(Math.random()*3)+1;
    moreSushi.addClass('sushi' + whichSushi);


    var self = this;
    this.$me =(moreSushi)
    .css({
      'left': this.x,
      'top': this.y,
    }).on('click', function() {
      self.kill();
    });

    $('#game').append(this.$me);
  };

  this.move = function() {
    var self = this;
    this.$me.animate ({
      top: Math.random() * 1050,
      left: Math.random() * 750
    }, {
      duration: this.speed,
      complete: function(){
        self.move();
      }
    });
  };
  this.kill = function(){
    this.$me
    .effect({
      effect: "explode",
      duration: 300,
      complete: function(){
        game.increaseScore();
        $(this.remove);
      },
      queue: false
    })
  }
};

function Game(sushiCount, duration) {
 this.score = 0;
 this.sushies = [];
 this.sushiCount = sushiCount;
 this.duration = duration * 1000;

 this.increaseScore = function() {
  $('#score').text(this.score += 100);
}

this.start = function() {
  for (var i = 0; i < this.sushiCount; i++) {
      // make lots of sushi
      var sushi = new Sushi();
      this.sushies[i] = sushi;
      this.sushies[i].render();
      this.sushies[i].move();
    } 
    $('#score').text(this.score);

    setTimeout(this.stop, this.duration)
  };
  this.stop = function() {
    alert('Game over!')
    this.sushies[i].$me.remove();
    this.sushi = [];
  }
}

$(document).ready(function() {
  window.game = new Game(10, 10)
  window.game.start();

  $('#restart').bind('click', function() {
    window.location.reload();
  });
});



// Move
// Diameter
// Speed
// Handles a click event
// Explodes on click


// Math.random always produces a floating point value between 0 and 1
// to make it be either 1, 2, or 3, multiply it by 3 then add 1, then floor it
// try playing around in the console
// getting random numbers is an important skill