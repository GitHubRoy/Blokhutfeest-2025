import { Injectable, signal, computed, effect } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface FaqItem {
  question: string;
  answer: string;
}

@Injectable({ providedIn: 'root' })
export class FaqService {
  private readonly faqSig = signal<FaqItem[]>([]);
  readonly faqs = computed(() => this.faqSig());

  constructor(private http: HttpClient) {
    effect(() => {
      this.http
        .get<FaqItem[]>('assets/data/faq.json')
        .subscribe((res) => this.faqSig.set(res));
    });
  }
}
