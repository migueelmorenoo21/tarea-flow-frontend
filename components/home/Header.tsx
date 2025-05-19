import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { homeStyles } from '../../styles/homeStyles';
import { User } from '../../types/user';

type HeaderProps = {
  user: User | null;
};

export function Header({ user }: HeaderProps) {
  return (
    <View style={homeStyles.header}>
      <View>
        <Text style={homeStyles.saludo}>Hola, {user?.name}</Text>
        <Text style={homeStyles.subtituloHeader}>Tu espacio de trabajo</Text>
      </View>
      <TouchableOpacity style={homeStyles.avatarContainer}>
        <Text style={homeStyles.avatarText}>{user?.name?.charAt(0) || '?'}</Text>
      </TouchableOpacity>
    </View>
  );
}