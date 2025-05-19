import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useUser } from '../../hooks/useUser';
import { useUpdateProfile } from '../../hooks/useUpdateProfile';
import { perfilStyles } from '../../styles/perfilStyles';
import { useAuth } from '../../context/AuthContext';

import { ProfileHeader } from '../../components/profile/ProfileHeader';
import { TabNavigation } from '../../components/profile/TabNavigation';
import { PersonalInfoForm } from '../../components/profile/PersonalInfoForm';
import { AccountForm } from '../../components/profile/AccountForm';

import { useEffect, useState } from 'react';

export default function Perfil() {
  const { token } = useAuth();
  const { user, loading, error } = useUser();
  const {
    name, setName,
    bio, setBio,
    pais, setPais,
    profesion, setProfesion,
    handleSave,
  } = useUpdateProfile(token);

  const [email, setEmail] = useState('');
  const [editado, setEditado] = useState(false);
  const [seccionActiva, setSeccionActiva] = useState('personal');

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setBio(user.bio || '');
      setPais(user.pais || '');
      setProfesion(user.profesion || '');
    }
  }, [user]);

  const datosIniciales: {
    nombre: string;
    email: string;
    bio: string;
    pais: string;
    profesion: string;
  } = {
    nombre: user?.name || '',
    email: user?.email || '',
    bio: user?.bio || '',
    pais: user?.pais || '',
    profesion: user?.profesion || '',
  };

  useEffect(() => {
    if (
      name !== datosIniciales.nombre ||
      email !== datosIniciales.email ||
      bio !== datosIniciales.bio ||
      pais !== datosIniciales.pais ||
      profesion !== datosIniciales.profesion
    ) {
      setEditado(true);
    } else {
      setEditado(false);
    }
  }, [name, email, bio, pais, profesion]);

  const handleCancelar = () => {
    setName(datosIniciales.nombre);
    setEmail(datosIniciales.email);
    setBio(datosIniciales.bio);
    setPais(datosIniciales.pais);
    setProfesion(datosIniciales.profesion);
    setEditado(false);
  };

  const guardarCambios = async () => {
    try {
      const updatedUser = await handleSave();
      console.log('Perfil actualizado:', updatedUser);
      setEditado(false);
    } catch (error) {
      console.error('Error al guardar cambios:', error);
    }
  };

  if (loading) {
    return (
      <SafeAreaView style={perfilStyles.container}>
        <Text style={perfilStyles.titulo}>Cargando perfil...</Text>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={perfilStyles.container}>
        <Text style={perfilStyles.titulo}>Error: {error}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={perfilStyles.container} edges={['top', 'left', 'right']}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={perfilStyles.keyboardAvoid}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={perfilStyles.scrollContent}
        >
          {/* Header con botón para cancelar cambios */}
          <View style={perfilStyles.header}>
            <Text style={perfilStyles.titulo}>Hola {name}</Text>
            {editado && (
              <TouchableOpacity style={perfilStyles.botonCancelar} onPress={handleCancelar}>
                <Text style={perfilStyles.botonCancelarTexto}>Cancelar</Text>
              </TouchableOpacity>
            )}
          </View>

          {/* Avatar e Información del perfil */}
          <ProfileHeader nombre={name} rol={profesion} />

          {/* Tabs de navegación */}
          <TabNavigation
            seccionActiva={seccionActiva}
            setSeccionActiva={setSeccionActiva}
          />

          {/* Formulario editable */}
          {seccionActiva === 'personal' ? (
            <PersonalInfoForm
              nombre={name}
              setNombre={setName}
              rol={profesion}
              setRol={setProfesion}
              bio={bio}
              setBio={setBio}
              pais={pais}
              setPais={setPais}
            />
          ) : (
            <AccountForm
              email={email}
              setEmail={setEmail}
            />
          )}

          {/* Botón de guardar cambios */}
          {editado && (
            <TouchableOpacity style={perfilStyles.botonGuardar} onPress={guardarCambios}>
              <Text style={perfilStyles.botonTexto}>Guardar cambios</Text>
            </TouchableOpacity>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}