import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardboard',
  templateUrl: './cardboard.component.html',
  styleUrls: ['./cardboard.component.scss']
})
export class CardboardComponent implements OnInit {

  cardList:any[]=[
    {
      title:'Shiba Inu',
      subtitle:'Dog Breed',
      image:'https://material.angular.io/assets/img/examples/shiba2.jpg',
      content:'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      like:'LIKE',
      share:'SHARE'
    },
    {
      title:'Shiba Inu',
      subtitle:'Dog Breed',
      image:'https://material.angular.io/assets/img/examples/shiba2.jpg',
      content:'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      like:'LIKE',
      share:'SHARE'
    },
    {
      title:'Shiba Inu',
      subtitle:'Dog Breed',
      image:'https://material.angular.io/assets/img/examples/shiba2.jpg',
      content:'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      like:'LIKE',
      share:'SHARE'
    },
    {
      title:'Shiba Inu',
      subtitle:'Dog Breed',
      image:'https://material.angular.io/assets/img/examples/shiba2.jpg',
      content:'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      like:'LIKE',
      share:'SHARE'
    },
    {
      title:'Shiba Inu',
      subtitle:'Dog Breed',
      image:'https://material.angular.io/assets/img/examples/shiba2.jpg',
      content:'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      like:'LIKE',
      share:'SHARE'
    },
    {
      title:'Shiba Inu',
      subtitle:'Dog Breed',
      image:'https://material.angular.io/assets/img/examples/shiba2.jpg',
      content:'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      like:'LIKE',
      share:'SHARE'
    },
    {
      title:'Shiba Inu',
      subtitle:'Dog Breed',
      image:'https://material.angular.io/assets/img/examples/shiba2.jpg',
      content:'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      like:'LIKE',
      share:'SHARE'
    },
    {
      title:'Shiba Inu',
      subtitle:'Dog Breed',
      image:'https://material.angular.io/assets/img/examples/shiba2.jpg',
      content:'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      like:'LIKE',
      share:'SHARE'
    },


  ]
  constructor() { }

  ngOnInit(): void {
  }

}
