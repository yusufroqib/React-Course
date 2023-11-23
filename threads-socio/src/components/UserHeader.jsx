import { Box, Flex, Text, VStack } from "@chakra-ui/layout";

const UserHeader = () => {
   return (
      <VStack gap={4} alignItems={"start"}>
         <Flex justifyContent={"space-between"} w={"full"}>
            <Box>
                <Text>Aliu </Text>
            </Box>
         </Flex>
      </VStack>
   );
};

export default UserHeader;
