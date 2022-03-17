const express = require('express');
const app = express();
const path = require('path');
const Sequelize = require ('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/shop')

app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'index.html')));





const init = async () => {
  try {
    await sequelize.sync({force:true})

    const port = process.env.PORT || 3000;
    app.listen(port, ()=> console.log(`listening on port ${port}`));
  }
  catch (e) {
    console.log(e)
  }
}

init()