const shortid = require("shortid");

class Ticket {
  constructor(username, price) {
    this.id = shortid();
    this.username = username;
    this.price = price;
    this.createdAt = new Date();
    this.modifiedAt = new Date();
  }
}

module.exports = Ticket;
