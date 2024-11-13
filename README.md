## Game project

Game info :

Start with a health of 100% for both Player and each player use an option without the other player knowing what he chose.

Attack vs. Defend: If Player 1 chooses Attack and Player 2 chooses Defend, no health is lost for Player 1. Player 2 takes no damage either, so their health stays the same.
Both Choose Attack: Both players lose half their health. You can implement this by setting health -= health / between 10% to 20% 2 for both players.

Both Choose Defend: The player with less health receives some damage. If their health is the same, nothing happens.
For example, if Player 1’s health is 30% and Player 2’s health is 40%, then Player 1 might receive a small amount of damage between 1% to 5%.

Health Potion: When a player successfully defends 2 attacks in a row, they earn a health potion. This potion can be used during their next turn to heal a set amount of health, say 25% points.

Health Check:
After each round, check if either player’s health reaches 0. If so, the other player wins.
You can end the game with a simple "Game Over" screen displaying the winner.

Health Bars: Draw a rectangular health bar for each player, changing the color as health decreases. For example:
Green for full health.
Yellow for low health.
Red when health is critical.
