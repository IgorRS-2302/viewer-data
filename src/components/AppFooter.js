import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div></div>
      <div className="ms-auto">
        <span>Viewer data, acompanhe seus artistas preferidos</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
