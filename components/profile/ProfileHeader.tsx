import React from 'react';
import { View, Text } from 'react-native';
import { perfilStyles } from '../../styles/perfilStyles';

type ProfileHeaderProps = {
  nombre: string;
  rol: string;
};

export function ProfileHeader({ nombre, rol }: ProfileHeaderProps) {
  return (
    <View style={perfilStyles.perfilHeader}>
      <View style={perfilStyles.avatar}>
        <Text style={perfilStyles.avatarTexto}>{nombre.charAt(0)}</Text>
      </View>
      <View style={perfilStyles.perfilInfo}>
        <Text style={perfilStyles.nombreUsuario}>{nombre}</Text>
        <Text style={perfilStyles.rolUsuario}>{rol}</Text>
        <View style={perfilStyles.estadoContainer}>
          <View style={perfilStyles.estadoIndicador} />
          <Text style={perfilStyles.estadoTexto}>Activo</Text>
        </View>
      </View>
    </View>
  );
}