import mongoose from 'mongoose';

const {
    MONGO_HOSTNAME,
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_DB,
  } = process.env;

  //local conection
  const URI = 'mongodb://127.0.0.1:27017/webxy-develop'

  /*const URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}/${MONGO_DB}?retryWrites=true&w=majority`*/
  

  mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology: true
  })
  .then(db => console.log('conecto con mongo'))
  .catch( err => console.log('error:', err))
  module.exports = mongoose;
  