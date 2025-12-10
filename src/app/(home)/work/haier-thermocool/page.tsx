import Hero from "./hero";
import HaierThermocoolContent from "./haierthermocool";

export default function HaierthermocoolPage() {
  return (
    <main>
        <Hero 
        backgroundImage="/work/haier-thermocool/hpz-bg.jpg"
        projectTitle="Neukleos x Haier Thermocool"
        />
        <HaierThermocoolContent />
    </main>
  );
}
