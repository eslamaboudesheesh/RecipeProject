import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataStorgeService } from '../shared/data-storge.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() featureSelected = new EventEmitter<string>();
  constructor(private storeData: DataStorgeService , private authSer: AuthService) { }

  ngOnInit() {
  }

  onSelect(featuer: string) {
this.featureSelected.emit(featuer);
  }
  saveData() {
    this.storeData.storeRecipe().subscribe(
      (res) => {
        console.log(res);
      }
    );
  }
  showData() {
    this.storeData.showRecipe();
  }

  onLogout(){
    this.authSer.logOut();
  }

}
