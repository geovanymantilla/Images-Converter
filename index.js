'use strict'
//instanciando los objetos app y BrowserWindow
const {app, BrowserWindow}= require('electron')

//Ejecutando ordenes cuando la aplicacion esta lista
app.on('ready', () => {
    //Creando una ventana
    let win = new BrowserWindow({
        width: 800,
        height:600,
        title: 'Safguar Converter',
        center: true,
        maximizable:false,
        show: false
    })
    win.once('ready-to-show', () => {
        win.show()
    })

    //Detectando el cierre de la ventana para cerrar el aplicativo
    win.on('closed', () => {
        win = null
        app.quit()
    })
    // const startUrl = process.env.ELECTRON_START_URL || url.format({
    //     pathname: path.join(__dirname, '/../build/index.html'),
    //     protocol: 'file:',
    //     slashes: true
    // });
    // win.loadURL(startUrl);
    win.loadURL('http://52.72.202.226:3000/'),
    
})