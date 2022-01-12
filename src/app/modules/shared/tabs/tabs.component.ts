import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface ITab {
    id: number;
    name: string;
}

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements OnInit {
    @Input() tabs: ITab[] = [];
    @Output() getTab: EventEmitter<ITab> = new EventEmitter<ITab>();
    public tabId: number = 1;

    constructor() {}

    ngOnInit(): void {
        if (this.tabs.length > 0) {
            this.selectTab(this.tabs[0]);
        }
    }

    public selectTab(tab: ITab): void {
        this.tabId = tab.id;
        this.getTab.emit(tab);
    }
}
