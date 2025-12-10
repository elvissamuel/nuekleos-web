import Hero from "./hero";
import PhantomContent from "./phantom";

export default function PhantomPage() {
  return (
    <main>
        <Hero 
        backgroundImage="/work/phantom/phantom-bg.png"
        projectTitle="Neukleos x TECNO PHANTOM"
        />
        <PhantomContent />
    </main>
  );
}
