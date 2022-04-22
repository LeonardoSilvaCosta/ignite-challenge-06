import { Box, Flex, Image } from "@chakra-ui/react";
import Link from "next/link";

export function Header() {
  return (
    <Flex as="header" justify="center" w="100%" max-width={1480} h={["12", "24"]}>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Link href="/">
          <a>
            <Image objectFit="cover" src="/Logo.svg" alt="logo" width={["6rem", "12rem"]} />
          </a>
        </Link>
      </Box>
    </Flex>
  );
}
