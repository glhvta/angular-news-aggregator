import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { SourceTitleComponent } from './shared/components/headline/headline.component';
import { HomeComponent } from './pages/home/home.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { ArticleComponent } from './components/article/article.component';
import { ArticlePreviewComponent } from './pages/article-preview/article-preview.component';
import { EditComponent } from './pages/edit/edit.component';
import { ArticleEditorComponent } from './components/article-editor/article-editor.component';
import { InputComponent } from './shared/components/input/input.component';
import { ArticlesSelectorComponent } from './components/articles-selector/articles-selector.component';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { ArticleFilterPipe } from './core/pipes/article-filter.pipe';
import { HighlightSearchPipe } from './core/pipes/highlight-search.pipe';
import { CreateArticleComponent } from './pages/create-article/create-article.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    SourceTitleComponent,
    HomeComponent,
    ButtonComponent,
    ArticleComponent,
    ArticlePreviewComponent,
    EditComponent,
    ArticleEditorComponent,
    InputComponent,
    ArticlesSelectorComponent,
    ArticlesListComponent,
    ArticleFilterPipe,
    HighlightSearchPipe,
    CreateArticleComponent,
    NotFoundPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
