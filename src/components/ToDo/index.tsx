import {
  Button,
  List,
  Typography,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
} from "@mui/material";
import { translations } from "../../data/Language/translations";
import { useLanguage } from "../../data/Language";
import { FormContainer, StyledTextField } from "../../styles";
import { Add, Edit, Delete } from "@mui/icons-material";
import { useEffect, useState } from "react";
import {
  CreateTaskData,
  DeleteTaskData,
  ReadTaskData,
  UpdateTaskData,
} from "../../utils/CRUD";
import { Task } from "../../models/Task";
import React from "react";

const ToDo = () => {
  const { language } = useLanguage();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentTask, setCurrentTask] = useState<string>("");
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editTaskId, setEditTaskId] = useState<string | null>(null);

  useEffect(() => {
    ReadTaskData(setTasks);
  }, []);

  const handleAddTask = () => {
    if (currentTask.trim()) {
      if (editIndex !== null && editTaskId !== null) {
        UpdateTaskData(editTaskId, { name: currentTask });
        setEditIndex(null);
        setEditTaskId(null);
      } else {
        CreateTaskData({ name: currentTask });
      }
      setCurrentTask("");
    }
  };

  const handleEditTask = (index: number) => {
    setCurrentTask(tasks[index].name);
    setEditIndex(index);
    setEditTaskId(tasks[index].id);
  };

  const handleDeleteTask = (taskId: string) => {
    DeleteTaskData(taskId);
  };

  return (
    <div>
      <Typography padding={2} variant="h4" gutterBottom>
        {translations[language].main.title}
      </Typography>
      <FormContainer>
        <StyledTextField
          label={translations[language].main.label}
          variant="outlined"
          value={currentTask}
          onChange={(e) => setCurrentTask(e.target.value)}
        />
        <Button
          style={{ margin: "1rem" }}
          variant="contained"
          color="primary"
          onClick={handleAddTask}
          startIcon={editIndex !== null ? <Edit /> : <Add />}
        >
          {/* {editIndex !== null
            ? translations[language].main.editButton
            : translations[language].main.addButton} */}
        </Button>
      </FormContainer>
      <List>
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <React.Fragment key={task.id}>
              <ListItem>
                <ListItemText primary={task.name} />
                <IconButton edge="end" onClick={() => handleEditTask(index)}>
                  <Edit />
                </IconButton>
                <IconButton
                  edge="end"
                  onClick={() => handleDeleteTask(task.id)}
                >
                  <Delete />
                </IconButton>
              </ListItem>
              <Divider />
            </React.Fragment>
          ))
        ) : (
          <Typography variant="body1">
            {translations[language].main.emptyList}
          </Typography>
        )}
      </List>
    </div>
  );
};

export default ToDo;
