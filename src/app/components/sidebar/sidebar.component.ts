import { Component, OnInit } from "@angular/core";

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: "/dashboard", title: "VTU Results", icon: "dashboard", class: "" },
  {
    path: "/user-profile",
    title: "Department Results",
    icon: "person",
    class: ""
  },
  {
    path: "/table-list",
    title: "College Position",
    icon: "content_paste",
    class: ""
  },
  {
    path: "/typography",
    title: "Fetch Results",
    icon: "library_books",
    class: ""
  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }
}
