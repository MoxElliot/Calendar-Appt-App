import { connectToDatabase } from "../../libs/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  // Take user input
  const { date } = req.date;
  const { time } = req.time;
  const { status } = req.status;
  const { detail } = req.detail;
  const { attachment } = req.attachment;
  const { name } = req.name;
  const { link } = req.link;
  // Insert a document into the collection
  const response = db.collection("lessonDB").insertOne({
    date,
    time,
    status,
    detail,
    attachment,
    name,
    link,
  });
  // Send a response
  res.status(200).json({
    data: await db.collection("lessonDB").findOne({ id: response.insertedId }),
    message: "Lesson added successfully",
  });
}