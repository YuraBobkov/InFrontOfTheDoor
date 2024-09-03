import { Pagination as MuiPagination } from '@mui/material'

import useSearchParams from '@/hooks/useSearchParams'

type PaginationProps = {
  totalCount?: number
}

const Pagination = ({ totalCount }: PaginationProps) => {
  const { searchParams, setSearchParams, deleteSearchParam } = useSearchParams()
  const page = Number.parseInt(searchParams.get('page') || '1', 10)
  const count = totalCount ? Math.round(totalCount / 10) : 0
  const handleChangePage = (event: React.ChangeEvent<unknown> | null, newPage: number) => {
    if (newPage) {
      setSearchParams({ param: 'page', value: String(newPage) })
    } else {
      deleteSearchParam('page')
    }
  }
  if (count === 0) return null
  return (
    <MuiPagination
      variant="outlined"
      defaultPage={page}
      count={count}
      siblingCount={0}
      onChange={handleChangePage}
    />
  )
}

export default Pagination
