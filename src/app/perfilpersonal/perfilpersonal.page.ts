import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfilpersonal',
  templateUrl: './perfilpersonal.page.html',
  styleUrls: ['./perfilpersonal.page.scss'],
})
export class PerfilpersonalPage implements OnInit {

  publicadospersonales=[    
    {
      img:'assets/img/consejos-para-hacer-una-fiesta-inolvidable.png',
      titulo:'Titulo del Archivo',
      creado:'creado 21-1-2009',
      actualizado:'Actualizado 23-1-2021',
      descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna'
   
    },    
    {
      img:'assets/img/chevalier_ashley_practice_DSC_2848.png',
      titulo:'Titulo del Archivo',
      creado:'creado 21-1-2009',
      actualizado:'Actualizado 23-1-2021',
      descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna'
   
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
