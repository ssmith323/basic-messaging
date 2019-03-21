import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { environment } from '../../environments/environment';
import { Message, MessageService } from './message.service';

describe('MessageService', () => {
  let httpTestingController: HttpTestingController;
  let service: MessageService;
  const url = environment.api + '/message';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(MessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('create', () => {
    it('should an message object', () => {
      service.create({ message: 'Hello' } as Message)
        .then(response => {
          expect(response).toEqual({ message: 'Hello', id: 2 } as Message);
        });
      const req = httpTestingController.expectOne(url);
      expect(req.request.method).toBe('POST');
      req.flush({ message: 'Hello', id: 2 } as Message);
      httpTestingController.verify();
    });
  });
});
