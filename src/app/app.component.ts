import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public itemCount:Number = 0;
  
  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    
  }

}
