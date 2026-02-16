export interface ToastOptions {
  title: string
  description?: string
  variant?: 'default' | 'destructive'
}

export const useToast = () => {
  return {
    toast: ({ title, description, variant }: ToastOptions) => {
      console.log('Toast:', title, description, variant)
      alert(`${title}${description ? '\n' + description : ''}`)
    }
  }
}

export const toast = ({ title, description, variant }: ToastOptions) => {
  console.log('Toast:', title, description, variant)
  alert(`${title}${description ? '\n' + description : ''}`)
}
