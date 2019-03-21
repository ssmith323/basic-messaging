import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  create(message: any): any {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
