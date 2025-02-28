import { defineCachedEventHandler } from 'nitropack/runtime'
import { getRouterParam } from 'h3'
import { useStorage } from 'nitropack/dist/runtime/storage'
import { createError } from '#imports'
import type { JobEntity } from '~~/shared/types/devjobs'

export default defineCachedEventHandler(async (event) => {
  const id = Number(getRouterParam(event, 'id'))
  const jobs = await useStorage('assets:server').getItem('data/devjobs/data.json') as unknown as JobEntity[]

  const job = jobs.find(j => j.id === id)

  if (!job) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Job not found.',
    })
  }

  return job
}, {
  // 1 hour
  maxAge: 60 * 60,
})
