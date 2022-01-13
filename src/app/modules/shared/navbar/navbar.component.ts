import { Component, Input, OnInit } from '@angular/core';
import { MainSidebarService } from 'src/app/template/services/main-sidebar.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
    @Input() title: string = 'Coderhouse';

    constructor(public _mainSidebar: MainSidebarService) {}

    ngOnInit(): void {}

    public openCloseSidebar(): void {
        this._mainSidebar.visible ? this._mainSidebar.close() : this._mainSidebar.open();
    }
}
