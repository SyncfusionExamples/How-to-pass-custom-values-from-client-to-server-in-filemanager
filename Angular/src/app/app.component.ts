import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { Component } from '@angular/core';
import {
    FileManagerModule, FileManagerAllModule, NavigationPaneService, ToolbarService,
    DetailsViewService, BeforeSendEventArgs, BeforeDownloadEventArgs, BeforeImageLoadEventArgs
} from '@syncfusion/ej2-angular-filemanager';

@Component({
    imports: [FileManagerModule,],
    standalone: true,
    selector: 'app-root',
    providers: [NavigationPaneService, ToolbarService, DetailsViewService],
    template: `<ejs-filemanager id='default-filemanager' [ajaxSettings]='ajaxSettings' (beforeSend)='onBeforeSend($event)' (beforeDownload)='onBeforeDownload($event)' (beforeImageLoad)='onBeforeImageLoad($event)'>
        </ejs-filemanager>`
})
export class AppComponent {
    public hostUrl: string = 'http://localhost:{port}/';
    public ajaxSettings: object = {
        // Replace the hosted port number in the place of "{port}"
        url: this.hostUrl + "api/FileManager/FileOperations",
        downloadUrl: this.hostUrl + "api/FileManager/Download",
        uploadUrl: this.hostUrl + "api/FileManager/Upload",
        getImageUrl: this.hostUrl + "api/FileManager/GetImage"
    };

    onBeforeSend(args: BeforeSendEventArgs): void {
        if (args.ajaxSettings) {
            (args.ajaxSettings as any).beforeSend = function (args: any) {
                args.httpRequest.setRequestHeader('Authorization', 'User1');
            };
        }
    }
    onBeforeDownload(args: BeforeDownloadEventArgs) {
        args.useFormPost = false;
        if (args.ajaxSettings) {
            (args.ajaxSettings as any).beforeSend = function (args: any) {
              args.fetchRequest.headers.append('Authorization', 'User1');
            };
        }       
    }
    onBeforeImageLoad(args: BeforeImageLoadEventArgs): void {
        args.useImageAsUrl = false;
         // Check if ajaxSettings are present in the arguments
        if (args.ajaxSettings) {
            (args.ajaxSettings as any).beforeSend = function (args: any) {
                // Append Authorization header with value 'User1' to fetchRequest headers
                args.fetchRequest.headers.append('Authorization', 'User1');
            };
        }
    }
}

