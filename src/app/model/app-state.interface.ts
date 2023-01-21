import { PostsStateInterface } from "../posts/model/posts-state.interface";

/**
 * Global state of the application
 */
export interface AppStateInterface {
  posts: PostsStateInterface;
}
