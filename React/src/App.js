import { DetailsView, FileManagerComponent, NavigationPane, Toolbar, Inject } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';
function App() {
    function onBeforeSend(args) {
        if (args.ajaxSettings) {
          args.ajaxSettings.beforeSend = function (args) {
              args.httpRequest.setRequestHeader('Authorization', 'User1');
          };
        }
    }
    function onBeforeDownload(args) {
        args.useFormPost = false;
        if (args.ajaxSettings) {
            args.ajaxSettings.beforeSend = function (args) {
                args.fetchRequest.headers.append('Authorization', 'User1');
            };
        }
    }
    function onBeforeImageLoad(args) {
        args.imageUrl = args.imageUrl + "&Authorization=" + "User1";
    }
    return (<div className="control-section">
        <FileManagerComponent  id="file"
            ajaxSettings = {{
                // Replace the hosted port number in the place of "{port}"
                url:"http://localhost:{port}/api/FileManager/FileOperations",
                downloadUrl:"http://localhost:{port}/api/FileManager/Download",
                uploadUrl:"http://localhost:{port}/api/FileManager/Upload",
                getImageUrl:"http://localhost:{port}/api/FileManager/GetImage"
            }} 
            beforeSend={onBeforeSend.bind(this)} 
            beforeDownload={onBeforeDownload.bind(this)} 
            beforeImageLoad={onBeforeImageLoad.bind(this)}>
                <Inject services={[NavigationPane, DetailsView, Toolbar]}/>
            </FileManagerComponent>
    </div>);
}
export default App;