import NextLink from 'next/link'
import { Page } from '@root/components/layout/Page';
import {
  Box,
  Flex,
  Text,
  Link,
  Stack,
  VStack,
  Image,
  Container as ChakraContainer,
  SimpleGrid,
  Skeleton,
} from '@chakra-ui/react';

import { RiWaterFlashFill, RiSeedlingFill, RiPlugFill } from "react-icons/ri";
import { PricingCard } from '@root/components/cards/PricingCard';
import { ProjectCard2 } from '@root/components/cards/ProjectCard2';
import { FAQList } from '@root/components/lists/FAQList';
import { T2BProductFeatures } from '@root/components/pages/landing/T2BProductFeatures';
import { transitionVariants } from '@root/theme/animations';
import { Section } from '@root/components/layout/Section';

const productHeroImage = require('@root/assets/product_hero.png');

export default function Home() {

  const heroText = `Beautiful React UI Kit and component library`
  // const heroSubText = "A React + Chakra UI based design system and component library to build modern web apps and products."
  const heroSubText = "Appblocks provides 65 well-designed, copy-and-pasteable React components that work seamlessly with ChakraUI v2.7. Build your next app without worrying about layouts or CSS, and tweak whatever you want."

  const demoLink = "https://yogo-demo.appblocks.xyz/"

  const productDescription1 = {
    heading: "Most Used Pages",
    description: "A React + Chakra UI based design system and component library to build modern web apps and products.",
    image: String(productHeroImage.default.src),
  }

  const productDescription2 = {
    heading: "Component Library",
    description: "A React + Chakra UI based design system and component library to build modern web apps and products.",
    image: String(productHeroImage.default.src),
  }

  const featuresList = [
    {
      heading: 'Modern Tech Stack',
      body: 'Our UI Kits are built with modern tools like React 18, Next.js 13, ChakraUI 3, and more.',
      image: RiWaterFlashFill,
    },

    {
      heading: 'Production Ready',
      body: 'Be ready for deployment from Day 1. Our UI Kits are production-ready and battle-tested.',
      image: RiPlugFill,
    },

    {
      heading: 'Fresh Designs',
      body: "Make sure your app doesn't look dated or like a clone of another app. We have unique and modern designs.",
      image: RiSeedlingFill,
    },
  ]

  const pricingPlanList = [
    {
      slug: "yogo-lite",
      title: "Yogo Lite",
      price: "$49",
      payFrequency: "one-time payment",
      payLink: 'https://appblocks.lemonsqueezy.com/checkout/buy/89f928f6-cfcc-4a2b-86ff-2a1a261e7134',
      cta: 'Buy Now',
      description:
        "You only need the theme & components in your project",
      features: [
        "Component library",
        "Unlimited projects",
        "Unlimited users",
      ],
      secondaryFeatures: [],
      isFavourite: false,
    },

    {
      slug: "yogo-complete",
      title: "Yogo Complete",
      price: "$149",
      payFrequency: "one-time payment",
      payLink: 'https://appblocks.lemonsqueezy.com/checkout/buy/bf610180-039d-4f53-a510-b9216a6e6857',
      cta: 'Buy Now',
      description:
        "You want the full package, including the dashboard and examples",
      features: [
        "All Lite features",
        "Examples pages",
        "Dashboard pages",
        "Login, Forgot & Recover Password pages",
        "Signup and Onboarding flows",
      ],
      secondaryFeatures: [],
      isFavourite: true,
    },

    {
      slug: "custom",
      title: "Custom",
      price: "$1499+",
      payFrequency: "",
      payLink: 'mailto:appblocks.xyz@gmail.com',
      cta: 'Contact Us',
      description:
        "You need something custom, or want to hire us for a project",
      features: [
        "Custom theme",
        "One project",
        "Custom pages and flows",
      ],
      secondaryFeatures: [],
      isFavourite: false,
    },
  ];

  const faqList = [
    {
      question: "What version of Chakra UI is used?",
      answer: "All components are written with the Chakra UI package, on version 3 or greater.",
    },
    {
      question: "What version of React and Next.js is used?",
      answer: "React V18 and Next.js V13 are used.",
    },
    {
      question: "Is there a free version to try out?",
      answer: "Right now, there is no free version. We are working on a free version that will be available soon.",
    },
    {
      question: "How do I get access after I purchase?",
      answer: "After you have purchased a license through our payment provider, you will receive an email from them confirming your purchase. In addition, you will receive instructions to download the source code.",
    },
  ]

  return (
    <>
      <Page>
        <VStack spacing={[20, "8rem"]}>
          <Section
            initial="hidden"
            animate="visible"
            variants={transitionVariants}
            // @ts-ignore no problem in operation, although type error appears.
            transition={{
              delay: 0.2,
              ease: "easeInOut",
            }}
            maxW="1080px"
            centerContent
            position="relative"
          >
            <VStack
              justify="center"
              as="section"
              minH="90vh"
              w="100%"
              spacing={12}
            >
              <VStack w={["100%", "60%"]} spacing={8}>
                <Text
                  as="h2"
                  textStyle="h1"
                  align={["left", "center"]}
                  _dark={{ color: "white.100" }}
                  mt={[12, "16rem"]}
                >
                  {heroText}
                </Text>
                <Text
                  textStyle="h5"
                  fontWeight="normal"
                  align={["left", "center"]}
                  fontSize={["17px", "24px"]}
                >
                  {heroSubText}
                </Text>
                <SimpleGrid columns={[2]} spacing={4} w={["100%", "400px"]} zIndex="toast">
                  <Link
                    as={NextLink}
                    target="_blank"
                    variant="outlineButton"
                    w="100%"
                    textAlign="center"
                    href={demoLink}
                  >
                    View Demo
                  </Link>
                  <Link
                    as={NextLink}
                    href="#pricing"
                    variant="brand-solid-button"
                    w="100%"
                    textAlign="center"
                  >
                    Buy Now
                  </Link>
                </SimpleGrid>
              </VStack>

              <Flex
                as={Skeleton}
                isLoaded={productHeroImage}
                w="100%"
                position="relative"
                justify="center"
                sx={{ backgroundBlendMode: "color-dodge" }}
                zIndex="base"
              >
                <Image
                  w={["100%", "80%"]}
                  h={["auto", "500px"]}
                  objectFit="cover"
                  objectPosition="top"
                  roundedTop="lg"
                  src={String(productHeroImage.default.src)}
                  alt="AppBlocks UI kit mockup"
                />
                <Box
                  w="100%"
                  h="45vh"
                  position="absolute"
                  bottom={0}
                  sx={{
                    background:
                      "linear-gradient(to top,rgb(28,28,28) 0%,rgba(28,28,28,.8) 20%,rgba(28,28,28,.641) 34%,rgba(28,28,28,.482) 47%,rgba(28,28,28,.378) 56.5%,rgba(28,28,28,.294) 65%,rgba(28,28,28,.196) 73%,rgba(28,28,28,.125) 80.2%,rgba(28,28,28,.042) 86.1%,rgba(28,28,28,.021) 91%,rgba(28,28,28,.008) 95.2%,rgba(28,28,28,.002) 98.2%,transparent 100%)",
                  }}
                />
              </Flex>
            </VStack>
          </Section>

          <Section maxW="1080px" delay={0.8}>
            <VStack align="flex-start" spacing={[6, 8]} w="">
              <Text as="h3" textStyle="sectionSubHeading" align="start">
                Features
              </Text>
              <Stack spacing={8} direction={["column", "row"]}>
                {featuresList.map((feature, key) => (
                  <ProjectCard2
                    key={`${key}-feature`}
                    title={feature.heading}
                    content={feature.body}
                    icon={feature.image}
                  />
                ))}
              </Stack>
            </VStack>
          </Section>

          <Box px={4} position="relative">
            <T2BProductFeatures
              productDescription1={productDescription2}
              productDescription2={productDescription1}
            />
          </Box>

          <ChakraContainer maxW="1080px" id="pricing" py={24} centerContent>
            <VStack align="flex-start" spacing={[6, 8]}>
              <Text as="h3" textStyle="sectionSubHeading" align="start">
                Pricing
              </Text>
              <SimpleGrid spacing={6} columns={[1, 3]}>
                {pricingPlanList.map((plan, key) => (
                  <PricingCard
                    key={`${key}-pricing-plan`}
                    slug={plan.slug}
                    title={plan.title}
                    price={plan.price}
                    cta={plan.cta}
                    payFrequency={plan.payFrequency}
                    payLink={plan.payLink}
                    description={plan.description}
                    features={plan.features}
                    isFavourite={plan.isFavourite}
                  />
                ))}
              </SimpleGrid>
            </VStack>
          </ChakraContainer>

          <ChakraContainer maxW="1080px" centerContent>
            <VStack align="flex-start" spacing={[6, 8]} w="100%">
              <Text as="h3" textStyle="sectionSubHeading" align="start">
                Common Questions
              </Text>
              <SimpleGrid columns={1} w={["100%", "60%"]}>
                <FAQList list={faqList} />
              </SimpleGrid>
            </VStack>
          </ChakraContainer>
        </VStack>
      </Page>
    </>
  );
}
