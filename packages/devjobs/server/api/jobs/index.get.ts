import { defineEventHandler, getQuery } from 'h3'
import { useStorage } from 'nitropack/dist/runtime/storage'
import type { JobEntity } from '~~/shared/types'
import { paginate } from '~~/server/utils/pagination'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const page = Number(query.page) || 0
  const queryTerm = query.term
  const queryLocation = query.location
  const queryFullTimeOnly = query.fullTimeOnly

  const normalizedTerm = String(queryTerm).toLowerCase()
  const normalizedLocation = String(queryLocation).toLowerCase()

  let jobs = await useStorage('assets:server').getItem('data/data.json') as unknown as JobEntity[]

  if (queryTerm) {
    jobs = jobs.filter((job) => {
      return job.position.toLowerCase().includes(normalizedTerm) || job.company.toLowerCase().includes(normalizedTerm)
    })
  }

  if (queryLocation) {
    jobs = jobs.filter(job => job.location.toLowerCase().includes(normalizedLocation))
  }

  if (queryFullTimeOnly === 'true') {
    jobs = jobs.filter(job => job.contract === 'Full Time')
  }

  const paginatedJobs = paginate(jobs, page, 12)

  return paginatedJobs
})
