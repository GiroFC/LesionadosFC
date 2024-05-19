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
    this.timesInOrder = this.timesService.getTeamsByPoints();
  }

}
