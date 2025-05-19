import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { perfilStyles } from '../../styles/perfilStyles';

type PersonalInfoFormProps = {
  nombre: string;
  setNombre: (value: string) => void;
  rol: string;
  setRol: (value: string) => void;
  bio: string;
  setBio: (value: string) => void;
  pais: string;
  setPais: (value: string) => void;
};

export function PersonalInfoForm({ 
  nombre, setNombre, 
  rol, setRol, 
  bio, setBio, 
  pais, setPais 
}: PersonalInfoFormProps) {
  return (
    <View style={perfilStyles.seccion}>
      <View style={perfilStyles.campoContainer}>
        <Text style={perfilStyles.label}>Nombre completo</Text>
        <TextInput
          style={perfilStyles.input}
          value={nombre}
          onChangeText={setNombre}
          placeholder="Tu nombre completo"
        />
      </View>

      <View style={perfilStyles.campoContainer}>
        <Text style={perfilStyles.label}>Rol profesional</Text>
        <TextInput
          style={perfilStyles.input}
          value={rol}
          onChangeText={setRol}
          placeholder="Tu rol o puesto"
        />
      </View>

      <View style={perfilStyles.campoContainer}>
        <Text style={perfilStyles.label}>Biografía</Text>
        <TextInput
          style={[perfilStyles.input, perfilStyles.textAreaInput]}
          value={bio}
          onChangeText={setBio}
          multiline
          placeholder="Cuéntanos sobre ti"
          textAlignVertical="top"
        />
      </View>

      <View style={perfilStyles.campoContainer}>
        <Text style={perfilStyles.label}>País</Text>
        <TextInput
          style={perfilStyles.input}
          value={pais}
          onChangeText={setPais}
          placeholder="Tu país de residencia"
        />
      </View>
    </View>
  );
}