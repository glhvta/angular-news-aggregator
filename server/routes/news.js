const express = require("express");
const router = express.Router();

const { read, create, update, deleteNews } = require("../storage/news");

router.get("/", async (req, res) => {
  try {
    const news = await read();

    res.json(news);
  } catch (e) {
    res.sendStatus(500);
  }

  res.end();
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const news = await read(id);

    res.json(news);
  } catch (e) {
    res.sendStatus(500);
  }

  res.end();
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;

    await update(id, body);
  } catch (e) {
    res.sendStatus(500);
  }

  res.end();
});

router.post("/", async (req, res) => {
  try {
    const body = req.body;

    await create(body);
  } catch (e) {
    res.sendStatus(500);
  }

  res.end();
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await deleteNews(id);
  } catch (e) {
    res.sendStatus(500);
  }

  res.end();
});

module.exports = router;
