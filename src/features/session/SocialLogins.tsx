import { Flex, FlexProps, Button } from "@chakra-ui/react";
import { OAuthProvider } from "@magic-ext/oauth";
import React, { useState } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { capitalize } from "utils/string";

export const SocialLogins = ({
  onSubmit,
  ...props
}: Omit<FlexProps, "onSubmit"> & {
  onSubmit: (provider: OAuthProvider) => void;
}) => {
  const providers = ["google", "facebook", "github"] as OAuthProvider[];
  const [provider, setProvider] = useState<string>();

  return (
    <Flex {...props}>
      {providers.map((p, index) => {
        return (
          <Button
            key={p}
            colorScheme={
              p === "google" ? "red" : p === "facebook" ? "blue" : undefined
            }
            isDisabled={!!provider}
            leftIcon={
              p === "google" ? (
                <FaGoogle />
              ) : p === "github" ? (
                <FaGithub />
              ) : (
                <FaFacebook />
              )
            }
            mb={3}
            //mr={index !== providers.length - 1 ? 3 : undefined}
            onClick={() => {
              setProvider(p);
              onSubmit(p);
            }}
          >
            {/* {p.replace(/^\w/, (c) => c.toUpperCase())} */}
            {capitalize(p)}
          </Button>
        );
      })}
    </Flex>
  );
};
