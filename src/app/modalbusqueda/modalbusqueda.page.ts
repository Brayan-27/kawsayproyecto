import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modalbusqueda',
  templateUrl: './modalbusqueda.page.html',
  styleUrls: ['./modalbusqueda.page.scss'],
})
export class ModalbusquedaPage implements OnInit {

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
      img:'assets/img/amigos.png',
      categoria:'Reuniones'
    }
    
    
  ];

  constructor(private modalCtrl: ModalController) { }
  newStyle = true;
  ngOnInit() {
    //this.cambio();
  }
  /**
   *  cambio(){
    for(let i=0; i < this.avatars.length; i++){
      if ( i % 2 == 0) {
        this.newStyle=true;
      } else {
        this.newStyle=false;
      }      
    }

  }
   */
 


  salirSinArgumentos(){
    this.modalCtrl.dismiss();
  }

}
