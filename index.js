import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

console.log("El valor del PORT environment variable es", process.env.PORT);

app.get("/", (req, res) => {

    res.send(`<h1>Docker en la etapa: ${process.env.NODE_ENV} </h1>`)

})

app.listen(PORT, () => console.log("Con el node_modules eliminado y vuelto a crear"))