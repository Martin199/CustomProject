import { Component, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/products.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  fav:boolean=false;
  response:any;
  productos:Producto;

  constructor( private ProductsService: ProductsService ) { }

  ngOnInit(): void {
    this.ProductsService.getProducts()
                        .subscribe(
                          // Successful responses call the first callback.
                          data => {
                            this.response=data
                            this.productos=this.response.productos
                            console.log(this.productos)
                          },
                          // Errors will call this callback instead:
                          err => {
                            console.log(err)
                            
                          }
                        )
  }
}
