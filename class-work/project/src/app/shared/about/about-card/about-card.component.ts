import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-card',
  standalone: true,
  imports: [],
  templateUrl: './about-card.component.html',
  styleUrls: ['./about-card.component.scss'] // Fixed property name
})
export class AboutCardComponent {
  @Input() img: string = '';
  @Input() imgText: string = ''; 
  @Input() title: string = '';
  @Input() paragraph1: string = '';
  @Input() paragraph2: string = '';
}
