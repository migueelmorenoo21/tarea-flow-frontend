import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { perfilStyles } from '../../styles/perfilStyles';
import { StatisticsCard } from './StatisticsCard';

type AccountFormProps = {
  email: string;
  setEmail: (value: string) => void;
};

export function AccountForm({ email, setEmail }: AccountFormProps) {
  return (
    <View style={perfilStyles.seccion}>
      <View style={perfilStyles.campoContainer}>
        <Text style={perfilStyles.label}>Correo electrónico</Text>
        <TextInput
          style={perfilStyles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="tu@email.com"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={perfilStyles.estadisticasUsuario}>
        <Text style={perfilStyles.estadisticasTitulo}>Estadísticas de cuenta</Text>
        <StatisticsCard />
      </View>

      <TouchableOpacity style={perfilStyles.botonCambiarPass}>
        <Text style={perfilStyles.botonCambiarPassTexto}>Cambiar contraseña</Text>
      </TouchableOpacity>
    </View>
  );
}