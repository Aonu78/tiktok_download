import { useEffect } from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import useTrans from '../hooks/useTrans';
import { useThemeColor } from '@/hooks/useThemeColor';
import Layout from '@/components/Layout';
import { openSans } from '@/contants';
import Board from '@/components/Board';

export default function Home() {
  const { textColor, navBackgroundColor } = useThemeColor();
  const trans = useTrans();

  // Function to automatically play video after the page loads
  useEffect(() => {
    const timeout = setTimeout(() => {
      const iframe = document.getElementById('videoIframe') as HTMLIFrameElement;
      if (iframe && iframe.contentWindow) {
        iframe.contentWindow.postMessage(
          '{"event":"command","func":"playVideo","args":""}',
          '*'
        );
      }
    }, 4000); // 3-second timeout
  
    // Optional cleanup function if necessary
    return () => clearTimeout(timeout);
  }, []); // Empty dependency array ensures this runs once on page load
  
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
          {trans.home.text2} <br />
          {trans.home.text3}
        </Text>
        <Box height="16px" />
        
        {/* YouTube Video iframe */}
        <iframe 
          id="videoIframe"  // Add this id to target the iframe
          width="100%" 
          height="700px" 
          src="https://www.youtube.com/embed/PYJuIAsH8oE?enablejsapi=1&&mute=1" 
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
