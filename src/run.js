const {app} = require('./server');
const {db} = require('./models/database')

async function run(){
    await db.sync({force:process.env.FORCE_DB_RESET});
    console.log('database is ready');
    app.listen(4000, ()=>{console.log('server is running on port 4000 ')});
}

run();

