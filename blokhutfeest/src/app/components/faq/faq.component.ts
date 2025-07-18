import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FaqService } from '../../core/services/faq.service';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [NgFor],
  template: `
    <section class="faq">
      <h2>FAQ</h2>
      <details *ngFor="let f of faq.faqs()">
        <summary>{{ f.question }}</summary>
        <p>{{ f.answer }}</p>
      </details>
    </section>
  `,
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent {
  constructor(public faq: FaqService) {}
}
