import { Box, Flex, Text, VStack, Link } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/react";
import { BsInstagram } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";

const UserHeader = () => {
   return (
      <VStack gap={4} alignItems={"start"}>
         <Flex justifyContent={"space-between"} w={"full"}>
            <Box>
               <Text fontSize={"2xl"} fontWeight={"bold"}>
                  Aliu Musa
               </Text>
               <Flex gap={2} alignItems={"center"}>
                  <Text fontSize={"sm"}>aliumusa@99</Text>
                  <Text
                     fontSize={"xs"}
                     bg={"gray.dark"}
                     color={"gray.light"}
                     p={1}
                     borderRadius={"full"}
                  >
                     threads.net
                  </Text>
               </Flex>
            </Box>
            <Box>
               <Avatar name="Aliu Musa" src="/directorPro.jpeg" size={"xl"} />
            </Box>
         </Flex>
         <Text>Founder, executive chairman and CEO of DLTAfrica</Text>
         <Flex w={"full"} justifyContent={"space-between"}>
            <Flex gap={2} alignItems={"center"}>
               <Text color={"gray.light"}>3.2k followers</Text>
               <Box w={1} h={1} bg={"gray.light"} borderRadius={"50%"}></Box>
               <Link color={"gray.light"}>instagram.com</Link>
            </Flex>
            <Flex gap={2}>
               <Box>
                  <BsInstagram />
               </Box>
               <Box>
                  <CgMoreO />
               </Box>
            </Flex>
         </Flex>
      </VStack>
   );
};

export default UserHeader;
