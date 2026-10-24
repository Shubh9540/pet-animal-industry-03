import rawData from '@/data/templates.json';
import { PetTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutUs } from '@/components/sections/AboutUs';
import { OurService } from '@/components/sections/OurService';
import { Care } from '@/components/sections/Care';
import { Testimonial } from '@/components/sections/Testimonial';

export const dynamic = 'force-dynamic';

export default function Home() {
  const templateData: PetTemplateData = rawData;
  const sectionData = templateData.categories.Pet.sections;
  return (
    <main className="min-h-screen bg-[var(--color-bg-main)]">
      <TopBar data={sectionData.TopBar?.variants?.PetTopBar3} />
      <Header data={sectionData.Header?.variants?.PetHeader3} />
      <HeroSection data={sectionData.Hero?.variants?.PetHero3} />
      <AboutUs data={sectionData.AboutUs?.variants?.PetAboutUs3} />
      <OurService data={sectionData.OurService?.variants?.PetOurService3} />
      <Care data={sectionData.Care?.variants?.PetCare3} />
      <Testimonial data={sectionData.Testimonials?.variants?.PetTestimonials3} />
      <Footer data={templateData.common.Footer} />
    </main>
  );
}

