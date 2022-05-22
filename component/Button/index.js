import UAuth from "@uauth/js";
import React, { useEffect, useState } from "react";
import { Avatar, Button, useColorModeValue } from "@chakra-ui/react";

const uauth = new UAuth({
  clientID: "3c7e422e-60aa-41d4-8410-be6547c582a5",
  redirectUri: "http://localhost:3000/callback",
});

function ConnectUNS() {
  const ButtonColorMode1 = useColorModeValue("gray.600", "#303E46");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    setLoading(true);
    uauth
      .user()
      .then(setUser)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  //Login/out Functions
  const handleLogin = () => {
    setLoading(true);
    uauth
      .loginWithPopup()
      .then(() => uauth.user().then(setUser))
      .catch(setError)
      .finally(() => setLoading(false));
  };

  const handleLogout = () => {
    setLoading(true);
    uauth
      .logout()
      .then(() => setUser(undefined))
      .catch(setError)
      .finally(() => setLoading(false));
  };

  const getEllipsisTxt = (str, n = 6) => {
    if (str) {
      return `${str.slice(0, n)}...${str.slice(str.length - n)}`;
    }
    return "";
  };

  console.log(loading);

  if (user) {
    return (
      <Button
        color="blue.300"
        bg={ButtonColorMode1}
        colorScheme="teal"
        variant="outline"
        w="4xs"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize={{ base: "md", md: "lg" }}
        cursor="pointer"
        onClick={handleLogout}
      >
        <Avatar
          size="sm"
          name="unstoppable domains"
          src="https://crypto.jobs/storage/company-logos/yC2CISvH6kg2kZkNnzbACeuxOHmlYZj9rzsDbeVx.png"
          mr={2}
        />
        {user.sub}
      </Button>
    );
  }

  return (
    <Button
      bg={ButtonColorMode1}
      color="blue.300"
      variant="outline"
      w="4xs"
      display="flex"
      alignItems="center"
      justifyContent="center"
      fontSize={{ base: "md", md: "lg" }}
      cursor="pointer"
      onClick={handleLogin}
    >
      Login UNS Domains
    </Button>
  );
}
export default ConnectUNS;
