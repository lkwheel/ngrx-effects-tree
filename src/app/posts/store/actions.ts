import { Action } from "@ngrx/store";
import { PostInterface } from "../../model/post.interface";

export enum PostsActionTypes {
  GetPosts = '[Posts] Get Posts',
  GetPostsSuccess = '[Posts] Get Posts success',
  GetPostsFailure = '[Posts] Get Posts failure',
  DeletePost = '[Posts] Delete Post',
  SetSelectedPost = '[Posts] Set Selected Post',
};

export class GetPostsAction implements Action {
  readonly type = PostsActionTypes.GetPosts;
}

export class GetPostsSuccessAction implements Action {
  readonly type = PostsActionTypes.GetPostsSuccess;

  constructor(public payload: { posts: PostInterface[] }) { }
}

export class GetPostsFailureAction implements Action {
  readonly type = PostsActionTypes.GetPostsFailure;

  constructor(public payload: { error: string }) { }
}

export class SetSelectedPostAction implements Action {
  readonly type = PostsActionTypes.SetSelectedPost;

  constructor(public payload: { post: PostInterface | null }) { }
}

export class DeletePostAction implements Action {
  readonly type = PostsActionTypes.DeletePost;

  constructor(public payload: { post: PostInterface }) { }
}

export type PostsActionsUnion = GetPostsAction
  | GetPostsSuccessAction
  | GetPostsFailureAction
  | SetSelectedPostAction
  | DeletePostAction;
