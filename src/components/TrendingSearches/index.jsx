import { useEffect, useState } from 'react'
import getTrendingSearch from '../../services/getTrendingSearch'

import Category from '../Category'

export default function TrendingSearches () {
  const [trends, setTrends] = useState([])

  useEffect(() => {
    getTrendingSearch().then(setTrends)
  }, [])

  return <Category name='Tendencias' options={trends} />
}
