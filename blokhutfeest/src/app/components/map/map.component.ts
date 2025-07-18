import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  standalone: true,
  template: `
    <section class="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.297..."
        width="100%"
        height="300"
        style="border:0;"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
  `,
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {}
