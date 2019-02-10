import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataStorgeService } from '../shared/data-storge.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() featureSelected = new EventEmitter<string>();
  constructor(private storeData: DataStorgeService) { }

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

}
