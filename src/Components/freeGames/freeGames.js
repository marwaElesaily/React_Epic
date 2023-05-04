import React from "react";
import styles from "./freeGames.module.css";
import { useTranslation } from "react-i18next";

const MyGames = [
  {
    name: "Far Cry",
    background_image:
      "https://cdn1.epicgames.com/b4565296c22549e4830c13bc7506642d/offer/TETRA_PREORDER_STANDARD%20EDITION_EPIC_Store_Portrait_1200x1600-1200x1600-ca8b802ff13813c37a44ebf68d0946a2.png?h=480&quality=medium&resize=1&w=360",
    Description: "Welcome to Yara, a tropical paradise frozen in time.",
    Description_ar: 'مرحبًا بكم في يارا ، الجنة الاستوائية التي تجمدت في الوقت المناسب.'
  },
  {
    name: "The Cycle: Frontier",
    background_image:
      "https://cdn1.epicgames.com/offer/azalea/EGS_TheCycleFrontier_YAGER_S2_1200x1600-473004ea09823cc40080ab1aba6d5090?h=480&quality=medium&resize=1&w=360",
    Description: "You’re a Prospector living aboard Prospect Station ...",
    Description_ar: 'أنت منقب تعيش على متن محطة Prospect...'
  },
  {
    name: "SMITE",
    background_image:
      "https://cdn1.epicgames.com/offer/076207fa2b5c4803a636af606c3c28b7/SMITE-PortraitImagev2-EpicBoxArt-10r3-Aphrodite-1200x1600_1200x1600-ffaf80eaf12defd60955034efcd6bffc?h=480&quality=medium&resize=1&w=360",
    Description: "Join 35+ million players in SMITE.",
    Description_ar: 'انضم إلى أكثر من 35 مليون لاعب في SMITE .'
} ,
{
  name: "Genshin Impact",
  background_image:
  "https://cdn1.epicgames.com/offer/1e1d639f7fa045f08a1378885ec7080c/EGS_TheMageseekerALeagueofLegendsStory_DigitalSun_S2_1200x1600-bbeed8ffd3d81a0b61df3f7ef75e18b7?h=480&quality=medium&resize=1&w=360?h=480&quality=medium&resize=1&w=360",
  
  Description: "MASSIVE OPEN WORLD Climb any mountain .",
  Description_ar:' عالم مفتوح ضخم تسلق أي جبل '
}
 ];


const FreeGames = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <div className={`${lang === 'en' ? 'sm:w-full sm:m-0' : ''}   px-4 `}>
      <div className={styles.freegames}>
        <div className={styles.flexheader}>
          <div className="flex">
            <p className="freeGames-title text-white text-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <g fill="currentColor" fillRule="evenodd">
                  <path d="M30.443 16.605H19.72v-3.46h10.724v3.46zm-2.075 12.308c0 .397-.576.838-1.402.838h-7.247V17.99h8.648v10.924zm-14.876.838h4.843v-18.68h-4.843v18.68zm-10.033-.838V17.99h8.649v11.762H4.861c-.826 0-1.402-.441-1.402-.838zM1.384 13.146h10.724v3.46H1.384v-3.46zm1.773-4.324c0-1.622 1.319-2.94 2.94-2.94 2.752 0 5.093 3.78 5.575 5.88H6.097a2.944 2.944 0 0 1-2.94-2.94zm22.573-2.94c1.621 0 2.94 1.318 2.94 2.94 0 1.621-1.319 2.94-2.94 2.94h-5.574c.481-2.1 2.822-5.88 5.574-5.88zm5.405 5.88h-2.244a4.304 4.304 0 0 0 1.163-2.94 4.329 4.329 0 0 0-4.324-4.325c-2.89 0-5.227 2.813-6.341 5.294a.686.686 0 0 0-.362-.105H12.8a.686.686 0 0 0-.362.105c-1.114-2.481-3.45-5.294-6.34-5.294a4.329 4.329 0 0 0-4.325 4.325c0 1.136.444 2.168 1.163 2.94H.692a.692.692 0 0 0-.692.692v4.843c0 .382.31.692.692.692h1.384v10.924c0 1.246 1.223 2.222 2.785 2.222h22.105c1.562 0 2.785-.976 2.785-2.222V17.99h1.384c.382 0 .692-.31.692-.692v-4.843a.692.692 0 0 0-.692-.692zM15.914 4.151c.381 0 .691-.31.691-.692V.692a.692.692 0 0 0-1.383 0v2.767c0 .382.31.692.692.692"></path>
                  <path d="M19.546 5.362a.69.69 0 0 0 .49-.203l1.037-1.037a.692.692 0 1 0-.978-.979l-1.038 1.038a.692.692 0 0 0 .489 1.181M11.792 5.16a.69.69 0 0 0 .978 0 .692.692 0 0 0 0-.979l-1.038-1.038a.692.692 0 1 0-.978.979l1.038 1.037z"></path>
                </g>
              </svg>
              <p className={`${styles.freeGTXT} text-center pl-12 -mt-5 ml-2 ${lang === 'en' ? '' : 'mr-20'}`}>
                {t("freeGames")}
              </p>
            </p>
          </div>
          <a href="#!" className={styles.btnOutline}>
            {t("viewMore")}
          </a>
        </div>
        <div className={styles.flex}>
          <a href="#!" className={`${styles.game} ${styles.freenow} `}>
            <div className={styles.gameimg }>
              <img
                src={MyGames[0].background_image}
              />
            </div>
            <div className={styles.flextext}>
              <h4 className="flextext-bg">
              {lang==='en'?MyGames[0].Description:MyGames[0].Description_ar}
              </h4>
              {t("freeGames-FreeNow")}
            </div>
          </a>
          <a href="#!" className={styles.game}>
            <div className={styles.gameimg}>
              <img
                src={MyGames[1].background_image}
              />
            </div>
            <div className={styles.flextext}>
              <h4 className="flextext-bg">
                {/* Idle Champions of the Forgotten Realms */}
                {lang==='en'?MyGames[1].Description:MyGames[1].Description_ar}
              </h4>
              {t("freeGames-FreeNow")}
            </div>
          </a>
          <a href="#!" className={`${styles.game} ${styles.freenow}`}>
            <div className={styles.gameimg}>
              <img
                src={MyGames[2].background_image}
              />
            </div>
            <div className={styles.flextext}>
              <h4 className="flextext-bg">
              {lang==='en'?MyGames[2].Description:MyGames[2].Description_ar}
              </h4>
              {t("freeGames-FreeNow")}
            </div>
          </a>
          <a href="#!" className={styles.game}>
            <div className={styles.gameimg}>
              <img
                // src="https://cdn1.epicgames.com/salesEvent/salesEvent/Landscape%20-%20Apr%2029_2560x1440-557c79e2df74001427d21f75da99e87e?h=480&amp;resize=1&amp;w=854"
                // alt="game"
                src={MyGames[3].background_image}
              />
            </div>
            <div className={styles.flextext}>
              <h4 className="flextext-bg">
              {lang==='en'?MyGames[3].Description:MyGames[3].Description_ar}
              </h4>
              {t("freeGames-FreeNow")}
            </div>
          </a>
        </div>
        
      </div>
     
    </div>
  );
};

export default FreeGames;

