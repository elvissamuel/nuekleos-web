import Hero from "./hero";
import GoldenMornContent from "./goldenmorn";

export default function GoldenMornPage() {
  return (
    <main>
        <Hero 
        backgroundImage="/work/golden-morn/golden-more-bg.png"
        projectTitle="Neukleos x Golden Morn"
        downloadLink="/case-studies/lacasera.pdf"
        />
        <GoldenMornContent />
    </main>
  );
}
