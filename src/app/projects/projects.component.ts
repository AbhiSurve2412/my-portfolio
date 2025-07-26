import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  standalone: true,
  imports: [MatExpansionModule],
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {}