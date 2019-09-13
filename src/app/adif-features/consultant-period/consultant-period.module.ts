import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../../core/core.module';
import { ConsultantPeriodRoutingModule } from './consultant-period-routing.module';
import { ConsultantPeriodHomeComponent } from './consultant-period-home/consultant-period-home.component';
import { ConsultingPeriodsAutocompleteComponent } from './consulting-periods-autocomplete/consulting-periods-autocomplete.component';
import { NotificationModule } from '../../shared/notification/notification.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    ConsultantPeriodRoutingModule,
    NotificationModule
  ],
  declarations: [ConsultantPeriodHomeComponent, ConsultingPeriodsAutocompleteComponent]
})
export class ConsultantPeriodModule { }
