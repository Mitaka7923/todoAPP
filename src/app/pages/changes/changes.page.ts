import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changes',
  templateUrl: './changes.page.html',
  styleUrls: ['./changes.page.scss'],
})
export class ChangesPage {

  constructor(private router: Router) { }
}
