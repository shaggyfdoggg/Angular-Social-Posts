import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  display:boolean = false;
newPost:Post={} as Post;
@Output() PostCreated =new EventEmitter<Post>();

submitPost():void{
  this.PostCreated.emit(this.newPost)
  this.newPost={} as Post;
  this.display = false;
}

toggleDisplay():void{
  this.display = !this.display;
}


  
}
