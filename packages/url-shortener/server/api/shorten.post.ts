import { defineEventHandler, readBody, createError } from 'h3'
import type { CleanURIFailure, CleanURISuccess } from '~~/shared/types'

export default defineEventHandler(async (event) => {
  const { url } = await readBody(event)

  if (!url) {
    throw createError({
      statusCode: 400,
      message: 'Url not provided.',
    })
  }

  try {
    const response = await $fetch<CleanURISuccess>('https://cleanuri.com/api/v1/shorten', {
      method: 'post',
      body: {
        url,
      },
    })

    return response
  } catch (e: any) {
    if (e.statusCode === 400) {
      console.log(e.data)
      throw createError({
        statusCode: 400,
        message: 'URL is invalid. Please check and try and again.',
      })
    }

    throw createError({
      statusCode: e.statusCode,
      message: (e.data as CleanURIFailure).error,
    })
  }
})
