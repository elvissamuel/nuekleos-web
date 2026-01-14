import Hero from './hero';
import NestleContent from './nestle';

export default function NestlePage() {
  return (
    <main>
        <Hero 
         backgroundImage="/work/nestle/nestle-bg.png"
         projectTitle="Neukleos x Nestle"
         downloadLink="/case-studies/nestle.pdf"
        />
        <NestleContent />
    </main>
  );
}
