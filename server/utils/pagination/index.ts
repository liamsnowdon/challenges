import type { PaginatedData } from '~~/server/types/entities'

const PAGINATION_ITEMS_PER_PAGE = 30

export function paginate<T> (items: T[], page: number, page_size = PAGINATION_ITEMS_PER_PAGE): PaginatedData<T> {
  let data: T[] = []

  if (page === 0) {
    data = items.slice(0, page_size)
  }

  data = items.slice(page * page_size, (page * page_size) + page_size)

  const pages = Math.ceil(items.length / page_size) - 1

  return {
    data,
    page,
    page_size,
    pages,
  }
}
