const express = require('express');
const app = express();
const path = require('path');
const Sequelize = require ('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/shop')

app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'index.html')));
app.use(express.static('public'));

app.get('/api/flavors', async (req, res, next) => {
  try {
    res.send(await Flavor.findAll())
  }
  catch (e) {
    next (e)
  }
})

const init = async () => {
  try {
    await sequelize.sync({force:true})
    await Flavor.create({ iceCream: "chocolate"})
    await Flavor.create({ iceCream: "vanilla"})
    await Flavor.create({ iceCream: "strawberry"})

    const port = process.env.PORT || 3000;
    app.listen(port, ()=> console.log(`listening on port ${port}`));
  }
  catch (e) {
    console.log(e)
  }
}

init()

const Flavor = sequelize.define ('flavor', {
  iceCream: {
    type: Sequelize.STRING
  }
})


