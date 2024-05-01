import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import Form from "../components/form";
import Ref from "../components/ref";
import Slider from "../components/slider";
import { Button } from "../components/ui/button";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${montserrat.className}`}
    >
      <div className="w-full m-auto overflow-x-hidden bg-white">
        <nav
          style={{ top: "40px" }}
          className="absolute z-10  flex justify-around items-center text-white w-full"
        >
          <Image
            className="newMadeLogo"
            alt=""
            width={300}
            height={70}
            src={`/logo.png`}
          />
          <ul
            className="flex justify-between  items-start list-none font-xl font-bold pl-10 "
            style={{ fontSize: "1.1vw", width: "30%" }}
          >
            <li className="text-white">Accueil</li>
            <li>Services</li>

            <li>
              <Link href="/products">Produits</Link>
            </li>

            <li>Contact</li>
          </ul>
        </nav>
        <div>
          <Slider styles={""} />
        </div>
        <main className="w-[95%] m-auto">
          <p
            style={{ padding: "230px 0 50px 0", fontSize: "2vw" }}
            className="m-auto w-[67%] font-medium leading-tight"
          >
            <span className="text-[#a9a601] font-bold">NEWMADE</span>{" "}
            <span className="font-extralight italic "> AUDIOVISUEL</span>{" "}
            distribue les marques les plus prestigieuses de l&rsquo;industrie de
            l&rsquo;automation et audiovisuel. Nous nous fixons comme objectif
            d&rsquo;être l&rsquo;interlocuteur unique des installateurs et
            intégrateurs de notre région.
          </p>
          <div className="flex flex-col justify-center items-center mb-24">
            <h1 className="text-[2.8vw]">
              <span className="first">Nous sommes</span>{" "}
              <span className="text-[#a9a601]"> présents</span>
            </h1>
            <h4 className="font-extralight text-[2vw] text-[#6f6f6f]">
              au Maroc et en Algérie et prochainement en Tunisie
            </h4>
            <Image
              className="locationsImage"
              alt=""
              width="1550"
              height="750"
              src={`/locations.png`}
            ></Image>
          </div>
          <div className="text-white bg-[#1e2b31] relative pb-[100px] ">
            <div className="w-2/5" style={{ padding: "20px 0 20px 160px" }}>
              <h3 className="font-bold text-[#a9a601] text-[1.6vw] brightness-150">
                ZOOM SUR
              </h3>
              <h2 className="text-[2.6vw] mt-[50px]">VENDÔME</h2>
              <h4 className="text-[2vw] font-[250] ">
                Be the one. Make it yours
              </h4>
              <p className="text-[1.3vw] font-extralight mb-[75px]">
                Grâce à un design particulièrement soigné, Vendôme
                s&rsquo;intégrera parfaitement dans les lounge, bars musicaux,
                hôtels, restaurants et magasins premium et haut de gamme.
              </p>
              <a
                href="http://vendome.activeaudio.fr"
                target="_blank"
                rel="noopener noreferrer"
                style={{ border: "2px solid white", padding: "15px 20px" }}
                className="bg-transparent text-[17px] text-white font-bold w-[200px] "
              >
                DECOUVRIR
              </a>
            </div>
            <div
              className="absolute"
              style={{ bottom: "-120px", right: "-70px" }}
            >
              <Image src={`/vendome.png`} alt="" width="1000" height="800" />
            </div>
          </div>
          <div className="flex justify-center bg-white">
            <div className="flex flex-wrap items-start justify-center py-[50px] w-1/2">
              <div className="w-1/2">
                <h4 className=" font-bold text-[1.2vw]">
                  <span className="text-nmgreen"> Distribution</span> de <br />{" "}
                  produits de référence
                </h4>
                <p className="w-[80%] text-[1vw]">
                  Outre l&rsquo;expédition de nos produits, nous accompagnons
                  nos clients et techniciens dans leurs projets en leurs
                  apportant tout le soutien nécessaire ce qui inclus les plans,
                  les simulations et les aides à la mise-en-service.
                </p>
              </div>
              <div className="w-1/2">
                <h4 className=" font-bold text-[1.2vw]">
                  Services de{" "}
                  <span className="text-nmgreen">
                    gestion <br />
                    de projets
                  </span>{" "}
                </h4>
                <p className="w-[80%] text-[1vw]">
                  Nous accompagnons les bureaux d&rsquo;étude, les architectes,
                  les installateurs, les intégrateurs de système lors de la
                  plannification technique en fournissant des informations et en
                  formulant des recommandations.
                </p>
              </div>
              <div className="w-1/2">
                <h4 className=" font-bold text-[1.2vw]">
                  <span className="text-nmgreen">Suivi personnalisé</span>{" "}
                  <br />
                  Un contact direct
                </h4>
                <p className="w-[80%] text-[1vw]">
                  Notre équipe dispose de compétences spécialisées auxquelles
                  vous pouvez vous fier. Vous bénéficierez de conseils
                  personnalisés et adaptés.
                </p>
              </div>
              <div className="w-1/2">
                <h4 className=" font-bold text-[1.2vw]">
                  <span className="text-nmgreen">Formations</span> <br /> de nos
                  partenaires
                </h4>
                <p className="w-[80%] text-[1vw]">
                  Nous nous positionnons comme un entreprise qui investit
                  considérablement dans l&rsquo;accompagnement de nos
                  partenaires.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center w-[40%] text-[2.4vw] text-bold">
              <p>
                Nous accompagnons nos partenaires lors de toutes les phases du
                projet pour garantir une{" "}
                <span className="text-nmgreen"> qualité irréprochable</span> des
                installations chez les clients.{" "}
              </p>
            </div>
          </div>
          <div className="w-full py-[75px]">
            {/* <ul className="refList">
            <li>RÉFÉRENCES</li>
            <li>SONORISATIONS</li>
            <li>ECRANS</li>
          </ul> */}
            <h2>LES RÉFÉRENCES DE NOS FOURNISSEURS À TRAVERS LE MONDE</h2>
            <div className="flex flex-wrap justify-between w-full">
              <Ref image="ref_1" title="Mosque of Saint-Etienne (France)" />
              <Ref image="ref_2" title="Bahrain Parliament (Bahrain)" />
              <Ref image="ref_3" title="Mosque of Mulhouse (France)" />
              <Ref image="ref_4" title="CICG Geneva (Switzerland)" />
              <Ref
                image="ref_5"
                title="ONU Emirates Hall (Geneva, Switzerland)"
              />
              <Ref
                image="ref_6"
                title="ECRAN X-Board Salle de réunion Shenzen"
              />
              <Ref
                image="ref_7"
                title="ECRAN X-BOARD RECEPTION Jiangxi Province"
              />
              <Ref image="ref_8" title="YEONGDEUNGPO ART HALL,COREE DU SUD" />
            </div>
          </div>
          <div className="bg-[#1c2b30] text-white flex flex-col justify-around items-center px-[175px]">
            <h3 className="w-1/2 text-[2.3vw] self-end mb-0">
              Des marques reconnues, adaptées et de{" "}
              <span className="text-nmgreen">référence</span>{" "}
            </h3>
            <ul className="p-0 list-none flex flex-col w-[80%]">
              <li className="flex">
                <div>
                  <Image
                    width="1100"
                    height="650"
                    alt=""
                    src={`/partners/activeAudio.png`}
                  />
                </div>
                <div>
                  <Image
                    width="1100"
                    height="650"
                    alt=""
                    src={`/partners/apg.png`}
                  />
                </div>
                <div>
                  <Image
                    width="1100"
                    height="650"
                    alt=""
                    src={`/partners/clt.png`}
                  />
                </div>
              </li>
            </ul>
          </div>
          <div className="px-[250px] flex justify-between bg-white">
            <div className="w-1/2 pt-[100px] text-[2.4vw]">
              <p className="italic m-0">Découvrez l&rsquo;écran</p>
              <h3 className="ml-[35px] text-[2.5vw]">X poster PRO</h3>
              <div className="text-[0.8vw] leading-[1.6]">
                <p className="text-bold text-black">
                  Plusieurs modes de lecture
                </p>
                <p>
                  Support USB, HDMI Sync & Lan AAP control to play <br />
                  Support WIFI & Ethernet internet connection <br />
                  Plug and Play <br />
                  Any video automatically plays <br />
                  full screen, zero setting, quick and simple
                </p>
                <div className="py-[40px]">
                  <div className="w-[70%] flex justify-between">
                    <div className="flex flex-col items-center">
                      <Image
                        width="300"
                        height="250"
                        layout="responsive"
                        alt=""
                        src={`/secondZoom/hd.png`}
                      />
                      <p className="pt-[20px]">HD quality</p>
                    </div>
                    <div className="flex flex-col item-center">
                      <Image
                        width="300"
                        height="250"
                        layout="responsive"
                        alt=""
                        src={`/secondZoom/ultraThin.png`}
                      />
                      <p className="pt-[20px]">
                        Global ultra-thin <br /> design (35mm)
                      </p>
                    </div>
                  </div>
                </div>
                <p className="">
                  Over 97% color saturation <br />
                  exquisite picture qualitylow brightness and high gray <br />
                  8-level freely adjustable brightness <br />
                  User-level front maintenance all-weather protection
                  technology, anti-broken <br />
                  LED,moisture-proof,anti-static, radiation-proof,
                  wear-resisting and <br />
                  high-efficiency heat dissipation.
                </p>
              </div>
            </div>
            <div className="w-[40%] h-[1000px]" />
            <Image
              width="300"
              height="650"
              layout="responsive"
              alt=""
              src={`/secondZoom/ecranCLT.png`}
            />
          </div>
          <div className="flex justify-evenly my-[70px] ">
            <div className="flex flex-col justify-start w-[30%] text-[18px] text-right">
              <p className="text-[60px] m-0 flex">
                Vous avez un projet à réaliser ?
              </p>
              <h4 className="text-nmgreen text-[60px] font-bold m-0">
                Parlons-en!
              </h4>
              <p className="font-bold">
                Une équipe pluridisciplinaire est à votre écoute
              </p>
              <p>
                Sonorisation et automatismes audiovisuels <br />
                Salles multimedia, de réunion, d&rsquo;exposition et
                d&rsquo;enseignement <br />
                Salles de spectacle et salle polyvalentes <br />
                Amphithéâtres, musées et halls d&rsquo;accueil{" "}
              </p>
            </div>
            <div className="w-[35%]">
              {" "}
              <Form />
            </div>
          </div>
        </main>
        <footer
          className="flex flex-col bg-[#1e2b31]"
          style={{ padding: "80px 200px 15px 200px" }}
        >
          <nav className="flex items-center justify-between w-full mb-[50px]">
            <Image
              className="newMadeLogo"
              alt=""
              width="250"
              height="60"
              src={`/logo.png`}
            />
            <ul className="flex list-none text-[18px] p-0 w-1/2 text-white justify-between items-start text-bold">
              <li>Accueil</li>
              <li>Services</li>
              <li>Produits</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </nav>
          <div className="flex w-full justify-between">
            <div className="flex items-end">
              <ul className="list-none text-white p-0 text-[15px] leading-[1.7]">
                <li>10 bis Route de Villiers Adam,</li>
                <li>95740 FREPILLON, France,</li>
                <li>contact@newmade-audiovisuel.com</li>
                <li>
                  <div className="socialNetwork"></div>
                </li>
              </ul>
            </div>
            <div className="text-white ">
              <p>
                Inscrivez-vous à notre <span>newsletter</span>{" "}
              </p>
            </div>
          </div>
          <div className="mt-[100px] flex justify-between">
            <div className="flex items-center justify-between w-[150px]">
              <div className="text-nmgreen rounde-full w-[20px] h-[20px] flex justify-center items-center">
                {" "}
                <Instagram />
              </div>
              <div className="text-nmgreen rounde-full w-[20px] h-[20px] flex justify-center items-center">
                <Facebook />
              </div>
              <div className="text-nmgreen rounde-full w-[20px] h-[20px] flex justify-center items-center">
                <Linkedin />
              </div>
            </div>
            <div className="text-[#7d7d7f] text-bold text-[13px]">
              <p>© 2022. All rights reserved. Newmade Audiovisuel</p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
