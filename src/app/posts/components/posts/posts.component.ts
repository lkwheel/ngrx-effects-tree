import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateInterface } from 'src/app/model/app-state.interface';
import { PostInterface } from '../../model/post.interface';
import * as PostsActions from '../../store/actions';
import { errorSelector, isLoadingSelector, postsSelector } from '../../store/selectors';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  isLoading$: Observable<boolean>;
  errors$: Observable<string | null>;
  posts$: Observable<PostInterface[]>;

  constructor(private store: Store<AppStateInterface>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.errors$ = this.store.pipe(select(errorSelector));
    this.posts$ = this.store.pipe(select(postsSelector));
  }

  ngOnInit(): void {
    this.store.dispatch(new PostsActions.GetPostsAction());
  }

}
