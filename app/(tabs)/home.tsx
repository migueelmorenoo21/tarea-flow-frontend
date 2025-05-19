import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useUser } from '../../hooks/useUser';
import { useTasks, Tarea } from '../../hooks/useTasks';
import { homeStyles } from '../../styles/homeStyles';

// Componentes
import { Header } from '../../components/home/Header';
import { StatsCard } from '../../components/home/StatsCard';
import { ActionButtons } from '../../components/home/ActionButton';
import { TaskList } from '../../components/home/TaskList';

export default function Home() {
  const router = useRouter();
  const { user } = useUser();
  const { 
    tareasRecientes, 
    loading, 
    marcarCompletada, 
    eliminarTarea,
    stats 
  } = useTasks();

  const handleViewBoards = () => {
    router.push('/tableros');
  };

  const handleNewTask = () => {
    // Implementar creación de nueva tarea
    console.log('Crear nueva tarea');
  };

  const handleTaskPress = (tarea: Tarea) => {
    // Implementar vista de detalle de tarea
    console.log('Tarea seleccionada:', tarea);
  };

  return (
    <SafeAreaView style={homeStyles.container} edges={['top', 'left', 'right']}>
      <Header user={user} />
      
      <StatsCard 
        porcentajeCompletado={stats.porcentajeCompletado}
        completadas={stats.completadas}
        pendientes={stats.pendientes}
      />
      
      <ActionButtons 
        onViewBoards={handleViewBoards} 
        onNewTask={handleNewTask}
      />
      
      <TaskList 
        tareas={tareasRecientes}
        loading={loading}
        onComplete={marcarCompletada}
        onDelete={eliminarTarea}
        onTaskPress={handleTaskPress}
      />
    </SafeAreaView>
  );
}