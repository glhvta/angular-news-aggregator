import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ArticlePreviewComponent } from './pages/article-preview/article-preview.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'article-preview', component: ArticlePreviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
