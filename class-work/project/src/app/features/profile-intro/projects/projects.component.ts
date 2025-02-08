import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { PROJECTS } from "../../../../assets/project";
import { ProjectCardComponent } from '../../../shared/all projects/project-card/project-card.component';

@Component({
  selector: 'app-projects',
  standalone:true,
  imports: [
    ProjectCardComponent,
    NgFor
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = PROJECTS;
}