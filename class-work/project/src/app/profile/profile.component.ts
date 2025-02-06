import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('desktop', style({ opacity: 1, transform: 'translateY(0)' })),
      state('mobile', style({ opacity: 0.9, transform: 'translateY(-10px)' })),
      transition('desktop <=> mobile', animate('0.3s ease-in-out'))
    ])
  ]
})
export class ProfileComponent {
  isMobile: boolean = window.innerWidth <= 768;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobile = window.innerWidth <= 768;
  }

  openResume() {
    window.open('assets/resume-example.pdf', '_blank');
  }

  navigateToContact() {
    window.location.href = './#contact';
  }

  openLink(url: string) {
    window.open(url, '_blank');
  }
}
