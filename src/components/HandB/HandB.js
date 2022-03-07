import React from 'react'
import Hero from '../Hero/Hero'
import BackgroundAnimation from '../BackgroundAnimation/BackgroundAnimation'
import { Section } from '../../styles/GlobalComponents';

const HandB = () => {
  return (
    <Section grid>
        <Hero />
        <BackgroundAnimation />
    </Section>
  )
}

export default HandB