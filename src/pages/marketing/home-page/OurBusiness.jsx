import {
  ArrowLeft,
  ArrowRight,
  Location,
  LocationSmall,
  RedDish,
  RedDishSmall,
  RedStar,
  RedStarSmall,
} from "@/assets/icons";
import { YouShushi } from "@/assets/images";

const OurBusiness = () => {
  return (
    <section className="inline-flex flex-col items-center justify-start gap-10 px-4 pt-10 pb-16 xl:h-[1178px] xl:w-[1440px] xl:px-20 xl:pt-20 xl:pb-20">
      <div className="flex flex-col items-center justify-start gap-8 self-stretch xl:h-[914px] xl:gap-[60px]">
        <div className="flex flex-col items-center justify-start gap-10">
          <div className="flex flex-col items-center justify-start gap-1 xl:gap-4">
            <h3 className="self-stretch text-center text-xs leading-[20px] font-medium tracking-wider text-gray-600 uppercase xl:text-base xl:leading-normal">
              Our Businesses
            </h3>
            <div className="flex flex-col items-center justify-center gap-3 self-stretch xl:h-[198px] xl:gap-5">
              <h2 className="text-center text-3xl leading-[38px] font-semibold xl:w-[608px] xl:text-4xl xl:leading-[44px]">
                <span className="text-gray-900">Exceptional </span>
                <span className="text-primary-900">dining, quality,</span>
                <span className="text-gray-900"> and innovation</span>
              </h2>
              <div className="text-center text-sm leading-[20px] font-normal text-gray-600 xl:w-[890px] xl:text-xl xl:leading-[30px]">
                At YNow Ltd., we&apos;re passionate about expanding our
                portfolio and partnering with visionary restaurateurs. If
                you&apos;re interested in collaborating or learning more about
                our restaurants, get in touch today!
              </div>
            </div>
          </div>
          <div className="bg-primary-900 hidden items-center justify-center gap-2.5 rounded-[500px] px-7 py-3.5 xl:inline-flex">
            <div className="text-center text-xl leading-7 font-semibold text-white">
              Contact us
            </div>
          </div>
        </div>

        <div className="inline-flex flex-col-reverse items-center justify-start gap-2 self-stretch xl:gap-4 2xl:flex-row">
          <div className="inline-flex w-full flex-col items-start justify-start gap-6 rounded-2xl border border-gray-300 p-5 xl:max-w-[780px] xl:gap-[42px] xl:p-[60px]">
            <div className="flex flex-col items-start justify-start gap-2 self-stretch xl:h-[134px] xl:gap-6">
              <h3 className="self-stretch text-xl leading-[30px] font-semibold text-black xl:text-3xl xl:leading-[38px]">
                You Me Sushi
              </h3>
              <div className="flex flex-col items-start justify-start gap-1 self-stretch xl:h-[72px] xl:gap-2">
                <h4 className="self-stretch text-sm leading-normal font-semibold tracking-wide text-gray-900 uppercase xl:text-base">
                  A Culinary Delight
                </h4>
                <p className="self-stretch text-sm leading-tight font-normal text-gray-600">
                  Restaurant You Me Sushi brings a unique sushi experience to
                  the heart of London . Known for its authentic recipes is has
                  become a favorite among food enthusiasts.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-4 xl:h-56 xl:gap-7">
              <div className="inline-flex items-center justify-start gap-7">
                <div className="relative hidden xl:block">
                  <RedDish />
                </div>
                <div className="relative xl:hidden">
                  <RedDishSmall />
                </div>
                <div className="inline-flex flex-col items-start justify-start gap-1">
                  <h3 className="text-base leading-normal font-semibold text-gray-900 xl:text-xl xl:leading-7">
                    Signature Dishes
                  </h3>
                  <p className="text-sm leading-[20px] font-normal text-gray-600 xl:text-base xl:leading-normal">
                    Japanese Fried Chicken
                  </p>
                </div>
              </div>
              <div className="inline-flex items-center justify-start gap-7 self-stretch">
                <div className="relative hidden xl:block">
                  <Location />
                </div>
                <div className="relative xl:hidden">
                  <LocationSmall />
                </div>
                <div className="inline-flex flex-col items-start justify-start gap-1">
                  <h3 className="text-base leading-normal font-semibold text-gray-900 xl:text-xl xl:leading-7">
                    Locations
                  </h3>
                  <p className="text-sm leading-[20px] font-normal text-gray-600 xl:text-base xl:leading-normal">
                    Operates in 2 prime locations across London
                  </p>
                </div>
              </div>
              <div className="inline-flex items-center justify-start gap-7">
                <div className="relative hidden xl:block">
                  <RedStar />
                </div>
                <div className="relative xl:hidden">
                  <RedStarSmall />
                </div>
                <div className="inline-flex flex-col items-start justify-start gap-1">
                  <h3 className="text-base leading-normal font-semibold text-gray-900 xl:text-xl xl:leading-7">
                    Customer Experience
                  </h3>
                  <p className="text-sm leading-[20px] font-normal text-gray-600 xl:text-base xl:leading-normal">
                    Rated 4.8 starts on major review platforms
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="inline-flex flex-col items-center justify-center overflow-hidden rounded-xl bg-white xl:h-[520px]">
            <img
              className="w-full max-w-[700px] xl:h-[526px] xl:min-w-[700px]"
              src={YouShushi}
            />
          </div>
        </div>
      </div>
      <div className="hidden gap-4 xl:flex">
        <button className="border-primary-900 rounded-2xl border p-5">
          <ArrowLeft />
        </button>
        <button className="border-primary-900 rounded-2xl border p-5">
          <ArrowRight />
        </button>
      </div>
    </section>
  );
};

export default OurBusiness;
