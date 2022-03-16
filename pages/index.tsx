import Head from 'next/head'
import Carousels from '../components/Carousels'
import Footer from '../components/Footer'
import Info from '../components/Info'
import Media from '../components/Media'
import Headers from '../components/Headers'
import Blogs from '../components/Blogs'
import Fashion from '../components/Fashion'
import ShopCategorie from '../components/ShopCategorie'

export default function Home() {
  return(
    <div>
    <Head>
      
      <title>E-commerce</title>
      <link rel="icon" href="/favicon.icon" />
      
    </Head>
    <div><Headers /></div>
    <div><Carousels /></div>
    <Blogs />
    
    
    <div className="flex justify-center"><ShopCategorie /></div>
    <div className="flex justify-center"><Fashion /></div>
    <div className="flex justify-center"> <Info /> </div>
    
   <div className="flex justify-center"> <Media /> </div>
    <Footer />

    </div>

  )
} 