const config = {
  env: //process.env.NODE_ENV || 'development',
  'https://mern-social2022.herokuapp.com/',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: //process.env.MONGODB_URI ||
  //   process.env.MONGO_HOST ||
  //   'mongodb://' + (process.env.IP || 'localhost') + ':' +
  //   (process.env.MONGO_PORT || '27017') +
  //   '/mernproject'
  'mongodb+srv://Iftekhar:IAmongodb2022@mernskeleton.g1lmx.mongodb.net/mernSkeleton?retryWrites=true&w=majority'
}

export default config
