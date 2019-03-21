import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  create(message: Message): any {

  }
}


export interface Message {
  id?: number;
  message: string;
}
