import { useState } from 'react'
// Simulates a network request. Nothing is sent anywhere – frontend demo only.
export function useFakeSubmit() {
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const run = async () => {
    setState('loading')
    await new Promise(r => setTimeout(r, 1200))
    setState('success')
  }
  return { state, run, reset: () => setState('idle'), fail: () => setState('error') }
}
