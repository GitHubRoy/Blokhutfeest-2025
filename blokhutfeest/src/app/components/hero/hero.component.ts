import { Component } from '@angular/core';
import { TicketCtaComponent } from '../../shared/ticket-cta/ticket-cta.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TicketCtaComponent],
  template: `
    <section class="hero">
      <h1>Blokhutfeest 2025</h1>
      <p>Join us deep in the jungle!</p>
      <app-ticket-cta></app-ticket-cta>
    </section>
  `,
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {}
