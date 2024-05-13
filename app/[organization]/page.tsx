"use client";
import { Container } from "@mui/material";
import Image from "next/image";
import { useEffect } from "react";
import useOrganizationValidate from "../hooks/useOrganizationValidate";

// Page for validating organization
interface Organization {
  organization: string;
}

const OrganizationNotFound = ({ params }: { params: Organization }) => {
  const { organization } = useOrganizationValidate(params, { islanding: true });

  useEffect(() => {
    organization();
  }, []);

  return (
    <Container
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Use the next/image component */}
      <Image
        src="/assets/icons/loader.gif"
        alt="Loading..."
        width={40}
        height={40}
      />
    </Container>
  );
};

export default OrganizationNotFound;
