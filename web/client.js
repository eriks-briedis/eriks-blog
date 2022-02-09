import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'rkv2ur2w',
  dataset: 'production',
  useCdn: false
})