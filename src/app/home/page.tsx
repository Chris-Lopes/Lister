import ToDoListForm from "@/components/ToDoListForm";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-black p-4 text-white">
      <ToDoListForm />
    </div>
  );
};

export default HomePage;
