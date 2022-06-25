import { ConfirmModalComponent } from './modal-components/confirm-modal/confirm-modal.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { BlockUiTemplateComponent } from './sharedModule/block-ui-template/block-ui-template.component'
import { BlockUIModule } from 'ng-block-ui';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { StripHtmlPipe } from './sharedModule/pipes/strip-html.pipe';
import { TruncatePipe } from './sharedModule/pipes/truncate.pipe';
import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        BlockUiTemplateComponent,
        StripHtmlPipe,
        TruncatePipe,
        PublicLayoutComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        BlockUIModule.forRoot({
            template: BlockUiTemplateComponent
        }),
        ModalModule.forRoot(),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
