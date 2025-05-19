import { useState, useEffect } from 'react';
import { Alert } from 'react-native';

export type Tarea = {
  id: number;
  titulo: string;
  fecha: string;
  completada: boolean;
};

export function useTasks() {
  const [tareasRecientes, setTareasRecientes] = useState<Tarea[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulación de carga de tareas
    const mockTareas: Tarea[] = [
      { id: 1, titulo: 'Actualizar diseño de login', fecha: '2025-05-16', completada: true },
      { id: 2, titulo: 'Revisar tareas pendientes del Board A', fecha: '2025-05-15', completada: false },
      { id: 3, titulo: 'Añadir navegación con expo-router', fecha: '2025-05-14', completada: true },
      { id: 4, titulo: 'Optimizar rendimiento de la app', fecha: '2025-05-13', completada: false },
    ];
    
    // Simulación de delay de carga
    setTimeout(() => {
      setTareasRecientes(mockTareas);
      setLoading(false);
    }, 500);
  }, []);
  
  const marcarCompletada = (id: number) => {
    setTareasRecientes(tareas => 
      tareas.map(tarea => 
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
      )
    );
  };

  const eliminarTarea = (id: number) => {
    Alert.alert(
      "Eliminar tarea",
      "¿Estás seguro de que quieres eliminar esta tarea?",
      [
        { text: "Cancelar", style: "cancel" },
        { 
          text: "Eliminar", 
          style: "destructive",
          onPress: () => {
            setTareasRecientes(tareas => tareas.filter(tarea => tarea.id !== id));
          }
        }
      ]
    );
  };

  // Calcular estadísticas
  const completadas = tareasRecientes.filter(t => t.completada).length;
  const pendientes = tareasRecientes.filter(t => !t.completada).length;
  const total = tareasRecientes.length;
  const porcentajeCompletado = total > 0 ? Math.round((completadas / total) * 100) : 0;

  return {
    tareasRecientes,
    loading,
    marcarCompletada,
    eliminarTarea,
    stats: {
      completadas,
      pendientes,
      total,
      porcentajeCompletado
    }
  };
}