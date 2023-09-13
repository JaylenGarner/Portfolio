import Bio from "@/components/Bio";
import ContactForm from "@/components/ContactForm";

const Home = () => {
  return (
    <main>
      <div className="grid grid-cols-2 h-screen">
        <div className="flex flex-col justify-center space-y-10">
          <Bio />
          <ContactForm />
        </div>
      </div>
    </main>
  );
};

export default Home;
