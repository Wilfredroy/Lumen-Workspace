const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createWindow() {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'), // If you have any preload script
            contextIsolation: true, // Recommended for security
            enableRemoteModule: false, // Disable remote module
            nodeIntegration: true // Enable Node.js integration
        },
        icon: path.join(__dirname, 'assets', 'logo.jpg'), // Optional: Add your app icon here
        backgroundColor: '#f0f0f0', // Background color of the window
    });

    // Load your HTML file
    mainWindow.loadFile('index.html');

    // Open the DevTools for debugging (optional)
    // mainWindow.webContents.openDevTools();

    // Handle window close event
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

// This method will be called when Electron has finished initialization
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On macOS it is common for applications and their menu bar to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    // On macOS, recreate a window in the app when the dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});

// Optional: Handle IPC messages if needed (e.g., for save, open, etc.)
ipcMain.on('some-event', (event, arg) => {
    console.log(arg); // Log the argument received from the renderer process
    // Handle the event here
});
