const currentTicketLabel = document.querySelector('#lbl-new-ticket');
const createTicketBtn = document.querySelector('.generate-ticket');

async function getLastTicket() {

    const lastTicket = await fetch('/api/ticket/last')
    .then(res => res.json());

    console.log(lastTicket);
    currentTicketLabel.innerHTML = lastTicket;
}

async function createTicket() {
    const newTicket = await fetch('/api/ticket', {
        method: 'POST',
    }).then(res => res.json());

    currentTicketLabel.innerHTML = newTicket.number;
}

createTicketBtn.addEventListener('click', createTicket);

getLastTicket();