import React from "react";
import { useBreakpointValue } from "@chakra-ui/react";
import Head from 'next/head'

import { Container } from "@/components/layout/Container";

import { LandingNavbar } from '@/components/navigation/LandingNavbar';
import { MobileLandingNavbar } from '@/components/navigation/MobileLandingNavbar';
import { LandingFooter } from '@/components/layout/LandingFooter';

interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  isNavbar?: boolean;
  isFooter?: boolean;
}

export const Page = ({
  title = "App Blocks V1",
  description = "Shave off 100 hours with App Blocks",
  isNavbar = true,
  isFooter = true,
  children,
}: PageProps) => {
  const isMobile = useBreakpointValue(
    {
      base: true,
      sm: true,
      md: false,
      lg: false,
    },
    {
      ssr: true,
    }
  );

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isNavbar && <>
      
        {isMobile ? <MobileLandingNavbar /> : <LandingNavbar />}
      
      </>}

      <Container minH="91vh" overflowY="auto" overflowX="hidden" w={["100%"]} px={5} justifyContent="center">
        {children}
      </Container>
      {isFooter && <LandingFooter />}
    </>
  );
};