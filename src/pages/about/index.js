import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import { Box, Flex } from 'grid-styled'

import { Image, InsideLink, Link, Input, Button } from '../../components/Primitives'
import ContactMe from '../../components/ContactMe'
import Subscribe from '../../components/Subscribe'

const AboutMeSection = Flex.extend`
  line-height: 1.55rem;
`

const AboutMeHeader = Flex.extend`
  align-items: center;
  justify-content: center;
`

const AboutMeImageSection = Box.extend`
  text-align: right;

  @media screen and (max-width: ${props => props.theme.breakpoints[0]}) {
    text-align: center;
  }
`

const AboutMeImage = Image.extend`
  height: 150px;
`

const AwardsSection = Flex.extend`
  text-align: center;
`

const AboutPage = ({ data: { me, awardDuke } }) => (
  <AboutMeSection>
    <Helmet title={`About`}>
    </Helmet>
    <Box width={[1, 8/12]} mx='auto'>

      <AboutMeHeader flexWrap={'wrap-reverse'}>
        <Box width={[1, 1/2]}>
          <h1>Hey, I am Tilen. Nice having you here.</h1>
        </Box>
        <AboutMeImageSection width={[1, 1/2]}>
          <AboutMeImage borderRadius={2} 
            src={`//www.gravatar.com/avatar/${me.gravatar}?s=300`}
            alt="author"
          />
        </AboutMeImageSection>
        
      </AboutMeHeader>
      
      <p>
        I’m a lead software developer who specialises in Java and cloud-native (API) design.
        I plan and create complex software architectures for cloud and integration solutions
        that have helped numerous projects with developing advanced cloud-native applications.
      </p>
      <p>
        I am heavily involved in the open source community, both personally and through
        Eclipse MicroProfile and the JCP, where I’m a JSR expert group member.
        I’m the creator and lead developer of KumuluzEE, which even won the Duke’s
        Choice Award for extreme innovation.
      </p>
      <p>
        A personal passion of mine is to attend at conferences, meetups and events around the world.
        I am proud to be able to present at some of the best ones around, such as JavaOne and others.
      </p>
      <p>
        I am always looking for new opportunities to work with great teams on exciting projects.
        {' '}<Link href={`mailto:${me.email}`}>Get in touch with me!</Link>
      </p>

      <ContactMe me={me} mb={4} />

      <h3>Awards</h3>

      <AwardsSection >
        <Box width={[1, 1/3]} mx='auto' mb={4}>
          <Img
            resolutions={awardDuke.childImageSharp.resolutions}
            alt="dukes-choice-award"
          />
          <span>Dukes Choice Award</span>
        </Box>
      </AwardsSection>
       
      <Subscribe />

    </Box>
  </AboutMeSection>
  
)

export default AboutPage

export const pageQuery = graphql`
  query AboutQuery {
    me: authorsYaml(id: { eq: "tfaga" }) {
      gravatar
      github
      twitter
      linkedin
      email
    }

    awardDuke: file(relativePath: { eq: "about/java-dukes-choice.jpg" }) {
      childImageSharp {
        resolutions(width: 150, quality: 80) {
          ...GatsbyImageSharpResolutions
        }
      }
    }
  }
`
