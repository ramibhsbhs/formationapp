import { Component, Input } from '@angular/core';

type InputType = 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search';

@Component({
  selector: 'Input',
  template: `
    <input
      [type]="type"
      [attr.formControlName]="formControlName"
      [placeholder]="placeholder"
      class="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    />
  `
})
export class InputComponent {
  @Input() type: InputType = 'text';
  @Input() placeholder: string = '';
  @Input() formControlName!: string;
}
