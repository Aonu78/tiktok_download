import React, { useEffect } from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import useTrans from '../hooks/useTrans';
import { useThemeColor } from '@/hooks/useThemeColor';
import Layout from '@/components/Layout';
import { openSans } from '@/contants';
import Board from '@/components/Board';

export default function Home() {
  const { textColor, navBackgroundColor } = useThemeColor();
  const trans = useTrans();

  useEffect(() => {
    // Wait for 2 seconds after the page loads, then simulate a click on the iframe
    const timer = setTimeout(() => {
      const iframe = document.getElementById('videoIframe');
      if (iframe) {
        const iframeWindow = iframe.contentWindow;
        iframeWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
      }
    }, 2000);

    // Cleanup the timeout on unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <Board />
      <VStack bg={navBackgroundColor} w="100%" alignItems="flex-start" px="10%" py="5">
        <Heading className={openSans.className} color={textColor}>
          {trans.home.text1}
        </Heading>
        <Text
          className={openSans.className}
          fontSize="16px"
          fontWeight="400"
          color={textColor}
          lineHeight="7"
        >
        </Text>
        <Box height="16px" />
        <iframe 
          id="videoIframe"
          width="100%" 
          height="700px" 
          src="https://www.youtube.com/embed/PYJuIAsH8oE?enablejsapi=1" 
          title="Mostaza Argentina" 
          frameBorder="0" 
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen>
        </iframe>
        <Box height="16px" />
      </VStack>
    </Layout>
  );
}
