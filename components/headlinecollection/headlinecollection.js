import { Heading, Flex } from "@chakra-ui/react";
import Styles from "./headlinecollection.module.css";

export default function HeadlineCollection({ tags }) {
    return (
        <Flex maxW="full" flexFlow="wrap">
            {tags.map((t) => (
                <Heading as="h2" pr={[4, 12]} py={[4]} fontSize={["36px", "44px"]} className={Styles.headlinecollection}>
                    <strong>
                        {t}
                    </strong>
                </Heading>
            ))}
        </Flex>
    );
}