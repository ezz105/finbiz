import C_TestmoinalsCardSlider from '../Components/C_Testimonials/C_Testimonials';
import NavItem from '../Components/NavItem';
import CardsGroup from '../Components/CardsGroup/CardsGroup'

function Testimonials() {
  return (
    <div className='relative dark:bg-dark-navbarBg bg-white after:content-[url("/greenCircleEffect.svg")] after:absolute after:top-12 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:scale-75 lg:after:scale-75 md:after:scale-50 sm:after:scale-25 overflow-hidden'>
        <NavItem/>
        <CardsGroup/>
        <C_TestmoinalsCardSlider  />
    </div>
  );
}

export default Testimonials;
