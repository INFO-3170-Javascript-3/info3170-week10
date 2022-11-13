import { Injectable, NgZone, Inject } from '@angular/core';
import { User } from '../../shared/models/user';
import { LocalStorageService } from './storage.service';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { ShoppingCart } from '../models/shopping-cart';
import { Product } from '../models/product';
import { CartItem } from '../models/cart-item';

const getObservableProduct = (collection: AngularFirestoreCollection<Product>) => {
  const subject = new BehaviorSubject<Product[]>([]);
  collection.valueChanges({idField: 'id'}).subscribe((val: Product[]) => {
   subject.next(val);
  });
  return subject
};

const getObservableCart = (collection: AngularFirestoreCollection<ShoppingCart>) => {
  const subject = new BehaviorSubject<ShoppingCart[]>([]);
  collection.valueChanges({idField: 'id'}).subscribe((val: ShoppingCart[]) => {
   subject.next(val);
  });
  return subject
};

@Injectable({
  providedIn: 'root'
})
export class DbConnectionService {

  constructor(
    private db: AngularFireDatabase,
    private store: AngularFirestore,
    private cartsRef: AngularFireList<any>,
    private cartRef: AngularFireObject<any>
  ) { }

  public products = getObservableProduct(this.store.collection('products')) as Observable<Product[]>;
  public shoppingCart = getObservableCart(this.store.collection('shoppingCart')) as Observable<ShoppingCart[]>;

  addCart(cart:ShoppingCart) {
    this.cartsRef.push(
    {
      items: [
        {
          productId: 1,
          quantity: 0
        }
      ],
      grossTotal: number,
      itemsTotal: number,
    }

}
