import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../../../services/product/product-service.service';
@Component({
  selector: 'app-product-detailes',
  templateUrl: './product-detailes.component.html',
  styleUrls: ['./product-detailes.component.scss']
})
export class ProductDetailesComponent implements OnInit {
  product:any
  productID :any;
  inputValue = ""
  constructor(private router : ActivatedRoute,private productservice:ProductServiceService) {
    this.productID = this.router.snapshot.params['id'];
    console.log(this.productID);

   }
  ngOnInit(): void {
    this.productservice.getProductById(this.productID).subscribe((res)=>{
      console.log(res);

      this.product = res
      console.log(this.product);
    })
  }
  changeStatusToAccepted(){
    console.log("accepted button clicked");
    this.productservice.updateProductStatusToAccepted(this.productID )
  }
  onChangeValue(event:Event){
    const target = event.target as HTMLInputElement;
     this.inputValue = target.value
    console.log(this.inputValue);
  }
  sendPendingMessage(){
    console.log(this.inputValue);
    this.productservice.sendPendingMessage(this.productID,this.inputValue)
  }
}
