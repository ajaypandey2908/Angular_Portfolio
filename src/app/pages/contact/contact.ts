import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [SelectModule, InputGroupModule, InputGroupAddonModule, InputTextModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {

  formData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    const { name, email, message } = this.formData;

    if (name && email && message) {
      alert(`Thank you, ${name}! Your message has been sent.`);
      this.formData = { name: '', email: '', message: '' };
    } else {
      alert("Please fill out all fields.");
    }
  }
}
