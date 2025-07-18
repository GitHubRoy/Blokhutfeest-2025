import { Injectable, signal, computed, effect } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Artist {
  name: string;
  image: string;
  socials?: {
    soundcloud?: string;
    youtube?: string;
    instagram?: string;
  };
}

@Injectable({ providedIn: 'root' })
export class LineupService {
  private readonly artistsSig = signal<Artist[]>([]);
  readonly artists = computed(() => this.artistsSig());

  constructor(private http: HttpClient) {
    effect(() => {
      this.http
        .get<Artist[]>('assets/data/lineup.json')
        .subscribe((res) => this.artistsSig.set(res));
    });
  }
}
