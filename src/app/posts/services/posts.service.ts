import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { catchError, map, Observable, of } from 'rxjs';
import { PostInterface } from '../model/post.interface';
import { PostsPayloadInterface } from '../model/posts-payload.interface';

const POSTS_URL = '/assets/posts.json';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<PostInterface[]> {
    return this.http.get<PostsPayloadInterface>(POSTS_URL).pipe(
      map(data => {
        console.debug('Getting data from backend', JSON.stringify(data, null, '\t'));
        return data.posts;
      }),
      catchError(this.handleError<PostInterface[]>('getPosts', [])));
  }

  public convertToTreeNode(post: PostInterface): TreeNode<PostInterface> {
    const node: TreeNode<PostInterface> = {
      key: post.id,
      label: post.title,
      data: post,
      type: 'url',
      expandedIcon: 'pi pi-globe',
      collapsedIcon: 'pi pi-globe',
    };
    if (post.children) {
      const _children: TreeNode<PostInterface>[] = [];
      post.children.forEach(childNode => {
        _children.push(this.convertToTreeNode(childNode));
      });
      node.children = _children;
      node.expandedIcon = 'pi pi-folder-open';
      node.collapsedIcon = 'pi pi-folder';
    }
    return node;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: better job of transforming error for user consumption
      console.error(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
