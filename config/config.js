// config/config.js

 const mongodb_uri = 'mongodb+srv://click-counts:6mt-ywsT*hqZtrM@cluster0.4os8zzo.mongodb.net/CountDB?retryWrites=true&w=majority'

 
 // Generate a random JWT secret value
 const jwtSecret = "b7d8f0cbaf1aa4539768ffb69099504dc88da038bf6c3a9e1f61520ef2f47e902855b72a7b469d133fddcb10b2d59ba193ce4364f60a2c18e5339e391caef220";

 module.exports = {jwtSecret , mongodb_uri};
