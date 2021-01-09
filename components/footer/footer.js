// Footer with the boring legal stuff
import {
  Box,
  Container,
  Flex,
  Spacer,
  Link,
  Stack
} from "@chakra-ui/react";
import NextLink from "next/link";
import Style from "./footer.module.css";
import { Divided } from "@components/blocks/blocks";

export default function Posthead({ title, published }) {
  return (
    <Divided>
      <Container maxW="54em" pt={[4, 12]} pb={[4, 0]}>
        <Flex as="header" align={["flex-start","center"]} direction={["column", "row"]}>
          <Box pb={[4,0]}>
            <NextLink href="/">
              <a>
                <img
                  className={Style.logo}
                  src="/assets/planb-logo.png"
                  alt="PlanB."
                />
              </a>
            </NextLink>
          </Box>
          <Spacer />
          <Stack direction={["column", "row"]} spacing={[2,8]}>
            <NextLink href="/imprint" passHref>
              <Link color="primary">Impressum & Datenschutz</Link>
            </NextLink>
          </Stack>
        </Flex>
      </Container>
    </Divided>
  );
}
