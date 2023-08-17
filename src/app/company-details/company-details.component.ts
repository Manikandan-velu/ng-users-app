import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { SharingService } from '../services/sharing.service';
import { Users } from '../interfaces';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent {
  companyData: Users | undefined;
  constructor(private sharing: SharingService){
  }

  ngOnInit(){
    this.sharing.currentData.subscribe(data => {
      this.companyData = data;
    });
  }
  ngAfterViewInit() {
    window.scroll(0,0)
  }
}
