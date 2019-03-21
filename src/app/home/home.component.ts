import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { MessageService } from '../shared/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  messageForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private messageService: MessageService) { }

  ngOnInit() {
    this.messageForm = this.fb.group({
      message: ['']
    });
  }

  submit() {
    this.messageService.create(this.messageForm.value.message)
      .then(() => this.router.navigate(['/success']));
  }

}
