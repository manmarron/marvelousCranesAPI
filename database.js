const mongoose = require('mongoose');
const connection = "mongodb+srv://admin:marvelouscranes@cranecluster.6taew.mongodb.net/craneCluster?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));