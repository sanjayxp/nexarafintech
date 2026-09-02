import type { Metadata } from "next";
import Image from "next/image";
import { ArrowSquareOut } from "@phosphor-icons/react/ssr";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { getPartners } from "@/lib/partners";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "The banks, NBFCs, technology providers and networks Nexara Fintech partners with to deliver agency banking, payments and connected banking infrastructure.",
};

export const dynamic = "force-dynamic";

export default async function PartnersPage() {
  const partners = await getPartners();

  return (
    <>
      <Nav />
      <main className="flex flex-1 flex-col">
        <PageHero
          eyebrow="Partners"
          title="Built together with the institutions we serve"
          description="From regulated banks to technology providers, our partner network extends what our platform can do for the last mile."
          breadcrumb={[{ label: "Partners" }]}
        />

        <div className="container-page py-24">
          {partners.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-rule p-16 text-center">
              <p className="text-lg font-semibold text-bone">
                Our partner network is growing
              </p>
              <p className="mt-2 text-bone-dim">
                Check back soon, or{" "}
                <a href="/contact" className="text-mint hover:underline">
                  get in touch
                </a>{" "}
                if you&apos;re interested in partnering with us.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {partners.map((partner, i) => (
                <Reveal key={partner.id} delay={i * 60}>
                  <a
                    href={partner.website_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-rule bg-white transition-colors hover:border-mint/50"
                  >
                    {partner.picture_url ? (
                      <div className="relative h-36 w-full bg-ground-2">
                        <Image
                          src={partner.picture_url}
                          alt=""
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        {partner.logo_url && (
                          <div className="absolute -bottom-6 left-5 flex h-14 w-14 items-center justify-center rounded-xl border border-rule bg-white p-2 shadow-md">
                            <Image
                              src={partner.logo_url}
                              alt={partner.name}
                              width={40}
                              height={40}
                              className="h-full w-full object-contain"
                            />
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="flex h-36 w-full items-center justify-center bg-ground-2">
                        {partner.logo_url ? (
                          <div className="relative h-16 w-32">
                            <Image
                              src={partner.logo_url}
                              alt={partner.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                        ) : (
                          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-bone text-lg font-semibold text-white">
                            {partner.name.charAt(0)}
                          </span>
                        )}
                      </div>
                    )}

                    <div
                      className={`flex flex-1 flex-col justify-between p-5 ${
                        partner.picture_url && partner.logo_url ? "pt-9" : ""
                      }`}
                    >
                      <h3 className="text-base font-semibold text-bone">
                        {partner.name}
                      </h3>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-[0.95rem] font-semibold text-mint group-hover:gap-2.5 transition-all">
                        Visit website
                        <ArrowSquareOut size={14} />
                      </span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
