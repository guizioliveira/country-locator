function sellTickets(peopleInLine) {
  let cash = [];
  const ticketCost = 25;

  for (let index = 0; index < peopleInLine.length; index++) {
    if (peopleInLine[index] > ticketCost) {
      let change = peopleInLine[index] - ticketCost;
      cash = cash.sort((a, b) => b - a);

      for (let j = 0; j < cash.length; j++) {
        const currentChange = change - cash[j];
        if (currentChange < 0) {
          continue;
        }
        change = currentChange;
        cash.splice(j, 1);
        if (change == 0) {
          break;
        }
      }
      if (change != 0) {
        return "NO";
      }
    }
    cash.push(peopleInLine[index]);
  }

  return "YES";
}

module.exports = sellTickets;
