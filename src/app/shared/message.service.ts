import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  baseUrl = `${environment.api}/message`;

  constructor(private http: HttpClient) { }

  create(message: Message): Promise<Message> {
    return this.http.post<Message>(this.baseUrl, message).toPromise();
  }
}


export interface Message {
  id?: number;
  message: string;
}
