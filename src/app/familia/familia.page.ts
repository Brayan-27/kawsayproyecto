import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-familia',
  templateUrl: './familia.page.html',
  styleUrls: ['./familia.page.scss'],
})
export class FamiliaPage implements OnInit {

  publicadosfamilia=[    
    {
      img:'assets/img/boda-1.png',
      titulo:'Titulo del Archivo',
      creado:'creado 21-1-2009',
      actualizado:'Actualizado 23-1-2021',
      descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna'
   
    },    
    {
      img:'assets/img/shutterstock_193994486.png',
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
   
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
