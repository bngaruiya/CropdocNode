const mongoose = require('mongoose');

const uploadSchema = mongoose.Schema(
  {
    imageUrl: { type: String, required: true },
    prediction: { type: String, required: true },
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Upload', uploadSchema);
