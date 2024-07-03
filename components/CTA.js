import Image from "next/image";
import config from "@/config";
import ButtonLead from "./ButtonLead";

const CTA = () => {
  return (
    <section className="relative hero overflow-hidden min-h-screen">
      <Image
        src="/hero/images/pinay-nurse.png"
        alt="Background"
        className="object-cover w-full"
        fill
      />
      <div className="relative hero-overlay bg-neutral bg-opacity-70"></div>
      <div className="relative hero-content text-center text-neutral-content p-8">
        <div className="flex flex-col items-center max-w-xl p-8 md:p-0">
          <h2 className="font-bold text-3xl md:text-5xl tracking-tight mb-8 md:mb-12">
            Start your EU healthcare career now
          </h2>
          <p className="text-lg opacity-80 mb-12 md:mb-16">
            Don&apos;t waste time in traditional programs with long lead times...
          </p>

          {/* <button className="btn btn-primary btn-wide">
            Get {config.appName}
          </button> */}

            <ButtonLead />

        </div>
      </div>
    </section>
  );
};

export default CTA;
