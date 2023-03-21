import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/partner.service';

@Component({
  selector: 'partner-list',
  templateUrl: './partner-list.component.html',
  styleUrls: ['./partner-list.component.scss']
})
export class PartnerListComponent implements OnInit {

  public partners$: Observable<Array<User>>;

  constructor(private userService: UserService) {
    this.partners$ = this.userService.searchResultsSubject.asObservable();
  }

  ngOnInit(): void {}

  public get response(): boolean {
    return this.userService.hasSearchResults;
  }

}