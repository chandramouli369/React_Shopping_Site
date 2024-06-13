import React,{useState} from 'react'
import Header from '../components/Header'
import Collections from '../components/Collections'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Women from '../components/Women'
import { Gents,Ladies} from '../data'
const Mainpage = () => {

  const [gentsfashion, setGentsfashion] = useState(Gents)
  const [ladiesfashion, setLadiesfashion] = useState(Ladies)
  console.log(Gents);
  return (
    <div>
    <Header/>
    <Banner/>
    <Collections gentsfashion={gentsfashion}/>
    <Women ladiesfashion={ladiesfashion}/>
    <Footer />
    </div>
  )
}

export default Mainpage
