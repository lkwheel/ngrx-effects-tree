import { PostsStateInterface } from "../model/posts-state.interface";

/**
 * Global state of the application
 */
export interface AppStateInterface {
  posts: PostsStateInterface;
}
