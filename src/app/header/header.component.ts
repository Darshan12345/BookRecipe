import {Component, OnInit} from '@angular/core';
import {DataStorageServiceService} from '../shared/data-storage-service.service';
import {Response} from '@angular/http';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private dataStorageService: DataStorageServiceService, public  authService: AuthService) { }

  ngOnInit() {
  }


  onSaveData() {
     return this.dataStorageService.storeReciepe().subscribe((response: Response) => {
       console.log(response);
     });
  }


  fetchData() {
     this.dataStorageService.getRecipe();
  }

  logout() {
    this.authService.logout();
  }
}
