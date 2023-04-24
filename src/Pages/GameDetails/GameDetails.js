import { StarFill, StarHalf } from "react-bootstrap-icons";
import Slider from "../../Components/GameDetailsComp/Slider";
import GameCheckout from "../../Components/GameDetailsComp/GameCheckout";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { getGameById } from "../../Store/Store";
import Spinner from "../../Components/spinner/Spinner";

const GameDetails = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const loader = useSelector((state) => state.epic.loader);
  const game = useSelector((state) => state.epic.gameDetails);
  useEffect(() => {
    dispatch(getGameById({ id }));
  }, []);

  // const game = {
  //   gameName: "Fall Guys",
  //   Description:
  //     "You're invited to dive and dodge your way to victory in the pantheon of clumsy. Rookie or pro? Solo or partied up? Fall Guys delivers ever-evolving, high-concentrated hilarity and fun. The only thing more important than winning is looking as ridiculous as possible while doing it. Grab the silliest costume you can and fall in line—the show's about to start! | Competitive & Cooperative: Tumble between competitive free-for-alls and cooperative challenges—or take on the Blunderdome with up to 3 friends! | Play with Friends: Fall Guys supports cross-play, cross-platform parties and cross-progression via your Epic Games Account. | Ever-Evolving Content: Play stays fresh with Limited Time Events and new game modes. Each Season brings with it new costumes, collabs, obstacles and ways to play.| Gloriously Customizable: Choose from a multitude of Colors, Patterns, Costumes and Nameplates.",
  //   Developer: "Mediatonic",
  //   mostPopular: false,
  //   topSeller: false,
  //   mostPlayed: false,
  //   Photos: [
  //     "https://cdn2.unrealengine.com/egs-fall-guys-bugsnax-breaker-1920x1080-125701f5b397.jpg?h=480&quality=medium&resize=1&w=854",
  //     "https://cdn2.unrealengine.com/egs-fallguys-mediatonic-g1a-00-1920x1080-cd00389953e7.jpg",
  //     "https://cdn2.unrealengine.com/egs-fallguys-mediatonic-g1a-01-1920x1080-6b63a2096380.jpg",
  //   ],
  //   VideoURL: "https://youtu.be/s8uYE9r3hIg",
  //   Rating: 4.5,
  //   Price: "free",
  //   Genres: [
  //     {
  //       $oid: "64342cb44f099df3643baed4",
  //     },
  //   ],
  //   createdAt: "2023-04-10T23:09:13.839+00:00",
  //   updatedAt: {
  //     $date: {
  //       $numberLong: "1681146912817",
  //     },
  //   },
  //   __v: 0,
  //   platForm: "windows",
  //   publisherName: "Epic Games",
  //   Discription_ar:
  //     "أنت مدعو للغوص والمراوغة في طريقك للفوز في آلهة الخرقاء. مبتدئ أم محترف؟ منفردا أو حزبا؟ تقدم Fall Guys مرحًا ومرحًا دائم التطور وعالي التركيز. الشيء الوحيد الأكثر أهمية من الفوز هو أن تبدو سخيفة قدر الإمكان أثناء القيام بذلك. احصل على أذكى زي ممكن وانضم إليه - العرض على وشك أن يبدأ! | تنافسي وتعاوني: تعثر بين التحديات التنافسية المجانية للجميع والتعاونية - أو واجه Blunderdome مع ما يصل إلى 3 أصدقاء! | العب مع الأصدقاء: يدعم Fall Guys اللعب المتقاطع والحفلات عبر الأنظمة الأساسية والتقدم عبر حساب Epic Games الخاص بك. | محتوى دائم التطور: يبقى اللعب جديدًا مع أحداث محدودة الوقت وأنماط لعب جديدة. كل موسم يجلب معه أزياء وتعاونات وعقبات وطرق لعب جديدة. | قابلة للتخصيص بشكل رائع: اختر من بين العديد من الألوان والأنماط والأزياء ولوحات الأسماء.",
  // };

  // const description = game.Description.replaceAll("|", "\n\n");
  // console.log(description);
  const ratingIcons = [];
  const fullStars = Math.floor(game.Rating);
  const halfStars = Math.ceil(game.Rating - fullStars);

  for (let i = 0; i < fullStars; i++) {
    ratingIcons.push(<StarFill key={i} />);
  }

  for (let i = 0; i < halfStars; i++) {
    ratingIcons.push(<StarHalf key={i + fullStars} />);
  }
  return (
    <div>
      {loader ? (
        <Spinner />
      ) : (
        <div className="p-20 flex flex-col w-full justify-between">
          <div className="w-9/12">
            <h1 className="text-5xl">{game.gameName}</h1>
            <div className="flex py-3 ">
              <div className="flex justify-center items-center">
                {ratingIcons}
              </div>
              <p className="ml-2 p-1 rounded-md bg-neutral-800 flex justify-center items-center">
                {game.Rating}
              </p>
            </div>
          </div>
          <div className="flex w-full justify-between ">
            <div className="w-9/12">
              <Slider game={game} />
              <p className="mt-4 text-xl ">Genres : Action, Open World</p>
              <p className="mt-4 text-xl">{game.Description}</p>
              <p className="mt-12 text-4xl">Epic Player Ratings</p>
              <p className="text-sm mt-2">
                Captured from players in the Epic Games ecosystem.
              </p>
              <div className="flex justify-center text-5xl">
                <p className="ml-2 p-1 flex justify-center items-center">
                  {game.Rating}
                </p>
                <div className="flex justify-center items-center">
                  {ratingIcons}
                </div>
              </div>
            </div>
            <div className="w-1/5 sticky top-0">
              {/* {game.photos[0]} */}
              <GameCheckout game={game} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameDetails;
