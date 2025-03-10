import { Component, Input } from '@angular/core';
import { gif } from '../../interface/gifs.interfaces';

@Component({
  selector: 'gif-card-list',
  standalone: false,
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {

  @Input()
  public gifs: gif[] = [];

}
