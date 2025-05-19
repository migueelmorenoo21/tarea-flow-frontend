import { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  StyleSheet,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [occupation, setOccupation] = useState('');
  const [accountType, setAccountType] = useState('personal');
  const [currentStep, setCurrentStep] = useState(1);
  const router = useRouter();

  const validateFirstStep = () => {
    if (!name || !email) return false;
    return true;
  };

  const validateSecondStep = () => {
    if (!password || password !== confirmPassword) return false;
    return true;
  };

  const goToNextStep = () => {
    if (currentStep === 1 && validateFirstStep()) {
      setCurrentStep(2);
    } else if (currentStep === 2 && validateSecondStep()) {
      setCurrentStep(3);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const register = async () => {
    try {
    const res = await fetch('http://192.168.1.155:8080/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          name, 
          email, 
          password, 
          occupation,
          accountType
        }),
      });

      if (res.ok) {
        alert('¡Cuenta creada con éxito! Inicia sesión ahora.');
        router.replace('/login');
      } else {
        const data = await res.json();
        alert(data.message || 'Error al registrarse');
      }
    } catch (err) {
      alert('Error de red');
    }
  };

  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return (
          <View style={styles.formContainer}>
            <Text style={styles.sectionTitle}>Datos básicos</Text>
            
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Nombre completo</Text>
              <TextInput
                style={styles.input}
                placeholder="Ingresa tu nombre completo"
                value={name}
                onChangeText={setName}
              />
            </View>
            
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Correo electrónico</Text>
              <TextInput
                style={styles.input}
                placeholder="ejemplo@correo.com"
                autoCapitalize="none"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
            </View>
            
            <TouchableOpacity 
              style={[styles.button, validateFirstStep() ? styles.primaryButton : styles.disabledButton]}
              onPress={goToNextStep}
              disabled={!validateFirstStep()}
            >
              <Text style={styles.buttonText}>Continuar</Text>
            </TouchableOpacity>
          </View>
        );
      
      case 2:
        return (
          <View style={styles.formContainer}>
            <Text style={styles.sectionTitle}>Seguridad</Text>
            
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Contraseña</Text>
              <TextInput
                style={styles.input}
                placeholder="Mínimo 8 caracteres"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
            </View>
            
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Confirmar contraseña</Text>
              <TextInput
                style={styles.input}
                placeholder="Repite tu contraseña"
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
            </View>
            
            <View style={styles.buttonRow}>
              <TouchableOpacity 
                style={[styles.button, styles.secondaryButton, { flex: 1, marginRight: 8 }]}
                onPress={goToPreviousStep}
              >
                <Text style={styles.secondaryButtonText}>Atrás</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={[
                  styles.button, 
                  validateSecondStep() ? styles.primaryButton : styles.disabledButton,
                  { flex: 1 }
                ]}
                onPress={goToNextStep}
                disabled={!validateSecondStep()}
              >
                <Text style={styles.buttonText}>Continuar</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      
      case 3:
        return (
          <View style={styles.formContainer}>
            <Text style={styles.sectionTitle}>Detalles finales</Text>
            
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>¿A qué te dedicas?</Text>
              <TextInput
                style={styles.input}
                placeholder="Ej: Diseñador, Desarrollador, Estudiante..."
                value={occupation}
                onChangeText={setOccupation}
              />
            </View>
            
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Tipo de cuenta</Text>
              
              <View style={styles.accountTypeRow}>
                <TouchableOpacity 
                  style={[
                    styles.accountTypeOption,
                    accountType === 'personal' && styles.accountTypeSelected
                  ]}
                  onPress={() => setAccountType('personal')}
                >
                  <View style={styles.accountTypeContent}>
                    <Ionicons 
                      name="person-outline" 
                      size={24} 
                      color={accountType === 'personal' ? '#3b82f6' : '#6b7280'} 
                    />
                    <Text style={[
                      styles.accountTypeTitle,
                      accountType === 'personal' && styles.accountTypeSelectedText
                    ]}>Personal</Text>
                    <Text style={styles.accountTypeDescription}>Para uso individual</Text>
                  </View>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  style={[
                    styles.accountTypeOption,
                    accountType === 'business' && styles.accountTypeSelected
                  ]}
                  onPress={() => setAccountType('business')}
                >
                  <View style={styles.accountTypeContent}>
                    <Ionicons 
                      name="briefcase-outline" 
                      size={24} 
                      color={accountType === 'business' ? '#3b82f6' : '#6b7280'} 
                    />
                    <Text style={[
                      styles.accountTypeTitle,
                      accountType === 'business' && styles.accountTypeSelectedText
                    ]}>Empresa</Text>
                    <Text style={styles.accountTypeDescription}>Para equipos y negocios</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            
            <View style={styles.buttonRow}>
              <TouchableOpacity 
                style={[styles.button, styles.secondaryButton, { flex: 1, marginRight: 8 }]}
                onPress={goToPreviousStep}
              >
                <Text style={styles.secondaryButtonText}>Atrás</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={[styles.button, styles.primaryButton, { flex: 1 }]}
                onPress={register}
              >
                <Text style={styles.buttonText}>Crear cuenta</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidContainer}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.wrapper}>
            {/* Header */}
            <View style={styles.header}>
              <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                <Ionicons name="chevron-back" size={24} color="#374151" />
              </TouchableOpacity>
              <View>
                <Text style={styles.title}>Crear cuenta</Text>
                <Text style={styles.subtitle}>Comenzar a usar Tarea Flow</Text>
              </View>
            </View>

            {/* Progress Indicator */}
            <View style={styles.progressContainer}>
              {[1, 2, 3].map((step) => (
                <View key={step} style={styles.progressStep}>
                  <View 
                    style={[
                      styles.progressIndicator,
                      currentStep >= step ? styles.activeIndicator : styles.inactiveIndicator
                    ]}
                  >
                    {currentStep > step ? (
                      <Ionicons name="checkmark" size={16} color="white" />
                    ) : (
                      <Text style={styles.stepNumber}>{step}</Text>
                    )}
                  </View>
                  
                  {step < 3 && (
                    <View 
                      style={[
                        styles.progressLine,
                        currentStep > step ? styles.activeLine : styles.inactiveLine
                      ]}
                    />
                  )}
                </View>
              ))}
            </View>

            {/* Form Content */}
            <View style={styles.formWrapper}>
              {renderStep()}
            </View>

            {/* Footer */}
            <View style={styles.footer}>
              <TouchableOpacity onPress={() => router.replace('/login')}>
                <Text style={styles.footerText}>¿Ya tienes una cuenta? Inicia sesión</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  keyboardAvoidContainer: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  wrapper: {
    flex: 1,
    padding: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  backButton: {
    marginRight: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  subtitle: {
    fontSize: 14,
    color: '#6b7280',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  progressStep: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressIndicator: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeIndicator: {
    backgroundColor: '#3b82f6',
  },
  inactiveIndicator: {
    backgroundColor: '#e5e7eb',
  },
  stepNumber: {
    color: '#fff',
    fontWeight: '500',
  },
  progressLine: {
    height: 4,
    width: 40,
  },
  activeLine: {
    backgroundColor: '#3b82f6',
  },
  inactiveLine: {
    backgroundColor: '#e5e7eb',
  },
  formWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    width: '100%',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#374151',
    marginBottom: 16,
  },
  inputGroup: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4b5563',
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#f9fafb',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#1f2937',
  },
  button: {
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  primaryButton: {
    backgroundColor: '#3b82f6',
  },
  disabledButton: {
    backgroundColor: '#d1d5db',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#d1d5db',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
  },
  secondaryButtonText: {
    color: '#4b5563',
    fontWeight: '500',
    fontSize: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 16,
  },
  accountTypeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  accountTypeOption: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    padding: 16,
    marginRight: 8,
  },
  accountTypeSelected: {
    borderColor: '#3b82f6',
    backgroundColor: '#eff6ff',
  },
  accountTypeContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  accountTypeTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#4b5563',
    marginTop: 8,
  },
  accountTypeSelectedText: {
    color: '#3b82f6',
  },
  accountTypeDescription: {
    fontSize: 12,
    color: '#6b7280',
    textAlign: 'center',
    marginTop: 4,
  },
  footer: {
    marginTop: 24,
    marginBottom: 16,
    alignItems: 'center',
  },
  footerText: {
    color: '#3b82f6',
    fontSize: 14,
  },
});