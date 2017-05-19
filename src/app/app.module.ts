import { NgModule } from '@angular/core';

import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

// Import modules
import { CoreModule } from './core/core.module';

// Import components
import { AppComponent } from './app.component';
import { StatisticFromComponent } from './components/statistic-form/statistic-form.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        CoreModule
    ],
    declarations: [
        AppComponent,
        StatisticFromComponent
    ],
    bootstrap: [AppComponent],
    providers: [Title]
})

export class AppModule {}
