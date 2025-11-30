import client from ':@sanity/client'    

export default client({
  projectId: 'wmft1sxi',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-06-07',
})