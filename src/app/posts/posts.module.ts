import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './components/posts/posts.component';
import { StoreModule } from '@ngrx/store';
import { postsReducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from './store/effects';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeModule } from 'primeng/tree';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import { PostRoutingModule } from './post-routing.module';
import { PostDetailComponent } from './components/posts/post-detail/post-detail.component';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('posts', postsReducers),
    EffectsModule.forFeature([PostsEffects]),
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    TreeModule,
    PanelModule,
    ToastModule,
    ButtonModule,
    MenuModule,
    InputSwitchModule,
    PostRoutingModule,
  ],
  declarations: [
    PostsComponent,
    PostDetailComponent,
  ],
  exports: [
    PostsComponent,
  ]
})
export class PostsModule { }
