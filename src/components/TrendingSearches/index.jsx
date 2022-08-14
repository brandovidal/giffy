import { lazy, Suspense } from 'react'
import useNearScreen from '@/hooks/useNearScreen'
import Spinner from '@/components/Spinner'

const TrendingSearches = lazy(() => import('./TrendingSearches'))

export default function LazyTrending () {
  const { isNearScreen, fromRef } = useNearScreen({ distance: '500px' })

  return (
    <div ref={fromRef}>
      <Suspense fallback={<Spinner />}>
        {isNearScreen ? <TrendingSearches /> : null}
      </Suspense>
    </div>
  )
}
