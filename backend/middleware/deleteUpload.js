const aws = require('aws-sdk');

const s3 = new aws.S3({
  secretAccessKey: process.env.S3_ACCESS_SECRET,
  accessKeyId: process.env.S3_ACCESS_KEY,
  region: 'us-east-1',
});

const deleteS3Upload = (upload) => {
  const key = upload.imageUrl.split('.com/')[1];
  let params = {
    Bucket: process.env.BUCKET,
    Key: key,
  };
  s3.deleteObject(params, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Deleted!!');
    }
  });
};

module.exports = deleteS3Upload;
