// import { colors } from "@constants/theme/colors";
// import { IconButton, Box, Flex, Image, Input, Tooltip } from "@chakra-ui/react";
// import image from "@constants/image";
// import { Search } from "tabler-icons-react";
// import { useState } from "react";
// import { AiOutlineClose } from "react-icons/ai";
// import { FaOpencart } from "react-icons/fa";
// import { VscAccount } from "react-icons/vsc";
// import UserAccountMenu from "../atoms/UserAccountMenu";
// import ToggleLanguage from "../atoms/ToggleLanguage";
// import SearchInput from "../atoms/SearchInput";

// const OuterNav = () => {
//   const [search, setSeacrh] = useState<boolean>(false);
//   const [user] = useState<boolean>(false);
//   return (
//     <>
//       <Flex
//         py={10}
//         display={"flex"}
//         justify={"space-between"}
//         align={"center"}
//         h={"50px"}
//         bg={colors?.primary?.primary_backgroud}
//       >
//         <Flex alignItems={"center"} flex={1} justifyContent={"space-between"}>
//           <Flex minW={250}>
//             {search ? (
//               <SearchInput onClick={() => setSeacrh((p) => !p)} />
//             ) : (
//               <Tooltip color="indigo" label={"Search"}>
//                 <IconButton
//                   aria-label="search"
//                   onClick={() => setSeacrh((p) => !p)}
//                 >
//                   <Search />
//                 </IconButton>
//               </Tooltip>
//             )}
//           </Flex>

//           <Flex sx={{ cursor: "pointer" }}>
//             <Image
//               boxSize={100}
//               minW={200}
//               src={image.Logo}
//               objectFit={"cover"}
//               alt="With default placeholder"
//             />
//           </Flex>
//           <Flex></Flex>
//         </Flex>

//         <Flex
//           gap={15}
//           justify={"space-between"}
//           align={"center"}
//           h={"100%"}
//           minW={"100px"}
//         >
//           <IconButton aria-label="cart">
//             <FaOpencart style={{ color: "blue", fontSize: "26px" }} />
//           </IconButton>

//           {user ? (
//             <UserAccountMenu />
//           ) : (
//             <IconButton aria-label="accout">
//               <VscAccount style={{ fontSize: "25px" }} />
//             </IconButton>
//           )}
//           <ToggleLanguage />
//         </Flex>
//       </Flex>
//     </>
//   );
// };

// export default OuterNav;

import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Center,
  IconButton,
} from "@chakra-ui/react";
import { FaOpencart } from "react-icons/fa";

import ToggleColoMode from "../atoms/ToggleColoMode";
import { colors } from "@constants/theme/colors";

interface Props {
  children: React.ReactNode;
}

const NavLink = (props: Props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue(
          colors?.primary?.primary_backgroud,
          colors?.primary?.primary_backgroud
        ),
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

const AvatarMenu = () => {
  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          rounded={"full"}
          variant={"link"}
          cursor={"pointer"}
          minW={0}
        >
          <Avatar
            size={"sm"}
            src={"https://avatars.dicebear.com/api/male/username.svg"}
          />
        </MenuButton>
        <MenuList alignItems={"center"}>
          <br />
          <Center>
            <Avatar
              size={"2xl"}
              src={"https://avatars.dicebear.com/api/male/username.svg"}
            />
          </Center>
          <br />
          <Center>
            <p>Username</p>
          </Center>
          <br />
          <MenuDivider />
          <MenuItem>Your Servers</MenuItem>
          <MenuItem>Account Settings</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default function OuterNav() {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue("#fff", "#fff")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>Logo</Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <NavLink>
                <IconButton
                  bg={colors?.primary?.primary_backgroud}
                  aria-label="cart"
                  _hover={{ background: "white" }}
                >
                  <FaOpencart style={{ color: "blue", fontSize: "26px" }} />
                </IconButton>
              </NavLink>
              <NavLink>
                <IconButton
                  bg={colors?.primary?.primary_backgroud}
                  aria-label="cart"
                  _hover={{ background: "white" }}
                >
                  <FaOpencart style={{ color: "blue", fontSize: "26px" }} />
                </IconButton>
              </NavLink>
            </Stack>
            <Stack direction={"row"} spacing={7}>
              <ToggleColoMode />
              <AvatarMenu />
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
