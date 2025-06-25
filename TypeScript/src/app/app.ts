import { FileManager, Toolbar, NavigationPane, DetailsView, BeforeSendEventArgs, BeforeDownloadEventArgs, BeforeImageLoadEventArgs} from '@syncfusion/ej2-filemanager';

FileManager.Inject(Toolbar, NavigationPane, DetailsView);

let hostUrl = 'http://localhost:{port}/';
// initialize File Manager Control
let filemanagerInstance: FileManager = new FileManager({
    ajaxSettings: {
        // Replace the hosted port number in the place of "{port}"
        url: hostUrl + "api/FileManager/FileOperations",
        downloadUrl: hostUrl + "api/FileManager/Download",
        uploadUrl: hostUrl + "api/FileManager/Upload",
        getImageUrl: hostUrl + "api/FileManager/GetImage"
    },
    beforeSend: (args: BeforeSendEventArgs) => {
        if (args.ajaxSettings) {
            (args.ajaxSettings as any).beforeSend = function (args : any) {
                args.httpRequest.setRequestHeader('Authorization', 'User1');
            };
        }
    },
    beforeDownload: (args: BeforeDownloadEventArgs) => {
        args.useFormPost = false;
        if (args.ajaxSettings) {
            (args.ajaxSettings as any).beforeSend = function (args: any) {
              args.fetchRequest.headers.append('Authorization', 'User1');
            };
        } 
    },
    beforeImageLoad: (args: BeforeImageLoadEventArgs) => {
        args.useImageAsUrl = false;
        // Check if ajaxSettings are present in the arguments
        if (args.ajaxSettings) {
            (args.ajaxSettings as any).beforeSend = function (args: any) {
                // Append Authorization header with value 'User1' to fetchRequest headers
                args.fetchRequest.headers.append('Authorization', 'User1');
            };
        }
    }
});

// render initialized File Manager
filemanagerInstance.appendTo('#filemanager');