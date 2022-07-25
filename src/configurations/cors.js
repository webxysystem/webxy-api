import cors from 'cors'

const whitelist = ['http://localhost:8100', 'https://myapp.co', 'https://webxysystem.github.io'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}
cors(options)

module.exports = cors;