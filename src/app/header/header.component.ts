import { AuthService } from './../auth/auth.service';
import { DataStorageService } from './../shared/data-storage.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() loading = new EventEmitter<boolean>();
  isAuthenticated = false;

  constructor(private dataStorageService: DataStorageService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.user.subscribe(user => {
      this.isAuthenticated = !user ? false : true;
    })
  }


  onSaveData() {
    this.loading.emit(true);
    this.dataStorageService.storeRecipe().subscribe(e => {
      this.loading.emit(false);
    });
  }

  onFetchData() {
    this.loading.emit(true);
    this.dataStorageService.fetchRecipes().subscribe(e => {
      this.loading.emit(false);
    });
  }

  onLogout() {
    this.authService.logout();
  }

  // ngOnDestroy() {
  //   this.userSub.unsubscribe();
  // }

}
