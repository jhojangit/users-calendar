# 🚀 SETUP RÁPIDO - Primeros Pasos

## 1. Crear el archivo `.env.local`

En la **raíz del proyecto**, crea un archivo llamado `.env.local` con este contenido:

```env
VITE_PASSWORDENCRIPT=2222
VITE_PASSWORD_WRITE=0000
VITE_PASSWORD_READ=1111
```

**Ubicación:** `users-calendar/.env.local`

## 2. Variables configuradas

| Variable | Valor de ejemplo | Uso |
|----------|------------------|-----|
| `VITE_PASSWORD_WRITE` | `1111` | Acceso COMPLETO (crear, editar, eliminar) |
| `VITE_PASSWORD_READ` | `0000` | Acceso LECTURA SOLAMENTE |

## 3. Iniciar el servidor

```bash
npm run dev
```

## 4. Pruebas de login

### Prueba 1: Acceso LECTURA
1. Abre http://localhost:5173
2. Ingresa: `1111`
3. ✅ Deberías ver la aplicación sin opciones de edición/eliminación

### Prueba 2: Acceso ESCRITURA
1. Vuelve a la pantalla de login (botón logout)
2. Ingresa: `0000`
3. ✅ Deberías ver TODOS los botones de creación/edición/eliminación

### Prueba 3: Contraseña incorrecta
1. Ingresa cualquier otra contraseña
2. ❌ Deberías ver mensaje "Contraseña incorrecta"

## 5. Estructura de seguridad

```
users-calendar/
├── .env.local                 ← 🔐 TUS CONTRASEÑAS (NO VERSIONABLE)
├── .env.local.example         ← 📋 Plantilla (SÍ versionable)
├── .gitignore                 ← Protege .env.local
├── AUTENTICACION.md           ← Documentación completa
│
└── passwords/
    ├── .env.example           ← Otra plantilla
    ├── README.md              ← Guía de seguridad
    └── .gitignore             ← Protege secretos
```

## 6. Cambiar contraseñas

Simplemente edita `.env.local`:

```env
VITE_PASSWORDENCRIPT=TUS_SECRET_AQUI
VITE_PASSWORD_WRITE=Nueva_Contraseña_Segura_Aqui!
VITE_PASSWORD_READ=Nueva_Contraseña_Lectura!
```

Luego **recarga** la página (Ctrl+R).

## ⚠️ IMPORTANTE

- **NUNCA** commitear `.env.local` a Git
- **SIEMPRE** usar contraseñas fuertes en producción
- **NUNCA** compartir el archivo `.env.local`
- Para otros desarrolladores: solo compartir `.env.local.example`

---

¿Preguntas? Ver [AUTENTICACION.md](AUTENTICACION.md)
