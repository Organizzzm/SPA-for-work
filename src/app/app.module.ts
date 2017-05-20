import { NgModule } from '@angular/core';

import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

// Import modules
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

// Import components
import { AppComponent } from './app.component';
import { StatisticFromComponent } from './skills/statistic-form/statistic-form.component';
import { FilterComponent } from './skills/filter/filter.component';
import { ListComponent } from './skills/list/list.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        CoreModule,
        SharedModule
    ],
    declarations: [
        AppComponent,
        StatisticFromComponent,
        FilterComponent,
        ListComponent
    ],
    bootstrap: [AppComponent],
    providers: [Title]
})

export class AppModule {}
