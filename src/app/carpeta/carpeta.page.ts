import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carpeta',
  templateUrl: './carpeta.page.html',
  styleUrls: ['./carpeta.page.scss'],
})
export class CarpetaPage implements OnInit {

  items=[
    {
      img:'assets/img/boda-2.png',
      titulo:'La importancia de la familia',
      creado:'creado 21-1-2009'
    },
    {
      img:'assets/img/familia unida.png',
      titulo:'Familia Unida',
      creado:'creado 21-1-2009'
    },
    {
      img:'assets/img/audio1.png',
      titulo:'Audio',
      creado:'creado 21-1-2009'
    },
    {
      img:'assets/img/texto.png',
      titulo:'Texto',
      creado:'creado 21-1-2009'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
