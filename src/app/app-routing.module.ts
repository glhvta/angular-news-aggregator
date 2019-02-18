import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ArticlePreviewComponent } from './pages/article-preview/article-preview.component';
import { EditComponent } from './pages/edit/edit.component';
import { CreateArticleComponent } from './pages/create-article/create-article.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'article-details', component: ArticlePreviewComponent },
  { path: 'create-article', component: CreateArticleComponent },
  { path: 'edit-article', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
