import { Injectable } from '@angular/core';
import { delay, filter, map } from 'rxjs/operators';
import { of, Subject } from 'rxjs';
import { MOCK_DATA } from './mock-data';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public searchResultsSubject = new Subject<Array<User>>();
  public hasSearchResults = false;

  constructor() {}

  get searchResults$() {
    return this.searchResultsSubject.asObservable();
  }

  searchPartners(searchQuery: string): Promise<boolean> {
    this.hasSearchResults = false;
    this.searchResultsSubject.next([]);

    return new Promise<boolean>((resolve, reject) => {
      of(MOCK_DATA)
        .pipe(
          delay(2000),
          map(users => users.filter(user => user.cpf === searchQuery)),
          filter(results => !!results.length)
        )
        .subscribe(
          results => {
            this.searchResultsSubject.next(results);
            this.hasSearchResults = true;
            resolve(true);
          },
          error => reject(error)
        );
    });
  }
}