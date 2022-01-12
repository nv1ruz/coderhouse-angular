import { Component, OnInit } from '@angular/core';
import { MainSidebarService } from '../../services/main-sidebar.service';

@Component({
    selector: 'app-main-template',
    templateUrl: './main-template.component.html',
    styleUrls: ['./main-template.component.css'],
})
export class MainTemplateComponent implements OnInit {
    constructor(public _mainSidebar: MainSidebarService) {}

    ngOnInit(): void {}
}
