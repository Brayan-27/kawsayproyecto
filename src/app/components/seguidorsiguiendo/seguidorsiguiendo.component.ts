import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-seguidorsiguiendo',
  templateUrl: './seguidorsiguiendo.component.html',
  styleUrls: ['./seguidorsiguiendo.component.scss'],
})
export class SeguidorsiguiendoComponent implements OnInit {
  @Input() seguir: string;
  @Input() avatars=[];
  constructor() { }

  ngOnInit() {}

}
