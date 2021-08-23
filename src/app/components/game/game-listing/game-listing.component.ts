import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-listing',
  templateUrl: './game-listing.component.html',
  styleUrls: ['./game-listing.component.scss']
})
export class GameListingComponent implements OnInit {

  gameList: any = [
    {
      id: 1,
      image: "https://i.ibb.co/BCch2jd/g1.jpg",
      points: "🔥🔥🔥",
      name: "If You Were a Barbie Doll, What Would You Look Like?",
      answerImg: "https://i.ibb.co/3vK6pWB/g1-answer.png",
      answerText: 'Ilyas as a barbie doll.',
    },
    {
      id: 2,
      image: "https://i.ibb.co/N15yz64/a.jpg",
      points: "🔥🔥",
      name: "Which dog breed do you look like when you are pissed off?",
      answerImg: "https://i.ibb.co/nbsSPJC/a-1.png",
      answerText: 'I dont have a short temper, I just have a quick reaction to bullshit.'
    },
    {
      id: 3,
      image: "https://i.ibb.co/gVJ1kDG/a.jpg",
      points: "🔥🔥",
      name: "What Would You Look Like As A Drawing?",
      answerImg: "https://i.ibb.co/bmJ2sq8/a-1.png",
      answerText: 'Ilyas As A Drawing!.'
    },
    {
      id: 4,
      image: "https://i.ibb.co/3MVc9gW/a.jpg",
      points: "🔥🔥🔥",
      name: "Which Muscle Truck Suits You Best?",
      answerImg: "https://i.ibb.co/dLZJYxq/a-1.png",
      answerText: 'Ilyas, Chevrolet Cheyenne. This truck represents your free spirit and driven soul. You are incridible!.'
    },
    {
      id: 5,
      image: "https://i.ibb.co/ZJTWgXr/b.jpg",
      points: "🔥",
      name: "What Kind Of Patio Suits You Best?",
      answerImg: "https://i.ibb.co/Js1FSNj/b1.png",
      answerText: 'Introduction by Ilyas.'
    },
    {
      id: 6,
      image: "https://i.ibb.co/HpZF0vQ/c.jpg",
      points: "🔥🔥",
      name: "What Does Your Drinking Cup Say?",
      answerImg: "https://i.ibb.co/99dX0X8/c1.png",
      answerText: 'Ilyas.'
    },
    {
      id: 7,
      image: "https://i.ibb.co/jTsVky8/v.jpg",
      points: "🔥🔥",
      name: "Which Disney Prince Would You Live Happily Ever After With?",
      answerImg: "https://i.ibb.co/D5Pjkqs/v1.png",
      answerText: 'Ilyas. You will live hapily ever after with: Flynn Rider!'
    },
  ];

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  onGameClick(item) {
    this.router.navigate(['/game/game-detail'], { state: item })
  }

}
