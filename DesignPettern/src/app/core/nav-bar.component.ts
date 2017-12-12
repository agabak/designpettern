import { Component } from '@angular/core';

import { UserRepositoryService } from './user-repository.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'wb-nav-bar',
  styleUrls: ['./nav-bar.component.css'],
  templateUrl: './nav-bar.component.html'
})

export class NavBarComponent  {
  constructor(private userRepository: UserRepositoryService) {}

  get currentUser() {
    return this.userRepository.currentUser;
  }

  handleSignOut() {
    this.userRepository.currentUser = null;
  }
}
