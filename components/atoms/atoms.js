// Small bits of ui helpers
import { Text, Flex, Heading, Box, useColorModeValue} from "@chakra-ui/react";
import Style from "./atoms.module.css";
import NextLink from "next/link";

// Styled Heading with border below
export function Lineheading({children, size}) {

  return (
    <Box>
      <Text d="inline-block" pr="2" mb="2" pb="2" borderColor="primary" borderBottomWidth="3px" as={size} fontSize={["md","xl"]}>
          {children}
      </Text>
    </Box>
  );
}

//PostIt for ToDos.
export function DevNote({children}) {
  return (
    <Box className={Style.postit}>
          {children}
    </Box>
  );
}

export function SegmentHeading({title}) {
  return (
    <Heading
      as="h2"
      pb={[2,3]}
      textTransform="uppercase"
      fontSize="1rem"
      fontWeight="normal"
      opacity=".8"
    >
      {title}
    </Heading>
  );
}

export function Card({children}) {
  const background = useColorModeValue("gray.50", "gray.700")

  return (
    <Box
      bg={background}
      borderRadius="1"
    >
      {children}
    </Box>
  );
}


// Gradient Text in PlanB color
export function Glowtext({children,variant}) {

  var gradient = "linear(to-r, rgba(255,81,0,1),rgba(255,81,0,.9),rgba(255,81,0,.3))";

  if(variant == "secondary") {
    var gradient = "linear(to-r, rgba(0,151,206,1),rgba(0,161,220,.9),rgba(0,161,220,.5))";
  }

  return (
    <Text
      as="h3"
      bgGradient={gradient}
      bgClip="text"
      fontWeight="extrabold"
      textTransform="uppercase"
      fontSize={["xl", "2xl","2vw",null,"3vw"]}
      d="inline-block"
    >
        {children}
    </Text>
  );
}
Glowtext.defaultProps = {
  variant: null,
};


export function Arrowlink({label, url, color}) {
  return (
  <NextLink href={url} passHref>
    <a>
      <Flex>
      <Text fontWeight="bold" color={color ? color : undefined}>
        {label}
      </Text>
      <Box pl="4">
        <svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M35.0607 13.0607C35.6464 12.4749 35.6464 11.5251 35.0607 10.9393L25.5147 1.3934C24.9289 0.807611 23.9792 0.807611 23.3934 1.3934C22.8076 1.97919 22.8076 2.92893 23.3934 3.51472L31.8787 12L23.3934 20.4853C22.8076 21.0711 22.8076 22.0208 23.3934 22.6066C23.9792 23.1924 24.9289 23.1924 25.5147 22.6066L35.0607 13.0607ZM0 13.5H34V10.5H0V13.5Z" fill={color ? color : "white"}/>
        </svg>
      </Box>  
      </Flex>
    </a>
  </NextLink>
  );
}

