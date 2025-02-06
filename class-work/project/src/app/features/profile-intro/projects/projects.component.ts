import { CommonModule } from '@angular/common'; // Add this to use common Angular directives
import { Component } from '@angular/core';
import { ProjectCardComponent } from '../../../shared/all projects/project-card/project-card.component'; // Ensure this path is correct

@Component({
  selector: 'app-projects',
  standalone: true,  // Ensure this is a standalone component
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [CommonModule, ProjectCardComponent] // Add CommonModule if needed
})
export class ProjectsComponent {}
