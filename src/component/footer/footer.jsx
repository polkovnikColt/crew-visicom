import React from "react";
import './footer.styles.scss'

export default function Footer(){
    return(
        <div className={'container footer'}>
            <div className=" m-4 p-3">
                <a href="https://maps.visicom.ua/c/30.51025,50.45526,17/f/POIA1KIGKN?lang=uk"
                className={'nav-link'}
                target={'_blank'}
                >
                    01001, Україна, Київ, вул. Велика Житомирська, 25/2
                </a>
                <div>+380 44 201-00-26 web-maps@visi.com.ua</div>
                <div>© 2018, ПрАТ «Візіком».</div>
                <div>Адміністратор</div>
            </div>
        </div>
    )
}