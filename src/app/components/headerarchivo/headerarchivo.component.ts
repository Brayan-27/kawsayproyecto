import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-headerarchivo',
  templateUrl: './headerarchivo.component.html',
  styleUrls: ['./headerarchivo.component.scss'],
})
export class HeaderarchivoComponent implements OnInit {
  @Input() nombre: string;
  @Input() sublugar:string;
  @Input() avatar:string;
  constructor() { }

  ngOnInit() {}

}
