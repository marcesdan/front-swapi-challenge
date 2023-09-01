const getIdFromUrl = (url: string) => url.split('/').slice(-2)[0]

export default getIdFromUrl
