import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { PostInterface } from 'src/app/model/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  blogs$!: Observable<PostInterface>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PostsService
  ) {}


  ngOnInit() {
    this.blogs$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getPost(params.get('id')!))
    );
  }

  gotoPost(post: PostInterface) {
    const postId = post ? post.id : null;
    // Pass along the post id if available
    // so that the BlogList component can select that post.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/blogs', { id: postId, foo: 'foo' }]);
  }

}
