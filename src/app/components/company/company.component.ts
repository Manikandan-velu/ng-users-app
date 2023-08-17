import { Component, Input } from '@angular/core';
import { Company } from 'src/app/interfaces';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {
  @Input() company: Company | undefined;
  @Input() website: string | undefined;
}
