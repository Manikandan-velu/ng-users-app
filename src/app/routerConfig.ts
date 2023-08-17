import { Routes } from '@angular/router';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { UsersComponent } from './users/users.component';

export const appRoutes: Routes = [
  { path: '',
      component: UsersComponent
    },
    { path: 'company-details',
      component: CompanyDetailsComponent
    }
  ];