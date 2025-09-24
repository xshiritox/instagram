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

const selectedLanguage = ref('es')
const username = ref('')
const password = ref('')

const handleLogin = () => {
  console.log('Login attempt:', { username: username.value, password: password.value })
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
  background: #0095f6;
  border: 1px solid #0095f6;
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
  background: #1877f2;
  border-color: #1877f2;
}

.login-button:active {
  opacity: 0.7;
}

.forgot-password {
  text-align: center;
  margin-top: 24px;
}

.forgot-password a {
  color: #00376b;
  font-size: 12px;
  line-height: 14px;
  margin-top: 12px;
  text-align: center;
  text-decoration: none;
}

.forgot-password a:hover {
  color: #003569;
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
  border: 1px solid #0095f6;
  border-radius: 4px;
  color: #0095f6;
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
  background: #0095f6;
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
  color: #737373;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  letter-spacing: 0.5px;
}

@media (max-width: 450px) {
  .main-container,
  .create-account-container {
    border: none;
    background: transparent;
  }
  /* Make overall spacing tighter but text and controls larger for readability */
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
  }
  .language-selector select {
    font-size: 16px;
  }
  .login-form {
    gap: 10px;
  }
  .form-input {
    font-size: 16px; /* Prevent iOS zoom and improve readability */
    padding: 12px 12px;
  }
  .login-button {
    font-size: 16px;
    line-height: 22px;
    padding: 12px 14px;
  }
  .forgot-password a {
    font-size: 14px;
    line-height: 18px;
  }
  .create-account-container {
    padding: 20px 24px;
    max-width: 420px;
  }
  .create-account-button {
    font-size: 16px;
    line-height: 22px;
    padding: 12px 14px;
  }
  .meta-text {
    font-size: 16px;
  }
}
</style>