import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subircontenido',
  templateUrl: './subircontenido.page.html',
  styleUrls: ['./subircontenido.page.scss'],
})
export class SubircontenidoPage implements OnInit {

  items=[
    {
      img:'assets/img/textosu.png',
      titulo:'Agrega un texto',
      texto:'I guess i´ve been working so hard, I forgort what it´s like to be hardly working.'
    },
    {
      img:'assets/img/audiosu.png',
      titulo:'Agrega un audio',
      texto:'I guess i´ve been working so hard, I forgort what it´s like to be hardly working.'
    },
    {
      img:'assets/img/videosu.png',
      titulo:'Agrega un video',
      texto:'I guess i´ve been working so hard, I forgort what it´s like to be hardly working.'
    },
    {
      img:'assets/img/imagensu.png',
      titulo:'Agrega una imagen',
      texto:'I guess i´ve been working so hard, I forgort what it´s like to be hardly working.'
    },
  ];


  constructor() { }

  ngOnInit() {
  }

}
