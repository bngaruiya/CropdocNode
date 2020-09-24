const mongoAtlasPath = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cdpa.g6a80.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

module.exports = {
  mongoURI: mongoAtlasPath,
};
