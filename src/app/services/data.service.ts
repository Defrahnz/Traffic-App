import { Injectable } from '@angular/core';
import { puntosCardinales } from '../models/puntosCardinales.interface';

@Injectable()
export class DataService {
  private localizaciones: puntosCardinales[]=[
    {
      idCardinal:1,
      nombre:'Norte'
    },
    {
      idCardinal:2,
      nombre:'Sur'
    },
    {
      idCardinal:3,
      nombre:'Oriente'
    },
    {
      idCardinal:4,
      nombre:'Poniente'
    },
    {
      idCardinal:5,
      nombre:'Nor-oriente'
    },
    {
      idCardinal:6,
      nombre:'Nor-poniente'
    },
    {
      idCardinal:7,
      nombre:'Sur-oriente'
    },
    {
      idCardinal:8,
      nombre:'Sur-poniente'
    }
  ]
  getPuntos(): puntosCardinales[]{
    return this.localizaciones;
  }
}
