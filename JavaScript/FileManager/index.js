let hostUrl = 'http://localhost:{port}/';
// inject feature modules of the File Manager
ej.filemanager.FileManager.Inject(ej.filemanager.DetailsView, ej.filemanager.Toolbar, ej.filemanager.NavigationPane);
// initialize File Manager control
var filemanagerInstance = new ej.filemanager.FileManager({
    ajaxSettings: {
        // Replace the hosted port number in the place of "{port}"
        url: hostUrl + "api/FileManager/FileOperations",
        downloadUrl: hostUrl + "api/FileManager/Download",
        uploadUrl: hostUrl + "api/FileManager/Upload",
        getImageUrl: hostUrl + "api/FileManager/GetImage"
    },
    beforeSend: function (args) {
        if (args.ajaxSettings) {
            args.ajaxSettings.beforeSend = function (args) {
                args.httpRequest.setRequestHeader('Authorization', 'User1');
            };
        }
    },
    beforeDownload: function (args){
        debugger;
        args.useFormPost = false;
        if (args.ajaxSettings) {
            args.ajaxSettings.beforeSend = function (args) {
              args.fetchRequest.headers.append('Authorization', 'User1');
            };
        } 
    },
    beforeImageLoad: function (args){
        args.useImageAsUrl = false;
        // Check if ajaxSettings are present in the arguments
        if (args.ajaxSettings) {
            (args.ajaxSettings).beforeSend = function (args) {
                // Append Authorization header with value 'User1' to fetchRequest headers
                args.fetchRequest.headers.append('Authorization', 'User1');
            };
        }
    }   
});

// render initialized File Manager
filemanagerInstance.appendTo('#filemanager');