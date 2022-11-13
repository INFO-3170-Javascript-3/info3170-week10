import { Injectable, EventEmitter, Output } from '@angular/core';
import { DbConnectionService } from './db-connection.service';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  
  private _products:Observable<Product[]>;

  constructor(
    private _dbConnection: DbConnectionService
  ) {
    this._products = this._dbConnection.products; 
  }

  @Output() event = new EventEmitter();

  getProducts() {
    return this._products;
  }
}
