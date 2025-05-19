-- Activar extensión para UUIDs
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Usuarios (personales o empresa)
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  is_company BOOLEAN DEFAULT FALSE, -- true = cuenta empresa
  plan TEXT DEFAULT 'free',         -- 'free', 'premium', 'enterprise'
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tableros (espacios de trabajo)
CREATE TABLE boards (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  owner_id UUID REFERENCES users(id) ON DELETE SET NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Relación usuarios <-> tableros (quién puede ver o editar un tablero)
CREATE TABLE board_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  board_id UUID REFERENCES boards(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  role TEXT CHECK (role IN ('owner', 'admin', 'member')) NOT NULL DEFAULT 'member',
  invited_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Columnas del tablero (To Do, Doing, Done, etc.)
CREATE TABLE columns (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  position INTEGER NOT NULL,
  board_id UUID REFERENCES boards(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tareas dentro de una columna
CREATE TABLE tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  board_id UUID REFERENCES boards(id) ON DELETE CASCADE,
  column_id UUID REFERENCES columns(id) ON DELETE CASCADE,
  assigned_to UUID REFERENCES users(id), -- para que admins asignen a miembros
  position INTEGER NOT NULL,
  is_completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);