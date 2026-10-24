import rawData from '@/data/templates.json';
import { PetTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Footer } from '@/components/common/Footer';
import { BookAppointment } from '@/components/sections/BookAppointment';

export const dynamic = 'force-dynamic';

export default function BookNowPage() {
  const templateData: PetTemplateData = rawData;
  const sectionData = templateData.categories.Pet.sections;
  return (
    <main className="min-h-screen bg-[var(--color-bg-main)]">
      <TopBar data={sectionData.TopBar?.variants?.PetTopBar3} />
      <Header data={sectionData.Header?.variants?.PetHeader3} />
      <Breadcrumb data={templateData.common.bookAppointmentBreadcrumb} ui={templateData.common.globalUI} />
      <BookAppointment data={sectionData.BookAppointment?.variants?.PetBookAppointment3} />
      <Footer data={templateData.common.Footer} />
    </main>
  );
}

