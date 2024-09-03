'use client'

import { Button } from '@mui/material'
import { useRouter } from 'next/navigation'

export const BackButton = () => {
  const router = useRouter()

  const handleClick = () => {
    router.back()
  }

  return (
    <Button variant="text" onClick={handleClick}>
      Back
    </Button>
  )
}
