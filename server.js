const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: "/config.env" });

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});