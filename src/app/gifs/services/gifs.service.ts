import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchResponse } from '../interface/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _taghistory: string[]= [];
  private apikey: string='nHnbZm0NKuxfBPDH0zr3P2M8inn8Jah4';
  private urlapi: string='https://api.giphy.com/v1/gifs';

  constructor(private http:HttpClient) { }

  get taghistory() {
    return [...this._taghistory];
  }



  private ordertag(tag:string):void{
    tag=tag.toLowerCase();
    if(this._taghistory.includes(tag)){
      this._taghistory=this._taghistory.filter(t=>t!==tag);
    }

    this._taghistory.unshift(tag);
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
      console.log(resp.data);
    })

  }

}
