import AiCard from "../AiCard";
import EmailInput from "../EmailInput";
import Reviews from "../Reviews";
import Profit from "../Profit/Profit";

function C_Hero() {
  return (
    <section className="bg-light-pageBg dark:bg-dark-pageBg p-4 sm:p-4 md:p-6 lg:p-8 flex flex-col items-center pt-16 overflow-x-hidden">
      <AiCard />
      <h1 className="dark:text-dark-headingText text-light-headingText text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center my-8">
        The Finance Solutions <br /> For Your Business
      </h1>

      <p className="dark:text-dark-paragraphText text-light-paragraphText text-sm md:text-base lg:text-lg text-center mb-8">
        Empower your finance team. The one-stop platform for all financial 
        management of {<br/>} small and medium-sized businesses.
      </p>
      <EmailInput />
      <Reviews />
      <Profit />
    </section>
  );
}

export default C_Hero;
