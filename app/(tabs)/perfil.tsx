import { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useUser } from '../../hooks/useUser';
import { perfilStyles } from '../../styles/perfilStyles';

// Importaciones de componentes
import { ProfileHeader } from '../../components/profile/ProfileHeader';
import { TabNavigation } from '../../components/profile/TabNavigation';
import { PersonalInfoForm } from '../../components/profile/PersonalInfoForm';
import { AccountForm } from '../../components/profile/AccountForm';

export default function Perfil() {
  const { user, loading, error } = useUser();

  // Estados locales para los campos editables
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('miguel@ejemplo.com');
  const [bio, setBio] = useState('Desarrollador de Tarea Flow');
  const [pais, setPais] = useState('España');
  const [rol, setRol] = useState('Desarrollador Frontend');
  const [editado, setEditado] = useState(false);
  const [seccionActiva, setSeccionActiva] = useState('personal');

  // Cuando cargue el usuario, sincroniza su nombre y email
  useEffect(() => {
    if (user) {
      setNombre(user.name);
      setEmail(user.email);
    }
  }, [user]);

  // Datos iniciales para comparación
  const datosIniciales = {
    nombre: user?.name || 'Miguel Ángel',
    email: user?.email || 'miguel@ejemplo.com',
    bio: 'Desarrollador de Tarea Flow',
    pais: 'España',
    rol: 'Desarrollador Frontend',
  };

  // Detectar cambios
  useEffect(() => {
    if (
      nombre !== datosIniciales.nombre ||
      email !== datosIniciales.email ||
      bio !== datosIniciales.bio ||
      pais !== datosIniciales.pais ||
      rol !== datosIniciales.rol
    ) {
      setEditado(true);
    } else {
      setEditado(false);
    }
  }, [nombre, email, bio, pais, rol]);

  const handleGuardar = () => {
    console.log('Cambios guardados:', { nombre, email, bio, pais, rol });
    setEditado(false);
  };

  const handleCancelar = () => {
    setNombre(datosIniciales.nombre);
    setEmail(datosIniciales.email);
    setBio(datosIniciales.bio);
    setPais(datosIniciales.pais);
    setRol(datosIniciales.rol);
    setEditado(false);
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
            <Text style={perfilStyles.titulo}>Hola {nombre}</Text>
            {editado && (
              <TouchableOpacity style={perfilStyles.botonCancelar} onPress={handleCancelar}>
                <Text style={perfilStyles.botonCancelarTexto}>Cancelar</Text>
              </TouchableOpacity>
            )}
          </View>

          {/* Avatar e Información del perfil */}
          <ProfileHeader nombre={nombre} rol={rol} />
          
          {/* Tabs de navegación */}
          <TabNavigation 
            seccionActiva={seccionActiva} 
            setSeccionActiva={setSeccionActiva} 
          />

          {/* Contenido según la pestaña activa */}
          {seccionActiva === 'personal' ? (
            <PersonalInfoForm 
              nombre={nombre}
              setNombre={setNombre}
              rol={rol}
              setRol={setRol}
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

          {/* Botón para guardar cambios */}
          {editado && (
            <TouchableOpacity style={perfilStyles.botonGuardar} onPress={handleGuardar}>
              <Text style={perfilStyles.botonTexto}>Guardar cambios</Text>
            </TouchableOpacity>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}