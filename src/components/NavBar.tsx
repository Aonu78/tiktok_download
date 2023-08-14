import { useThemeColor } from '@/hooks/useThemeColor';
import useTrans from '@/hooks/useTrans';
import {
  Box,
  Flex,
  Heading,
  HStack,
  IconButton,
  Text,
  useTheme,
  VStack,
} from '@chakra-ui/react';
import { Open_Sans } from 'next/font/google';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { MdDarkMode, MdLanguage, MdLightMode } from 'react-icons/md';

type Props = {};

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: '400',
});

const NavBar = (props: Props) => {
  const theme = useTheme();
  const { navBackgroundColor, isDarkMode, textColor, toggleDarkMode } = useThemeColor();
  const router = useRouter();
  const trans = useTrans();

  return ( <VStack w="100%" backgroundColor={navBackgroundColor}>
      <HStack bg={navBackgroundColor} justifyContent="space-between" w="100%">
        <Link href="/en/">
          <Box px="16px" display="flex" w="100%" py="10px">
            <Heading
              className={openSans.className}
              fontSize={{
                lg: '3xl',
                base: 'xl',
              }}
              fontWeight="bold"
              color="primary.main"
              _hover={{
                color: textColor,
                cursor: 'pointer',
              }}
            >
              My-Tik-Taki
            </Heading>
            <Heading
              className={openSans.className}
              fontSize={{
                lg: '3xl',
                base: 'xl',
              }}
              fontWeight="bold"
              color={textColor}
            >
              {/* Tik1Click */}
            </Heading>
          </Box>
        </Link>
        <Box display="flex" flex={1} justifyContent="flex-end">
          <HStack
            display={{
              base: 'none',
              lg: 'flex',
            }}
          >
            <Link href="/en/trending" locale={router.locale}>
              <Text className={openSans.className} fontSize="md" color="red" fontWeight="600">
                #Trending
              </Text>
            </Link>
            <Box w="20px" />
            <Link href="/en/contact" locale={router.locale}>
              <Text className={openSans.className} fontSize="sm" color={textColor} fontWeight="600">
                {trans.home.contact}
              </Text>
            </Link>
            <Box w="20px" />
            <Link href="/en/terms-of-service" locale={router.locale}>
              <Text className={openSans.className} fontSize="sm" color={textColor} fontWeight="600">
                {trans.home.terms}
              </Text>
            </Link>
            <Box w="20px" />
            <Link href="/en/privacy-policy" locale={router.locale}>
              <Text className={openSans.className} fontSize="sm" color={textColor} fontWeight="600">
                {trans.home.privacy}
              </Text>
            </Link>
          </HStack>
          <Box w="8%" />
          <IconButton
            icon={
              !isDarkMode ? (
                <MdDarkMode color={theme.colors.primary.dark} size="30px" />
              ) : (
                <MdLightMode color={theme.colors.primary.light} size="30px" />
              )
            }
            aria-label={'dark-mode'}
            onClick={toggleDarkMode}
            variant="unstyled"
          />
          <Box w="16px" />
          <Box w="16px" />
        </Box>
      </HStack>
      <HStack
        display={{
          base: 'flex',
          lg: 'none',
        }}
        pb="12px"
      >
        <Flex flex={0.3} justifyContent="center">
          <Link href="/en/trending" locale={router.locale}>
            <Text className={openSans.className} fontSize="md" color="red" fontWeight="700">
              #Trending
            </Text>
          </Link>
        </Flex>
        <Box w="20px" />
        <Flex flex={0.3} justifyContent="center">
          <Link href="/en/contact" locale={router.locale}>
            <Text className={openSans.className} fontSize="sm" color={textColor} fontWeight="600">
              {trans.home.contact}
            </Text>
          </Link>
        </Flex>
        <Box w="20px" />
        <Flex flex={0.3} justifyContent="center">
          <Link href="/en/terms-of-service" locale={router.locale}>
            <Text className={openSans.className} fontSize="sm" color={textColor} fontWeight="600">
              {trans.home.terms}
            </Text>
          </Link>
        </Flex>
        <Box w="20px" />
        <Flex flex={0.3} justifyContent="center">
          <Link href="/en/privacy-policy" locale={router.locale}>
            <Text className={openSans.className} fontSize="sm" color={textColor} fontWeight="600">
              {trans.home.privacy}
            </Text>
          </Link>
        </Flex>
      </HStack>
    </VStack>
  );
};

export default NavBar;
