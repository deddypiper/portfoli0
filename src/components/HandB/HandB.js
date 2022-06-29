import React from 'react'
import Hero from '../Hero/Hero'
import BackgroundAnimation from '../BackgroundAnimation/BackgroundAnimation'
import { Section } from '../../styles/GlobalComponents';

const HandB = ({isMobile}) => {
  return (
    <Section grid>
        <Hero isMobile={isMobile}/>
        <BackgroundAnimation />
    </Section>
  )
}

export default HandB