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
    // given
    const navigateSpy = spyOn((component as any).router, 'navigate');

    mockMessageService.create.and.returnValue(Promise.resolve(null));
    component.messageForm.setValue({ message: 'Hi' });

    // when
    fixture.debugElement.query(By.css('button#submit')).nativeElement.click();

    // then
    expect(mockMessageService.create).toHaveBeenCalledWith('Hi');
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(navigateSpy).toHaveBeenCalledWith(['/success']);
    });
  });
});
