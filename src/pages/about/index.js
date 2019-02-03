import React from 'react'
import { graphql } from "gatsby"
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import { Box, Flex } from 'grid-styled'
import styled from 'styled-components'

import Layout from "../../components/Layout"
import { Image, Link, OutsideLink } from '../../components/Primitives'
import ContactMe from '../../components/ContactMe'
import Subscribe from '../../components/Subscribe'

const AboutMeSection = styled(Flex)`
  line-height: 1.55rem;
`

const AboutMeHeader = styled(Flex)`
  align-items: center;
  justify-content: center;
`

const AboutMeImageSection = styled(Box)`
  text-align: right;

  @media screen and (max-width: ${props => props.theme.breakpoints[0]}) {
    text-align: center;
  }
`

const AboutMeImage = styled(Image)`
  height: 150px;
`

const AwardsSection = styled(Box)`
  text-align: center;
`

const CertificationSection = styled(Box)`
  text-align: center;

`

const PublicationSection = styled(Box)`
  text-align: center;
`

const AboutPage = ({ data: { me, awardDuke, certAwsDa, certAwsSaa, pubJavaEe8Micro }, location }) => (
  <Layout location={location}>
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
          I’m a lead software engineer and consultant who specialises in designing cloud-native solutions.
          I plan, create and implement complex and robust software architectures for cloud and integration demands
          that have helped numerous enterprises with developing advanced cloud-native solutions.
        </p>
        <p>
          I am heavily involved in the open source community, both personally and through my work,
          Eclipse MicroProfile and the Oracle JCP, where I serve as a JSR expert group member.
          I’m the creator and lead developer of KumuluzEE, which won the Duke’s Choice Award
          for extreme innovation.
        </p>
        <p>
          A personal passion of mine is to explore and attend conferences, meetups and events around the world.
          I am proud to be able to present at some of the best ones around, such as JavaOne and others.
        </p>
        <p>
          I am always looking for new opportunities to work with great teams on exciting projects.
          {' '}<Link href={`mailto:${me.email}`}>Get in touch with me!</Link>
        </p>

        <ContactMe me={me} mb={4} />

        <h3>Awards</h3>

        <AwardsSection mb={5}>
          <Flex justifyContent="center">
            <Box>
              <Box>
                <Img
                  fixed={awardDuke.childImageSharp.fixed}
                  alt="dukes-choice-award"
                />
              </Box>
              <Box>
                <span>Dukes Choice Award</span>
              </Box>
            </Box>
          </Flex>
        </AwardsSection>

        <h3>Certifications</h3>

        <CertificationSection mb={5}>
          <Flex justifyContent="center">
            <Img 
                fixed={certAwsDa.childImageSharp.fixed}
                alt="aws-developer-associate"
              />
            <Img 
                fixed={certAwsSaa.childImageSharp.fixed}
                alt="aws-solution-architect-associate"
              />
          </Flex>
        </CertificationSection>

        <h3>Publications</h3>

        <PublicationSection mb={5}>
          <Flex justifyContent="center">
            <OutsideLink href={`https://www.packtpub.com/application-development/java-ee-8-microservices-video`} target='_blank'>
              <Img
                fixed={pubJavaEe8Micro.childImageSharp.fixed}
                alt="publication-javaee8-microservices"
              />
            </OutsideLink>
          </Flex>  
        </PublicationSection>
        
        <Subscribe />

      </Box>
    </AboutMeSection>
  </Layout>
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
        fixed(width: 150, quality: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    certAwsDa: file(relativePath: { eq: "about/aws-dev-associate.png" }) {
      childImageSharp {
        fixed(width: 150, quality: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    certAwsSaa: file(relativePath: { eq: "about/aws-sa-associate.png" }) {
      childImageSharp {
        fixed(width: 150, quality: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    pubJavaEe8Micro: file(relativePath: { eq: "about/pub-javaee8-microservices.png" }) {
      childImageSharp {
        fixed(width: 150, quality: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
