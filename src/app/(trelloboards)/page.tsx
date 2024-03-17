import Header from "@/components/Header";
import PlansComp from "@/components/PlansComp";
import Productivity from "@/components/Productivity";
import { Workflow } from "@/components/Workflow";
import { unstable_noStore as nostore } from "next/cache";
export default function Home() {
  nostore()
  return (
    <main className="">
      <Header />
      <div className="py-16 bg-[#e6fafc]">
        <Productivity />
        <Workflow />
        <PlansComp />
      </div>
    </main>
  );
}
