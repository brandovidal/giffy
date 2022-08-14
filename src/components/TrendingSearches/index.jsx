import { useEffect, useState } from 'react'

import useNearScreen from '@/hooks/useNearScreen'
import getTrendingSearch from '@/services/getTrendingSearch'

import Category from '@/components/Category'

function TrendingSearches () {
  const [trends, setTrends] = useState([])

  useEffect(() => {
    getTrendingSearch().then(setTrends)
  }, [])

  return <Category name='Tendencias' options={trends} />
}

export default function LazyTrending () {
  const { isNearScreen, fromRef } = useNearScreen({ distance: '500px' })

  return <div ref={fromRef}>{isNearScreen ? <TrendingSearches /> : null}</div>
}
