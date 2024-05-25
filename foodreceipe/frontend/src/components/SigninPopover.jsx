import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Box,
  Image,
  Text,
  Button,
  Avatar,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
export const SigninPopover = () => {
  const navigate = useNavigate();
  const authContext = useAuth();
  console.log(authContext);

  const { isLoggedIn, logout, user } = authContext;

  const logoutUser = () => {
    logout();
  };
  return (
    <Popover>
      {isLoggedIn ? (
        <>
          <PopoverTrigger>
            <Box
              w={["20%"]}
              h={["100%"]}
              display={["flex"]}
              justifyContent={["center"]}
              alignItems={["center"]}
              cursor={"pointer"}
            >
              <Box
                display={"flex"}
                justifyContent={["center"]}
                alignItems={["center"]}
                paddingRight="30px"
              >
                <Text
                  color={"black"}
                  textAlign={"center"}
                  fontWeight={"semibold"}
                  fontSize={"large"}
                >
                  {user.name}
                </Text>
              </Box>
              <Box
                h={["100%"]}
                width={["30%"]}
                display={"flex"}
                justifyContent={["center"]}
                alignItems={["center"]}
                paddingBottom="20px"
              >
                <Avatar bg="black" size="sm" src="https://bit.ly/broken-link" />
              </Box>
            </Box>
          </PopoverTrigger>
          <PopoverContent width={["230px"]}>
            <PopoverArrow />
            <PopoverCloseButton />
            <Box>
              <Link to="/login">
                <Button
                  _hover={{ bg: "green" }}
                  bg={["lightgreen"]}
                  mt={["25px"]}
                  mb={["15px"]}
                  ms={["25px"]}
                  pt={["10px"]}
                  pb={["10px"]}
                  pl={["70px"]}
                  pr={["70px"]}
                  onClick={logoutUser}
                >
                  Logout
                </Button>
              </Link>
              <Link to="/profile">
                <Text color={"black"} mb={["15px"]} ms={["40px"]}>
                  My Profile
                </Text>
              </Link>
              <Link to="/login">
                <Text color={"black"} mb={["15px"]} ms={["40px"]}>
                  Create New Account
                </Text>
              </Link>
              {/* <Link to="/admin"><Text color={'blue'} mb={['15px']}>For Admin Only</Text></Link> */}
            </Box>
          </PopoverContent>
        </>
      ) : (
        <>
          <PopoverTrigger>
            <Box
              w={["20%"]}
              h={["50%"]}
              display={["flex"]}
              justifyContent={["center"]}
              alignItems={["center"]}
              cursor={"pointer"}
            >
              <Box
                h={["100%"]}
                width={["30%"]}
                display={"flex"}
                justifyContent={["center"]}
                alignItems={["center"]}
              >
                <Image
                  m={"0px"}
                  h={["fit-content"]}
                  w={["fit-content"]}
                  src="https://i.postimg.cc/zvNj2Czk/baseline-perm-identity-white-24dp.png"
                />
              </Box>
              <Box
                display={"flex"}
                justifyContent={["center"]}
                alignItems={["center"]}
              >
                <Text
                  color={"black"}
                  textAlign={"center"}
                  fontWeight={"semibold"}
                  fontSize={"large"}
                >
                  SignIn
                </Text>
              </Box>
            </Box>
          </PopoverTrigger>
          <PopoverContent width={["230px"]}>
            <PopoverArrow />
            <PopoverCloseButton />
            <Box>
              <Link to="/login">
                <Button
                  _hover={{ bg: "green" }}
                  bg={["lightgreen"]}
                  mt={["25px"]}
                  mb={["15px"]}
                  ms={["25px"]}
                  pt={["10px"]}
                  pb={["10px"]}
                  pl={["70px"]}
                  pr={["70px"]}
                >
                  Login
                </Button>
              </Link>
              <Link to="/login">
                <Text color={"black"} mb={["15px"]} ms={["40px"]}>
                  Create New Account
                </Text>
              </Link>
              {/* <Link to="/admin"><Text color={'blue'} mb={['15px']}>For Admin Only</Text></Link> */}
            </Box>
          </PopoverContent>
        </>
      )}
    </Popover>
  );
};
