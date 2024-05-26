import { ITime } from 'src/models/time.model';
import { Times } from './../services/times.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-times',
  templateUrl: './times.page.html',
  styleUrls: ['./times.page.scss'],
})
export class TimesPage implements OnInit {
  public times: ITime[] = [];

  constructor(
    private router: Router,
    private timesServ: Times
  ) { }

  ngOnInit() {
    this.listarTimes();
  }

  public listarTimes() {
    this.times = this.timesServ.getAll();
    console.log(this.times);
  }

  public limparTimes(){
    this.timesServ.limpar()
  }

  public corPrioridade(prioridade: string) {
    return prioridade === 'alto'
      ? 'danger'
      : prioridade === 'baixo'
      ? 'success'
      : 'warning';
  }

}
