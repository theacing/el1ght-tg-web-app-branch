import ContentHeader from "@/components/ContentHeader";
import Footer from "@/components/Footer";
import UserData from "@/components/UserData";

export default async function Home() {
  return (
      <div className={'h-full'}>
        <ContentHeader>
            <UserData />
        </ContentHeader>
        <Footer />
      </div>
  );
}
