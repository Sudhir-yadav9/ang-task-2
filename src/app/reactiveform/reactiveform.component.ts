import { Component, OnInit } from '@angular/core';


import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';


@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  submitted =false;
  constructor(private fb: FormBuilder) { }
  form = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    pno: ['', [Validators.required]],
    city: ['', [Validators.required]],
   // Pco: ['', [Validators.required]],

  });


  //submitted =false;
  //constructor(private fb: FormBuilder) { }
  //form = this.fb.group({

  //  name: ['', [Validators.required,Validators.minLength(5),Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
   // email: ['', [Validators.required,Validators.minLength(5),Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
   // phonenumber: ['', [Validators.required,Validators.minLength(5),Validators.pattern('^[0-9]+$')]],
   // city: ['', [Validators.required,Validators.minLength(5),Validators.pattern('^[a-z]+$')]],
   // Pincode: ['', [Validators.required,Validators.minLength(5),Validators.pattern('^[0-9]+$')]]
    

  //});

  ngOnInit(): void {
  }
  
  
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  afterSubmit()
  {
    this.submitted=true;
    if(this.form.invalid)
    {
      return;
    }

    alert(JSON.stringify(this.form.value));
  }


}
