<h1>Blackjack in TypeScript</h1>

<p>
  A <b>TypeScript</b>-based terminal game of Blackjack running in a
  <b>Node.js</b> environment.
  This project is based on <b>Tech With Tim</b>’s take-home project
  <a href="https://youtu.be/iJkaAJUzeWQ?si=rxYplDRSxr1XtNTT" target="_blank" rel="noopener noreferrer">
    TypeScript Full Course - From Beginner to Advanced
  </a>
</p>

<blockquote>
  <p><b>Note:</b></p>
  <p>
    The TypeScript code in this project has been <b>heavily refactored</b>
    compared to the original version to ensure full compatibility with
    <b>Node.js 22.20.0</b> and modern TypeScript standards.
  </p>
</blockquote>

<hr>

<h3>Getting Started</h3>

<ul>
  <li><b>Running the project locally</b></li>
</ul>

<pre><code># Clone this repository
git clone https://github.com/andreiagbisit/ts_blackjack.git
  
# Navigate into the project directory
cd ts_blackjack

# Install TypeScript globally in your system
npm install -g typescript

# Start the development server
npm run dev</code></pre>

<hr>

<h2>Dependencies</h2>

<p>This project relies on:</p>
<ul>
  <li><a href="https://www.npmjs.com/package/prompt-sync" target="_blank" rel="noopener noreferrer">prompt-sync</a> - For terminal input.</li>
</ul>

<h3>Installation</h3>

<pre><code>npm install prompt-sync
npm i --save-dev @types/prompt-sync</code></pre>

<hr>

<h2 style="color: #2563eb;">Explanation of the game</h2>

<p>
  <b>Blackjack</b>, often known as <b>21</b>, is a card game where the player competes against the dealer
  with the goal of having the total value of their cards come as close to <b>21</b> as possible without exceeding it.
  Here's a detailed breakdown of how the game works and the rules you'll implement:
</p>

<h3 style="color: #334155; margin-top: 1.5em;">Game setup</h3>
<ul style="list-style-type: disc; padding-left: 1.5em;">
  <li>The game uses a standard deck of <b>52 playing cards</b>.</li>
  
  <li>Each card has a <b>value</b>:
    <ul style="list-style-type: circle; padding-left: 1.5em;">
      <li>Number cards (<b>2 through 10</b>) are worth their face value.</li>
      <li>Face cards (<b>Jack, Queen, King</b>) are each worth 10.</li>
      <li><b>Aces</b> can be worth either <b>1</b> or <b>11</b>, depending on which value benefits the player’s hand the most.</li>
    </ul>
  </li>
  
  <li>The player starts with a bankroll of <b>$100</b>.</li>
  
  <li>Before each round, the player places a bet. If the player runs out of money, the game <b>ends</b>.</li>
</ul>

<h3 style="color: #334155; margin-top: 1.5em;">Game flow</h3>

<ul style="list-style-type: disc; padding-left: 1.5em;">
  <li><b>Placing Bets</b> - The player decides how much to bet from their available funds.</li>
  
  <li><b>Dealing Cards</b> - Initially, both the player and the dealer are dealt two cards.
    The player's cards are both face up, while the dealer has one card face up and one face down (hidden).
  </li>
</ul>

<h4 style="color: #475569; margin-top: 1em;">Player's turn</h4>

<ul style="list-style-type: circle; padding-left: 1.5em;">
  <li>
    If the player's initial two cards total <b>21</b> (an Ace and a 10-value card),
    this is called a <b>Blackjack</b>. The player wins <b>3:2</b> on their bet immediately,
    unless the dealer also has a Blackjack, in which case the game ends.
  </li>
  
  <li>
    If not a Blackjack, the player has the option to <b>'hit'</b> (request additional cards)
    one at a time to try to get closer to 21. The player can hit as many times as they like but will
    <b>'bust'</b> (automatically lose) if their total exceeds 21.
  </li>
  
  <li>
    The player can also <b>'stand'</b> (not take any more cards) if they are satisfied with their hand’s total value.
  </li>
</ul>

<h4 style="color: #475569; margin-top: 1em;">Dealer's turn</h4>

<ul style="list-style-type: circle; padding-left: 1.5em;">
  <li>
    After the player stands, the dealer reveals their hidden card.
    The dealer must hit if their total is less than <b>17</b>
    and stand once it reaches <b>17 or more</b>.
  </li>
</ul>

<h3 style="color: #334155; margin-top: 1.5em;">Determining the winner</h3>
<ul style="list-style-type: disc; padding-left: 1.5em;">
  
  <li>
    If the dealer <b>busts</b> or the <b>player's total</b> is closer to 21 than the dealer's without exceeding 21,
    the player <b>wins</b> and doubles their bet.
  </li>
  
  <li>
    If both the player and the dealer have the <b>same total</b>, the game is a
    <b>'push'</b> (tie), and the player's bet is returned.
  </li>
  
  <li>
    If the <b>dealer has a higher total</b> than the player without busting,
    or if the player busts, the player <b>loses</b> their bet.
  </li>
</ul>

<hr>

<h2>Examples of gameplay</h2>

<p><i>(Excerpt from Tech with Tim’s .PDF file for the project)</i></p>

<ul><li><h4>Example 1: Player wins by getting closer to 21</h4></li></ul>

<pre><code>Player's funds: $100
Enter your bet: $20
Your hand: 7♠, 5♥ (Total: 12)
Dealer's hand: 10♣, [hidden]
Your action (hit/stand): hit
  
Your hand: 7♠, 5♥, 9♦ (Total: 21)
Your action (hit/stand): stand
Dealer's hand: 10♣, 6♠ (Total: 16)
Dealer hits: 10♣, 6♠, 4♠ (Total: 20)
You win $20!
Player's funds: $120</code></pre>

<ul><li><h4>Example 2: Player gets Blackjack</h4></li></ul>

<pre><code>Player's funds: $100
Enter your bet: $10
Your hand: A♥, K♦ (Blackjack!)
Dealer's hand: 9♠, [hidden]
You win $15! (3:2 payout for Blackjack)
Player's funds: $115</code></pre>

<ul><li><h4>Example 3: Player busts</h4></li></ul>

<pre><code>Player's funds: $100
Enter your bet: $20
Your hand: 8♦, 6♣ (Total: 14)
Dealer's hand: K♠, [hidden]
Your action (hit/stand): hit

Your hand: 8♦, 6♣, 9♥ (Total: 23 - Bust!)
Dealer's hand: K♠, 3♦ (Total: 13)
You bust and lose $20.
Player's funds: $80</code></pre>

<ul><li><h4>Example 4: Dealer busts, player wins</h4></li></ul>

<pre><code>Player's funds: $80
Enter your bet: $10
Your hand: 10♣, 2♠ (Total: 12)
Dealer's hand: 6♥, [hidden]
Your action (hit/stand): hit

Your hand: 10♣, 2♠, 7♦ (Total: 19)
Your action (hit/stand): stand
Dealer's hand: 6♥, 10♠ (Total: 16)
Dealer hits: 6♥, 10♠, 6♦ (Total: 22 - Dealer Busts!)
You win $10.
Player's funds: $90</code></pre>

<ul><li><h4>Example 5: Push (tie)</h4></li></ul>

<pre><code>Player's funds: $90
Enter your bet: $15
Your hand: Q♦, 7♠ (Total: 17)
Dealer's hand: 9♦, [hidden]
Your action (hit/stand): stand

Dealer's hand: 9♦, 8♣ (Total: 17)
It's a push! Your bet is returned.
Player's funds: $90</code></pre>

<ul><li><h4>Example 6: Dealer has Blackjack, player loses</h4></li></ul>

<pre><code>Player's funds: $90
Enter your bet: $20
Your hand: 9♠, 8♣ (Total: 17)
Dealer's hand: A♠, [hidden]
Dealer reveals: A♠, K♣ (Blackjack!)
Dealer has Blackjack. You lose $20.
Player's funds: $70</code></pre>

<ul><li><h4>Example 7: Dealer wins by getting closest to 21</h4></li></ul>

<pre><code>Player's funds: $70
Enter your bet: $25
Your hand: 4♥, 5♦ (Total: 9)
Dealer's hand: 7♠, [hidden]
Your action (hit/stand): hit

Your hand: 4♥, 5♦, 8♠ (Total: 17)
Your action (hit/stand): stand
Dealer's hand: 7♠, 9♥ (Total: 16)
Dealer hits: 7♠, 9♥, 5♣ (Total: 21)
Dealer wins. You lose $25.
Player's funds: $45</code></pre>

<hr>
