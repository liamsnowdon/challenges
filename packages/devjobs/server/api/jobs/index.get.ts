import { defineCachedEventHandler } from 'nitropack/runtime'
import { getQuery } from 'h3'
import { useStorage } from 'nitropack/dist/runtime/storage'
import type { JobEntity } from '~~/shared/types'
import { paginate } from '~~/server/utils/pagination'

export default defineCachedEventHandler(async (event) => {
  const query = getQuery(event)
  const page = Number(query.page) || 0

  const jobs = await useStorage('assets:server').getItem('data/data.json') as unknown as JobEntity[]
  const paginatedJobs = paginate(jobs, page, 12)

  return paginatedJobs
}, {
  // 1 hour
  maxAge: 60 * 60,
})
