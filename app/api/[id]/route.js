// pages/api/tasks/[id].js
import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
  const taskId = parseInt(req.query.id);

  if (req.method === 'PUT') {
    const { completed } = req.body;
    const updatedTask = await prisma.task.update({
      where: { id: taskId },
      data: { completed },
    });
    res.json(updatedTask);
  } else if (req.method === 'DELETE') {
    await prisma.task.delete({
      where: { id: taskId },
    });
    res.json({ message: 'Task deleted' });
  } else {
    res.status(405).end();
  }
}
