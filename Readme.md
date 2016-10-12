# filesdb
FilesDB is an interactive file manager application built using Angular 1, Node.JS, HTML, Bootstrap, Less, Gulp and Bower.

It uses Angular File Upload and Multer for file handling.

It allows the user to:

1. Upload files through an upload dialog box.
2. View and download uploaded files

## Instructions to run the application

Run the following commands to run the 'dev' build of the application:

1. git clone https://github.com/aviralmishra/ng-filesdb.git
2. cd ng-filesdb 
3. gulp serve-dev

## TO do

1. Integrate build process with continuous integration.
2. Add tests for client code as well and integrate their execution to the build process
3. Split the server code in a different project and deployment for better maintainability
4. Check that the application is supported in IE.
5. Do not allow access to the 'uploads' directory content through a URL. This would pose a risk.

## Tests

1. Chrome and Safari are supported.
2. Maximum file size per upload is 1MB, enforced on both Client and Server.


