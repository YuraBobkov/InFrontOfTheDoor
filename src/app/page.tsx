import { BasePageType } from '@/types/global'

import { getPeople } from './actions'
import PageContent from './PageContent'

export default async function Home({ searchParams }: BasePageType) {
  const people = await getPeople({
    page: searchParams.page,
    search: searchParams.search,
  })

  return <PageContent data={people} />
}
