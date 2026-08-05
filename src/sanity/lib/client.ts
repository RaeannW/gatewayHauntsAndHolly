import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // ISR (revalidate=60) on the routes now handles freshness; stacking Sanity's CDN cache on top just adds staleness
})
