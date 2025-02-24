import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { gif } from '../../interface/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  standalone: false,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'

})
export class HomePageComponent {

  constructor(private gifservice: GifsService) { }

  get gifs() :gif[]{
    return this.gifservice.gifslist;
  }

}
