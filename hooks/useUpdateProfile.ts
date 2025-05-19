import { useState } from "react";

export function useUpdateProfile(token: string | null) {
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    const [pais, setPais] = useState("");
    const [profesion, setProfesion] = useState("");

    const handleSave = async () => {
        if (!token) throw new Error("No hay token disponible");

        const payload: any = {};
        if (name) payload.name = name;
        if (bio) payload.bio = bio;
        if (pais) payload.pais = pais;
        if (profesion) payload.profesion = profesion;

        const response = await fetch("http://192.168.1.155:8080/api/users/me", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(payload),
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.message || "Error actualizando perfil");
        return data;
    };

    return {
        name, setName,
        bio, setBio,
        pais, setPais,
        profesion, setProfesion,
        handleSave
    };
}
