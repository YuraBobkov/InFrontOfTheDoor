interface ApiError {
  message: string
  code: number
}

export const handleResponse = <TData>(response: any) => {
  if (!response.ok) {
    throw new Error('Failed to fetch character')
  }
  if (response.error) {
    const error = response.error as ApiError
    throw new Error(error.message)
  }
  return response.json() as TData
}
