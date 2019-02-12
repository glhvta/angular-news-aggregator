import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

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
import { ArticlesSelectorFormComponent } from './components/articles-selector-form/articles-selector-form.component';

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
    ArticlesSelectorFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
