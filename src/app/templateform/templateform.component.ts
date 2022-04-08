import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  constructor() { }
  
  user:any={};

  afterSubmit()
  {
    alert(JSON.stringify(this.user));
  }

  ngOnInit(): void {
  }

}
