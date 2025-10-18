import Card from "./card.js";
import type { IDealable } from "./types.js";
import { Suit } from "./types.js";
import { shuffleArray } from "./utils.js";

class Deck implements IDealable {
    private deck: Card[] = [];
    
    constructor() {
        this.reset()
    }

    reset() {
        const cards = this.makeDeck();
        this.deck = shuffleArray(cards);
    }

    deal(num: number): Card[] {
        const dealtCards: Card[] = [];

        for (let i = 0; i < num; i++) {
            const card = this.deck.pop();
            dealtCards.push(card!)
        }

        return dealtCards
    }

    private makeDeck() {
    const cards: Card[] = [];
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

export default Deck