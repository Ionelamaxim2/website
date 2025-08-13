import express from "express";
import compression from "compression";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;
const distPath = path.join(__dirname, "dist");

app.use(compression());

// Serve static assets from Vite build
app.use(
  express.static(distPath, {
    maxAge: "1h",
    index: false,
  })
);

// SPA fallback to index.html
app.get("*", (_req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(port, () => {
  console.log(`Code Bloom web service listening on port ${port}`);
});
