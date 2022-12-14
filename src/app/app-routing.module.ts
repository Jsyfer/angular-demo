import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GoodsViewComponent } from './goods/goods-view/goods-view.component';
import { CartViewComponent } from './cart/cart-view/cart-view.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'goods', component: GoodsViewComponent },
  { path: 'cart', component: CartViewComponent },
  { path: 'survey', loadChildren: () => import('./survey/survey.module').then(m => m.SurveyModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
