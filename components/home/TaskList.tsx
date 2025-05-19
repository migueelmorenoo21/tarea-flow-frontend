import React from 'react';
import { ScrollView, View, Text, Platform } from 'react-native';
import { homeStyles } from '../../styles/homeStyles';
import { Tarea } from '../../hooks/useTasks';
import { TaskItem } from './TaskItem';
import { SwipeableTaskItem } from './SwipeableTaskItem';

type TaskListProps = {
  tareas: Tarea[];
  loading: boolean;
  onComplete: (id: number) => void;
  onDelete: (id: number) => void;
  onTaskPress?: (tarea: Tarea) => void;
};

export function TaskList({ 
  tareas, 
  loading, 
  onComplete, 
  onDelete,
  onTaskPress
}: TaskListProps) {
  return (
    <>
      <Text style={homeStyles.sectionTitle}>Tareas recientes</Text>
      <ScrollView 
        contentContainerStyle={homeStyles.listaTareas}
        showsVerticalScrollIndicator={false}
      >
        {loading ? (
          <View style={homeStyles.loadingContainer}>
            <Text style={homeStyles.textoSecundario}>Cargando tareas...</Text>
          </View>
        ) : (
          tareas.map((tarea) => (
            Platform.OS === 'web' ? (
              <TaskItem 
                key={tarea.id} 
                tarea={tarea} 
                onPress={() => onTaskPress && onTaskPress(tarea)}
              />
            ) : (
              <SwipeableTaskItem
                key={tarea.id}
                tarea={tarea}
                onComplete={onComplete}
                onDelete={onDelete}
                onPress={() => onTaskPress && onTaskPress(tarea)}
              />
            )
          ))
        )}
      </ScrollView>
    </>
  );
}