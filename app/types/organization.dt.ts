// app/types/organization.dt.ts

export interface Organization {
  name: string;
  logoUrl: string | null;
  username: string;
}

export interface OrganizationResponse {
  StatusCode: number;
  StatusMessage: string;
  Data: { logo: string; name: string; username: string };
}

export interface OrganizationInput {
  name: string | null;
}

export interface OrganizationProps {
  organization: {
    organization: string;
  };
}
