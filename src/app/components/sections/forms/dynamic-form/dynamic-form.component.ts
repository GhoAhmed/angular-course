import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FieldConfig } from '../../../../core/interfaces/field-config';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css',
})
export class DynamicFormComponent {
  dynamicForm!: FormGroup;

  fields: FieldConfig[] = [
    {
      name: 'username',
      label: 'Username',
      type: 'text',
      placeholder: 'Enter username',
      validators: [Validators.required],
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Enter email',
      validators: [Validators.required, Validators.email],
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      placeholder: 'Enter password',
      validators: [Validators.required, Validators.minLength(6)],
    },
    {
      name: 'gender',
      label: 'Gender',
      type: 'select',
      options: ['Male', 'Female', 'Other'],
      validators: [Validators.required],
    },
    {
      name: 'terms',
      label: 'Accept Terms',
      type: 'checkbox',
      validators: [Validators.requiredTrue],
    },
  ];

  constructor(private fb: FormBuilder) {
    this.buildForm();
  }

  buildForm() {
    const group: { [key: string]: any } = {};

    this.fields.forEach((field) => {
      group[field.name] = ['', field.validators || []];
    });

    this.dynamicForm = this.fb.group(group);
  }

  onSubmit() {
    if (this.dynamicForm.valid) {
      console.log('✅ Form Submitted:', this.dynamicForm.value);
    } else {
      console.log('❌ Invalid form');
      this.dynamicForm.markAllAsTouched();
    }
  }
}
