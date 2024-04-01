import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditJogadorPage } from './edit-jogador.page';

describe('EditJogadorPage', () => {
  let component: EditJogadorPage;
  let fixture: ComponentFixture<EditJogadorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditJogadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
