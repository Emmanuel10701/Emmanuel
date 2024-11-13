// pages/api/tasks.js
import prisma from '../../lib/prisma';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const tasks = await prisma.task.findMany();
    res.json(tasks);
  } else if (req.method === 'POST') {
    const { title } = req.body;
    const newTask = await prisma.task.create({
      data: { title },
    });
    res.json(newTask);
  } else {
    res.status(405).end();
  }
}
