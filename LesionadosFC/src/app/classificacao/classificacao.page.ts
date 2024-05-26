import { Component, OnInit } from '@angular/core';
import { ITime } from 'src/models/time.model';
import { Times } from '../services/times.service';

@Component({
  selector: 'app-classificacao',
  templateUrl: './classificacao.page.html',
  styleUrls: ['./classificacao.page.scss'],
})
export class ClassificacaoPage implements OnInit {
  public timesInOrder : ITime [] = [];
  public times : ITime [] = [];


  constructor(
    private timesService: Times
  ) { }


  ngOnInit() {
    this.times = this.timesService.getAll();
    this.timesInOrder = this.timesService.getTimesOrdenadosPorPontos();

    console.log(this.timesInOrder)
  }

  public addWin(id: number){
    this.timesService.addWin(id)
    this.timesInOrder = this.timesService.getTimesOrdenadosPorPontos();
  }

  public addDefeat(id: number){
    this.timesService.addDefeat(id)
    this.timesInOrder = this.timesService.getTimesOrdenadosPorPontos();
  }

  public addTie(id: number){
    this.timesService.addTie(id)
    this.timesInOrder = this.timesService.getTimesOrdenadosPorPontos();
  }
}
