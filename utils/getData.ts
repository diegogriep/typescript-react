export async function getData(term: string) {

  const res = await fetch(`https://api.datamuse.com/words?sp=${term}*`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
