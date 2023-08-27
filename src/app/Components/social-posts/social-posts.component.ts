import { Component } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent {
  listPosts:Post[] = [
    {
      title: "Florida Man Arrested For Making Grills at Home",
      thought: "Really?"
    },
     {
      title: "Florida Man Arrested For Practicing dentistry without a license",
      thought: "Teeth must be very valuable on the black market"
    },
     {
      title: "Florida Man Accused of using Kool-Aid packets to steal nearly $1k in Walmart merchandise",
      thought: "Probably would have gotten away with it too if it weren't for them meddling kids"
    }
  ];

  AddPost(post:Post):void{
    this.listPosts.push(post)
  }
}
