import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
contact:any;
error='error ';
  constructor() { }

  ngOnInit(): void {
  }
  contactForm=new FormGroup({
   name: new FormControl('',[Validators.required, Validators.minLength(4),Validators.pattern('^[A-Za-z]\\w{5, 29}$')]),
   email:new FormControl("",[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
    address:new FormControl('',[Validators.required]),
    text:new FormControl('',[Validators.required]),
    textarea:new FormControl('Enter query',[Validators.required])
  });
  submit(){
    console.log("Form Submitted Successfully!!");
   
   

  console.log(this.contactForm.value);
  }
  // get emails(){ return this.contactForm.get('email');}
  get getControl(){
    return this.contactForm.controls;
  }
}
