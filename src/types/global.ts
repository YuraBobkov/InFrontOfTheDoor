export type BasePageType = {
  searchParams: {
    search?: string | null
    page?: string | null
  }
  params: Record<string, string>
}
export type SWApiResponseType<T> = {
  count: number
  next: null | string
  previous: null | string
  results: T[]
}
