import {FormControl} from '@angular/forms';

export class ProductFormControl extends FormControl {
  label: string;
  modelProperty: string;

  constructor(label: string, property: string, value: any, validator: any) {
    super(value, validator);
    this.label = label;
    this.modelProperty = property;
  }

  getValidationMessages() {
    const messages: string[] = [];
    if (this.errors) {
      for (const errorName in this.errors) {
        switch (errorName) {
          case 'required':
            messages.push(`You must enter a ${this.label}`);
            break;
          case 'minlength':
            messages.push(`A ${this.label} must be at least
${this.errors['minlength'].requiredLength}
characters`);
            break;
          case 'maxlength':
            messages.push(`A ${this.label} must be no more than
${this.errors['maxlength'].requiredLength}
characters`);
            break;
          case 'pattern':
            messages.push(`The ${this.label} contains
illegal characters`);
            break;
        }
      }
    }
    return messages;
  }
}
