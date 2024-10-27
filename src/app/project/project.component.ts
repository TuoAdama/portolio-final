import { Component } from '@angular/core';
import {ProjectItemComponent} from "../project-item/project-item.component";
import Project from "../../models/Project";

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    ProjectItemComponent
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
}
