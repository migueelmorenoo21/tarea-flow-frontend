import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { homeStyles } from '../../styles/homeStyles';
import { colors, shadows } from '../../constants/theme';
import { Tarea } from '../../hooks/useTasks';

type TaskItemProps = {
  tarea: Tarea;
  onPress?: () => void;
};

export function TaskItem({ tarea, onPress }: TaskItemProps) {
  return (
    <TouchableOpacity 
      style={[homeStyles.cardTarea, shadows.default]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <View style={homeStyles.tareaHeader}>
        <Text 
          style={[
            homeStyles.tituloTarea, 
            tarea.completada && homeStyles.tareaCompletada
          ]}
        >
          {tarea.titulo}
        </Text>
        {tarea.completada && (
          <View style={homeStyles.checkmarkContainer}>
            <Text style={homeStyles.checkmark}>✓</Text>
          </View>
        )}
      </View>
      <View style={homeStyles.tareaFooter}>
        <Text style={homeStyles.fechaTarea}>{tarea.fecha}</Text>
        <View style={[
          homeStyles.estadoIndicador, 
          { backgroundColor: tarea.completada ? colors.success : colors.warning }
        ]} />
      </View>
    </TouchableOpacity>
  );
}