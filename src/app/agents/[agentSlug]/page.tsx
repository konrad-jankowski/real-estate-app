import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { ActiveListings } from "@/components/ActiveListings";
import { getSingleAgentBySlug } from "@/api/agents";

export default async function SingleAgentPage({
  params,
}: {
  params: { agentSlug: string };
}) {
  const agent = await getSingleAgentBySlug(params.agentSlug);

  return (
    <section className="mt-32 px-6 lg:px-20">
      <nav className="my-6 font-medium">
        <ul className="flex gap-2 lg:gap-4 items-center text-sm lg:text-base">
          <Link className="text-blue-600" href={"/"}>
            Strona Główna
          </Link>
          <ChevronRight size={18} />
          <Link className="text-blue-600" href={"/agents"}>
            Agenci
          </Link>
          <ChevronRight size={18} />
          <li className="font-normal">{agent?.title}</li>
        </ul>
      </nav>{" "}
      <div className="flex flex-col lg:flex-row">
        <aside className="flex-1">
          <div className="lg:w-[500px] h-[400px] mb-6 lg:mb-0 lg:h-[650px] relative rounded-lg overflow-hidden">
            <Image
              className="object-cover"
              src={agent?.agentFields?.avatar?.node.mediaItemUrl ?? ""}
              alt=""
              fill
            />
          </div>
        </aside>
        <main className="flex-1">
          <h1 className="text-4xl lg:text-5xl text-blue-600 font-semibold">
            {agent?.title}
          </h1>
          <div className="inline-flex items-center py-3 gap-1 text-2xl font-medium">
            <MapPin size={20} />
            <p>{agent?.agentFields?.agentsLocation}</p>
          </div>
          <p className="text-base font-medium flex gap-2 items-center">
            <Phone />
            {agent?.agentFields?.phoneNumber}
          </p>
          <p className="text-base font-medium flex gap-2 items-center mb-3 mt-2">
            <Mail />
            {agent?.agentFields?.email}
          </p>
          <button className="text-white bg-blue-600 px-6 py-2.5 rounded-full my-6 flex items-center gap-4">
            Contact agent <ChevronRight />
          </button>
          <p
            dangerouslySetInnerHTML={{
              __html: agent?.agentFields?.agentsDescription ?? "",
            }}
          >
            {}
          </p>
        </main>
      </div>
      <Suspense>
        <ActiveListings
          data={agent?.agentFields?.relationWithProperties?.nodes}
        />
      </Suspense>
    </section>
  );
}