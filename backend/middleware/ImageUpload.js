const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const s3Storage = require('multer-sharp-s3');

const s3 = new aws.S3();

aws.config.update({
  secretAccessKey: process.env.S3_ACCESS_SECRET,
  accessKeyId: process.env.S3_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. JPEG and PNG files only allowed!'), false);
  }
};

const upload = multer({
  fileFilter,
  storage: s3Storage({
    acl: 'public-read',
    s3,
    Bucket: process.env.S3_BUCKET,
    resize: {
      width: 256,
      height: 256,
    },
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.originalname });
    },
    key: function (req, file, cb) {
      const prefix = req.body.prediction;
      const path =
        `${prefix}/` + Date.now().toString() + '_' + file.originalname;
      cb(null, path);
    },
  }),
});

module.exports = upload;
