import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-headercentraldos',
  templateUrl: './headercentraldos.component.html',
  styleUrls: ['./headercentraldos.component.scss'],
})
export class HeadercentraldosComponent implements OnInit {

  @Input() nombre: string;
  @Input() sublugar1:string;
  @Input() avatar:string;

  constructor() { }

  ngOnInit() {}

}
