import {NgModule} from "@angular/core";
import {EvaluateCarComponent} from "./evaluate-car.component";
import {CommonModule} from "@angular/common";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {EvaluateCarRoutingModule} from "./evaluate-car.routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DemoMaterialModule} from "../material.module";
import {MatNativeDateModule} from "@angular/material/core";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";


@NgModule({
    declarations: [EvaluateCarComponent],
    exports: [EvaluateCarComponent],
    imports: [CommonModule,FormsModule, MatFormFieldModule, MatSelectModule, EvaluateCarRoutingModule, ReactiveFormsModule,
      DemoMaterialModule,
      MatNativeDateModule,
      MatButtonToggleModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatDatepickerModule,],

    entryComponents: [EvaluateCarComponent],
})
export class EvaluateCarModule { }
