const Upload = require('../models/upload');
const deleteS3Upload = require('../middleware/deleteUpload');

exports.createUpload = (req, res, next) => {
  const newUpload = new Upload({
    imageUrl: req.file.Location,
    prediction: req.body.prediction,
    postedBy: req.user._id,
  });
  newUpload
    .save()
    .then(() => {
      res.status(201).json({
        msg: 'Upload Saved',
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.getOneUpload = (req, res, next) => {
  Upload.findOne({
    id: _id,
  })
    .then((upload) => {
      res.status(200).json({
        upload,
      });
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};

exports.deleteUpload = (req, res, next) => {
  Upload.findOne({
    _id: req.params.id,
  })
    .then((upload) => {
      deleteS3Upload(upload);
    })
    .then(() => {
      res.status(200).json({
        msg: 'File deleted',
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.getAllUploads = (req, res, next) => {
  Upload.find({ postedBy: req.user._id })
    .populate('postedBy')
    .sort({ createdAt: -1 })
    .then((uploads) => {
      res.status(200).json(uploads);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
