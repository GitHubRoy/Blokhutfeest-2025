import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-artist-card',
  standalone: true,
  template: `
    <div class="artist-card">
      <img [src]="artist.image" [alt]="artist.name" loading="lazy" />
      <h3>{{ artist.name }}</h3>
    </div>
  `,
  styleUrls: ['./artist-card.component.scss'],
})
export class ArtistCardComponent {
  @Input() artist!: { name: string; image: string };
}
