import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: better job of transforming error for user consumption
      console.error(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
