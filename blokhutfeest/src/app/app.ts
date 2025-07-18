import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { LineupComponent } from './components/lineup/lineup.component';
import { HighlightsComponent } from './components/highlights/highlights.component';
import { FaqComponent } from './components/faq/faq.component';
import { MapComponent } from './components/map/map.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    HeroComponent,
    LineupComponent,
    HighlightsComponent,
    FaqComponent,
    MapComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
