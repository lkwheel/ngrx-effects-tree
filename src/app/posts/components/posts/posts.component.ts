import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { TreeNode } from 'primeng/api';
import { map, Observable } from 'rxjs';
import { AppStateInterface } from 'src/app/model/app-state.interface';
import { PostsService } from '../../services/posts.service';
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
  posts$: Observable<TreeNode<string>[]>;

  constructor(private store: Store<AppStateInterface>, private postsSevice: PostsService) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.errors$ = this.store.pipe(select(errorSelector));
    this.posts$ = this.store.pipe(
      select(postsSelector),
      map(_posts => _posts.map(post => this.postsSevice.convertToTreeNode(post)))
    );
  }

  ngOnInit(): void {
    this.store.dispatch(new PostsActions.GetPostsAction());
  }

}
