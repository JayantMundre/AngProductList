import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { createComponent } from '@angular/compiler/src/core';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {
    path:"",redirectTo:"/product",pathMatch:"full"
  },
  {
    path:"product",component:ProductComponent
  },
  {
    path:"create",component:CreateComponent
  },
  {
    path:"update",component:UpdateComponent
  },
  {
    path:"delete",component:DeleteComponent
  },
  {
    path:"**",component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
