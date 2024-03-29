const express = require('express'); 
        const app = express();
        const port = 8000;
        

        require('./config/mongoose.config');
        app.use(express.json(), express.urlencoded({extended:true}));


        require('./routes/jokes.routes')(app);



        app.listen(port, () => console.log(`the server is all filed up on port ${port}`));