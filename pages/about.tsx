import React from 'react';
import { Box, Button, Center, Container, Flex, Heading, Image, Link, Stack, Text } from '@chakra-ui/react';
import { GlobalHeader } from '../components/global-header';
import { OpensourceBanner } from '../components/opensource-banner';
import { Footer } from '../components/footer';
import MdRenderer from '../components/md-renderer';
import Helmet from '../components/helmet';

function AboutHeader() {
  return (
    <Box pt={['45px', '45px', '70px']} pb={['45px', '45px', '55px']} borderBottomWidth={1} mb='30px' textAlign='left'
         position='static'
         top='10px'>
      <Helmet
        title={'About roadmap.sh'}
      />
      <Container maxW='container.md' position='relative' textAlign='left'>
        <Flex alignItems='center'>
          <Image alt={'Kamran'} d={['none', 'none', 'block']} src='/kamran.jpeg' h='170px' rounded='10px' mr='25px' />
          <Box>
            <Heading as='h1' color='black' fontSize={['35px', '35px', '40px']} fontWeight={700} mb='10px'>你们好，我是
              Kamran Ahmed
            </Heading>
            <Text fontSize={['15px', '15px', '17px']} color='gray.700' mb='15px'>
              我创建了 roadmap.sh 去帮助开发者在困惑时找到他们自己的发展路径，并帮助他们在职业生涯中得到成长。</Text>

            <Stack isInline flexDirection={['column', 'column', 'row']} spacing={0} shouldWrapChildren>
              <Button as={Link} bg='blue.500' color='white' size='sm'
                      mr='10px'
                      mb={['7px', '7px', 0]}
                      _hover={{ textDecoration: 'none', bg: 'blue.700' }} href='https://twitter.com/kamranahmedse'
                      arget='_blank'>
                @kamranahmedse
              </Button>

              <Button as={Link} bg='green.500' color='white' size='sm'
                      _hover={{ textDecoration: 'none', bg: 'green.700' }} href='mailto:kamranahmed.se@gmail.com'
                      target='_blank'>
                kamranahmed.se@gmail.com
              </Button>
            </Stack>

          </Box>
        </Flex>
      </Container>
      <Center>-------------------------------------------------------------------------------------------------------</Center>
      <Container maxW='container.md' position='relative' textAlign='left'>
        <Flex alignItems='center'>
          <Image alt={'Kamran'} d={['none', 'none', 'block']} src='/bgbiao.png' h='170px' rounded='10px' mr='25px' />
          <Box>
            <Heading as='h1' color='black' fontSize={['35px', '35px', '40px']} fontWeight={700} mb='10px'>嗨，我是
              BGBiao
            </Heading>
            <Text fontSize={['15px', '15px', '17px']} color='gray.700' mb='15px'>
              CloudNativeOps 公众号作者，roadmap.sh 中文站点的维护者。国内早期的 DevOps，SRE 实践和推广者，目前专注于 CloudNative 领域的运维工作。</Text>

            <Stack isInline flexDirection={['column', 'column', 'row']} spacing={0} shouldWrapChildren>
              <Button as={Link} bg='blue.500' color='white' size='sm'
                      mr='10px'
                      mb={['7px', '7px', 0]}
                      _hover={{ textDecoration: 'none', bg: 'blue.700' }} href='https://twitter.com/bgbiao'
                      arget='_blank'>
                @bgbiao
              </Button>

              <Button as={Link} bg='green.500' color='white' size='sm'
                      _hover={{ textDecoration: 'none', bg: 'green.700' }} href='mailto:weichuangxxb@gmail.com'
                      target='_blank'>
                weichuangxxb@gmail.com
              </Button>
            </Stack>

          </Box>
        </Flex>
      </Container>
    </Box>
    
  );
}

export default function About() {
  const AboutContent = require(`../content/pages/about.md`).default;

  return (
    <Box bg='white' minH='100vh'>
      <GlobalHeader />
      <Box mb='60px'>
        <AboutHeader />
        <Container maxW={'container.md'} position='relative'>
          <MdRenderer>
            <AboutContent />
          </MdRenderer>
        </Container>
      </Box>

      <OpensourceBanner />
      <Footer />
    </Box>
  );
}
