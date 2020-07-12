import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-usermenu',
  templateUrl: './usermenu.page.html',
  styleUrls: ['./usermenu.page.scss'],
})
export class UsermenuPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

}
