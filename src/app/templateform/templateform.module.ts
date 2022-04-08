import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateformRoutingModule } from './templateform-routing.module';
import { TemplateformComponent } from './templateform.component';


@NgModule({
  declarations: [
    TemplateformComponent
  ],
  imports: [
    CommonModule,
    TemplateformRoutingModule,FormsModule
  ]
})
export class TemplateformModule { }
