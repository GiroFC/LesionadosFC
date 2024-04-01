import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NovoJogadorPage } from './novo-jogador.page';

describe('NovoJogadorPage', () => {
  let component: NovoJogadorPage;
  let fixture: ComponentFixture<NovoJogadorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NovoJogadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
