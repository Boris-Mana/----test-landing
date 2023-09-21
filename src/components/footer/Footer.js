import { Link } from "react-router-dom/cjs/react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__small-text">Доп. опция «Абонемент на самокаты» 
            на 8 месяцев (240 дней) активируется автоматически 
            с момента старта сезона 2024 г. самокатов Яндекс Go, 
            далее предусмотрено автопродление доп.опции за 399 руб./мес. 
            Сертификат на доп.опцию «Абонемент на самокаты» 
            на 8 месяцев оформляется на условиях документа 
            <a className="footer__link" href="https://yandex.ru/legal/scooters_seasonpass"> yandex.ru/legal/scooters_seasonpass </a>
            . Доп.опция доступна пользователям с активной подпиской 
            (условия подписки: 
            <a className="footer__link" href="https://yandex.ru/legal/yandex_plus_conditions"> yandex.ru/legal/yandex_plus_conditions </a>
            ), есть ограничения, подробнее: 
            <a className="footer__link" href="https://yandex.ru/legal/yandex_plus_opzii_lis"> yandex.ru/legal/yandex_plus_opzii_list </a>            
            . В случае отсутствия у пользователя активной подписки 
            на дату активации доп.опции, пользователю предоставляется 
            7 дней подписки Яндекс Плюс бесплатно, далее автопродление — 
            299 руб./мес. Электросамокаты Яндекс Go — сервис аренды 
            электросамокатов на условиях: clck.ru/gwDGn. 0+</p>
            {/* <h2 className="footer__info" lang="en">&copy; {(new Date()).getFullYear()} Mesto Russia</h2> */}
        </footer>
    )
}

export default Footer;