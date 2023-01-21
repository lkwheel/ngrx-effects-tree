import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { PostInterface } from '../model/post.interface';
import { PostsService } from '../services/posts.service';
import * as PostsActions from './actions';

@Injectable()
export class PostsEffects {
  getPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActions.PostsActionTypes.GetPosts),
      mergeMap(() => {
        return this.postsSevice.getPosts().pipe(
            map((posts) => new PostsActions.GetPostsSuccessAction({ posts })),
            catchError(error =>
              of(new PostsActions.GetPostsFailureAction({ error: error.message }))));
      })
    )
  );

  constructor(private actions$: Actions, private postsSevice: PostsService) { }
}
