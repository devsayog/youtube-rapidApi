import { useCallback, useEffect, useState } from 'react'

export const useScreenResize = (size: number) => {
  const isScreen = useCallback(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= size
    }
    return false
  }, [size])
  const [isScreenSize, setIsScreenSize] = useState(isScreen)

  useEffect(() => {
    const resize = () => setIsScreenSize(isScreen)

    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [isScreen])

  return { isScreenSize }
}
