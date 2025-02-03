import { Component, Input  } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-team-card',
  imports: [CommonModule],
  templateUrl: './team-card.component.html',
  styleUrl: './team-card.component.scss'
})
export class TeamCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() source: string = '';
  @Input() alt: string = '';
}
