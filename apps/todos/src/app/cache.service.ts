import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  private _randomNumber: number;

  constructor() { 
    this._randomNumber = Math.floor(100 * Math.random());
  }

  getRandomNumber(): number {
    return this._randomNumber;
  }

}
