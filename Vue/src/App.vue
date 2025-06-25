<template>
<div id="app">
    <div class="wrapper">
     <ejs-filemanager id="overview_filemanager" :ajaxSettings="ajaxSettings" :beforeSend='onBeforeSend' :beforeDownload='onBeforeDownload' :beforeImageLoad='onBeforeImageLoad'>
     </ejs-filemanager>
    </div>
</div>
</template>
<script>
import { FileManagerComponent, DetailsView, NavigationPane, Toolbar } from "@syncfusion/ej2-vue-filemanager";

export default {
    name: "App",
    components: {
        "ejs-filemanager":FileManagerComponent,
    },
     data () {
      return {
        ajaxSettings:
        {
          url: "http://localhost:{port}/api/FileManager/FileOperations",
          getImageUrl: "http://localhost:{port}/api/FileManager/GetImage",
          uploadUrl: "http://localhost:{port}/api/FileManager/Upload",
          downloadUrl: "http://localhost:{port}/api/FileManager/Download"
        }
      }
    },
    methods: {
      onBeforeSend: function (args) {
        if(args.ajaxSettings){
          args.ajaxSettings.beforeSend = function (args) {
            args.httpRequest.setRequestHeader('Authorization', 'User1');
          };
        }
      },
      onBeforeImageLoad: function (args) {
        args.useImageAsUrl = false;
        // Check if ajaxSettings are present in the arguments
        if (args.ajaxSettings) {
          (args.ajaxSettings).beforeSend = function (args) {
            // Append Authorization header with value 'User1' to fetchRequest headers
            args.fetchRequest.headers.append('Authorization', 'User1');
          };
        }
      },
      onBeforeDownload: function (args) {
        args.useFormPost = false;
        if(args.ajaxSettings){
          args.ajaxSettings.beforeSend = function (args) {
            args.fetchRequest.headers.append('Authorization', 'User1');
          };
        }
      }      
    },
    //Injecting additional modules in FileManager
    provide: {
      filemanager: [DetailsView, NavigationPane, Toolbar]
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-icons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-layouts/styles/material.css";
@import "../node_modules/@syncfusion/ej2-grids/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-filemanager/styles/material.css";
</style>