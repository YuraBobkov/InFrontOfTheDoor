/* eslint-disable @typescript-eslint/naming-convention */
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import Link from 'next/link'
import { IPeople } from 'swapi-ts'

const CharacterCard = ({ name, height, birth_year: BY, mass, url }: IPeople) => {
  const match = url.match(/\/people\/(\d+)\//)
  const characterId = match ? match[1] : null // match[1] содержит ID планеты, если есть совпадение
  return (
    <Card sx={{ maxWidth: 345 }} elevation={3}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          height: {height}{' '}
          <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
            weight: {mass}
          </Typography>
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          birth_year: {BY}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`/${characterId}`}>
          <Button variant="text">Show more</Button>
        </Link>
      </CardActions>
    </Card>
  )
}
export default CharacterCard
