import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
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

  readonly taglines = [
    'where syntax meets sorcery',
    'compiling fire and clean code',
    'where the digital dragons fly',
    'debugging the ancient scripts',
    'deploying legends to the cloud',
    'weaving dragons into the source code',
    'slaying bugs in the shadow of the wing',
    'forged in the heat of a thousand builds',
    'architecting systems in a sea of scales',
    'taming the legacy beast, one commit at a time',
  ];

  currentTaglineIndex = 0;
  intervalId: any;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.currentTaglineIndex = (this.currentTaglineIndex + 1) % this.taglines.length;

      this.cdr.detectChanges();
    }, 4000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  get activeTagline(): string {
    return this.taglines[this.currentTaglineIndex];
  }

  toggleProjects(): void {
    this.showProjects = !this.showProjects;
  }
}
