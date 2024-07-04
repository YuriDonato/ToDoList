import { Task, emptyTask } from "../models/Task";
import * as db from "../services/firebase";

export function CreateTaskData(newTask: Partial<Task>) {
  const newKey = db.push(db.child(db.ref(db.database), `/tasks`)).key;

  if (newKey) {
    db.set(db.ref(db.database, `/tasks/${newKey}`), {
      name: newTask.name,
    });
  }
}

export function ReadTaskData(callback: (tasks: Task[]) => void) {
  const ref = db.ref(db.database, `/tasks`);

  db.onValue(ref, (snapshot) => {
    const resultTasks = Object.entries<Task>(snapshot.val() ?? {}).map(
      ([key, value]) => ({
        id: key,
        name: value.name,
      })
    );
    callback(resultTasks);
  });
}

export function UpdateTaskData(taskId: string, updatedTask: Partial<Task>) {
  const refTask = db.ref(db.database, `/tasks/${taskId}`);

  return db.update(refTask, {
    name: updatedTask.name,
  });
}

export function DeleteTaskData(taskId: string) {
  db.remove(db.ref(db.database, `/tasks/${taskId}`));
}

export function getTaskCounter(): Promise<number> {
  return new Promise((resolve, reject) => {
    const refTasks = db.ref(db.database, `/tasks`);

    db.onValue(
      refTasks,
      (snapshot) => {
        const tasksData = snapshot.val();
        if (tasksData) {
          resolve(Object.keys(tasksData).length);
        } else {
          resolve(0);
        }
      },
      (error) => {
        reject(error);
      }
    );
  });
}
