import { useEffect, useState } from "react";

import nullRubles from '../../images/0руб-min.svg';
import clock from '../../images/Clock-min.svg';
import scooter from '../../images/scooterX3-min.svg';
import charge from '../../images/phoneCharge-min.svg';
import event1 from '../../images/01.png';
import event2 from '../../images/02.png';
import event3 from '../../images/05.png';
import event4 from '../../images/06.png';
import geoMark from '../../images/МеткаНаКарте-min.png';
import strips from '../../images/Полоски-min.png';
import cup from '../../images/СтаканИЗвездочка-min.png';
import scooterPlus from '../../images/Самокат-Плюс-min.png';
import scooterRoundText from '../../images/Самокт-КругНадпись-min.png'

function Main() {

  const [isNextInactive, setIsNextInactive] = useState(false);
  const [isPrevInactive, setIsPrevInactive] = useState(false);
  const [imgNumber, setImgNumber] = useState(0);

  const mobileScrWidth = 375;
  const eventsPhotoList = [event1, event4, event2, event3,];
  const eventsPhotoListMobile = [event1, event2, event3, event4];
  const imgsQuant = eventsPhotoListMobile.length - 1;


  const handleShowNextPict = () => {
    if (imgNumber < imgsQuant) {
      console.log('Кликнули на следующую');
      setImgNumber(imgNumber + 1);
    }
  };

  const handleShowPrevPict = () => {
    if (imgNumber > 0) {
      console.log('Кликнули на предыдущую');
      setImgNumber(imgNumber - 1);
    }
  };

  useEffect(() => {
    if (imgNumber === imgsQuant) {
      setIsNextInactive(true);
      setIsPrevInactive(false);
    };
    if (imgNumber === 0) {
      setIsNextInactive(false);
      setIsPrevInactive(true);
    };
  }, [imgNumber]);

  const useWindowWide = (size) => {
    const [width, setWidth] = useState(0)

    useEffect(() => {
      function handleResize() {
        setWidth(window.innerWidth)
      }

      window.addEventListener("resize", handleResize)

      handleResize()

      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }, [setWidth])

    return width
  }

  useEffect(() => {
    if (imgsQuant > 1) {
      setIsPrevInactive(true);
      // setShowImgNumber(0);
      // setIsPrevActive(false);
    }
  }, []);

  const wide = useWindowWide(mobileScrWidth);

  const advantCardsList = [
    { image: nullRubles, text: '0 ₽ за старт в каждой поездке', alt: '0 руб. старт' },
    { image: scooter, text: 'Катаетесь с друзьями? Бронируйте до трёх самокатов с аккаунта с абонементом — так у всех будет бесплатный старт', alt: '3 друга' },
    { image: clock, text: 'Бесплатная пауза 15 минут в поездке — например, чтобы зайти за кофе или передохнуть', alt: '15 мин пауза' },
    { image: charge, text: 'Если самокат недостаточно заряжен или с ним неудобно переходить дорогу, замените по пути на другой — это бесплатно', alt: 'Замена разряженного' },
  ];

  const advantCardsElements = advantCardsList.map((card) => (
    <div className="main__multicard-box-element">
      <img className='main__multicard-box-element__img' src={card.image} alt={card.alt} />
      <div className='main__multicard-box-element__text' >{card.text}</div>
    </div>
  ));

  const eventsCardsElements = eventsPhotoList.map((card) => (
    <img className='main__multicard-box-photo' src={card} alt='разные события' />
  ));

  const desktopWidthPhotosElem = (
    <>
      <h2 className="main__title_narrow main__title_narrow_exclus">Эксклюзивный доступ к событиям Самокатов</h2>
      <div className='main__multicard-box-photos'>
        <img className='main__multicard-box-photo-mark' src={geoMark} alt={'красивость на фотографии'} />
        <img className='main__multicard-box-photo-strips' src={strips} alt={'красивость на фотографии'} />
        <img className='main__multicard-box-photo-cup' src={cup} alt={'красивость на фотографии'} />
        <p className='main__multicard-box-photo-text'>С абонементом — у вас доступ к специальным мероприятиям, скидки и классный мерч. В 2023 году мы танцевали на Даче Плюс с Антохой MC, катались на самокатах с Сергеем Мезенцевым и слушали хор Attaque de Panique</p>
        {eventsCardsElements}
      </div>
    </>
  )

  const mobileWidthPhotosElem = (
    <>
      <h2 className="main__title_narrow main__title_narrow_exclus">Эксклюзивный доступ к событиям Самокатов</h2>
      <div className='main__multicard-box-photos'>
        <img className='main__multicard-box-photo-strips' src={strips} alt={'красивость на фотографии'} />
        <p className='main__multicard-box-photo-text'>С абонементом — у вас доступ к специальным мероприятиям, скидки и классный мерч. В 2023 году мы танцевали на Даче Плюс с Антохой MC, катались на самокатах с Сергеем Мезенцевым и слушали хор Attaque de Panique</p>
        <img className='main__multicard-box-photo' src={eventsPhotoListMobile[imgNumber]} alt='Фото события' />
        <div className="main__multicard-box_arrow_bttns-box">
          <bottom
            className={`main__multicard-box_arrow_bttn-arr main__multicard-box_arrow_bttn-arr-left ${isPrevInactive ? 'main__multicard-box_arrow_bttn_inactive' : ''}`}
            onClick={handleShowPrevPict}
          />
          <bottom
            className={`main__multicard-box_arrow_bttn-arr ${isNextInactive ? 'main__multicard-box_arrow_bttn_inactive' : ''}`}
            onClick={handleShowNextPict}
          />
          {/* <bottom  className='main__multicard-box_arrow_bttn-arr-left'></bottom> */}
        </div>

      </div>
    </>
  )

  const scooterAndPlusImg = (
    <div className='main__scooter-plus-box'>
      <img className='main__scooter-plus-img' src={scooterPlus} alt='Самокат и Плюс' />
      <div className='main__scooter-ellipse-plus'></div>
    </div>
  )

  return (
    <>
      <main className="main">
        <h2 className="main__title">Вот что даёт участие в клубе</h2>
        <div className="main__multicard-box">
          {advantCardsElements}
        </div>
        {wide > mobileScrWidth ? desktopWidthPhotosElem : mobileWidthPhotosElem}
        <div className='main__last-info-box'>
          <h2 className="main__title_narrow">Купить абонемент и вступить в клуб смогут те, кто в Плюсе</h2>
          <p className='main__multicard-box-photo-text_last-box'>За каждую поездку на самокатах такие пользователи получают кешбэк баллами. Баллы можно тратить на поездки на самокатах и такси с Яндекс Go, покупки и заказы в других сервисах Яндекса</p>
          <div className='main__scooter-round-text-box'>
            <img className='main__scooter-round-text-img' src={scooterRoundText} alt='Общество любителей самоката' />
            <div className='main__scooter-ellipse-round-text'></div>
          </div>
          {wide > mobileScrWidth && scooterAndPlusImg}
          <h2 className="main__title_narrow">80  % наших пользователей уже в клубе и экономят на поездках</h2>
          <p className='main__multicard-box-photo-text_last-box'>Присоединяйтесь — опция начнёт действовать в начале сезона–2024. Об открытии сезона предупредим заранее, чтобы вы были готовы</p>
          <button className="header__batton main__hochu">Хочу абонемент</button>
        </div>
      </main>
    </>
  );
}

export default Main;
