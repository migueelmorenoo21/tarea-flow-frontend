import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { perfilStyles } from '../../styles/perfilStyles';

type TabNavigationProps = {
  seccionActiva: string;
  setSeccionActiva: (seccion: string) => void;
};

export function TabNavigation({ seccionActiva, setSeccionActiva }: TabNavigationProps) {
  return (
    <View style={perfilStyles.tabsContainer}>
      <TouchableOpacity
        style={[
          perfilStyles.tabButton,
          seccionActiva === 'personal' && perfilStyles.tabButtonActivo
        ]}
        onPress={() => setSeccionActiva('personal')}
      >
        <Text
          style={[
            perfilStyles.tabButtonText,
            seccionActiva === 'personal' && perfilStyles.tabButtonTextActivo
          ]}
        >
          Información Personal
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={[
          perfilStyles.tabButton,
          seccionActiva === 'cuenta' && perfilStyles.tabButtonActivo
        ]}
        onPress={() => setSeccionActiva('cuenta')}
      >
        <Text
          style={[
            perfilStyles.tabButtonText,
            seccionActiva === 'cuenta' && perfilStyles.tabButtonTextActivo
          ]}
        >
          Cuenta
        </Text>
      </TouchableOpacity>
    </View>
  );
}