import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

// Viewer Data
const Ranking = React.lazy(() => import('./views/viewerData/Ranking'))
const Compare = React.lazy(() => import('./views/viewerData/Compare'))
const Playlist = React.lazy(() => import('./views/viewerData/Playlist'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/ranking', name: 'Ranking', element: Ranking },
  { path: '/comparar', name: 'Compare', element: Compare },
  { path: '/playlist', name: 'Playlist', element: Playlist },
  { path: '/home', name: 'Dashboard', element: Dashboard },
]

export default routes
