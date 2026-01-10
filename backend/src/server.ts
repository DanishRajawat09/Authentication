import app from "./app.js";
import { PORT } from "./config/env.js";
import connectDB from "./db/dbConnect.js";

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Mongodb Connection Failed !!!", error);
  });
