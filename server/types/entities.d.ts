export type PaginatedData<T> = {
  data: T[]
  page: number
  page_size: number
  pages: number
}
