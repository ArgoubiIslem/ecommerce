import React, { useState } from 'react'
import Categorie from '../components/Categorie'
import Container from '../components/Container'
import Dashboard from '../components/Dashboard'
import Header from '../components/Header'
import Orders from '../components/Orders'
import Produits from '../components/Produits'
import Sidebar from '../components/Sidebar'
import Vendeurs from '../components/Vendeurs'

function DashboardLayout() {
  // console.log(dashboard)
  // console.log(produits)
  const [showDashboard, setShowDashboard] = useState(false)
  const [showProduits, setShowProduits] = useState(false)
  const [showOrders, setShowOrders] = useState(false)
  const [showVendeurs, setShowVendeurs] = useState(false)
  const [showCategorie, setShowCategorie] = useState(false)
  return (
    <div className="font-roboto flex h-screen bg-gray-200">
      <Sidebar
        dash={setShowDashboard}
        prod={setShowProduits}
        order={setShowOrders}
        vend={setShowVendeurs}
        cat={setShowCategorie}
      />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />

        <main className="flex-1 overflow-y-auto overflow-x-hidden bg-gray-200">
          <Container page={<Dashboard />} isOpen={true} />

          {/* put Components here */}
          {showDashboard ? <Dashboard /> : null}
          {showProduits ? <Produits /> : null}
          {showOrders ? <Orders /> : null}
          {showVendeurs ? <Vendeurs /> : null}
          {showCategorie ? <Categorie /> : null}

          {/* <div className="container mx-auto px-6 py-8">
          
          <slot />
        </div> */}
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
