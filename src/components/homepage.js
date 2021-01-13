import "./homepage.scss";
import mainImage from "../images/test.jpg";
import onorarii from "../images/onorarii.png";
import third from "../images/third.jpg";
import mainLogo from "../images/main-logo.png";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
};

function Homepage() {
  return (
    <div>
      <div className="header">
        <div className="header-wrapper">
          <div className="header-image__wrapper">
            <img className="header-image" src={mainImage} />
            <div className="header-image__overlay"></div>
            <img className="header-logo" src={mainLogo} />
            <p className="header-main-text">
              It’s your event. Your dream. Our passion is to help make it yours
              in a way that you will remember for a lifetime. That’s a lot to
              ask of one day. But we can do this!
            </p>
          </div>
          <nav role="navigation" className="navigation">
            <div id="menuToggle">
              <input type="checkbox" />
              <div>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <ul id="menu">
                <a href="#concept">
                  <li>CONCEPT</li>
                </a>
                <a href="#planificare">
                  <li>PLANIFICARE</li>
                </a>
                <a href="#evenimente">
                  <li>EVENIMENTE</li>
                </a>
                <a href="#onorarii">
                  <li>ONORARII</li>
                </a>
                <a href="#contact">
                  <li>CONTACT</li>
                </a>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div className="rest-section">
        <div className="rest-section__concept">
          <div className="rest-section__concept-text" id={"concept"}>
            <span className="rest-section__title"> CONCEPT </span>
            <p className="rest-section__paragraph">
              Munca unui event planner înseamnă planificarea și coordonarea
              fiecărui aspect, de la invitați, decorațiuni, buget până la
              ultimul detaliu de care este nevoie în ziua evenimentului. Unui
              event planner îi revine și sarcina de a se asigura că
              personalitatea fiecărui client se regăsește în evenimentul
              acestuia. Pe lângă organizarea de nunți, ne ocupăm si de
              evenimente private, conferințe și corporate. Scopul nostru este să
              organizăm evenimente unice care te capturează cu emoții și, cel
              mai important, cu fericire și iubire. Evenimentele sunt la fel de
              unice precum sunt și clienții noștri.
            </p>
          </div>
          <img className="rest-section__concept-image" src={third} />
        </div>
        <span className="rest-section__title" id={"planificare"}>
          PLANIFICARE
        </span>
        <p className="rest-section__paragraph">
          <div className="rest-section__paragraph-list">
            Fiecare eveniment începe cu o poveste. Cum? Cu un mic secret și
            acesta este ascultarea ca să întelegem ce iți dorești și cum visezi
            să arate totul. Clienți noștri sunt la fel de unici ca și
            evenimentele. Cum spun tot timpul: nu există limite, orice idee,
            oricât de nebunească ar fi, este posibilă, iar orice vă doriți cu
            siguranță are și o soluție. Totul se desfășoară în 4 pași simpli,
            care să vă ajute să lăsați la o parte toate grijile, iar sarcina
            organizării evenimentului să ne revină nouă.
          </div>
          <ul>
            <li className="menu">
              <div class="numberCircle">1</div>
              <span>
                După contactarea noastră o să primiți un document în care va
                trebui să selectați lucrurile la care vă gândiți că aveți
                nevoie. Trimitem acest formular pentru a facilita comunicarea,
                pentru a vă prezenta opțiuni pe care nu l-ați considerat până la
                acel moment și pentru conturarea unor idei despre felul în care
                doriți să arate evenimentul dumneavoastră.
              </span>
            </li>
            <li className="menu">
              <div class="numberCircle">2</div>
              <span>
                Stabilim o întâlnire și, ca orice poveste de prietenie, ne vom
                cunoaște și vom discuta toate ideile pe care le aveți, iar
                împreună vom alege variantele potrivite pentru evenimentul
                dumneavoastră. După ce am stabilit toate amănuntele, în 48h veți
                avea o ofertă personalizată, cu tot ce am discutat la întâlnire.
                Bugetul este un aspect foarte important al evenimentelor, iar
                acesta îl vom stabili, estimativ, împreună.
              </span>
            </li>
            <li className="menu">
              <div class="numberCircle">3</div>
              <span>
                Trecem la treabă! O să primiți periodic raportări cu privire la
                oferte de preț, furnizori contractați și distribuirea bugetului.
                Desigur, putem să facem acestea prin telefon, email sau
                întâlnire, este la latitudinea dumneavoastră.
              </span>
            </li>
            <li className="menu">
              <div class="numberCircle">4</div>
              <span>
                Ne apropiem de data evenimentului și o să avem o întâlnire
                pentru a stabili ultimele detalii (ex. programul evenimentului).
                De asemenea, în ziua evenimentului am să fiu acolo, iar
                dumneavoastră vă veți putea bucura de toate emoțiile și
                persoanele importante care vă sunt alături. Ne vedem la
                eveniment cu multă energie și zâmbete!
              </span>
            </li>
          </ul>
        </p>
        <span className="rest-section__title" id={"evenimente"}>
          EVENIMENTE
        </span>
        <Slider {...settings}>
          <div>
            <img className="header-secondary-image" src={mainImage} />
          </div>
          <div>
            <img className="header-secondary-image" src={mainImage} />
          </div>
          <div>
            <img className="header-secondary-image" src={mainImage} />
          </div>
          <div>
            <img className="header-secondary-image" src={mainImage} />
          </div>
        </Slider>
        <span className="rest-section__title" id={"onorarii"}>
          ONORARII
        </span>
        <p className="rest-section__paragraph-signature">
          Cere o ofertă de preț. Fiecare eveniment este diferit și tocmai din
          acest considerent oferta de preț este personalizată pentru fiecare
          client în parte.
        </p>
        <img className="rest-section__concept-image" src={onorarii} />
        <span className="rest-section__title" id={"contact"}>
          CONTACT
        </span>
        <div className="contact-details">
          <span>NUMĂR DE TELEFON - 0742420467</span>
          <span>EMAIL- events@cristinamilas.ro</span>
          <span>PAGINA INSTAGRAM - @milas.cristina </span>
          <span>PAGINA FACEBOOK- Milas Cristina Event Planner</span>
        </div>
        <div class="container">
          <form id="contact" action="" method="post">
            <fieldset>
              <input
                placeholder="Your name"
                type="text"
                tabindex="1"
                required
                autofocus
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="Your Email Address"
                type="email"
                tabindex="2"
                required
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="Your Phone Number (optional)"
                type="tel"
                tabindex="3"
                required
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="Your Web Site (optional)"
                type="url"
                tabindex="4"
                required
              />
            </fieldset>
            <fieldset>
              <textarea
                placeholder="Type your message here...."
                tabindex="5"
                required
              ></textarea>
            </fieldset>
            <fieldset>
              <button
                name="submit"
                type="submit"
                id="contact-submit"
                data-submit="...Sending"
              >
                Submit
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
