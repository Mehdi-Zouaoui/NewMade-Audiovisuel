import { unique } from "drizzle-orm/mysql-core";
import SignUpForm from "../../components/register/SignUpForm";
export default async function Register() {
  let countries = [];

  try {
    const res = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,translations,flags,idd"
    );
    if (!res.ok) {
      throw new Error("Failed to fetch countries");
    }
    countries = await res.json();
    countries.sort((a, b) =>
      a.translations.fra.common.localeCompare(b.translations.fra.common)
    );
    countries = countries.filter(
      (item) => item.translations.fra.common !== "Saint-Martin"
    );
  } catch (error) {
    console.error("Error fetching countries:", error);
  }

  return (
    <div className="w-full h-full flex items-center justify-around flex-col">
      <div className="w-full flex flex-col items-center gap-2">
        <h1 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Créer un compte 
          <span class="pl-3 text-nmgreen dark:text-blue-500">Newmade Audiovisuel</span>
        </h1>
        <p class=" w-1/2 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
        Inscrivez-vous dès maintenant pour découvrir en avant-première nos nouveautés et bénéficier d'avantages exclusifs chez Newmade Audiovisuel !
        </p>
      
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <SignUpForm countries={countries} />
      </div>
    </div>
  );
}
