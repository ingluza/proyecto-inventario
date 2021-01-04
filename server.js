const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('/dist/app-angular'));
app.get('/*', function(req,res){
    res.sendFile(path.join('./dist/app-angular/index.html'));
})

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);