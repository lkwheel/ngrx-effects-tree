import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailComponent } from './components/posts/post-detail/post-detail.component';
import { PostListComponent } from './components/posts/post-list/post-list.component';

const routes: Routes = [
  { path: 'posts', component: PostListComponent, data: { animation: 'posts' } },
  { path: 'posts/:id', component: PostDetailComponent, data: { animation: 'posts' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class PostRoutingModule { }
