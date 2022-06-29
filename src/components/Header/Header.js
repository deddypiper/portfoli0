
import React, { useState } from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { RiWhatsappFill } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from "react-icons/fa"
import {Link} from 'react-router-dom'

import { Container, Div1, Div2, Div3, DivMobile, MobLink, Linker, NavLink, SocialIcons, Burger } from './HeaderStyles';

const Header = ({isMobile}) =>  {
  const [click, setClick] = useState(false)
    const handleClick = () => {
        setClick(!click)
    }

  return (
  <Container>
    <Div1>
      <a href='/'>
        <a  style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
          <BsFillBriefcaseFill size='3rem' />  <span style={{ color: 'teal' }}> &nbsp; Portfolio</span>
        </a>
      </a>
    </Div1>
    {!isMobile ? 
    <>
      <Div2>
          <Link to="/projects">
            <NavLink>Projects</NavLink>
          </Link>
          <Linker href='/tech'>
            <NavLink>Tech</NavLink>
          </Linker>
          <Linker href='/about'>
            <NavLink>About</NavLink>
          </Linker>
          <Linker href='/footer'>
            <NavLink>Contact</NavLink>
          </Linker>
      </Div2>
      <Div3>
          <SocialIcons href="https://wa.me/+2347061994070">
            <RiWhatsappFill size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://github.com/deddypiper">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://aedin.com/in/codepipr">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://instagram.com/codepipr">
            <AiFillInstagram size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://twitter.com/deddypiper">
            <AiOutlineTwitter  size="3rem"/>
          </SocialIcons>
        </Div3>
    </> : 
    <>
    <Burger onClick={handleClick}>
      {click ?<FaTimes color="red"  size="3rem"/> : <GiHamburgerMenu size="3rem"/> } 
    </Burger>
      {click &&
      <DivMobile>
          <li onClick={()=>setClick(false)}>
            <Link to="/projects">
              <MobLink>Projects</MobLink>
            </Link>
          </li>
          <li onClick={()=>setClick(false)}>
            <Link to="/tech">
              <MobLink>Tech</MobLink>
            </Link>
          </li>
          <li onClick={()=>setClick(false)}>
            <Link to="/about">
              <MobLink>About Me</MobLink>
            </Link>
          </li>
          <li onClick={()=>setClick(false)}>
            <Link to="/footer">
              <MobLink>Contact Me</MobLink>
            </Link>
          </li>
        </DivMobile>
      }
    </>
    }
  </Container>
  
);
}

export default Header;
