import Footer from "@/components/Footer";
import UserData from "@/components/UserData";

export default async function Home() {
  return (
      <main className="h-full rounded-[45px] overflow-y-auto shadow-inner bg-[#ededed]">
          <UserData/>
          <Footer/>
      </main>
  );
}
