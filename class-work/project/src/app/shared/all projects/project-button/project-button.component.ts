import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-button',
  standalone: true,
  imports: [],
  templateUrl: './project-button.component.html',
  styleUrl: './project-button.component.scss'
})
export class ProjectButtonComponent {
  @Input() title: string = '';
}