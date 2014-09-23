function Sushi(){
  this.x = Math.random() * 750;
  this.y = Math.random() * 750;
  this.diameter = 30 + Math.random() * 50;
  this.speed = 1000 + Math.random() * 3500;


  this.render = function() {
    function createSushies() {
      return (
      $("<div></div>")
      );
    }

    var sushiBuffer = [];
    sushiBuffer.push(createSushies( $('.shushi')) );
    sushiBuffer.push(createSushies( $('.shushi2')) );
    sushiBuffer.push(createSushies( $('.shushi3')) ) ;

    var self = this;
    this.$me = (sushiBuffer)
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
      top: Math.random() * 750,
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
});



// Move
// Diameter
// Speed
// Handles a click event
// Explodes on click
