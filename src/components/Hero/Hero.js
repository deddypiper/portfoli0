import React,{ useEffect, useRef } from 'react';
import { init } from "ityped";
import {Link} from 'react-router-dom'
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import {AnimateBtn} from '../../styles/GlobalComponents/index'
import { CompanyContainer, Slogan, SocialContainer, SocialIconsContainer } from '../Footer/FooterStyles';
import  {SocialIcons}  from '../Header/HeaderStyles';
import { RiWhatsappFill } from 'react-icons/ri';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineMail, AiOutlineTwitter } from 'react-icons/ai';

const Hero = ({isMobile}) => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["'m a full-stack web developer,", "'m an SEO specialist,", " offer web development services."],
    });
  }, []);

  return (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi! <br />
        I'm Desmond
      </SectionTitle>
      <SectionText>
        I<span ref={textRef}></span>
      </SectionText>
      <AnimateBtn>
        {isMobile 
         ? <Link to='/about'><Button>Learn More</Button></Link> 
         : <a href='#about'><Button>Learn More</Button></a> 
        }
      </AnimateBtn>
      { isMobile &&
        <SocialIconsContainer>
          <CompanyContainer>
            <Slogan> ~Building dreams a code at a time</Slogan>
          </CompanyContainer>
          <SocialContainer>
          <SocialIcons href="https://wa.me/+2347061994070">
              <RiWhatsappFill size="2rem" />
          </SocialIcons>
          <SocialIcons href="https://github.com/deddypiper">
            <AiFillGithub size="2rem" />
          </SocialIcons>
          <SocialIcons href="https://linkedin.com/in/desmond-uyi-6a00aa225">
            <AiFillLinkedin size="2rem" />
          </SocialIcons>
          <SocialIcons href="https://instagram.com/codepipr">
            <AiFillInstagram size="2rem"/>
          </SocialIcons>
          <SocialIcons href="https://twitter.com/deddypiper">
            <AiOutlineTwitter  size="2rem"/>
          </SocialIcons>
          </SocialContainer>
        </SocialIconsContainer>
      }
    </LeftSection>
  </Section>
  );
}

export default Hero;