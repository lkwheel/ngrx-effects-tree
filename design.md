# Install Dependent Libraries

1. Create project `ng new ngrx-effects-tree`
   - Used defaults except for adding routing and styling with SCSS 
1. Added NGRX `ng add @ngrx/store`
1. Added NGRX DevTools `ng add @ngrx/store-devtools`
1. Added NGRX Effects `ng add @ngrx/effects`

# Project Setup

1. Create Posts feature module `ng g m Posts`
1. Create PostComponent `ng g c posts/components/post`
1. Create PostsService `ng g s posts/services/posts`
1. Exported the PostComponent from the posts.module
1. Added a route to the PostComponent from the route array in app-routing-module
1. Added actions, reducers, selectors and effects

