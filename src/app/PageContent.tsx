'use client'

import { Box, Divider, Stack, TextField } from '@mui/material'
import { ChangeEvent, useCallback } from 'react'
import { IPeople } from 'swapi-ts'

import CharacterCard from '@/components/CharacterCard'
import Pagination from '@/components/Pagination'
import useSearchParams from '@/hooks/useSearchParams'

export default function PageContent({
  data,
}: {
  data?: {
    count: number
    next: null | string
    previous: null | string
    results: IPeople[]
  }
}) {
  const { searchParams, setSearchParams, deleteSearchParam } = useSearchParams()
  const queryString = searchParams.get('search')

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setSearchParams({ param: 'search', value: event.target.value })
      deleteSearchParam('page')
    },
    [deleteSearchParam, setSearchParams],
  )

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
      <TextField
        defaultValue={queryString}
        onChange={handleChange}
        size="small"
        placeholder="Type name of the person"
        fullWidth
        sx={{ maxWidth: 300 }}
        label="Search"
      />
      {data?.results.length === 0 && <div>No results</div>}{' '}
      <Stack
        sx={{ flexWrap: 'wrap' }}
        spacing={2}
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        useFlexGap
      >
        {data?.results.map((character) => <CharacterCard key={character.name} {...character} />)}
      </Stack>
      <Pagination totalCount={data?.count} />
    </Box>
  )
}
