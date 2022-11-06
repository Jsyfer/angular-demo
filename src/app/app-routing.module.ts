import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GoodsListComponent } from './goods/goods-list/goods-list.component';
import { SurveyDetailComponent } from './survey/survey-detail/survey-detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'goods', component: GoodsListComponent },
  { path: 'cart', component: HomeComponent },
  { path: 'survey', component: SurveyDetailComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
