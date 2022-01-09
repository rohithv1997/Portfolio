import { Component, OnInit } from '@angular/core';
import { OnStartupService } from './service/on-startup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private startupService: OnStartupService) {}

  ngOnInit(): void {
    this.startupService.onStartUp();
  }
  title = 'portfolio';
}
