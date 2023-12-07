import { CCard, CCardBody, CCol, CRow } from '@coreui/react'
import React from 'react'

const Dashboard = () => {
  return (
    <CRow>
      <CCol xs>
        <CCard className="mb-4">
          <CCardBody>
            <CRow>
              <CCol xs={12} md={12} xl={12}>
                <CRow>
                  <div style={{ display: 'flex', justifyContent: 'center', padding: '15px' }}>
                    <h1 style={{ fontSize: '4rem' }}>Seja bem vindo ao Viewer Data!</h1>
                  </div>
                  <h2 style={{ padding: '20px', fontSize: '1.5rem' }}>
                    Aqui você pode fazer várias análises com seus artistas preferidos
                  </h2>
                  <div style={{ padding: '10px' }}>
                    <ul>
                      {/* <li>
                        <a href="#/comparar">Comparar artistas</a>
                      </li> */}
                      <li>
                        <a href="#/ranking">Visualizar o ranking de músicas mais tocadas</a>
                      </li>
                      <li>
                        <a href="#/playlist">
                          Gerar uma playlist baseada numa música de sua escolha
                        </a>
                      </li>
                    </ul>
                  </div>
                </CRow>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Dashboard
