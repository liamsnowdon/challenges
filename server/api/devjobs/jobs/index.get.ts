import { defineCachedEventHandler } from 'nitropack/runtime'
import { useStorage } from 'nitropack/dist/runtime/storage'
import type { JobEntity } from '~~/shared/types/devjobs'

export default defineCachedEventHandler(async () => {
  return await useStorage('assets:server').getItem('data/devjobs/data.json') as unknown as JobEntity[]
}, {
  // 1 hour
  maxAge: 60 * 60,
})
