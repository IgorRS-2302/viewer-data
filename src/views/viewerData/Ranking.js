import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import React from 'react'

const Ranking = () => {
  return (
    <CRow>
      <CCol xs>
        <CCard className="mb-4">
          <CCardHeader>Top 10 músicas mais reproduzidas</CCardHeader>
          <CCardBody>
            <CRow>
              <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Música</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Artista</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Streams</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Blinding Lights</CTableDataCell>
                    <CTableDataCell>The Weeknd</CTableDataCell>
                    <CTableDataCell>3,703B</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                    <CTableDataCell>Shape of You</CTableDataCell>
                    <CTableDataCell>Ed Sheeran</CTableDataCell>
                    <CTableDataCell>3,562B</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                    <CTableDataCell>Someone You Loved</CTableDataCell>
                    <CTableDataCell>Lewis Capaldi</CTableDataCell>
                    <CTableDataCell>2,887B</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">4</CTableHeaderCell>
                    <CTableDataCell>Dance Monkey</CTableDataCell>
                    <CTableDataCell>Tones and I</CTableDataCell>
                    <CTableDataCell>2,864B</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">5</CTableHeaderCell>
                    <CTableDataCell>Sunflower</CTableDataCell>
                    <CTableDataCell>Post Malone & Swae Lee</CTableDataCell>
                    <CTableDataCell>2,808B</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">6</CTableHeaderCell>
                    <CTableDataCell>One Dance</CTableDataCell>
                    <CTableDataCell>Drake</CTableDataCell>
                    <CTableDataCell>2,713B</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">7</CTableHeaderCell>
                    <CTableDataCell>STAY</CTableDataCell>
                    <CTableDataCell>The Kid LAROI & Justin Bieber</CTableDataCell>
                    <CTableDataCell>2,665B</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">8</CTableHeaderCell>
                    <CTableDataCell>Believer</CTableDataCell>
                    <CTableDataCell>Imagine Dragons</CTableDataCell>
                    <CTableDataCell>2,594B</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">9</CTableHeaderCell>
                    <CTableDataCell>Closer</CTableDataCell>
                    <CTableDataCell>The Chainsmokers</CTableDataCell>
                    <CTableDataCell>2,591B</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">10</CTableHeaderCell>
                    <CTableDataCell>Starboy</CTableDataCell>
                    <CTableDataCell>The Weeknd</CTableDataCell>
                    <CTableDataCell>2,565B</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Ranking
