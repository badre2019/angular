import {NgModule} from "@angular/core";
import {EvaluateCarComponent} from "./evaluate-car.component";
import {CommonModule} from "@angular/common";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {EvaluateCarRoutingModule} from "./evaluate-car.routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatNativeDateModule} from "@angular/material/core";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSelectInfiniteScrollModule} from 'ng-mat-select-infinite-scroll';

@NgModule({
    declarations: [EvaluateCarComponent],
    exports: [EvaluateCarComponent],
    imports: [
      CommonModule,
      FormsModule,
      MatFormFieldModule,
      MatSelectModule,
      MatSelectInfiniteScrollModule,
      EvaluateCarRoutingModule,
      ReactiveFormsModule,
      MatNativeDateModule,
      MatButtonToggleModule,
      MatInputModule,
      MatDatepickerModule,
    ],
    entryComponents: [EvaluateCarComponent],
})
export class EvaluateCarModule { }
