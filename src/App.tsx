import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
  AppBar,
  Toolbar,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { Add, Edit, Delete } from "@mui/icons-material";
import { styled } from "@mui/system";

const AppContainer = styled(Container)({
  marginTop: "2rem",
});

const FormContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  marginBottom: "1rem",
});

const StyledTextField = styled(TextField)({
  marginRight: "1rem",
  flex: 1,
});

const LanguageSelector = styled(Select)({
  marginLeft: "auto",
});

const App: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [currentTask, setCurrentTask] = useState("");
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [language, setLanguage] = useState("en");

  const handleAddTask = () => {
    if (currentTask.trim()) {
      if (editIndex !== null) {
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = currentTask;
        setTasks(updatedTasks);
        setEditIndex(null);
      } else {
        setTasks([...tasks, currentTask]);
      }
      setCurrentTask("");
    }
  };

  const handleEditTask = (index: number) => {
    setCurrentTask(tasks[index]);
    setEditIndex(index);
  };

  const handleDeleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  //! Copiar language selector do languageswitcher do portifolio

  return (
    <AppContainer maxWidth="sm">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">To-Do List</Typography>
          
        </Toolbar>
      </AppBar>
      <Typography variant="h4" gutterBottom>
        {language === "en" && "My To-Do List"}
        {language === "es" && "Mi Lista de Tareas"}
        {language === "pt" && "Minha Lista de Tarefas"}
      </Typography>
      <FormContainer>
        <StyledTextField
          label={
            language === "en" ? "Task" : language === "es" ? "Tarea" : "Tarefa"
          }
          variant="outlined"
          value={currentTask}
          onChange={(e) => setCurrentTask(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddTask}
          startIcon={editIndex !== null ? <Edit /> : <Add />}
        >
          {editIndex !== null
            ? language === "en"
              ? "Update"
              : language === "es"
              ? "Actualizar"
              : "Atualizar"
            : language === "en"
            ? "Add"
            : language === "es"
            ? "Agregar"
            : "Adicionar"}
        </Button>
      </FormContainer>
      <List>
        {tasks.map((task, index) => (
          <React.Fragment key={index}>
            <ListItem>
              <ListItemText primary={task} />
              <IconButton edge="end" onClick={() => handleEditTask(index)}>
                <Edit />
              </IconButton>
              <IconButton edge="end" onClick={() => handleDeleteTask(index)}>
                <Delete />
              </IconButton>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </AppContainer>
  );
};

export default App;
