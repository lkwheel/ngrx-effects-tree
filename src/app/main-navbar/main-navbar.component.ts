import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit {
  items: MenuItem[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Blog Entries',
        icon: 'pi pi-fw pi-file',
        command: () => this.navigateToBlogs(),
      },
      {
        label: 'Editor',
        icon: 'pi pi pi-cog',
        command: () => this.navigateToEditor(),
      },
    ];
  }

  navigateToBlogs(): void {
    this.router.navigate(['/']);
  }

  navigateToEditor(): void {
    this.router.navigate(['/post-editor']);
  }
}
