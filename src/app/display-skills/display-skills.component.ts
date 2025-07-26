import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-display-skills',
  standalone: true,
  imports: [MatIconModule, MatDividerModule],
  templateUrl: './display-skills.component.html',
  styleUrl: './display-skills.component.scss'
})
export class DisplaySkillsComponent {
  @Input({ required: true }) skillType!: string;
  @Input() skills: { icon: string; title: string }[] = [];
}