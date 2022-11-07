import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GoodsViewComponent } from './goods/goods-view/goods-view.component';
import { CartViewComponent } from './cart/cart-view/cart-view.component';
import { SurveyViewComponent } from './survey/survey-view/survey-view.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'goods', component: GoodsViewComponent },
  { path: 'cart', component: CartViewComponent },
  { path: 'survey', component: SurveyViewComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
