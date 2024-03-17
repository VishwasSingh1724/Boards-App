import BoardList from "@/components/BoardList";
import OrgHeader from "@/components/OrgHeader";
import { prismaDB } from "@/providers/connection";
import React from "react";
import { unstable_noStore as nostore } from "next/cache";

interface OrgIdProps {
  params: {
    organizationId: string;
  };
}

const Organization = async ({ params: { organizationId } }: OrgIdProps) => {
  nostore()
  const getOrganization = await prismaDB.organization.findUnique({
    where: {
      id: organizationId,
    },
    include: {
      boards: {
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });
  return (
    <div>
      <OrgHeader getOrganization={getOrganization} />
      <div>
        <BoardList getOrganization={getOrganization} />
      </div>
    </div>
  );
};

export default Organization;
