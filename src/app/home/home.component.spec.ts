import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { MessageService } from '../shared/message.service';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockMessageService;

  beforeEach(async(() => {
    mockMessageService = jasmine.createSpyObj(['create']);

    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [ReactiveFormsModule, RouterTestingModule],
      providers: [
        { provide: MessageService, useValue: mockMessageService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an input page', () => {
    expect(fixture.debugElement.query(By.css('input#messageInput'))).toBeTruthy();
  });

  it('should have a submit button', () => {
    expect(fixture.debugElement.query(By.css('button#submit'))).toBeTruthy();
  });

  it('should save the message when submit is clicked', () => {
    const navigateSpy = spyOn((component as any).router, 'navigate');
    component.messageForm.message = 'Hi';
    fixture.debugElement.query(By.css('button#submit')).triggerEventHandler('click', null);
    expect(mockMessageService.create).toHaveBeenCalledWith('Hi');
    expect(navigateSpy).toHaveBeenCalledWith(['/success']);
  });
});
