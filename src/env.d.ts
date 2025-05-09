interface ImportMetaEnv {
  readonly BASE_URL: string
  // Add other environment variables here if needed
  readonly VITE_API_URL?: string // Example for a custom variable
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
