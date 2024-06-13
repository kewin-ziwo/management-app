import { Component, OnInit, forwardRef, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'lib-text-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true,
    },
  ],
})
export class TextInputComponent implements OnInit {
  label = input<string>('label');
  id = input<string>('');
  type = input<string>('text');
  control = input<FormControl>(new FormControl());

  errorMessages: Record<string, string> = {
    required: 'The field is required',
    email: 'Invalid email',
  };

  ngOnInit(): void {}
}
