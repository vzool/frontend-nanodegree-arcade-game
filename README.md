# Project Solution

I begin my code with thoughts of separation and modularity which I can explain it as point as following:

1. I try to build/Draw game world by structure that already exists.
2. I try to Draw a player(Hero).
3. Just move Player by keyboard arrow actions.
4. Move player in known coordinates.
5. Try Player not to move out of his world.
6. Draw one enemy at any location.
7. Make enemy just move by itself from left to right at known x coordinates.
8. Make enemies generated automatically and randomly among known x coordinates.
9. Check X hits between Player and enemies.
10. Add feature reset game or Player position if it occurs.
11. Check Y hits between Player and enemies.
12. Optimize Hits trigger for Reset.

## Game Requirements:

You will need a browser with specific version that fully supports the <canvas> element, which are:

- Chrome: 4.0+
- IE(Internet Explorer): 9.0+
- Firefox: 2.0+
- Safari: 3.1+
- Opera: 9.0+

## Game Instructions:

There are three zones in this game organized from bottom to top with these order(Grass, Roads & Sea):

1. Grass: it's most safest place for you from any danger, and Grass is in Green color.

2. Roads: it's your enemies path, and Roads is in Yellow color.

3. Sea: it's most danger place for you, any move over sea means death for you and Sea in Blue color.

You can move your player by arrows keypads in your keyboard, which makes your player to move in four directions(right, up, left & down).
Enemies are moving in Roads from left to right in different speeds. So, watch out.
Finally, The Sea is not moving.

The game objective is to move anywhere and try to avoid any contact with Sea and your Enemies, hope you win.

frontend-nanodegree-arcade-game
===============================

Students should use this rubric: https://www.udacity.com/course/viewer#!/c-ud015/l-3072058665/m-3072588797

for self-checking their submission.
