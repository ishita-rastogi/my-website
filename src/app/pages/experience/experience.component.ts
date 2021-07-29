import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  alternateSide: boolean = false;
  firstContentSide: 'right' | 'left' = 'right';

  constructor() { }

  ngOnInit(): void {
  }

  onNavigate(url: string){
    window.open(url, "_blank");
}

}
