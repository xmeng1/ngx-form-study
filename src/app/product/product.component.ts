import { Component, OnInit } from '@angular/core';
import {Model} from './model';
import {ProductFormGroup} from './product-form-group';
import {Product} from './product';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  model: Model = new Model();
  form: ProductFormGroup = new ProductFormGroup();

  newProduct: Product = new Product();

  formSubmitted = false;

  constructor() { }

  ngOnInit() {
  }


  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }
  getProducts(): Product[] {
    return this.model.getProducts();
  }

  get jsonProduct() {
    return JSON.stringify(this.newProduct);
  }
  addProduct(p: Product) {
    console.log('New Product: ' + this.jsonProduct);
  }

  submitForm(form: NgForm) {
    this.formSubmitted = true;
    if (form.valid) {
      this.addProduct(this.newProduct);
      this.newProduct = new Product();
      form.reset();
      this.formSubmitted = false;
    }
  }

}
