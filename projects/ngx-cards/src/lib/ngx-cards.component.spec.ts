import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCardsComponent } from './ngx-cards.component';

describe('NgxCardsComponent', () => {
  let component: NgxCardsComponent;
  let fixture: ComponentFixture<NgxCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
