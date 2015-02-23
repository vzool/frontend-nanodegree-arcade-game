// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images

    this.sprite = 'images/enemy-bug.png';
    this.row_position = [60, 145, 230];
    
    // Enemy move speed.
    this.speeds = [100, 250, 500];

    // Enemy speed chosen randomly.
    this.x_speed = this.speeds[Math.round(Math.random() * (this.speeds.length - 1))];
    
    // Enemy x position is negative, because I won't to jump on screen without normal moves from left to rigth.
    this.x = -this.x_speed;

    // Enemy y position chosen randomly.
    this.y = this.row_position[Math.round(Math.random() * (this.row_position.length - 1))];
    this.step = 0;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    // if any enemy reach the limit of our canvas's width, it will be terminate it.
    if(this.x > ctx.canvas.width){
        if(allEnemies.length < 4){
            allEnemies.remove(this);
            allEnemies.push(new Enemy());
        }
    }
    
    // Update the enemy's position with dt.
    this.step += Math.round(this.x_speed * dt);
    this.x = this.step;
};

// Draw the enemy on the screen, required method for game.
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(){
    
    // Player's actor.
    this.hero = 'images/char-boy.png';

    // Start point
    this.x_start_point = 200;
    this.y_start_point = 380;

    // Default positions for player.
    this.x = this.x_start_point;
    this.y = this.y_start_point;
    
    // Player step value.
    this.x_step = 100;
    this.y_step = 80;
    
    // Player X positions.
    this.hit_x_points = [ 0, 100, 200, 300, 400 ];

    // Player Y positions.
    this.hit_y_points = [ 60, 140, 220 ];
};

// Update position of player and Intersect player position with all enemies positions.
Player.prototype.update = function(){
    
    // Create new pointer to current player to use it inside (allEnemies.forEach),
    // Because, (this) pointer not referenced to Player, it's referenced to Window object.
    var current_player = this;
    
    // Reset game if player goes to sea.
    if(this.y <= -20){
       this.reset();
    }

    allEnemies.forEach(function(enemy){
        // Check intersection with player and enemy in y coordinates.
        if((enemy.y == 60 && current_player.y == 60) || (enemy.y == 145 && current_player.y == 140) || (enemy.y == 230 && current_player.y == 220)){
            // Check intersection with player and enemy in x coordinates.
            if(enemy.step == current_player.x  || (enemy.step - current_player.x >= 0  && enemy.step - current_player.x <= 9) ){
                current_player.reset();
            }
        }
    });
};

// Draw the player on the screen, required method for game.
Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.hero), this.x, this.y);
};

// Player cotroller method
Player.prototype.handleInput = function(key){
    
    switch(key){
        // Left key if pressed.
        case 'left':
            if(this.x > 0 && this.x < ctx.canvas.width){
                this.x -= this.x_step;
                console.log("(left): " + this.x, this.y);
            }
        break;
        
        // Up key if pressed.
        case 'up':
            if(this.y > 0 && this.x < ctx.canvas.height){
                this.y -= this.y_step;
                console.log("(up): " + this.x, this.y);
            }
        break;
        
        // Right key if pressed.
        case 'right':
            if(this.x >= 0 && (this.x + (this.x_step * 2) < ctx.canvas.width)){
                this.x += this.x_step;
                console.log("(right): " + this.x, this.y);
            }
        break;
        
        // Down key if pressed.
        case 'down':
            if(this.y >= -20 && (this.y + (this.y_step * 3) < ctx.canvas.height)){
                this.y += this.y_step;
                console.log("(down): " + this.x, this.y);
            }
        break;
    }
};

// Reset game method by set player position to the starting point.
Player.prototype.reset = function(){
    this.x = this.x_start_point;
    this.y = this.y_start_point;
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

// instantiate all Enemies object in one shot.
var allEnemies = [new Enemy(), new Enemy(), new Enemy()];

// instantiate Player object.
var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
