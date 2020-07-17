import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-aspirantes',
  templateUrl: './lista-aspirantes.page.html',
  styleUrls: ['./lista-aspirantes.page.scss'],
})
export class ListaAspirantesPage implements OnInit {

  aspirantes : any[] = [
  {
    nombre : "juan",
    estado : "pendiente"
  },
  {
    nombre : "Pedro",
    estado : "pendiente"
  },
  {
    nombre : "Maria",
    estado : "Final"
  },
  {
    nombre : "Alissa",
    estado : "pendiente"
  },
  {
    nombre : "juan",
    estado : "pendiente"
  },
  {
    nombre : "Pedro",
    estado : "pendiente"
  },
  {
    nombre : "Maria",
    estado : "Final"
  },
  {
    nombre : "Alissa",
    estado : "pendiente"
  },
  {
    nombre : "juan",
    estado : "pendiente"
  },
  {
    nombre : "Pedro",
    estado : "pendiente"
  },
  {
    nombre : "Maria",
    estado : "Final"
  },
  {
    nombre : "Alissa",
    estado : "pendiente"
  }
  ]

  constructor() { }

  ngOnInit() {
  }

}
