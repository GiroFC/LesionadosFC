import { TestBed } from '@angular/core/testing';
import { Times } from './times.service';

describe('TimesService', () => {
    let service: Times;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(Times);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});