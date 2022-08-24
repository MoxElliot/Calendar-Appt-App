import { connectToDatabase } from "../../libs/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  // Send all the lessonDB
  const lessons = await db
  .collection("lessonDB")
  .find({})
  .toArray();
  res.status(200).json(lessons);
};
