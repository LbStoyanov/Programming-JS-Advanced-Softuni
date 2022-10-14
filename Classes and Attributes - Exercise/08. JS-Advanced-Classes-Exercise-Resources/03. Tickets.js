function manageTickets(ticketDiscription,sortingCriteria) {

  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }
  
  let tickets = [];
  
  for (let ticketInfo of ticketDiscription) {
    let currentTicket = ticketInfo.split("|");
    let destination = currentTicket[0];
    let price = Number(currentTicket[1]);
    let status = currentTicket[2];

    let ticket = new Ticket(destination,price,status)

    tickets.push(ticket);
  }

  if (sortingCriteria === 'destination') {
    tickets.sort((a, b) => a.destination.localeCompare(b.destination));
  }else if(sortingCriteria === 'price'){
    tickets.sort((a, b) => a.price - b.price);
  }else if(sortingCriteria === 'status') {
    tickets.sort((a, b) => a.status.localeCompare(b.status));
  }

  //let result = [];

/*   for(let ticketInfo of tickets){
    result.push(`Ticket { destination: '${ticketInfo.destination}',\n price: ${ticketInfo.price},\n status: '${ticketInfo.status}' },\n`);
  } */

  return tickets;

}

console.log(
  manageTickets(
    [
      "Philadelphia|94.20|available",
      "New York City|95.99|available",
      "New York City|95.99|sold",
      "Boston|126.20|departed",
    ],
    "destination"
  )
);
