import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isValidSession } from '../utils/validSession';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    // if (!isValidSession()) {
    //   this.router.navigate(['/sign-in'])
    // }
  }


}
