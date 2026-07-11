import type { Metadata } from "next";
import ServiceTemplate from "@/components/ServiceTemplate";
import { getServiceBySlug } from "@/data/site";

const service = getServiceBySlug("author-support")!;

export const metadata: Metadata = {
  title: service.title,
  description: service.summary,
};

export default function Page() {
  return <ServiceTemplate service={service} />;
}
