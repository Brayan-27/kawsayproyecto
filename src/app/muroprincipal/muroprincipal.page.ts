import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-muroprincipal',
  templateUrl: './muroprincipal.page.html',
  styleUrls: ['./muroprincipal.page.scss'],
})
export class MuroprincipalPage implements OnInit {

  publicadosMuro=[
    {
      img:'assets/img/slides.png',
      titulo:'Titulo del Archivo',
      creado:'creado 21-1-2009',
      actualizado:'Actualizado 23-1-2021',
      descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna'
    },
    {
      img:'assets/img/chevalier_ashley_practice_DSC_-2.png',
      titulo:'Titulo del Archivo',
      creado:'creado 21-1-2009',
      actualizado:'Actualizado 23-1-2021',
      descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna'
   
    },
    {
      img:'assets/img/chevalier_ashley_practice_DSC_2847.png',
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
   
    },
    {
      img:'assets/img/150167561_4223278627700610_5542765292403335528_o.png',
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
