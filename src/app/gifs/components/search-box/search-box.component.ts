import { GifsModule } from '../../gifs.module';
import { GifsService } from './../../services/gifs.service';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gif-search-box',
  standalone: false,
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  @ViewChild('txttaginput')
  taginput!: ElementRef<HTMLInputElement>;

  constructor(private gifservice:GifsService) { }

  searchtag(){
    const newtag=this.taginput.nativeElement.value;
    this.gifservice.searchtag(newtag);
    this.taginput.nativeElement.value='';
  }

}
