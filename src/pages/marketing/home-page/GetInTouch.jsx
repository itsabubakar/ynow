import { Moneybag, SearchBriefCase, Services, Stall } from "@/assets/icons";
import { BgPattern } from "@/assets/images";
import { Link } from "react-router";

const GetInTouch = () => {
  const Card = ({ icon, title, description, link }) => {
    return (
      <div className="inline-flex min-w-[343px] flex-col items-start justify-start gap-10 rounded-2xl border border-[#cfd4dc] bg-white px-7 py-8 lg:h-[350px] lg:w-[308px] lg:min-w-[308px] lg:gap-[50px]">
        <div className="relative">{icon}</div>
        <div className="flex shrink grow basis-0 flex-col items-start justify-between self-stretch">
          <div className="flex flex-col items-start justify-start gap-2 self-stretch lg:gap-4">
            <div className="self-stretch text-lg leading-[28px] font-semibold text-[#0f1728] lg:text-xl lg:leading-[30px]">
              {title}
            </div>
            <div className="self-stretch text-sm leading-tight font-normal text-[#475466]">
              {description}
            </div>
          </div>
          <Link className="text-primary-900 self-stretch pt-14 text-sm leading-normal font-bold underline lg:pt-0">
            {link}
          </Link>
        </div>
      </div>
    );
  };
  return (
    <section
      className="bg-primary-900 flex w-full flex-col items-center px-4 pb-16 lg:pb-[100px]"
      style={{ backgroundImage: `url(${BgPattern})` }}
    >
      <div className="mx-auto flex max-w-[1440px] flex-col items-center pt-16 lg:pt-[100px]">
        <div className="inline-flex flex-col items-center justify-center gap-10 lg:h-[164px] lg:w-[890px]">
          <div className="flex flex-col items-center justify-start gap-1 self-stretch lg:h-[164px] lg:gap-4">
            <h3 className="self-stretch text-center text-xs leading-[20px] font-medium tracking-wider text-[#f2f3f6] uppercase lg:text-base lg:leading-normal">
              get in touch
            </h3>
            <div className="flex flex-col items-center justify-center gap-3 self-stretch lg:h-[124px] lg:gap-5">
              <p className="text-center text-3xl leading-[38px] font-semibold text-white lg:w-[608px] lg:text-4xl lg:leading-[44px]">
                Let&apos;s Connect & Grow
              </p>
              <div className="text-center text-sm leading-[20px] font-normal text-[#f2f3f6] lg:w-[890px] lg:text-xl lg:leading-[30px]">
                We&apos;re here to help! Whether you want to join our team,
                expand a franchise, invest, or seek expert consulting, our
                streamlined process makes it easy. Get started today!
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-5 pt-10 lg:flex-row lg:flex-wrap lg:gap-4 lg:pt-[60px]">
          <Card
            link={"Apply Now"}
            description={"Looking to join our team? Here’s how you can apply"}
            title="Apply for a Job"
            icon={<SearchBriefCase />}
          />
          <Card
            link={"Apply For Franchise Expansion"}
            description={
              "Are you a franchisee ready to expand your business? Let us help you grow"
            }
            title={"Apply for Franchise Expansion"}
            icon={<Stall />}
          />
          <Card
            link={"Apply For Investment"}
            description={
              "Looking for an investment partner? We’re here to explore the possibilities"
            }
            title={"Apply for Investment Opportunities"}
            icon={<Moneybag />}
          />
          <Card
            link={"Apply For Consulting Services"}
            description={
              "Need expert management for your business? We’ve got you covered"
            }
            title={"Apply for Management Consulting Services"}
            icon={<Services />}
          />
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
