import { ArrowRight, ArrowRightGreen } from '@/assets/icons';
import GrazacLogo from '@/assets/svgs/sponsors/grazac.svg';
import AfexLogo from '@/assets/svgs/sponsors/afex.svg';
import OgunGov from '@/assets/svgs/sponsors/ogunGov.svg';
import TechEconomy from '@/assets/svgs/sponsors/techeconomy.svg';
import OgunDaily from '@/assets/svgs/sponsors/ogunDaily.svg';
import CountDown from './countdown';

const sponsors = [
  { label: 'Grazac', icon: GrazacLogo },
  { label: 'Afex', icon: AfexLogo },
  { label: 'Ogun Gov', icon: OgunGov },
  { label: 'Tech Economy', icon: TechEconomy },
  { label: 'Ogun Daily', icon: OgunDaily }
];

function SponsorLogos() {
  return (
    <div className='flex items-center justify-between px-6 mt-2 h-[62px] md:h-[72px] md:mt-5'>
      {sponsors.map(({ label, icon }) => (
        <div key={label}>
          <img src={icon} alt={label} />
        </div>
      ))}
    </div>
  );
}

function Hero() {
  return (
    <div className='relative'>
      <div className='hero-bg px-5 pt-10 pb-[120px] md:pt-[100px] md:pb-[76px]'>
        <div className='max-w-[713px] mx-auto'>
          <div className='flex flex-col gap-6 md:gap-8'>
            <div className='text-[34px] md:text-6xl leading-[40px] md:leading-[64px] text-left md:text-center tracking-[0.5px] md:tracking-[-1px] text-[#23323F] max-md:max-w-[332px]'>
              <h2 className='italic font-normal platypi-gf'>
                Innovation:{' '}
                <span className='font-semibold tracking-[0.5px] md:tracking-[-1px] not-italic'>
                  Pathway to our nation's prosperity
                </span>
              </h2>
            </div>
            <p className='text-sm md:text-base leading-[22px] md:leading-[22px] font-normal tracking-[0.2px] text-[#627587] max-md:max-w-[335px] md:text-center'>
              Ogun Digital Summit 2024 is focused on improving collaborations, paving the way for
              new innovations and igniting conversation towards technology advancements and
              prosperity for Nigeria's digital technology ecosystem.
            </p>

            <div className='flex flex-wrap items-center gap-4 mt-1 md:justify-center'>
              <button className='bg-[#178A2D] font-semibold h-10 min-w-[110px] rounded flex justify-center items-center tracking-[0.2px] text-white'>
                <span className='text-sm font-semibold'>Register</span>
                <ArrowRight />
              </button>
              <button className='min-w-[161px] h-6 rounded-[2px] bg-white flex justify-center items-center gap-2'>
                <span className='text-[#178A2D] text-sm font-semibold'>Become a sponsor</span>
                <ArrowRightGreen />
              </button>
            </div>
          </div>
        </div>

        <div className='max-w-[713px] mx-auto mt-20 md:mt-[100px]'>
          <div className='flex flex-col justify-center w-full'>
            <p className='text-xs md:text-base font-semibold leading-5 md:leading-5 uppercase text-[#627587] tracking-[3px] md:text-center'>
              Proudly supported by
            </p>
            <SponsorLogos />
          </div>
        </div>
      </div>
      {/* <div> */}
      <CountDown />
      {/* </div> */}
      <div className='art-bg' />
    </div>
  );
}

export default Hero;
