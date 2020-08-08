import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @ViewChild("drawer", {read: ElementRef}) drawer: ElementRef;
  constructor() { }

  ngOnInit(): void {
    this.drawer.nativeElement.toggle();
  }

}
