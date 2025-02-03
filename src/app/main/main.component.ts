import { Component } from '@angular/core';
import { TeamCardComponent } from '../team-card/team-card.component';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-main',
  imports: [TeamCardComponent, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  cardData = [
    { 
      title: 'Creatures', 
      source: 'Motionless_in_white_creatures.jpg', 
      alt: 'Creatures album cover' 
    },
    { 
      title: 'Infamous', 
      source: 'Motionless_in_white_infamous.jpg', 
      alt: 'Infamous album cover' 
    },
    { 
      title: 'Reincarnate', 
      source: 'Motionless_in_white_reincarnate.jpg', 
      alt: 'Reincarnate album cover' 
    },
    { 
      title: 'Graveyard Shift', 
      source: 'GraveyardShift.jpg', 
      alt: 'Graveyard Shift album cover' 
    },
    { 
      title: 'Disguise', 
      source: 'DisguiseMIWcover.jpg', 
      alt: 'Disguise album cover' 
    },
    { 
      title: 'Scoring the End of the World', 
      source: 'MIWScoring.jpg', 
      alt: 'Scoring the End of the World album cover' 
    }
  ];
  
  
}
