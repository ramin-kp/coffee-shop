import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div>
        <div>
          <Link to="/">
            <img src="/images/svgs/app-logo.svg" alt="goldenLog" />
          </Link>
        </div>
        <ul>
          <li>صفحه اصلی</li>
          <li>فروشگاه</li>
          <li>مقالات</li>
          <li>درباره ما</li>
          <li>تماس باما</li>
        </ul>
      </div>
      <div>
        <div>
          <svg></svg>
          <svg></svg>
        </div>
        <Link to="#">
          ورود|ثبت‌ نام
          <svg></svg>
        </Link>
      </div>
    </header>
  );
}
