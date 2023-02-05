import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/model/app-state.interface";
import { PostsStateInterface } from "../../model/posts-state.interface";

export const selectFeature = (state: AppStateInterface) => state.posts;

export const isLoadingSelector = createSelector(
  selectFeature,
  (state: PostsStateInterface) => state.isLoading
);

export const postsSelector = createSelector(
  selectFeature,
  (state: PostsStateInterface) => state.posts
);

export const errorSelector = createSelector(
  selectFeature,
  (state: PostsStateInterface) => state.error
);

export const selectedPostSelector = createSelector(
  selectFeature,
  (state: PostsStateInterface) => state.selectedPost
);
