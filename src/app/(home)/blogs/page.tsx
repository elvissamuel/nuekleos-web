import Navbar from "@/components/Navbar";
import Hero from "./hero";
import BlogPage from "./blog";
import StaffPicks from "./staffpicks";
import Footer from "@/components/Footer";

export default function Blog() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BlogPage />
      <StaffPicks />
      <Footer />
    </main>
  );
}
