import { CommonModule } from '@angular/common'; // Import for common Angular directives
import { Component } from '@angular/core';
import { AboutCardComponent } from '../../../shared/about/about-card/about-card.component'; // Adjust the path if needed

@Component({
  selector: 'app-about-me',
  standalone: true,
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'], // `
  imports: [CommonModule, AboutCardComponent] // ✅ Import `AboutCardComponent`
})
export class AboutMeComponent {}
