import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div>
        <div>
          <div>
            <Link to="/">
              <img src="/images/svgs/app-logo.svg" alt="goldenLog" />
            </Link>
          </div>
          <ul>
            <li>
              <Link to="#">صفحه اصلی</Link>
            </li>
            <li>
              <Link to="#">فروشگاه</Link>
              <ul>
                <li>
                  <Link to="#">قهوه ترک</Link>
                </li>
                <li>
                  <Link to="#">قهوه اسپرسو</Link>
                </li>
                <li>
                  <Link to="#">قهوه فوری</Link>
                </li>
                <li>
                  <Link to="#">قهوه فرانسه</Link>
                </li>
                <li>
                  <Link to="#">کپسول اسپرسو</Link>
                </li>
                <li>
                  <Link to="#">لوازم جانبی و تجهیزات</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#">مقالات</Link>
            </li>
            <li>
              <Link to="#">درباره ما</Link>
            </li>
            <li>
              <Link to="#">تماس باما</Link>
            </li>
          </ul>
        </div>
        <div>
          <div>
            <svg>
              <use xlinkHref="#shoping-card"></use>
            </svg>
            <svg>
              <use xlinkHref="#moon"></use>
            </svg>
          </div>
          <Link to="#">
            ورود|ثبت‌ نام
            <svg>
              <use xlinkHref="#arrow-right-on-rectangle"></use>
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}
