import ActivityItem from "@/components/ActivityItem";
import { OrgId } from "@/interfaces";
import { prismaDB } from "@/providers/connection";
import { unstable_noStore as nostore } from "next/cache";
import React from "react";

const Activitypage = async ({ params }: OrgId) => {
  nostore()
  const getAllActivities = await prismaDB.audLog.findMany({
    where: { orgId: params.organizationId },
  });
  console.log(getAllActivities);
  return (
    <>
      <ol className="mt-5">
        {getAllActivities?.map((item) => (
          <ActivityItem key={item.id} item={item} />
        ))}
      </ol>
    </>
  );
};

export default Activitypage;
