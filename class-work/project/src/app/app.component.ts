import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from './core/navbar/navbar.component';
import { AboutMeComponent } from './features/profile-intro/about-me/about-me.component';
import { ProfileIntroComponent } from './features/profile-intro/profile-intro.component';
import { ProjectsComponent } from './features/profile-intro/projects/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,        // ✅ Import standalone Navbar
    ProfileIntroComponent,  // ✅ Import standalone ProfileIntro
    AboutMeComponent,       // ✅ Import standalone AboutMe
    ProjectsComponent       // ✅ Import standalone Projects
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project';
}
