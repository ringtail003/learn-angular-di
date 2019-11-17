import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GreetService {

  constructor() { }

  greet(name: string) {
    return `Hello ${name}!`;
  }
}
