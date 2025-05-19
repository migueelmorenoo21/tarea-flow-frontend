import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { homeStyles } from '../../styles/homeStyles';

type ActionButtonsProps = {
  onViewBoards: () => void;
  onNewTask: () => void;
};

export function ActionButtons({ onViewBoards, onNewTask }: ActionButtonsProps) {
  return (
    <View style={homeStyles.actionsRow}>
      <TouchableOpacity onPress={onViewBoards} style={homeStyles.botonPrincipal}>
        <Text style={homeStyles.botonTexto}>Ver mis tableros</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={onNewTask} style={homeStyles.botonSecundario}>
        <Text style={homeStyles.botonTextoSecundario}>+ Nueva tarea</Text>
      </TouchableOpacity>
    </View>
  );
}