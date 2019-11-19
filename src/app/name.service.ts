import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NameService {
  name: string = 'my name is name service';

  constructor() { }
}
