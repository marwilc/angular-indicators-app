import { Component, Input, OnInit } from '@angular/core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sub-header-indicators',
  templateUrl: './sub-header-indicators.component.html',
  styleUrls: ['./sub-header-indicators.component.scss'],
})
export class SubHeaderIndicatorsComponent implements OnInit {
  @Input() indicator: string;
  faChevronLeft = faChevronLeft;
  constructor() {}

  ngOnInit(): void {}
}
