import rawData from '@/data/templates.json';
import { PetTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Footer } from '@/components/common/Footer';
import { ServicesPageContent } from '@/components/sections/ServicesPageContent';

export const dynamic = 'force-dynamic';

export default function ServicesPage() {
  const templateData: PetTemplateData = rawData;
  const sectionData = templateData.categories.Pet.sections;
  return (
    <main className="min-h-screen bg-[var(--color-bg-main)]">
      <TopBar data={sectionData.TopBar?.variants?.PetTopBar3} />
      <Header data={sectionData.Header?.variants?.PetHeader3} />
      <Breadcrumb data={templateData.common.servicesBreadcrumb} ui={templateData.common.globalUI} />
      <ServicesPageContent data={sectionData.ServicesPage?.variants?.PetServicesPage3} />
      <Footer data={templateData.common.Footer} />
    </main>
  );
}

