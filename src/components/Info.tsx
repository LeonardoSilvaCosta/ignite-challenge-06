import { Box, Flex } from "@chakra-ui/react";

interface InfoProps {
  quantidadeDePaises: number,
  quantidadeDeLinguas: number,
  quantidadeDeCidades: number,
}

export function Info({quantidadeDePaises, quantidadeDeLinguas, quantidadeDeCidades}: InfoProps) {
  return(
    <Flex mt={["2", "20"]} gap={["8", "12"]} mr="12">
      <Box 
        as="div" 
        fontWeight={["normal", "bold"]}
        color="yellow.500" 
        fontSize={["28", "32"]}>{quantidadeDePaises}<Box color="gray.600" fontSize={["20", "16"]}>países</Box>
      </Box>
      <Box 
        as="div" 
        fontWeight={["normal", "bold"]}
        color="yellow.500" 
        fontSize={["28", "32"]}>{quantidadeDeLinguas}<Box color="gray.600" fontSize={["20", "16"]}>línguas</Box>
      </Box>
      <Box textAlign="center"
        as="div"
        fontWeight={["normal", "bold"]}
        color="yellow.500" 
        fontSize={["28", "32"]}>{quantidadeDeCidades}<Box color="gray.600" fontSize={["20", "16"]}>cidades +100</Box>
      </Box>
    </Flex>
  );
}