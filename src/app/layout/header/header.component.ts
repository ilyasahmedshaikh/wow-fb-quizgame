import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isOpen: boolean = false;

  flag: any = [
    {
      id: 1,
      image: "assets/img/l1.png",
      name: "English"
    },
    {
      id: 2,
      image: "assets/img/l2.png",
      name: "Espanol"
    },
    {
      id: 3,
      image: "assets/img/l3.png",
      name: "Indonesia"
    },
    {
      id: 4,
      image: "assets/img/l4.png",
      name: "Itliano"
    },
    {
      id: 5,
      image: "assets/img/l5.png",
      name: "Nederlands"
    },
    {
      id: 6,
      image: "assets/img/l6.png",
      name: "Francias"
    },
    {
      id: 7,
      image: "assets/img/l7.png",
      name: "Telugu"
    },
    {
      id: 8,
      image: "assets/img/l8.png",
      name: "Dansk"
    },
    {
      id: 9,
      image: "assets/img/l9.png",
      name: "Suomi"
    },
    {
      id: 10,
      image: "assets/img/l10.png",
      name: "Norsak"
    },
    {
      id: 11,
      image: "assets/img/l11.png",
      name: "Slovensko"
    },
    {
      id: 12,
      image: "assets/img/l12.png",
      name: "Islenska"
    },
    {
      id: 13,
      image: "assets/img/l13.png",
      name: "Sweden"
    },
    {
      id: 14,
      image: "assets/img/l14.png",
      name: "Tagalog"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onDropdownClick() {
    this.isOpen = !this.isOpen
  }

}
