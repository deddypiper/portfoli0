import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineMail, AiOutlineTwitter } from 'react-icons/ai';
import {IoIosCall} from 'react-icons/io';
import { RiWhatsappFill } from 'react-icons/ri';
import { SectionTitle } from '../../styles/GlobalComponents';
import { CompanyContainer, SocialIcons, ContactIcons, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <SectionTitle main >Contact</SectionTitle>
      <LinkList>
        <LinkColumn>
          <LinkTitle><ContactIcons><IoIosCall color='#1732da' size="2.5rem"/></ContactIcons></LinkTitle>
          <LinkItem href="tel:+2349025419826">+234-9025419826</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle><ContactIcons><AiOutlineMail color='#f00' size="2.5rem"/></ContactIcons></LinkTitle>
          <LinkItem href="mailtocodepipr@gmail.com">codepipr@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <SocialContainer>
        <SocialIcons href="https://wa.me/+2347061994070">
            <RiWhatsappFill size="2rem" />
        </SocialIcons>
        <SocialIcons href="https://github.com/deddypiper">
          <AiFillGithub size="2.5rem" />
        </SocialIcons>
        <SocialIcons href="https://linkedin.com/in/desmond-uyi-6a00aa225">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://instagram.com/codepipr">
          <AiFillInstagram size="2.5rem"/>
        </SocialIcons>
        <SocialIcons href="https://twitter.com/deddypiper">
          <AiOutlineTwitter  size="2rem"/>
        </SocialIcons>
        </SocialContainer>
        <CompanyContainer>
          <Slogan> ~Building dreams a code at a time</Slogan>
        </CompanyContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
