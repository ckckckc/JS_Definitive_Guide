var enumeration = require('./enumeration.js');

function Card(suit, rank) {
  this.suit = suit;
  this.rank = rank;
}

Card.Suit = enumeration({
  Clubs: 1, Diamonds: 2, Hearts: 3, Spades: 4
});

Card.Rank = enumeration({
  Two: 2, Three: 3, Four: 4, Five: 5, Six: 6,
  Seven: 7, Eight: 8, Nine: 9, Ten: 10,
  Jack: 11, Queen: 12, King: 13, Ace: 14
});

Card.orderByRank = function(a, b) {
  return a.compareTo(b);
};

// 橋牌的排列卡片規則
Card.orderBySuit = function(a, b) {
  if (a.suit < b.suit) return -1;
  if (a.suit > b.suit) return 1;
  if (a.rank < b.rank) return -1;
  if (a.rank > b.rank) return 1;
  return 0;
};

Card.prototype.toString = function() {
  return this.rank.toString();
};

Card.prototype.compareTo = function(that) {
  if (this.rank > that.rank) return -1;
  if (this.rank > that.rank) return 1;
  return 0;
};

module.exports = Card;