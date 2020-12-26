import { Component, OnDestroy, OnInit } from '@angular/core';
import { IntroDTO } from 'src/app/dto/intro-dto';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
})
export class IntroComponent implements OnInit, OnDestroy {
  public data!: IntroDTO;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getIntro().subscribe((intro) => {
      this.data = intro;
    });
  }

  ngOnDestroy(): void {}
}
