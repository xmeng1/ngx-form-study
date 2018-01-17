import {FormGroup, Validators} from '@angular/forms';
import {ProductFormControl} from './product-form-control';

export class ProductFormGroup extends FormGroup {
  constructor() {
    super({
      name: new ProductFormControl('Name', 'name', '', Validators.required),
      category: new ProductFormControl('Category', 'category', '',
        Validators.compose([Validators.required,
          Validators.pattern('^[A-Za-z ]+$'),
          Validators.minLength(3),
          Validators.maxLength(10)])),
      price: new ProductFormControl('Price', 'price', '',
        Validators.compose([Validators.required,
          Validators.pattern('^[0-9\.]+$')]))
    });
  }
  get productControls(): ProductFormControl[] {
    return Object.keys(this.controls)
      .map(k => this.controls[k] as ProductFormControl);
  }

  getFormValidationMessages(form: any): string[] {
    const messages: string[] = [];
    this.productControls.forEach(c => c.getValidationMessages()
      .forEach(m => messages.push(m)));
    return messages;
  }
}
