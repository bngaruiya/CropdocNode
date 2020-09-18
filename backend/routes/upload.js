const express = require('express');
const router = express.Router();
// const passport = require('passport');

const uploadCtrl = require('../controllers/uploads');
const upload = require('../middleware/ImageUpload');

singleUpload = upload.single('image');

router.get('/', uploadCtrl.getAllUploads);
router.post('/', singleUpload, uploadCtrl.createUpload);
router.get('/:id', uploadCtrl.getOneUpload);
router.delete('/:id', uploadCtrl.deleteUpload);

module.exports = router;
