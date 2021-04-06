import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-headercategorias',
  templateUrl: './headercategorias.component.html',
  styleUrls: ['./headercategorias.component.scss'],
})
export class HeadercategoriasComponent implements OnInit {

  @Input() titulo2: string;

  constructor() { }

  ngOnInit() {}

}
