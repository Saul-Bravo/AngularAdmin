import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public menu:any;

  public module:any;

  public group:any;

  public groupMenus:any;

  constructor(public api: ApiService) { }

  ngOnInit(): void {
    this.menu = this.api.GetUsers();
    this.group = this.api.GetGroups();
    this.module = this.api.GetModules();
  }

  CreateMenu(){
    this.group.forEach(element => {
      let groupMenu = {
        "idgroup":element.idgroup,
        "group_name":element.group_name,
        "modules":[]
      }
      this.FilterModules(element.idgroup);
    });
  }

  FilterModules(idgroup){
    return this.module.filter(function(item){
      return item.idgroup == idgroup;
    });
  }

 
}
