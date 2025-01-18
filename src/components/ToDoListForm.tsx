"use client";
import { useState, ChangeEvent } from "react";
import { Button } from "@/components/ui/button"; // Example import from shadcn
import { Input } from "@/components/ui/input"; // Example import from shadcn
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox"; // Import ShadCN Checkbox
import { turso } from "@/lib/turso";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const ToDoListForm: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState<string>("");

  const handleAddTask = (): void => {
    if (task.trim()) {
      const newTask: Task = {
        id: Date.now(),
        text: task,
        completed: false,
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setTask("");
    }
  };

  const handleToggleTask = (id: number): void => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const handleDeleteTask = (id: number): void => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTask(e.target.value);
  };

  return (
    <div className="mx-auto max-w-md">
      <Card>
        <CardHeader>
          <h2 className="text-center text-xl font-semibold">To-Do List</h2>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <Input
              type="text"
              placeholder="Add a new task"
              value={task}
              onChange={handleChange}
            />
            <Button onClick={handleAddTask}>Add</Button>
          </div>
          <ul className="mt-4 space-y-2">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="flex items-center justify-between rounded bg-gray-100 px-4 py-2"
              >
                <div className="flex items-center space-x-2">
                  <Checkbox
                    checked={task.completed}
                    onCheckedChange={() => handleToggleTask(task.id)}
                  />
                  <span
                    className={`${
                      task.completed ? "text-gray-500 line-through" : ""
                    }`}
                  >
                    {task.text}
                  </span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDeleteTask(task.id)}
                >
                  Delete
                </Button>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <p className="text-center text-sm text-gray-500">
            {tasks.filter((task) => !task.completed).length}{" "}
            {tasks.filter((task) => !task.completed).length === 1
              ? "task remaining"
              : "tasks remaining"}
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ToDoListForm;
