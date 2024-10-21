import {Component, inject} from '@angular/core';
import {
    TuiAlertService,
    TuiButton,
    TuiDataList,
    TuiDropdown,
    TuiDropdownDirective,
    TuiDropdownOpen,
    TuiIcon
} from "@taiga-ui/core";
import {CommonModule} from "@angular/common";
import {TuiChevron, TuiDataListDropdownManager} from "@taiga-ui/kit";
import {TuiLet} from "@taiga-ui/cdk";

@Component({
  selector: 'ots-header',
  standalone: true,
    imports: [
        TuiIcon,
        TuiButton,
        CommonModule,
        TuiDataList,
        TuiDropdown,
        TuiDataListDropdownManager,
        TuiLet,
        TuiChevron,
    ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less'
})
export class HeaderComponent {
    private readonly alertService = inject(TuiAlertService);
    protected open = false;

    copy(text: string) {
        navigator.clipboard.writeText(text);
        this.alertService.open('Успешно скопировано', {
            appearance: 'success'
        }).subscribe()
    }
}
