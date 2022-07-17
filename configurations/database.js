import mongoose from 'mongoose';
const {
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_DB,
  } = process.env;

  //local conection
  const URI = 'mongodb://127.0.0.1:27017/webxy-develop'
  mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology: true
  })
  .then(db => console.log('conecto con mongo'))
  .catch( err => console.log('error:', err))
  module.exports = mongoose;
  
  //mongo Atlas conection
  /*
  module.exports = {
	'url': `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}`
}; */