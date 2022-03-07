import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi! <br />
        I'm Desmond
      </SectionTitle>
      <SectionText>
        I'm a full-stack web developer,
      </SectionText>
      <Button onClick={()=> window.location = '#about' }>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;