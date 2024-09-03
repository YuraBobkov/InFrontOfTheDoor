import { Box, Typography } from '@mui/material'

import { BackButton } from '@/components/BackButton'
import { BasePageType } from '@/types/global'

import { getPerson } from '../actions'

export default async function Home({ params }: BasePageType) {
  const character = await getPerson(params.characterId!)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}>
      <BackButton />
      <Typography gutterBottom color={character.eye_color} variant="h4">
        {character.name}
      </Typography>
      <Typography variant="subtitle1">mass: {character.mass}</Typography>
      <Typography variant="subtitle1">gender: {character.gender}</Typography>
    </Box>
  )
}
