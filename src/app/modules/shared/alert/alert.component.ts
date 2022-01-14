import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnInit {
    @Input() type: 'success' | 'danger' | 'info' | 'warning';
    @Input() message: string = '';
    @Input() isVisible: boolean = false;
    @Input() showIcon: boolean = true;
    @Input() showButtonClose: boolean = true;

    constructor() {}

    ngOnInit(): void {}

    public close(): void {
        this.isVisible = false;
    }
}
