import React from 'react'
import Herosection from '../components/Index/Herosection'
import PropGPT from '../components/Index/PropGPT'
import IProcess from '../components/Index/IProcess'
import PropEstimate from '../components/Index/PropEstimate'
import PropVerse from '../components/Index/PropVerse'
import PrpexPresence from '../components/Index/PrpexPresence'
import Onepalce from '../components/Index/Onepalce'
import YesBroker from '../components/Index/YesBroker'
import PropertyExchange from '../components/Index/PropertyExchange'
import MobileApps from '../components/Index/MobileApps'
import Partners from '../components/Index/Partners'
import FAQSection from '../components/Index/FAQSection'
import PropertyExchangeTable from '../components/Index/PropertyExchangeTable'

const Home = () => {
  return (
    <div>
      <Herosection />
      <br /><br /><br/><br/>
      <PropertyExchangeTable/>
      <PropGPT />
      <IProcess />
      <PropEstimate />
      <PropVerse />
      <PrpexPresence />
      <Onepalce />
      <YesBroker />
      <PropertyExchange />
      <MobileApps />
      <Partners />
      <FAQSection />
    </div>
  )
}

export default Home
