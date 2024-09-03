'use server'

import { IPeople } from 'swapi-ts'

import { config } from '@/config'
import { BasePageType, SWApiResponseType } from '@/types/global'
import { handleResponse } from '@/utils/requests'

export const getPeople = async (
  query: BasePageType['searchParams'],
  signal?: AbortController['signal'],
) => {
  return await fetch(
    `${config.ApiUrl}people/?search=${query.search || ''}&page=${query.page || ''}`,
    {
      cache: 'no-store',
      signal,
      next: { tags: ['people'] },
    },
  ).then((res) => handleResponse<SWApiResponseType<IPeople>>(res))
}

export const getPerson = async (id: string) => {
  return await fetch(`${config.ApiUrl}people/${id}`, {
    next: { tags: ['character'] },
  }).then((res) => handleResponse<IPeople>(res))
}
