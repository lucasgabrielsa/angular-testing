import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.css']
})
export class CadastroFormComponent implements OnInit {

  contactForm: FormGroup;
  contact: any = {
    name: '',
    email: '',
    text: ''
  }
  submitted = false;

  constructor() {
    this.createForm();
   }

  ngOnInit(): void {
  }

  createForm(): void {
    this.contactForm = new FormGroup({
      'name': new FormControl(this.contact.name, [
        Validators.required,
        Validators.minLength(4)
      ]),
      'email': new FormControl(this.contact.email, [
        Validators.required,
        Validators.email
      ]),
      'text': new FormControl(this.contact.text, [
        Validators.required
      ])
    });

    console.log('this.contactForm', this.contactForm)
  }

  onSubmit() {
    this.submitted = true;
  }



}
