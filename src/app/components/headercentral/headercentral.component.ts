import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-headercentral',
  templateUrl: './headercentral.component.html',
  styleUrls: ['./headercentral.component.scss'],
})
export class HeadercentralComponent implements OnInit {

  @Input() nombre: string;
  @Input() sublugar:string;
  @Input() avatar:string;
  constructor() { }

  ngOnInit() {}

}
