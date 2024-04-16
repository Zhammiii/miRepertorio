import { app,PORT } from "./src/app.js";

/* levantar server */
app.listen(PORT, () => {
  console.log("conectado al puerto " + PORT);
});