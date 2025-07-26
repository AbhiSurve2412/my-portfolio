import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { DisplaySkillsComponent } from '../display-skills/display-skills.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    MatIconModule,
    MatDividerModule,
    DisplaySkillsComponent
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

}
