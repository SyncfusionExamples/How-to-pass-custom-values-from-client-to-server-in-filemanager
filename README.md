# How-to-pass-custom-values-from-client-to-server-in-filemanager

**Repository Description**  
This repository contains a sample that demonstrates how to pass **custom values from the client side to the server‑side service** when using the Syncfusion **Essential JS 2 File Manager** component.

The sample focuses on maintaining a server‑side file service that can receive additional parameters from the client along with standard File Manager requests.

## Project Overview
The purpose of this project is to help developers understand how custom client‑side data can be sent to the server in File Manager operations. This is useful in scenarios where server logic needs extra context—such as user identifiers, permissions, tenant information, or application‑specific flags—along with file system requests.

## Features
- Integration of Syncfusion Essential JS 2 File Manager  
- Pass custom values from the client to the server  
- Maintain server‑side services that consume custom parameters  
- Support for extending File Manager request handling  
- Lightweight and extensible sample structure  

## Prerequisites
Ensure the following requirements are met before running this project:
- .NET SDK for server‑side implementation  
- A supported browser  
- Basic knowledge of client‑server communication  
- Syncfusion Essential JS 2 File Manager setup  

## Installation
1. Clone or download this repository to your local machine.
2. Open the server‑side project in a supported IDE.
3. Restore the required dependencies and packages.
4. Configure the File Manager client to point to the server API.

## Usage
When the File Manager performs operations such as reading files, uploading content, or renaming items, custom values are sent from the client to the server. The server‑side code can then retrieve and use these values to apply custom logic.

This approach is useful for:
- Access control and permission handling  
- User‑specific file operations  
- Multi‑tenant file management scenarios  

## Configuration
Custom values are typically passed as part of the request payload from the client. On the server side, the service extracts these values and processes them accordingly before executing the requested File Manager operation.

## Examples
- Sending custom parameters along with file operations  
- Reading custom values inside server‑side API methods  
- Applying conditional logic based on client‑provided data  

## Documentation
- **General Syncfusion documentation:**  
  https://help.syncfusion.com/
- **Essential JS 2 File Manager – Getting Started:**  
  https://ej2.syncfusion.com/documentation/file-manager/

## Additional Resources
- Syncfusion File Manager product overview:  
  https://www.syncfusion.com/javascript-ui-controls/js-file-manager

## Troubleshooting
- Verify that the client request includes the expected custom values.
- Confirm server‑side services are correctly parsing request payloads.
- Check API routing and request mappings if values are not received.
- Rebuild and restart the server if changes are not reflected.

## Support
For detailed API references, advanced configuration scenarios, and File Manager customization guidance, refer to the Syncfusion File Manager documentation links provided above.