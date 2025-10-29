import Hero from "./hero";
import LacaseraContent from "./lacasera";

export default function LacaseraPage() {
  return (
    <main>
        <Hero 
        backgroundImage="/work/lacasera/lacasera-bg.png"
        projectTitle="Neukleos x Lacasera"
        downloadLink="/case-studies/lacasera.pdf"
        />
        <LacaseraContent />
    </main>
  );
}
