var Card = require('./Card.js');

function Deck(){
  var cards = this.cards = [];

  Card.Suit.foreach(function(suit) {
    Card.Rank.foreach(function(rank){
      cards.push(new Card(suit, rank));
    });
  });
}

Deck.prototype.shuffle = function() {
  var deck = this.cards, len = deck.length;

  for (var i = len - 1; i > 0 ; i--) {
    var r = Math.floor(Math.random() * (i + 1)), temp;
    temp = deck[i];
    deck[i] = deck[r];
    deck[r] = temp;
  }
  return this;
};

Deck.prototype.deal = function(n) {
  if (n > this.cards.length) {
    throw 'Out of cards';
  }

  return this.cards.splice(this.cards.length -n, n);
};

var deck = (new Deck()).shuffle();
var hand = deck.deal(13).sort(Card.orderBySuit);

console.log(hand)

module.exports = Deck;