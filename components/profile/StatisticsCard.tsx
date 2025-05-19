import React from 'react';
import { View, Text } from 'react-native';
import { perfilStyles } from '../../styles/perfilStyles';

export function StatisticsCard() {
  return (
    <View style={perfilStyles.tarjetaEstadistica}>
      <View style={perfilStyles.estadisticaItem}>
        <Text style={perfilStyles.estadisticaValor}>12</Text>
        <Text style={perfilStyles.estadisticaLabel}>Tableros</Text>
      </View>

      <View style={perfilStyles.separadorVertical} />

      <View style={perfilStyles.estadisticaItem}>
        <Text style={perfilStyles.estadisticaValor}>48</Text>
        <Text style={perfilStyles.estadisticaLabel}>Tareas</Text>
      </View>

      <View style={perfilStyles.separadorVertical} />

      <View style={perfilStyles.estadisticaItem}>
        <Text style={perfilStyles.estadisticaValor}>83%</Text>
        <Text style={perfilStyles.estadisticaLabel}>Completadas</Text>
      </View>
    </View>
  );
}