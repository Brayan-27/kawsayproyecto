import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalbusquedaPage } from '../modalbusqueda/modalbusqueda.page';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.page.html',
  styleUrls: ['./busqueda.page.scss'],
})
export class BusquedaPage implements OnInit {

  
  constructor(private busquedaCtrl: ModalController) { }

  ngOnInit() {
  }

  async BuscarPersonas(){
    const modal=await this.busquedaCtrl.create({
      component: ModalbusquedaPage,
      componentProps:{
        nombre:'jhonny',
      }
    });
    return await modal.present();
  }

  

}
