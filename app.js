import app from "./server.js"
import mongodb from "mongodb"
//import ReviewsDAO from "./dao/reviewsDAO.js"

const MongoClient = mongodb.MongoClient
const uri = 'mongodb+srv://derim3nx:Tamir3722@cluster0.7qlp2kr.mongodb.net/'

const Port = 8000

MongoClient.connect(uri, {
  // connecting to Data base with attributes
  maxPoolSize: 50,
  wtimeoutMS: 2500,
  useNewUrlParser: true
}).catch(err => {
  //make sure to handle errors
  console.error(err.stack)
  proccess.exit(1)
}).then(async client => {
  app.listen(Port, () => {
    console.log(`listening on port ${Port}`)
  })
})

