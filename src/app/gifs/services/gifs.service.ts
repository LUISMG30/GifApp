import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { gif, SearchResponse } from '../interface/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifslist:gif[]=[];

  private _taghistory: string[]= [];
  private apikey: string='nHnbZm0NKuxfBPDH0zr3P2M8inn8Jah4';
  private urlapi: string='https://api.giphy.com/v1/gifs';

  constructor(private http:HttpClient) { this.readLocalStorage(); }

  get taghistory() {
    return [...this._taghistory];
  }



  private ordertag(tag:string):void{
    tag=tag.toLowerCase();
    if(this._taghistory.includes(tag)){
      this._taghistory=this._taghistory.filter(t=>t!==tag);
    }

    this._taghistory.unshift(tag);
    this.saveLocalStorage();
  }

  private saveLocalStorage():void{
    localStorage.setItem('history', JSON.stringify(this._taghistory));
  }

  private readLocalStorage():void{
    if (!localStorage.getItem('history'))return;
    this._taghistory=JSON.parse(localStorage.getItem('history')!)
    if (this._taghistory.length===10)return;
    this.searchtag(this._taghistory[0]);
  }

  searchtag (tag:string):void{
    if(tag.length===0)return;
    this.ordertag(tag);

    const params= new HttpParams()
    .set('api_key',this.apikey)
    .set('q',tag)
    .set('limit','30');

    this.http.get<SearchResponse>(`${this.urlapi}/search`,{params})
    .subscribe((resp)=>{
      this.gifslist=resp.data;
      console.log(resp.data);
    })

  }

}
