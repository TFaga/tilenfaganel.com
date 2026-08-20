import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import {
  Image,
  Link,
  OutsideLink,
  Box,
  Flex,
} from '../../components/Primitives'
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

  @media screen and (max-width: ${(props) => props.theme.breakpoints[0]}) {
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

const AboutPage = ({
  data: { me, awardDuke, certAwsDa, certAwsSaa, pubJavaEe8Micro },
  location,
}) => (
  <Layout location={location}>
    <AboutMeSection>
      <Box width={[1, 8 / 12]} mx="auto">
        <AboutMeHeader flexWrap={'wrap-reverse'}>
          <Box width={[1, 1 / 2]}>
            <h1>Hey, I am Tilen. Nice having you here.</h1>
          </Box>
          <AboutMeImageSection width={[1, 1 / 2]}>
            <AboutMeImage
              borderRadius={2}
              src={`//www.gravatar.com/avatar/${me.gravatar}?s=300`}
              alt="author"
            />
          </AboutMeImageSection>
        </AboutMeHeader>

        <p>
          I’m a lead software engineer and consultant who specialises in
          designing cloud-native solutions. I plan, create and implement complex
          and robust software architectures for cloud and integration demands
          that have helped numerous enterprises with developing advanced
          cloud-native solutions.
        </p>
        <p>
          I am heavily involved in the open source community,
          both personally and through my work, Eclipse MicroProfile and the
          Oracle JCP, where I serve as a JSR expert group member. I’m the
          creator and lead developer of KumuluzEE, which won the Duke’s Choice
          Award for extreme innovation.
        </p>
        <p>
          A personal passion of mine is to explore and attend conferences,
          meetups and events around the world. I am proud to be able to present
          at some of the best ones around, such as JavaOne and others.
        </p>
        <p>
          I am always looking for new opportunities to work with great teams on
          exciting projects.{' '}
          <Link href={`mailto:${me.email}`}>Get in touch with me!</Link>
        </p>

        <ContactMe me={me} mb={4} />

        <h3>Awards</h3>

        <AwardsSection mb={5}>
          <Flex justifyContent="center">
            <Box>
              <Box>
                <GatsbyImage
                  image={awardDuke.childImageSharp.gatsbyImageData}
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
            <GatsbyImage
              image={certAwsDa.childImageSharp.gatsbyImageData}
              alt="aws-developer-associate"
            />
            <GatsbyImage
              image={certAwsSaa.childImageSharp.gatsbyImageData}
              alt="aws-solution-architect-associate"
            />
          </Flex>
        </CertificationSection>

        <h3>Publications</h3>

        <PublicationSection mb={5}>
          <Flex justifyContent="center">
            <OutsideLink
              href={`https://www.packtpub.com/application-development/java-ee-8-microservices-video`}
              target="_blank"
            >
              <GatsbyImage
                image={pubJavaEe8Micro.childImageSharp.gatsbyImageData}
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

export const Head = ({ location }) => (
  <Seo location={location} pageTitle="About" />
)

export const pageQuery = graphql`
  query AboutQuery {
    me: authorsYaml(yamlId: { eq: "tfaga" }) {
      name
      gravatar
      github
      twitter
      linkedin
      facebook
      email
    }

    awardDuke: file(relativePath: { eq: "about/java-dukes-choice.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 150, quality: 80)
      }
    }

    certAwsDa: file(relativePath: { eq: "about/aws-dev-associate.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 150, quality: 80)
      }
    }

    certAwsSaa: file(relativePath: { eq: "about/aws-sa-associate.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 150, quality: 80)
      }
    }

    pubJavaEe8Micro: file(
      relativePath: { eq: "about/pub-javaee8-microservices.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 150, quality: 80)
      }
    }
  }
`
