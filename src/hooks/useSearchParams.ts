import { usePathname, useRouter, useSearchParams as nextUseSearchParams } from 'next/navigation'

type SetParamsType = {
  param: string
  value: string
}
const useSearchParams = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = nextUseSearchParams()

  const editableSearchParams = new URLSearchParams(Array.from(searchParams.entries()))

  const setSearchParams = ({ param, value }: SetParamsType) => {
    editableSearchParams.set(param, value)
    const search = editableSearchParams.toString()
    const query = search ? `?${search}` : ''

    router.push(`${pathname}${query}`)
  }

  const deleteSearchParam = (param: string) => {
    editableSearchParams.delete(param)
    const search = editableSearchParams.toString()
    const query = search ? `?${search}` : ''

    router.push(`${pathname}${query}`)
  }

  return { searchParams, setSearchParams, deleteSearchParam }
}

export default useSearchParams
