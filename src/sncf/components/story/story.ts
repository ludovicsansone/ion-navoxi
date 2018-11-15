import { Component } from '@angular/core';

/**
 * Generated class for the StoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'story',
  templateUrl: 'story.html'
})
export class StoryComponent {

  text: string;

  constructor() {
    console.log('Hello StoryComponent Component');
    this.text = 'Hello World';
  }

}
