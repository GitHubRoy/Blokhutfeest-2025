import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { LineupService } from '../../core/services/lineup.service';
import { ArtistCardComponent } from '../../shared/artist-card/artist-card.component';

@Component({
  selector: 'app-lineup',
  standalone: true,
  imports: [NgFor, ArtistCardComponent],
  template: `
    <section class="lineup">
      <h2>Line-up</h2>
      <div class="artists">
        <app-artist-card *ngFor="let artist of lineup.artists()" [artist]="artist"></app-artist-card>
      </div>
    </section>
  `,
  styleUrls: ['./lineup.component.scss'],
})
export class LineupComponent {
  constructor(public lineup: LineupService) {}
}
