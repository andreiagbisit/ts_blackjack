import Card from "./card.js";
import { Suit } from "./types.js";
import { shuffleArray } from "./utils.js";
class Deck {
    deck = [];
    constructor() {
        this.reset();
    }
    reset() {
        const cards = this.makeDeck();
        this.deck = shuffleArray(cards);
    }
    deal(num) {
        const dealtCards = [];
        for (let i = 0; i < num; i++) {
            const card = this.deck.pop();
            dealtCards.push(card);
        }
        return dealtCards;
    }
    makeDeck() {
        const cards = [];
        const suits = [Suit.Hearts, Suit.Diamonds, Suit.Clubs, Suit.Spades];
        for (const suit of suits) {
            for (let value = 1; value <= 13; value++) {
                const card = new Card(value, suit);
                cards.push(card);
            }
        }
        return cards;
    }
}
export default Deck;
