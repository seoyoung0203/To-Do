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
  const [newTask, setNewTask] = useState('');
  const addTask = () => {
    alert('new Task!');
    setNewTask('');
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
          <Task text="React Native" />
          <Task text="React Native1" />
          <Task text="React Native2" />
          <Task text="React Native3" />
          <Task text="React Native4" />
          <Task text="React Native5" />
          <Task text="React Native6" />
          <Task text="React Native7" />
        </List>
      </Container>
    </ThemeProvider>
  );
}
