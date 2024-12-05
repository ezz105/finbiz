import ReactChart from "../ReactChart"; 
import Button from "../Button";

function Profit() {
  return (
    <section className="container mx-auto grid grid-cols-12 gap-4 mt-8 md:gap-6 rounded-3xl lg:mx-20 dark:bg-dark-priceCardBg bg-light-buttonBg p-4 relative z-20">
      <div className="bg-white dark:bg-dark-pageBg col-span-12 lg:col-span-4 rounded-2xl border-2 dark:border-neutral-800 border-neutral-300  text-center text-black dark:text-white p-6">
        <header className="flex justify-between">
          <p className="text-lg font-light">Total Profit</p>
          <p className="text-sm text-dark-lightGreen font-semibold">+18.23</p>
        </header>
        <div className="flex justify-between mt-7 items-end flex-wrap">
          <h4 className="lg:text-4xl text-3xl ">$350.240</h4>
          <img src=" /graphG.svg"/>
        </div>
      </div>

      <div className="bg-white dark:bg-dark-pageBg col-span-12 lg:col-span-4 rounded-2xl border-2 dark:border-neutral-800 border-neutral-300 text-center text-black dark:text-white p-6">
        <header className="flex justify-between">
            <p className="text-lg font-light">Total revenue</p>
            <p className="text-sm text-red-600 font-semibold">+28.35</p>
          </header>
          <div className="flex justify-between mt-7 items-end flex-wrap">
            <h4 className="lg:text-4xl text-3xl ">$400.690</h4>
            <img src=" /graphR.svg"/>
          </div>
      </div>

      <div className="bg-white dark:bg-dark-pageBg col-span-12 lg:col-span-4 rounded-2xl border-2 dark:border-neutral-800 border-neutral-300  text-center text-black dark:text-white p-6">
        <header className="flex justify-between">
          <p className="text-lg font-light">Product sold</p>
          <p className="text-sm text-blue-600 font-semibold">+28.35</p>
        </header>
        <div className="flex justify-between mt-7 items-end flex-wrap">
          <h4 className="lg:text-4xl text-3xl">$200.000</h4>
          <img src=" /graphB.svg"/>
        </div>
      </div>

      <div className="bg-white dark:bg-dark-pageBg col-span-12 lg:col-span-2 rounded-2xl border-2 dark:border-neutral-800 border-neutral-300  text-start text-black dark:text-white p-4">
        <header className="flex justify-between">
          <p className="text-base font-light">Total Balance</p>
        </header>
        <div className="flex flex-col justify-start">
          <h4  className="text-4xl mt-2" >$350.0</h4>
          <Button text="Transfer" className="dark:bg-light-buttonBg bg-black text-white dark:text-black font-medium text-xs lg:text-sm w-full py-3 md:py-2 rounded-lg my-4" />
          <hr className="my-4 border-neutral-800 "/>
          <div className="flex justify-between mb-3 items-center">
            <p className="text-sm">Totla Income</p>
            <p className="text-xs">92%</p>
          </div>
          <h4 className="text-3xl">$320.0</h4>
          <hr className="my-4 border-neutral-800 "/>
          <div className="flex justify-between mb-3 items-center">
            <p className="text-sm">Total Expense</p>
            <p className="text-xs">92%</p>
          </div>
          <h4 className="text-3xl">$220.0</h4>            
        </div>

      </div>

      <div className="bg-white lg:flex hidden  flex-col justify-between dark:bg-dark-pageBg col-span-12 lg:col-span-8 rounded-2xl border-2 dark:border-neutral-800 border-neutral-300  text-start text-black dark:text-white p-2">
        <ReactChart />
      </div>

      <div className="lg:flex hidden flex-col justify-between col-span-12 lg:col-span-2 rounded-2xl text-start text-black dark:text-white p-2">
          <div className="mt-2">
            <h5>Employee</h5>
            <img src=" /smallRec.svg" className="my-3 w-2/3" />
            <img src=" /BigRec.svg" />
          </div>
          <div className="mt-2">
            <h5>Independent Contractor</h5>
            <img src=" /smallRec.svg" className="my-3 w-2/3" />
            <img src="/BigRec.svg" />
          </div>
          <div className="mt-2">
            <h5>Contracted Employee</h5>
            <img src="/smallRec.svg" className="my-3 w-2/3" />
            <img src="/BigRec.svg" />
          </div>
          <div className="mt-2">
            <h5>Stakeholders</h5>
            <img src="/smallRec.svg" className="my-3 w-2/3" />
            <img src="/BigRec.svg" />
          </div>
      </div>
    </section>
  );
}

export default Profit;
