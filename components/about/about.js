// Show the info about our company
import { Text, Stack, Link, Heading, Container} from "@chakra-ui/react";

export default function About() {

  return (
    <Container maxW="40em" pt={[4, 12]} pb={[4, 12]}>
       
        <Text mb={[2,4]} color="gray.500" fontSize="sm">Über PlanB.</Text>
        <Heading fontSize={["2xl","4xl"]} as="p" pb={[4,8]}>
            PlanB sind 130 kluge Köpfe welche mutig die digitale Transformation und die Zukunft der Arbeit schon heute gestalten.
        </Heading>
        <Stack direction={["column","row"]} spacing={[2,4]} pb={[4,12]}>
            <Link href="/about" color="primary">
                Über die PlanB.
            </Link>
            <Link href="/karriere" color="primary">
                Karriere bei PlanB.
            </Link>
        </Stack>
    </Container>
  );
}
