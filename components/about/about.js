// Show the info about our company
import { Text, Stack, Box, Link, Heading, Container, Flex, Spacer} from "@chakra-ui/react";
import { Main, } from "@components/blocks/blocks";
import  NextImage from 'next/image';

export default function About() {

    function scrollUp() {
        window.scroll(0, 0);
    }

  return (
    <Main maxW="full">

        <Flex>
            <Spacer /> 
            <Box transform="translateY(-50%)" borderRadius="50%" backgroundColor="red" width="58px" height="58px" lineHeight="58px" textAlign="center" cursor="pointer" onClick={() => scrollUp()}>
                <NextImage src="/assets/icons/uparrow.png" layout="responsive" p={[4, 8, 12]} width="auto" height="auto" />
            </Box>
        </Flex>

        <Box  pt={[4, 12]} pb={[4, 12]} px={[4, 8, 12]}>
       
        <Text mb={[2,4]} color="gray.500" fontSize="sm">Über PlanB.</Text>
        <Heading fontSize={["2xl","4xl"]} as="p" pb={[4,8]}>
            PlanB. sind 130 kluge Köpfe welche mutig die digitale Transformation und die Zukunft der Arbeit schon heute gestalten.
        </Heading>
        <Stack direction={["column","row"]} spacing={[2,4]} pb={[4,12]}>
            <Link href="/about" color="primary">
                Über die PlanB.
            </Link>
            <Link href="/karriere" color="primary">
                Karriere bei PlanB.
            </Link>
        </Stack>
        </Box>
    </Main>
  );
}
