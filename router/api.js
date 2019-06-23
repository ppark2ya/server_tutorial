import express from "express";
const router = express.Router();
import pool from "../db";
import { selectLogHistory } from "../dao/LogDao";

router.use((req, res, next) => {
  console.log(`Time: ${Date.now()}`);
  next();
});

router.get("/history", async (req, res) => {
  try {
    const connection = await pool.getConnection(async conn => conn);

    const logHistList = await connection.query(selectLogHistory());

    connection.release();
    res.json({
      data: logHistList
    });
  } catch (e) {
    console.error(e);
  }
});

export default router;
