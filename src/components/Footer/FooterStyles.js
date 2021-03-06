import styled from "styled-components"

export const FooterWrapper = styled.section`
	width: calc(100vw - 96px);
  max-width: 1040px;
  padding: 2rem 48px 40px;
  margin: 1rem auto;
  box-sizing: content-box;


  @media ${props => props.theme.breakpoints.sm} {
    padding: 0 0px 20px 0;
    width: calc(100vw - 32px);
  }
`


export const SocialIconsContainer = styled.div`
	max-width: 1040px;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media ${props => props.theme.breakpoints.md}{
		width: 100%;
	}
`
export const SocialIcons = styled.a`
	transition: 0.3s ease;
	color: white;
	border-radius: 50px;
	padding: 2rem;
	&:hover {
		background-color: #212d45;
		transform: scale(1.5);
		cursor: pointer;
		
	}
`

export const CompanyContainer = styled.div`
  	display: flex;
	align-items: baseline;
	flex-wrap: wrap;
	

	@media ${props => props.theme.breakpoints.md}{
		flex-direction: column;
	}

	@media ${props => props.theme.breakpoints.sm}{
		margin: 0 0 2px 0;
	}
`


export const Slogan = styled.p`
	color: rgba(255, 255, 255, 0.5);
	min-width: 280px;
	letter-spacing: 0.2em;
	font-size: 18px;
	font-style: italic;
	font-weight: 300;
	line-height: 30px;
	padding: 1rem;

	@media ${props => props.theme.breakpoints.md}{
		font-size: 16px;
		line-height: 28px;
	}

	@media ${props => props.theme.breakpoints.sm}{
		line-height: 22px;
		font-size: 12px;
		min-width: 100px;
		letter-spacing: 0.1rem;
	}
`

export const SocialContainer = styled.div`
	display: flex;
  	align-items: center;
	margin: 2rem;

	@media ${props => props.theme.breakpoints.md}{
		justify-content: center;
		padding-top: 10px;
		flex-wrap: wrap;
		margin: 0;
	}
`


export const LinkList = styled.ul`
	border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
	justify-content: space-between;
	padding: 40px 0 28px;
	
	@media ${props => props.theme.breakpoints.lg} {
		padding: 32px 0 16px;
	}

	@media ${props => props.theme.breakpoints.md} {
		width: 100%;
		padding: 32px 0 16px;
	}
	@media ${props => props.theme.breakpoints.sm} {
		width: 100%;
		padding: 18px 4px 16px 0;
	}
`

export const LinkColumn = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 220px;
	width: 100%;
`
export const LinkTitle = styled.h4`
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 24px;
	text-transform: uppercase;
	color: rgba(255, 255, 255, 0.4);
	margin-bottom: 16px;
	
	@media ${props => props.theme.breakpoints.sm} {
		font-size: 10px;
		line-height: 12px;
		margin-bottom: 8px;
	}
`
export const LinkItem = styled.a`
	font-size: 18px;
	line-height: 30px;
	color: rgba(255, 255, 255, 0.75);
	margin-bottom: 16px;
	transition: .3s ease;
	position: relative;
	left: 0;

	&:hover {
		color: #fff;
		left: 6px;
	}

	@media ${props => props.theme.breakpoints.md} {
		font-size: 16px;
		line-height: 28px;
		display: flex;
	}

	@media ${props => props.theme.breakpoints.sm} {
		font-size: 10px;
		line-height: 14px;
		letter-spacing: 0.1em;
		margin-bottom: 0px;
		display: flex;
		align-items: center;
	}
`
export const ContactIcons = styled.div`
	transition: 0.3s ease;
	border-radius: 50px;
	padding: 2px,8px;
	&:hover {
		transform: scale(1.05); 
	}

	@media ${props => props.theme.breakpoints.sm} {
		padding: 2px,2px;
	}
`;