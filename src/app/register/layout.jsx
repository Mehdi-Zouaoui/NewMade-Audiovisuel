import Header from "../../components/products/Header";
export default function CheckoutLayout({ children }) {
    return (
      <div className="w-full bg-blue h-screen border dark:bg-zinc-800  dark:border-stone-400">
        <div className="h-[10%] ">
          <Header/>
        </div>
        <div className="w-full flex h-[90%]">
          <div className="w-full h-full border dark:bg-zinc-800 dark:border-stone-400">
            {children}
          </div>
        </div>
      </div>
    );
  }
  