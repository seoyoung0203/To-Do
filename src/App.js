import React, { useState } from 'react';
import { StatusBar, Dimensions } from 'react-native';
import styled, { ThemeProvider } from 'styled-components';
import Input from './components/Input';
import { theme } from './theme';
import Task from './components/Task';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.Text`
  font-size: 40px;
  font-weight: 600;
  color: ${({ theme }) => theme.main};
  width: 100%;
  align-items: flex-end;
  padding: 0 20px;
`;

const List = styled.ScrollView`
  flex: 1;
  width: ${({ width }) => width - 40}px;
`;

export default function App() {
  const width = Dimensions.get('window').width;

  const tempData = {
    1: { id: '1', text: 'react-native', completed: false },
    2: { id: '2', text: 'expo', completed: true },
    3: { id: '3', text: 'javascript', completed: false },
  };
  const [tasks, setTasks] = useState(tempData);

  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.length < 1) {
      return;
    }
    const ID = Date.now().toString();
    const newTaskObject = {
      [ID]: { id: ID, text: newTask, completed: false },
    };
    setNewTask('');
    alert('new Task!');
    setTasks({ ...tasks, ...newTaskObject });
  };
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Title>TO_DO List</Title>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.background}
        />
        <Input
          placeholder="+ Add a Task"
          value={newTask}
          onChangeText={(text) => setNewTask(text)}
          onSubmitEditing={addTask}
        />
        <List width={width}>
          {Object.values(tasks)
            .reverse()
            .map((item) => (
              <Task key={item.id} text={item.text} />
            ))}
        </List>
      </Container>
    </ThemeProvider>
  );
}
