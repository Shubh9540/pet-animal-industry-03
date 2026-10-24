import rawData from '@/data/templates.json';
import { PetTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Footer } from '@/components/common/Footer';
import { ServiceDetail } from '@/components/sections/ServiceDetail';

export const dynamic = 'force-dynamic';

export default function ServiceDetailsPage() {
  const templateData: PetTemplateData = rawData;
  const sectionData = templateData.categories.Pet.sections;
  const detailData = sectionData.ServiceDetail?.variants?.PetServiceDetail3;
  const service = detailData?.services.find((item) => item.id === detailData.canonicalServiceId);
  if (!detailData || !service) return null;
  return (
    <main className="min-h-screen bg-[var(--color-bg-main)]">
      <TopBar data={sectionData.TopBar?.variants?.PetTopBar3} />
      <Header data={sectionData.Header?.variants?.PetHeader3} />
      <Breadcrumb data={service.breadcrumb} ui={templateData.common.globalUI} />
      <ServiceDetail data={detailData} />
      <Footer data={templateData.common.Footer} />
    </main>
  );
}

