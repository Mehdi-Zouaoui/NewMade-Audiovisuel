import Image from "next/image";
import Form from "../components/form";
import Ref from "../components/ref";
import Slider from "../components/slider";
import { Button } from "../components/ui/button";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="w-full m-auto overflow-x-hidden bg-black">
        <nav className="absolute z-10 top-9 flex justify-around items-center text-white w-full">
          <Image
            className="newMadeLogo"
            alt=""
            width={300}
            height={70}
            src={`/logo.png`}
          />
          <ul className="flex w-1/3 justify-between items-start list-none font-xl font-bold  ">
            <li>Accueil</li>
            <li>Services</li>
            <li>Produits</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div>
          <Slider styles={""} />
        </div>
        <main>
          <p className="description">
            <span className="newmade">NEWMADE</span>{" "}
            <span className="audiovisuel"> AUDIOVISUEL</span> distribue les
            marques les plus prestigieuses de l&rsquo;industrie de
            l&rsquo;automation et audiovisuel. Nous nous fixons comme objectif
            d&rsquo;être l&rsquo;interlocuteur unique des installateurs et
            intégrateurs de notre région.
          </p>
          <div className="location">
            <h1>
              <span className="first">Nous sommes</span>{" "}
              <span className="second"> présents</span>
            </h1>
            <h4>au Maroc et en Algérie et prochainement en Tunisie</h4>
            <Image
              className="locationsImage"
              alt=""
              width="1550"
              height="750"
              src={`/locations.png`}
            ></Image>
          </div>
          <div className="zoom">
            <div className="zoomContent">
              <h3>ZOOM SUR</h3>
              <h2>VENDÔME</h2>
              <h4>Be the one. Make it yours</h4>
              <p>
                Grâce à un design particulièrement soigné, Vendôme
                s&rsquo;intégrera parfaitement dans les lounge, bars musicaux,
                hôtels, restaurants et magasins premium et haut de gamme.
              </p>
              <a
                href="http://vendome.activeaudio.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="zoomButton"
              >
                DECOUVRIR
              </a>
            </div>
            <div className="zoomProduct">
              <Image src={`/vendome.png`} alt="" width="1000" height="800" />
            </div>
          </div>
          <div className="us">
            <div className="content">
              <div className="text">
                <h4>
                  {" "}
                  <span> Distribution</span> de <br /> produits de référence
                </h4>
                <p>
                  Outre l&rsquo;expédition de nos produits, nous accompagnons
                  nos clients et techniciens dans leurs projets en leurs
                  apportant tout le soutien nécessaire ce qui inclus les plans,
                  les simulations et les aides à la mise-en-service.
                </p>
              </div>
              <div className="text">
                <h4>
                  Services de{" "}
                  <span>
                    gestion <br />
                    de projets
                  </span>{" "}
                </h4>
                <p>
                  Nous accompagnons les bureaux d&rsquo;étude, les architectes,
                  les installateurs, les intégrateurs de système lors de la
                  plannification technique en fournissant des informations et en
                  formulant des recommandations.
                </p>
              </div>
              <div className="text">
                <h4>
                  <span>Suivi personnalisé</span> <br />
                  Un contact direct
                </h4>
                <p>
                  Notre équipe dispose de compétences spécialisées auxquelles
                  vous pouvez vous fier. Vous bénéficierez de conseils
                  personnalisés et adaptés.
                </p>
              </div>
              <div className="text">
                <h4>
                  {" "}
                  <span> Formations</span> <br /> de nos partenaires
                </h4>
                <p>
                  Nous nous positionnons comme un entreprise qui investit
                  considérablement dans l&rsquo;accompagnement de nos
                  partenaires.
                </p>
              </div>
            </div>
            <div className="mainContent">
              <p>
                Nous accompagnons nos partenaires lors de toutes les phases du
                projet pour garantir une <span>qualité irréprochable</span> des
                installations chez les clients.{" "}
              </p>
            </div>
          </div>
          <div className="ref">
            {/* <ul className="refList">
            <li>RÉFÉRENCES</li>
            <li>SONORISATIONS</li>
            <li>ECRANS</li>
          </ul> */}
            <h2>LES RÉFÉRENCES DE NOS FOURNISSEURS À TRAVERS LE MONDE</h2>
            <div className="imagesContainer">
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
          <div className="marques">
            <h3>
              Des marques reconnues, adaptées et de <span>référence</span>{" "}
            </h3>
            <ul className="marquesList">
              <li className="secondLine">
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
          <div className="secondZoom">
            <div className="secondZoomDescription">
              <p className="catchphrase">Découvrez l&rsquo;écran</p>
              <h3>X poster PRO</h3>
              <div className="fistParagraphe">
                <p className="subtitle">Plusieurs modes de lecture</p>
                <p>
                  Support USB, HDMI Sync & Lan AAP control to play <br />
                  Support WIFI & Ethernet internet connection <br />
                  Plug and Play <br />
                  Any video automatically plays <br />
                  full screen, zero setting, quick and simple
                </p>
                <div className="secondZoomQuality">
                  <div className="qualityContainer">
                    <div className="imgContainer">
                      <Image
                        width="300"
                        height="250"
                        layout="responsive"
                        alt=""
                        src={`/secondZoom/hd.png`}
                      />
                      <p className="imgSubtitle">HD quality</p>
                    </div>
                    <div className="imgContainer">
                      <Image
                        width="300"
                        height="250"
                        layout="responsive"
                        alt=""
                        src={`/secondZoom/ultraThin.png`}
                      />
                      <p className="imgSubtitle">
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
            <div className="secondZoomImage" />
          </div>
          <div className="contact">
            <div className="left">
              <p className="contactSubtitle">
                Vous avez un projet à réaliser ?
              </p>
              <h4 className="contactTitle">Parlons-en!</h4>
              <p className="contactCatch">
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
            <div className="right"></div>
          </div>
        </main>
        <footer>
          <nav className="footerNavigation">
            <Image
              className="newMadeLogo"
              alt=""
              width="250"
              height="60"
              src={`/logo.png`}
            />
            <ul className="nav">
              <li>Accueil</li>
              <li>Services</li>
              <li>Produits</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </nav>
          <div className="footerContent">
            <div className="infos">
              <ul className="infosList">
                <li>10 bis Route de Villiers Adam,</li>
                <li>95740 FREPILLON, France,</li>
                <li>contact@newmade-audiovisuel.com</li>
                <li>
                  <div className="socialNetwork"></div>
                </li>
              </ul>
            </div>
            <div className="newsLetter">
              <p>
                Inscrivez-vous à notre <span>newsletter</span>{" "}
              </p>
              <Form></Form>
            </div>
          </div>
          <div className="socials">
            <div className="images">
              <div className="insta"></div>
              <div className="facebook"></div>
              <div className="linkedIn"></div>
            </div>
            <div className="copyright">
              <p>© 2022. All rights reserved. Newmade Audiovisuel</p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
