"use client";
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import PatternTokenomics from '@/components/sections/layouts/tokenomics/PatternTokenomics';
import FooterLogoEmphasisBackgroundGradient from '@/components/footer/FooterLogoEmphasisBackgroundGradient';

export default function Home() {
  return (
    <>
      <div id="hero" data-section="hero" className="scroll-mt-24 bg-gradient-to-r from-[#FF4D5A] to-[#4DFFB2]">
        <BillboardHero title="Welcome to MemeCoin Pulse" subtitle="Join the fun and invest in the future of memecoins!" />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SplitAbout description="Discover the playful world of MemeCoin Pulse, where memes meet finance!" />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D title="How to Buy" steps={[{ title: 'Step 1', description: 'Create a wallet.', image: '/images/placeholder1.avif', position: 'left', isCenter: false }, { title: 'Step 2', description: 'Fund your wallet.', image: '/images/placeholder2.avif', position: 'center', isCenter: true }, { title: 'Step 3', description: 'Purchase MemeCoin!', image: '/images/placeholder3.avif', position: 'right', isCenter: false }]} />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <PatternTokenomics title="Tokenomics" description="Explore the structure of our token economy!" kpiItems={[{ value: '1B', description: 'Total Supply', icon: { icon: '123' } }, { value: '10%', description: 'Transaction Tax', icon: { icon: '456' } }, { value: '50%', description: 'Circulating Supply', icon: { icon: '789' } }]} />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasisBackgroundGradient logoSrc="/images/logo.svg" logoAlt="MemeCoin Logo" logoText="MemeCoin Pulse" items={[{ label: 'Privacy Policy', onClick: () => console.log('Privacy Policy Clicked') }, { label: 'Terms of Service', onClick: () => console.log('Terms of Service Clicked') }, { label: 'Contact', onClick: () => console.log('Contact Clicked') }]} />
      </div>
    </>
  );
}
