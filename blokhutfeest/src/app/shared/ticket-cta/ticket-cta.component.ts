import { Component } from '@angular/core';

@Component({
  selector: 'app-ticket-cta',
  standalone: true,
  template: `
    <a class="ticket-cta" href="#tickets" aria-label="Buy tickets">Buy Tickets</a>
  `,
  styleUrls: ['./ticket-cta.component.scss'],
})
export class TicketCtaComponent {}
