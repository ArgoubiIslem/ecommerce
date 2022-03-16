import React from 'react'
import Footer from '../components/Footer'
import Info from '../components/Info'
import Media from '../components/Media'
import Headers from '../components/Headers'
import Navbar from '../components/Navbar'
import Fashion from '../components/Fashion'
function ProdFemme() {
  return (
    <div>
      <Headers />
      <div className="flex justify-center">
        <Fashion />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default ProdFemme
