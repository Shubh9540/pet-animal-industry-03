import rawData from '@/data/templates.json';
import { PetTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Footer } from '@/components/common/Footer';
import { AboutUs } from '@/components/sections/AboutUs';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Testimonial } from '@/components/sections/Testimonial';

export const dynamic = 'force-dynamic';

export default function AboutPage() {
  const templateData: PetTemplateData = rawData;
  const sectionData = templateData.categories.Pet.sections;
  return (
    <main className="min-h-screen bg-[var(--color-bg-main)]">
      <TopBar data={sectionData.TopBar?.variants?.PetTopBar3} />
      <Header data={sectionData.Header?.variants?.PetHeader3} />
      <Breadcrumb data={templateData.common.aboutBreadcrumb} ui={templateData.common.globalUI} />
      <AboutUs data={sectionData.AboutUs?.variants?.PetAboutUs3} showButton={false} isAboutPage={true} />
      <WhyChooseUs data={sectionData.whyChooseUs?.variants?.PetAboutWhyChooseUs3} />
      <Testimonial data={sectionData.Testimonials?.variants?.PetTestimonials3} />
      <Footer data={templateData.common.Footer} />
    </main>
  );
}

