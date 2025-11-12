<section>
  <h1>Blackjack in TypeScript</h1>
  <p>
    A <strong>TypeScript</strong>-based terminal Blackjack game running in a
    <strong>Node.js</strong> environment.<br />
    This project is inspired by <strong>Tech With Tim</strong>’s take-home project from his video:
    <a href="https://youtu.be/iJkaAJUzeWQ?si=rxYplDRSxr1XtNTT" target="_blank" rel="noopener noreferrer">
      TypeScript Full Course - From Beginner to Advanced
    </a>
  </p>

  <blockquote>
    <p><strong>Note:</strong></p>
    <p>
      The TypeScript code in this project has been <strong>heavily refactored</strong>
      compared to the original version to ensure full compatibility with
      <strong>Node.js 22.20.0</strong> and modern TypeScript standards.
    </p>
  </blockquote>

  <hr />

  <h2>Dependencies</h2>
  
  <p>This project relies on:</p>
  <ul>
    <li><a href="https://www.npmjs.com/package/prompt-sync" target="_blank" rel="noopener noreferrer">prompt-sync</a> — for terminal input.</li>
  </ul>

  <h3>Installation</h3>
  
  <pre>
    <code>npm install prompt-sync
          npm i --save-dev @types/prompt-sync
    </code>
  </pre>

  <hr />

  <h2 style="color: #2563eb;">Explanation of the Game</h2>

  <p>
    <strong>Blackjack</strong>, often known as <strong>21</strong>, is a card game where the player competes against the dealer
    with the goal of having the total value of their cards come as close to <strong>21</strong> as possible without exceeding it.
    Here's a detailed breakdown of how the game works and the rules you'll implement:
  </p>

  <h3 style="color: #334155; margin-top: 1.5em;">Game Setup</h3>
  <ul style="list-style-type: disc; padding-left: 1.5em;">
    <li>The game uses a standard deck of <strong>52 playing cards</strong>.</li>
    <li>Each card has a value:
      <ul style="list-style-type: circle; padding-left: 1.5em;">
        <li>Number cards (<strong>2 through 10</strong>) are worth their face value.</li>
        <li>Face cards (<strong>Jack, Queen, King</strong>) are each worth 10.</li>
        <li><strong>Aces</strong> can be worth either <strong>1</strong> or <strong>11</strong>, depending on which value benefits the player’s hand the most.</li>
      </ul>
    </li>
    <li>The player starts with a bankroll of <strong>$100</strong>.</li>
    <li>Before each round, the player places a bet. If the player runs out of money, the game ends.</li>
  </ul>

  <h3 style="color: #334155; margin-top: 1.5em;">Game Flow</h3>
  <ul style="list-style-type: disc; padding-left: 1.5em;">
    <li><strong>Placing Bets</strong> - The player decides how much to bet from their available funds.</li>
    <li><strong>Dealing Cards</strong> - Initially, both the player and the dealer are dealt two cards.
      The player's cards are both face up, while the dealer has one card face up and one face down (hidden).
    </li>
  </ul>

  <h4 style="color: #475569; margin-top: 1em;">Player's Turn</h4>
  <ul style="list-style-type: circle; padding-left: 1.5em;">
    <li>
      If the player's initial two cards total <strong>21</strong> (an Ace and a 10-value card),
      this is called a <strong>"Blackjack"</strong>. The player wins <strong>3:2</strong> on their bet immediately,
      unless the dealer also has a Blackjack, in which case the game ends.
    </li>
    <li>
      If not a Blackjack, the player has the option to <strong>"hit"</strong> (request additional cards)
      one at a time to try to get closer to 21. The player can hit as many times as they like but will
      <strong>"bust"</strong> (automatically lose) if their total exceeds 21.
    </li>
    <li>
      The player can also <strong>"stand"</strong> (not take any more cards) if they are satisfied with their hand’s total value.
    </li>
  </ul>

  <h4 style="color: #475569; margin-top: 1em;">Dealer's Turn</h4>
  <ul style="list-style-type: circle; padding-left: 1.5em;">
    <li>
      After the player stands, the dealer reveals their hidden card.
      The dealer must <strong>hit</strong> if their total is less than <strong>17</strong>
      and <strong>Stand</strong> once it reaches <strong>17 or more</strong>.
    </li>
  </ul>

  <h3 style="color: #334155; margin-top: 1.5em;">Determining the Winner</h3>
  <ul style="list-style-type: disc; padding-left: 1.5em;">
    <li>
      If the dealer <strong>busts</strong> or the <strong>player's total</strong> is closer to 21 than the dealer's without exceeding 21,
      the player <strong>wins</strong> and doubles their bet.
    </li>
    <li>
      If both the player and the dealer have the <strong>same total</strong>, the game is a
      <strong>"push"</strong> (tie), and the player's bet is returned.
    </li>
    <li>
      If the <strong>dealer has a higher total</strong> than the player without busting,
      or if the player busts, the player <strong>loses</strong> their bet.
    </li>
  </ul>

  <hr />

  <h2>Examples of Gameplay</h2>

  <p><em>(Excerpt from Tech with Tim’s .PDF file for the project)</em></p>

  <h4>Example 1: Player Wins by Getting Closer to 21</h4>

  <pre>
    <code>
      Player's funds: $100
      Enter your bet: $20
      Your hand: 7♠, 5♥ (Total: 12)
      Dealer's hand: 10♣, [hidden]
      Your action (hit/stand): hit
    
      Your hand: 7♠, 5♥, 9♦ (Total: 21)
      Your action (hit/stand): stand
      Dealer's hand: 10♣, 6♠ (Total: 16)
      Dealer hits: 10♣, 6♠, 4♠ (Total: 20)
      You win $20!
      Player's funds: $120
    </code>
  </pre>

  <h4>Example 2: Player Gets Blackjack</h4>

  <pre>
    <code>
      Player's funds: $100
      Enter your bet: $10
      Your hand: A♥, K♦ (Blackjack!)
      Dealer's hand: 9♠, [hidden]
      You win $15! (3:2 payout for Blackjack)
      Player's funds: $115
    </code>
  </pre>

  <h4>Example 3: Player Busts</h4>

  <pre>
    <code>
      Player's funds: $100
      Enter your bet: $20
      Your hand: 8♦, 6♣ (Total: 14)
      Dealer's hand: K♠, [hidden]
      Your action (hit/stand): hit
      
      Your hand: 8♦, 6♣, 9♥ (Total: 23 - Bust!)
      Dealer's hand: K♠, 3♦ (Total: 13)
      You bust and lose $20.
      Player's funds: $80
    </code>
  </pre>

  <h4>Example 4: Dealer Busts, Player Wins</h4>
  
  <pre>
    <code>
      Player's funds: $80
      Enter your bet: $10
      Your hand: 10♣, 2♠ (Total: 12)
      Dealer's hand: 6♥, [hidden]
      Your action (hit/stand): hit
      
      Your hand: 10♣, 2♠, 7♦ (Total: 19)
      Your action (hit/stand): stand
      Dealer's hand: 6♥, 10♠ (Total: 16)
      Dealer hits: 6♥, 10♠, 6♦ (Total: 22 - Dealer Busts!)
      You win $10.
      Player's funds: $90
    </code>
  </pre>

  <h4>Example 5: Push (Tie)</h4>

  <pre>
    <code>
      Player's funds: $90
      Enter your bet: $15
      Your hand: Q♦, 7♠ (Total: 17)
      Dealer's hand: 9♦, [hidden]
      Your action (hit/stand): stand
      
      Dealer's hand: 9♦, 8♣ (Total: 17)
      It's a push! Your bet is returned.
      Player's funds: $90
    </code>
  </pre>

  <h4>Example 6: Dealer Has Blackjack, Player Loses</h4>

  <pre>
    <code>
      Player's funds: $90
      Enter your bet: $20
      Your hand: 9♠, 8♣ (Total: 17)
      Dealer's hand: A♠, [hidden]
      Dealer reveals: A♠, K♣ (Blackjack!)
      Dealer has Blackjack. You lose $20.
      Player's funds: $70
    </code>
  </pre>

  <h4>Example 7: Dealer Wins By Getting Closest to 21</h4>
  
  <pre>
    <code>
      Player's funds: $70
      Enter your bet: $25
      Your hand: 4♥, 5♦ (Total: 9)
      Dealer's hand: 7♠, [hidden]
      Your action (hit/stand): hit
      
      Your hand: 4♥, 5♦, 8♠ (Total: 17)
      Your action (hit/stand): stand
      Dealer's hand: 7♠, 9♥ (Total: 16)
      Dealer hits: 7♠, 9♥, 5♣ (Total: 21)
      Dealer wins. You lose $25.
      Player's funds: $45
    </code>
  </pre>

  <hr />

</section>
