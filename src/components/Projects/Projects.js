import React, { useState } from 'react';
import Button from '../../styles/GlobalComponents/Button';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import {AnimateBtn} from '../../styles/GlobalComponents/index'

const Projects = ({isMobile}) => {
  const [more, setMore] = useState(false)

  return(
  <Section id="projects">
   {!isMobile && <SectionDivider />}
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {more ? projects.map(({id, image, title, description, tags, source, visit}) => (
        <BlogCard  key={id}>
          <Img src={image}/>
          <TitleContent>
            <HeaderThree>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}&nbsp;</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
              <ExternalLinks href={visit}>Visit</ExternalLinks>
              <ExternalLinks href={source}>Code</ExternalLinks>
          </UtilityList>
        </BlogCard>
      )) : projects.slice(0,2).map(({id, image, title, description, tags, source, visit}) => (
        <BlogCard  key={id}>
          <Img src={image}/>
          <TitleContent>
            <HeaderThree>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}&nbsp;</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
              <ExternalLinks href={visit}>Visit</ExternalLinks>
              <ExternalLinks href={source}>Code</ExternalLinks>
          </UtilityList>
        </BlogCard>
        ))}
        <AnimateBtn>
          <Button onClick={()=> setMore(!more)}> {more ? "See less" :"See more!"}</Button>
        </AnimateBtn>
    </GridContainer>
  </Section>
);
}

export default Projects;