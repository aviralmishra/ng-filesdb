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
3. npm install
4. gulp serve-dev

Run the following commands to run the 'dev' build of the application:

1. git clone https://github.com/aviralmishra/ng-filesdb.git
2. cd ng-filesdb 
3. npm install
4. gulp serve-build

## To do

1. Display "loading" icon while files are being fetched.
2. Add tests for client code as well and integrate their execution to the build process
3. Split the server code in a different project and deployment for better maintainability
4. Check that the application is supported in IE.
5. When adding download support, do not allow access to 'uploads' directory content through a URL. This would pose a risk.
6. Integrate build process with continuous integration.
7. Verify that application can store locally with store switch.

## Tests

1. Chrome and Safari are supported.
2. Maximum file size per upload is 1MB, enforced on both Client and Server.


