import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public formData: FormGroup;
  public loaded = '';
  public loading = false;
  public partners$: Observable<Array<User>>;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { 
    this.formData = this.formBuilder.group({
      searchCPF: [null, Validators.compose([
        Validators.required,
        Validators.minLength(14),
        Validators.maxLength(14),
        Validators.pattern(/^(\d{3}\.){2}\d{3}\-\d{2}$/)]
      )]
    });
    this.partners$ = this.userService.searchResultsSubject.asObservable();
  }

  ngOnInit(): void {}

  public search(): void {
    this.loading = true;
    if (this.formData.valid) {
      this.userService.searchPartners(this.formData.value.searchCPF.replace(/\D/g, '')).then(_ => {
        this.loading = false;
        this.loaded = this.formData.value.searchCPF;
      });
    } else {
      Object.keys(this.formData.controls).some(field => {
        if (this.formData.controls[field].status === 'INVALID') {
          this.formData.controls[field].markAsTouched();
          const control = document.getElementById(field) as HTMLInputElement;
          control.focus();
          this.loading = false;
          return true;
        }
        return false;
      });
    }
  }
}