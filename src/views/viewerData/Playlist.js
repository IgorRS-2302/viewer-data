import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CRow,
} from '@coreui/react'
import axios from 'axios'
import React, { useState } from 'react'

const Artists = () => {
  const [data, setData] = useState('')
  const [recomendados, setRecomendados] = useState('')

  const gerarPlaylist = () => {
    const body = {
      track: data,
    }

    axios.post('http://127.0.0.1:5000/recomended', body).then((res) => setRecomendados(res.data))
  }

  return (
    <CRow>
      <CCol xs>
        <CCard className="mb-4">
          <CCardHeader>Gerar Playlist</CCardHeader>
          <CCardBody>
            <CRow>
              <CCol xs={12} md={12} xl={12}>
                <CForm>
                  <CFormInput
                    onChange={(e) => {
                      setData(e.target.value)
                      console.log(e.target.value)
                    }}
                    type="text"
                    label="Digite a música que deseja se basear para criar a playlist"
                    text="Você deve escrever a música corretamente (Com espaços e acentos)"
                  />
                  <CButton onClick={gerarPlaylist}>Gerar</CButton>
                </CForm>
                {recomendados !== '' &&
                  recomendados.map((item) => {
                    return <li key={item}>{item}</li>
                  })}
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Artists
