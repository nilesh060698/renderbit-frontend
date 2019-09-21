import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { RegisterComponent } from './routes/register/register.component';
import {PostsComponent } from '../app/components/posts/posts.component';
import { CreatePostComponent } from '../app/routes/create-post/create-post.component'; 
import {ViewPostComponent} from '../app/routes/view-post/view-post.component';
import {PostComponent} from '../app/components/post/post.component';
const routes: Routes = [
  { path : '', component: HomeComponent },
  {path: 'register', component: RegisterComponent },
  { path: 'viewPost/:slug', component: ViewPostComponent},
  {path: 'createPost/:slug', component: CreatePostComponent},
  {path: ':author/:title', component: PostComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
