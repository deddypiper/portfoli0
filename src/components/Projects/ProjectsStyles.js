import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}

`
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  width: 100%;
  color: #9cc9e3;
`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 5px auto;
  }
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1rem;
    font-size: 1.3rem;
    line-height: 20px;
    letter-spacing: 0.07rem;
  }
`;


export const UtilityList = styled.ul`
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
  @media ${(props) => props.theme.breakpoints.md} {
    margin: 0 0 1rem 0;
  }
`;

export const ExternalLinks = styled.a`
  color:#b3b3b3;
  font-size: 1.6rem;
  padding:1rem 1.5rem;
  background: #2c4b66;
  border-radius: 15px;
  transition: 0.5s;
  &:hover{
    background: #170517;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.2rem;
    padding: .8rem 1rem;
  }
`;

export const TagList = styled.div`
  display: flex;
  padding: 2rem; 
  justify-content: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1rem;
    font-size: 1.3rem;
    // letter-spacing: 0.07rem;
  }
`
export const Tag = styled.p`
  font-size: 1.5rem;
  font-style: italic;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.2rem;
  }
`