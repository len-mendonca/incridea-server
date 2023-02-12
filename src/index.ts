import { createYoga } from "graphql-yoga";
import express from "express";
import { context } from "./context";
import { schema } from "./schema";
import { handler as razorpayCapture } from "./webhook/capture";
const port = Number(process.env.API_PORT) || 4000;
const yoga = createYoga({
  context,
  schema,
});

const app = express();

app.use("/graphql", yoga);
app.use("/webhook/capture", razorpayCapture);

app.listen(port, () => {
  console.log(`🚀 Server ready at: http://localhost:4000/graphql`);
});
