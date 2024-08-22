// Rapper Component of Entire Home Commponent

import React from 'react'
import { Hero } from './Hero'
import { Awards } from './Awards'
import { Pricing } from './Pricing'
import { Stats } from './Stats'
import { Education } from './Education'
import { OpenAccount } from '../OpenAccount'



export const HomePage = () => {
  return (
    <>
        <Hero />
        <Awards />
        <Stats />
        <Pricing />
        <Education />
        <OpenAccount />
    </>
  )
}
