import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

// Viewer Data
const Ranking = React.lazy(() => import('./views/viewerData/Ranking'))
const Compare = React.lazy(() => import('./views/viewerData/Compare'))
const Artists = React.lazy(() => import('./views/viewerData/Artists'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/ranking', name: 'Ranking', element: Ranking },
  { path: '/comparar', name: 'Compare', element: Compare },
  { path: '/artistas', name: 'Artists', element: Artists },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
]

export default routes
