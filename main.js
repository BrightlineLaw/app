var app = require('app');
var BrowserWindow = require('browser-window'); // module to create native browser window

// report crashes to server
require('crash-reporter').start();

// store global reference to the window object
var mainWindow = null;

// quit when all windows are closed
app.on('window-all-closed', function() {
	if (process.platform != 'darwin') {
		app.quit();
	}
});

// method called when electron has completed initialization and ready to create browser windows
app.on('ready', function() {
	
	// create the browser window
	mainWindow = new BrowserWindow({width: 1200, height: 1000});

	// load index.html
	mainWindow.loadUrl('file://' + __dirname + '/index.html');

	// open devtools
	mainWindow.openDevTools();

	// when window is closed
	mainWindow.on('closed', function() {
		mainWindow = null;
	});
});
