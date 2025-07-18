import { Component } from '@angular/core';

@Component({
  selector: 'app-highlights',
  standalone: true,
  template: `
    <section class="highlights">
      <div class="highlight">3 Stages</div>
      <div class="highlight">Outdoor Area</div>
    </section>
  `,
  styleUrls: ['./highlights.component.scss'],
})
export class HighlightsComponent {}
