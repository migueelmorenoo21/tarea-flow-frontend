import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext"; // Ajusta si el path es distinto

interface User {
  id: string;
  name: string;
  email: string;
  isCompany: boolean;
  plan: string;
  createdAt: string;
}

function isUser(data: any): data is User {
  return (
    typeof data === 'object' &&
    typeof data.id === 'string' &&
    typeof data.name === 'string' &&
    typeof data.email === 'string' &&
    typeof data.isCompany === 'boolean' &&
    typeof data.plan === 'string' &&
    typeof data.createdAt === 'string'
  );
}

export function useUser() {
  const { token } = useAuth();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!token) {
      setLoading(false);
      setUser(null);
      return;
    }

    async function fetchUserData() {
      try {
        const response = await fetch("http://192.168.1.155:8080/api/users/me", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (response.ok && isUser(data)) {
          setUser(data);
        } else {
          setError(data?.message || "Datos inválidos");
          console.error("Error de datos de usuario:", data);
        }
      } catch (err: unknown) {
        const errorMessage =
          err instanceof Error ? err.message : "Error de conexión al servidor";
        setError(errorMessage);
        console.error("Error fetch user:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchUserData();
  }, [token]);

  return { user, loading, error };
}

