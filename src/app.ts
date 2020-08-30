import express, { Response as ExResponse, Request as ExRequest } from "express";
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";
import { RegisterRoutes } from "../build/routes";

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());
RegisterRoutes(app);

app.use(
  "/swagger",
  swaggerUi.serve,
  async (_req: ExRequest, res: ExResponse) => {
    return res.send(
      swaggerUi.generateHTML(await import("../build/swagger.json"))
    );
  }
);

export default app;
