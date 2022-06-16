const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'kleekit',
  api_key: '432676379194461',
  api_secret: 'p4WW-2xpBhPLW6duHkmSjlVMmVs',
});

export default cloudinary;
