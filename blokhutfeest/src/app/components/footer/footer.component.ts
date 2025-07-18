import { Component } from '@angular/core';
import { TicketCtaComponent } from '../../shared/ticket-cta/ticket-cta.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TicketCtaComponent],
  template: `
    <footer class="footer">
      <app-ticket-cta></app-ticket-cta>
      <p>&copy; 2025 Blokhutfeest</p>
    </footer>
  `,
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {}
