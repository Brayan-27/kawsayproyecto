import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {
  avatars=[
    {
      img:'assets/img/family-banner-1.png',
      categoria:'Familia'
    },
    {
      img:'assets/img/fiesta.png',
      categoria:'Fiesta'
    },
    {
      img:'assets/img/pareja.png',
      categoria:'Pareja'
    },
    {
      img:'assets/img/amor.png',
      categoria:'Amor'
    },
    {
      img:'assets/img/amigos.png',
      categoria:'Amigos'
    },
    {
      img:'assets/img/reuniones.png',
      categoria:'Reuniones'
    },
    {
      img:'assets/img/viajes.png',
      categoria:'Viajes'
    },
    {
      img:'assets/img/ninos.png',
      categoria:'Niños'
    },
    {
      img:'assets/img/bodas.png',
      categoria:'Bodas'
    },
    {
      img:'assets/img/consejos-practicar-deportes-riesgo-1.png',
      categoria:'Paracaidas'
    },
    {
      img:'assets/img/activo-27.png',
      categoria:'Ciclismo'
    },
    {
      img:'assets/img/Enmascarar grupo 14.png',
      categoria:'Box'
    },
    {
      img:'assets/img/Running-Pons-Trainingok-4.png',
      categoria:'Trotar'
    }, 
    {
      img:'assets/img/tenis.png',
      categoria:'Tenis'
    }, 
    {
      img:'assets/img/Enmascarar grupo 15.png',
      categoria:'Natación'
    }
    , 
    {
      img:'assets/img/Enmascarar grupo 16.png',
      categoria:'Futbol'
    }
    , 
    {
      img:'assets/img/img-3.png',
      categoria:'Golf'
    }
    , 
    {
      img:'assets/img/lab-7.png',
      categoria:'Basketbol'
    }

    
    
  ];
  constructor() { }

  ngOnInit() {
  }

}
