import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineMail, AiOutlineTwitter } from 'react-icons/ai';
import {IoIosCall} from 'react-icons/io'
import  {SocialIcons}  from '../Header/HeaderStyles';
import { CompanyContainer, ContactIcons, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle><ContactIcons><IoIosCall color='#1732da' size="3rem"/></ContactIcons></LinkTitle>
          <LinkItem href="tel:+2347061994070">+234-7061994070</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle><ContactIcons><AiOutlineMail color='#fff' size="2.5rem"/></ContactIcons></LinkTitle>
          <LinkItem href="mailtocodepipr@gmail.com">codepipr@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan> ~Building dreams a code at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/deddypiper">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://linkedin.com/in/desmond-uyi-6a00aa225">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://instagram.com/codepipr">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://twitter.com/deddypiper">
          <AiOutlineTwitter  size="3rem"/>
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
