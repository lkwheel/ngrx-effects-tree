import { PostsStateInterface } from '../model/posts-state.interface';
import * as PostsActions from './actions';

export const initialState: PostsStateInterface = {
  isLoading: false,
  posts: [],
  error: null
};

export function postsReducers(
  state = initialState,
  action: PostsActions.PostsActionsUnion
): PostsStateInterface {
  switch (action.type) {
    case PostsActions.PostsActionTypes.GetPosts: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case PostsActions.PostsActionTypes.GetPostsSuccess: {
      return {
        ...state,
        isLoading: false,
        posts: action.payload.posts
      };
    }

    case PostsActions.PostsActionTypes.GetPostsFailure: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    }

    case PostsActions.PostsActionTypes.DeletePost: {
      return {
        ...state,
        posts: state.posts.filter(p => p.id !== action.payload.post.id)
      };
    }

    default: {
      return state;
    }
  }
}
