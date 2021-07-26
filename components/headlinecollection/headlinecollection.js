import { Heading, Flex } from "@chakra-ui/react";
import Styles from "./headlinecollection.module.css";

export default function HeadlineCollection({ tags, autosize }) {
    return (
        <Flex maxW="full" flexFlow="wrap" pb={[4, 8, 12]}>
            {tags.map((t) => (
                <Heading key={`${t}_key`} w={autosize ? "auto" : ["100%", null, "auto", "33%"]} as="h2" pr={[4, 12]} py="4" fontSize={["17px", "24px", "32px", "28px", "44px"]} className={Styles.headlinecollection}>
                    <strong>
                        {t}
                    </strong>
                </Heading>
            ))}
        </Flex>
    );
}