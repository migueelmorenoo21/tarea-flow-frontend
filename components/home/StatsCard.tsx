import React from 'react';
import { View, Text } from 'react-native';
import { homeStyles } from '../../styles/homeStyles';
import { colors, shadows } from '../../constants/theme';

type StatsCardProps = {
  porcentajeCompletado: number;
  completadas: number;
  pendientes: number;
};

export function StatsCard({ porcentajeCompletado, completadas, pendientes }: StatsCardProps) {
  return (
    <View style={homeStyles.statsContainer}>
      <View style={[homeStyles.statsCard, shadows.default]}>
        <View style={homeStyles.statsHeader}>
          <Text style={homeStyles.statsTitle}>Resumen de actividad</Text>
          <Text style={homeStyles.statsPercent}>{porcentajeCompletado}%</Text>
        </View>
        
        <View style={homeStyles.progressBarContainer}>
          <View style={[homeStyles.progressBar, { width: `${porcentajeCompletado}%` }]} />
        </View>
        
        <View style={homeStyles.statsDetails}>
          <View style={homeStyles.statItem}>
            <View style={[homeStyles.statDot, { backgroundColor: colors.success }]} />
            <Text style={homeStyles.statText}>Completadas: {completadas}</Text>
          </View>
          <View style={homeStyles.statItem}>
            <View style={[homeStyles.statDot, { backgroundColor: colors.warning }]} />
            <Text style={homeStyles.statText}>Pendientes: {pendientes}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}