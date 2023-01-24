import { app } from "./app";
import { Response as ExResponse, Request as ExRequest } from "express";
import swaggerUi from "swagger-ui-express";

const port = process.env.PORT || 1337;

app.use("/docs", swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
  return res.send(
    swaggerUi.generateHTML(await import("../build/swagger.json"))
  );
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
