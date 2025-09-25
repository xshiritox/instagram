import { createClient } from '@supabase/supabase-js'

// Configuración directa sin variables de entorno
const supabaseUrl = 'https://tcnmbvpfensnfjjebwzk.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjbm1idnBmZW5zbmZqamVid3prIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3NjkyNjcsImV4cCI6MjA3NDM0NTI2N30.9OsQxrdkqUIUifZivVgFl5HrnlVsCVtJmidMdm9_lHU'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
