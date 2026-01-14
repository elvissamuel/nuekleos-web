import Hero from "./hero";
import MaggiContent from "./maggi";

export default function MaggiPage() {
  return (
    <main>
        <Hero 
        backgroundImage="/work/maggi/maggi-bg.png"
        projectTitle="Neukleos x Maggi"
        />
        <MaggiContent />
    </main>
  );
}