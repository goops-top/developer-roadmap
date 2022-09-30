import { Flex, Link, Text } from '@chakra-ui/react';
import YouTubeLogo from '../components/icons/youtube.svg';
import siteConfig from '../content/site.json';
import { event } from '../lib/gtag';

export function StickyBanner() {
  return (
    <Flex as={Link}
          href={siteConfig.url.youtube}
          bg={'yellow.200'}
          color='gray.900'
          alignItems='center'
          position='sticky'
          top={0}
          zIndex={999}
          justifyContent='center'
          py='8px'
          _hover={{ textDecoration: 'none', bg: 'yellow.400' }}
          target='_blank'
          onClick={() => event({
            category: 'Subscription',
            action: 'Clicked the YouTube banner',
            label: 'Sticky YouTube banner on Top'
          })}
    >
      <YouTubeLogo style={{ height: '20px', display: 'inline-block', marginRight: '7px' }} />
      <Text as='span' fontWeight={500} fontSize='14px'>
        <Text as='span'>我们开通了一个 YouTube 频道。<Text as='span' d={['none', 'inline']}>点击订阅相关视频内容。</Text></Text>
      </Text>
    </Flex>
  );
}
