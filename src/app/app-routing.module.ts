import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecommendDetailComponent } from './recommend/recommend-detail/recommend-detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'recommend', component: RecommendDetailComponent },
  { path: 'cart', component: HomeComponent },
  { path: 'survey', component: HomeComponent },
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
