import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { Json2ArrayPipe } from './pipes/json2-array.pipe';

@NgModule({
  imports: [CommonModule, FontAwesomeModule, RouterModule, FormsModule, ReactiveFormsModule],
  declarations: [NavBarComponent, Json2ArrayPipe],
  exports: [
    NavBarComponent,
    FontAwesomeModule,
    Json2ArrayPipe,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
