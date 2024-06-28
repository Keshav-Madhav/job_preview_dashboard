import Header from "@/components/Header";
import Body from "@/components/Body";

export default function Home() {
  return (
    <div className="w-[100dvw] h-[100dvh] flex flex-col">
      <Header />

      <Body />
    </div>
  );
}
