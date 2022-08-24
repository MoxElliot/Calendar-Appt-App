import { connectToDatabase } from "../../libs/mongodb";

export default async function showLessonData(req, res) {
  const { db } = await connectToDatabase();
  // Send all the lessonDB
  const lessons = await db
  .collection("lessonDB")
  .find({})
  .toArray();

  res.json(lessons);
};
