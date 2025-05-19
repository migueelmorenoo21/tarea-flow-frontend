import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { Ionicons } from "@expo/vector-icons";
import { colors } from '../../constants/theme';
import { Tarea } from '../../hooks/useTasks';
import { TaskItem } from './TaskItem';

type SwipeableTaskItemProps = {
  tarea: Tarea;
  onComplete: (id: number) => void;
  onDelete: (id: number) => void;
  onPress?: () => void;
};

export function SwipeableTaskItem({ 
  tarea, 
  onComplete, 
  onDelete,
  onPress 
}: SwipeableTaskItemProps) {
  
  const renderLeftActions = () => {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity 
          style={{
            backgroundColor: colors.success,
            justifyContent: 'center',
            alignItems: 'center',
            width: 80,
            height: '100%',
          }}
          onPress={() => onComplete(tarea.id)}
        >
          <Ionicons 
            name={tarea.completada ? "close-outline" : "checkmark-outline"} 
            size={24} 
            color="white" 
          />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={{
            backgroundColor: colors.danger,
            justifyContent: 'center',
            alignItems: 'center',
            width: 80,
            height: '100%',
          }}
          onPress={() => onDelete(tarea.id)}
        >
          <Ionicons name="trash-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Swipeable
      renderLeftActions={renderLeftActions}
      overshootLeft={false}
    >
      <TaskItem tarea={tarea} onPress={onPress} />
    </Swipeable>
  );
}