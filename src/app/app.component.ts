import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  showProjects = false;

  readonly projects = [
    { name: 'UNIT', url: 'https://unit.sdulal.dev' },
    { name: 'BEAM', url: 'https://beam.sdulal.dev' },
    { name: 'CANVAS', url: 'https://canvas.sdulal.dev' },
  ];

  readonly socialLinks = [
    { label: 'GITHUB', url: 'https://github.com/sdulal412' },
    { label: 'TWITTER', url: 'https://twitter.com/sdulal412' },
    { label: 'LINKEDIN', url: 'https://linkedin.com/in/sdulal412' },
    /* Email section */
    { label: 'EMAIL', url: 'mailto:sushildulal123@gmail.com' },
  ];

  toggleProjects(): void {
    this.showProjects = !this.showProjects;
  }
}
