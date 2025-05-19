import { Tabs, Redirect, usePathname } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useAuth } from "../../context/AuthContext";

export default function Layout() {
  const { isAuthenticated } = useAuth();
  const pathname = usePathname();

  // Excepciones para páginas públicas
  const isPublic = pathname === "/login" || pathname === "/register";

  if (!isAuthenticated && !isPublic) {
    return <Redirect href="/login" />;
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#3B82F6",
          tabBarInactiveTintColor: "#999",
          tabBarStyle: { paddingBottom: 5 },
        }}
      >
        {/* Añadir index pero ocultarlo del navbar */}
        <Tabs.Screen
          name="index"
          options={{
            href: null,
            headerShown: false
          }}
        />
        <Tabs.Screen
          name="home"
          options={{
            title: "Inicio",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="crear-tablero"
          options={{
            title: "Crear Tablero",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="add-circle-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="tableros"
          options={{
            title: "Tableros",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="grid-outline" size={size} color={color} />
            ),
          }}
        />
        {/* Pantalla de detalle de tablero oculta */}
        <Tabs.Screen
          name="tableros/[id]"
          options={{
            href: null,
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="perfil"
          options={{
            title: "Perfil",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-outline" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </SafeAreaProvider>
  );
}