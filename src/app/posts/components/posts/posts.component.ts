import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { MenuItem, TreeNode } from 'primeng/api';
import { map, Observable } from 'rxjs';
import { AppStateInterface } from 'src/app/model/app-state.interface';
import { PostInterface } from '../../model/post.interface';
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
  posts$: Observable<TreeNode<PostInterface>[]>;

  postMenuItems: MenuItem[] = [];
  selectedPost: null | TreeNode<PostInterface> = null;

  constructor(private store: Store<AppStateInterface>, private postsSevice: PostsService) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.errors$ = this.store.pipe(select(errorSelector));
    this.posts$ = this.store.pipe(
      select(postsSelector),
      map(_posts => _posts.map(post => {
        this.unselect();
        return this.postsSevice.convertToTreeNode(post);
      }))
    );
  }

  ngOnInit(): void {
    this.store.dispatch(new PostsActions.GetPostsAction());
    this.loadMenu();
  }

  loadMenu(): void {
    this.postMenuItems = [
      {
        label: 'Options',
        items: [
          {
            label: 'Deselect',
            icon: 'pi pi-stop',
            command: () => {
              this.unselect();
            },
            disabled: this.selectedPost === null
          },
          {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
              this.delete();
            },
            disabled: this.selectedPost === null
          }
        ]
      },
    ];
  }

  unselect(): void {
    this.selectedPost = null;
    this.loadMenu();
  }

  delete(): void {
    if (this.selectedPost) {
      this.store.dispatch(new PostsActions.DeletePostAction({ post: this.selectedPost.data as PostInterface }));
    }
  }

  nodeSelect(event: any): void {
    this.loadMenu();
  }

}
