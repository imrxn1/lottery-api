const Ticket = require("../model/ticket");

class Tickets {
  constructor() {
    this.tickets = [];
  }

  create(username, price) {
    const ticket = new Ticket(username, price);
    this.tickets.push(ticket);
    return ticket;
  }

  bulkCreate(username, price, quantity) {
    const result = [];
    for (let i = 0; i < quantity; i++) {
      const ticket = new Ticket(username, price);
      this.tickets.push(ticket)
      result.push(ticket);
    }
    return result;
  }

  find() {
    return this.tickets;
  }

  findByID(ticketId) {
    const ticket = this.tickets.find((ticket) => ticket.id === ticketId);
    return ticket;
  }

  findByUsername(username) {
    const ticket = this.tickets.find((ticket) => ticket.username === username);
    return ticket;
  }

  updatebyId(ticketId, ticketBody) {
    const ticket = this.findByID(ticketId);
    ticket.username = ticketBody.username ?? ticket.username;
    ticket.modifiedAt = new Date();
    return ticket;
  }

  updatebyUsername(username, ticketBody) {
    const ticket = this.findByUsername(username);
    ticket.username = ticketBody.username ?? ticket.username;
    ticket.modifiedAt = new Date();
    return ticket;
  }

  delete(ticketId) {
    const index = this.tickets.findIndex((ticket) => ticket.id === ticketId);
    if (index !== -1) {
      this.tickets.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }

  draw(winnerCount) {
    let winnerIndexes = [];
    let index = 0;
    while (index < winnerCount) {
      let winnerIndex = Math.floor(Math.random() * this.tickets.length);
      if (!winnerIndexes.includes(winnerIndex)) {
        winnerIndexes[index] = winnerIndex;
        index++;
        continue;
      }
    }

    const winners = winnerIndexes.map((index) => this.tickets[index]);
    return winners;
  }
}

const db = new Tickets();

module.exports = db;
