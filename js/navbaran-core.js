function checkAndUpdateClass() {
  setInterval(() => {
    const e = document.querySelector(".multicity-flight-form"),
      t = document.querySelector(".Basis_Calendar_Box.fa-calendar");
    e
      ? t?.classList.add("set-right-for-multicity")
      : t?.classList.remove("set-right-for-multicity");
  }, 100);
}
document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("search-box"))
    try {
      var e = new XMLHttpRequest();
      e.open("GET", "searchengine.bc"),
        e.send(),
        (e.onreadystatechange = function () {
          if (4 == this.readyState && 200 == this.status) {
            var t = document.getElementById("search-box");

            (t.innerHTML = e.responseText), checkAndUpdateClass();
            document.querySelector(
              "#r-tour .searchList .flex.relative.mb-2.float-right.w-full.clear-both .reserve-location"
            ).readOnly = !0;

            document
              .querySelectorAll(".passenger-counts.adult-count")
              .forEach((e) => {
                e.parentElement.classList.add("passenger-counts_container");
              });
            document.querySelectorAll(".flighttype-field").forEach((e) => {
              e.classList.add("flighttype-dropDown");
            });
            const flighttypeSerachBox = document.querySelectorAll(
              ".reserve-field.flightclass-field div.border-type-1.cursor-pointer.rounded-type-1.px-2"
            );
            flighttypeSerachBox.forEach((item) => {
              item.addEventListener("click", () => {
                item.classList.toggle("actived");
              });
            });
            const i = document.querySelectorAll(
              "#search-box  .departure-route input.text-value "
            );
            document
              .querySelectorAll(
                "#search-box .departure-route .click-content label span"
              )
              .forEach((e) => {
                e.innerHTML = "کجا هستید؟";
              });
            document
              .querySelectorAll(
                "#search-box .destination-route .click-content label span"
              )
              .forEach((e) => {
                e.innerHTML = "کجا میرید؟";
              }),
              i.forEach((e) => {
                (e.placeholder = "مبدا را انتخاب کنید"), (e.value = "");
              });
            document
              .querySelectorAll(
                "#search-box .destination-route input.text-value "
              )
              .forEach((e) => {
                (e.placeholder = "مقصد را انتخاب کنید"), (e.value = "");
              });
            const c = document.querySelectorAll(
                "#search-box #r-hotel .departure-route .click-content label span"
              ),
              a = document.querySelectorAll(
                "#search-box #r-hotel .departure-route input.text-value "
              );
            c.forEach((e) => {
              e.innerHTML = "کجا سفر میکنید؟";
            }),
              a.forEach((e) => {
                (e.placeholder = "مقصد را انتخاب کنید"), (e.value = "");
              });
            const s = document.querySelectorAll(
                "#search-box #r-tour .departure-route .click-content label span"
              ),
              l = document.querySelectorAll(
                "#search-box #r-tour .departure-route input.text-value "
              );
            s.forEach((e) => {
              e.innerHTML = "کجا سفر میکنید؟";
            }),
              l.forEach((e) => {
                (e.placeholder = "مقصد را انتخاب کنید"), (e.value = "");
              });
            const d = document.querySelectorAll(
                "#search-box #r-flight .departure-route .click-content label"
              ),
              u =
                '\n          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M32.3997 24.476C31.1367 23.9506 28.6429 22.8802 27.3595 22.347C28.1447 20.4439 28.9133 18.5806 29.7141 16.6423C29.0758 16.4156 28.493 16.1509 27.881 16.004C27.1668 15.8337 26.5519 16.1578 26.0264 16.618C24.8209 17.6737 23.6173 18.7333 22.4389 19.8182C22.1412 20.0936 21.9057 20.1189 21.5496 19.9613C20.525 19.5098 19.4975 19.0602 18.4447 18.6798C17.2285 18.24 15.4955 18.1952 15.0655 19.7297C14.7259 20.9401 15.768 21.9715 16.7955 22.4054C20.202 23.8416 23.6143 25.267 27.0462 26.6448C29.4904 27.6246 31.4237 26.7684 32.4609 24.3368C32.5544 24.1189 32.9095 23.2558 33 23.0369"\n              stroke="#A1A1AA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n            <path d="M31.0447 32.042H16.9555"\n              stroke="#A1A1AA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n          </svg>\n          ';
            d.forEach((e, t) => {
              const n = e.querySelector("svg");
              n && n.remove();
              const o = document.createElement("div");
              o.innerHTML = u.trim();
              const r = o.firstChild;
              e.insertBefore(r, e.firstChild);
            });
            const p = document.querySelectorAll(
                "#search-box #r-hotel .searchList div.flex.clear-both div.h-9.leading-9"
              ),
              w =
                '<svg width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.9585 14.0312C9.05728 14.0312 7.50978 12.4837 7.50978 10.5825C7.50978 8.68125 9.05728 7.13375 10.9585 7.13375C12.8598 7.13375 14.406 8.68125 14.406 10.5825C14.406 12.4837 12.8598 14.0312 10.9585 14.0312ZM10.9585 0.625C5.42728 0.625 0.926025 5.12625 0.926025 10.6588C0.926025 17.7038 9.16603 24.375 10.9585 24.375C12.751 24.375 20.991 17.7038 20.991 10.6588C20.991 5.12625 16.4898 0.625 10.9585 0.625Z" fill="#1647A9"/></svg>';
            p.forEach((e, t) => {
              const n = e.querySelector("svg");
              n && n.remove();
              const o = document.createElement("div");
              o.innerHTML = w.trim();
              const r = o.firstChild;
              e.insertBefore(r, e.firstChild);
            });
            const f = document.querySelectorAll(
                "#search-box #r-hotel .departure-route .click-content label"
              ),
              h =
                '<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.02915 4.629C8.06702 4.62905 8.10532 4.62909 8.14403 4.62909H17.1083C17.147 4.62909 17.1853 4.62905 17.2232 4.629C17.7634 4.62832 18.2187 4.62775 18.6083 4.76802C19.2673 5.00527 19.7861 5.52408 20.0234 6.18306C20.1636 6.57268 20.1631 7.02797 20.1624 7.56821C20.1623 7.60608 20.1623 7.64438 20.1623 7.68309V12.6172C20.1623 13.0314 19.8265 13.3672 19.4123 13.3672C18.9981 13.3672 18.6623 13.0314 18.6623 12.6172V7.68309C18.6623 6.96306 18.6511 6.7997 18.612 6.69117C18.5262 6.45282 18.3386 6.26516 18.1002 6.17934C17.9917 6.14027 17.8283 6.12909 17.1083 6.12909H8.14403C7.424 6.12909 7.26064 6.14027 7.1521 6.17934C6.91375 6.26516 6.7261 6.45281 6.64028 6.69117C6.60121 6.7997 6.59003 6.96306 6.59003 7.68309V12.6172C6.59003 13.0314 6.25425 13.3672 5.84003 13.3672C5.42582 13.3672 5.09003 13.0314 5.09003 12.6172V7.68309C5.09003 7.64438 5.08998 7.60608 5.08994 7.56821C5.08926 7.02797 5.08869 6.57268 5.22896 6.18306C5.46621 5.52408 5.98502 5.00527 6.644 4.76802C7.03362 4.62775 7.48891 4.62832 8.02915 4.629Z" fill="#A1A1AA"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.48074 9.83218C9.50906 9.83225 9.53726 9.83233 9.5653 9.83233H10.1853C10.2133 9.83233 10.2415 9.83225 10.2699 9.83218C10.5901 9.83134 10.9256 9.83046 11.2181 9.93579C11.7088 10.1125 12.0952 10.4988 12.2719 10.9895C12.3772 11.2821 12.3763 11.6175 12.3755 11.9377C12.3754 11.9661 12.3753 11.9943 12.3753 12.0223V12.6202C12.3753 13.0345 12.0395 13.3702 11.6253 13.3702C11.2111 13.3702 10.8753 13.0345 10.8753 12.6202V12.0223C10.8753 11.8085 10.875 11.6811 10.8693 11.5859C10.8657 11.5266 10.8609 11.5012 10.8595 11.4947C10.8341 11.427 10.7807 11.3735 10.7129 11.3481C10.7064 11.3467 10.6811 11.3419 10.6217 11.3383C10.5265 11.3326 10.3991 11.3323 10.1853 11.3323H9.5653C9.35145 11.3323 9.2241 11.3326 9.12888 11.3383C9.06955 11.3419 9.04418 11.3467 9.03773 11.3481C8.96996 11.3735 8.91648 11.427 8.89114 11.4947C8.88971 11.5012 8.8849 11.5266 8.88134 11.5859C8.87561 11.6811 8.8753 11.8085 8.8753 12.0223V12.6202C8.8753 13.0345 8.53951 13.3702 8.1253 13.3702C7.71109 13.3702 7.3753 13.0345 7.3753 12.6202V12.0223C7.3753 11.9943 7.37523 11.9661 7.37515 11.9377C7.37431 11.6175 7.37344 11.2821 7.47876 10.9895C7.65543 10.4988 8.04178 10.1125 8.53251 9.93579C8.82505 9.83046 9.16049 9.83134 9.48074 9.83218Z" fill="#A1A1AA"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M14.9807 9.83218C15.0091 9.83225 15.0373 9.83233 15.0653 9.83233H15.6853C15.7134 9.83233 15.7416 9.83225 15.7699 9.83218C16.0901 9.83134 16.4256 9.83046 16.7181 9.93579C17.2088 10.1125 17.5952 10.4988 17.7719 10.9895C17.8772 11.2821 17.8763 11.6175 17.8755 11.9377C17.8754 11.9661 17.8753 11.9943 17.8753 12.0223V12.6202C17.8753 13.0345 17.5395 13.3702 17.1253 13.3702C16.7111 13.3702 16.3753 13.0345 16.3753 12.6202V12.0223C16.3753 11.8085 16.375 11.6811 16.3693 11.5859C16.3657 11.5266 16.3609 11.5012 16.3595 11.4947C16.3341 11.427 16.2807 11.3735 16.2129 11.3481C16.2064 11.3467 16.1811 11.3419 16.1217 11.3383C16.0265 11.3326 15.8992 11.3323 15.6853 11.3323H15.0653C14.8515 11.3323 14.7241 11.3326 14.6289 11.3383C14.5696 11.3419 14.5442 11.3467 14.5377 11.3481C14.47 11.3735 14.4165 11.427 14.3911 11.4947C14.3897 11.5012 14.3849 11.5266 14.3813 11.5859C14.3756 11.6811 14.3753 11.8085 14.3753 12.0223V12.6202C14.3753 13.0345 14.0395 13.3702 13.6253 13.3702C13.2111 13.3702 12.8753 13.0345 12.8753 12.6202V12.0223C12.8753 11.9943 12.8752 11.9661 12.8752 11.9377C12.8743 11.6175 12.8734 11.2821 12.9788 10.9895C13.1554 10.4988 13.5418 10.1125 14.0325 9.93579C14.3251 9.83046 14.6605 9.83134 14.9807 9.83218Z" fill="#A1A1AA"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M5.8143 11.8673C5.85218 11.8673 5.89047 11.8674 5.92919 11.8674H19.3212C19.3599 11.8674 19.3982 11.8673 19.4361 11.8673C19.9763 11.8666 20.4316 11.866 20.8212 12.0063C21.4802 12.2436 21.999 12.7624 22.2363 13.4214C22.3765 13.811 22.376 14.2663 22.3753 14.8065C22.3752 14.8444 22.3752 14.8827 22.3752 14.9214V19.6174C22.3752 20.0316 22.0394 20.3674 21.6252 20.3674C21.211 20.3674 20.8752 20.0316 20.8752 19.6174V14.9214C20.8752 14.2013 20.864 14.038 20.8249 13.9295C20.7391 13.6911 20.5515 13.5034 20.3131 13.4176C20.2046 13.3786 20.0412 13.3674 19.3212 13.3674H5.92919C5.20915 13.3674 5.04579 13.3786 4.93726 13.4176C4.69891 13.5034 4.51125 13.6911 4.42544 13.9295C4.38636 14.038 4.37519 14.2013 4.37519 14.9214V19.6174C4.37519 20.0316 4.0394 20.3674 3.62519 20.3674C3.21097 20.3674 2.87519 20.0316 2.87519 19.6174V14.9214C2.87519 14.8827 2.87514 14.8444 2.87509 14.8065C2.87442 14.2663 2.87385 13.811 3.01412 13.4214C3.25136 12.7624 3.77018 12.2436 4.42915 12.0063C4.81878 11.866 5.27407 11.8666 5.8143 11.8673Z" fill="#A1A1AA"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M2.875 18.3828C2.875 17.9685 3.21079 17.6328 3.625 17.6328H21.625C22.0392 17.6328 22.375 17.9685 22.375 18.3828C22.375 18.797 22.0392 19.1328 21.625 19.1328H3.625C3.21079 19.1328 2.875 18.797 2.875 18.3828Z" fill="#A1A1AA"/>\n</svg>\n\n\n          ';
            f.forEach((e, t) => {
              const n = e.querySelector("svg");
              n && n.remove();
              const o = document.createElement("div");
              o.innerHTML = h.trim();
              const r = o.firstChild;
              e.insertBefore(r, e.firstChild);
            });
            const m = document.querySelectorAll(
                "#search-box #r-flighthotel .departure-route .click-content label"
              ),
              C =
                '\n          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M32.3997 24.476C31.1367 23.9506 28.6429 22.8802 27.3595 22.347C28.1447 20.4439 28.9133 18.5806 29.7141 16.6423C29.0758 16.4156 28.493 16.1509 27.881 16.004C27.1668 15.8337 26.5519 16.1578 26.0264 16.618C24.8209 17.6737 23.6173 18.7333 22.4389 19.8182C22.1412 20.0936 21.9057 20.1189 21.5496 19.9613C20.525 19.5098 19.4975 19.0602 18.4447 18.6798C17.2285 18.24 15.4955 18.1952 15.0655 19.7297C14.7259 20.9401 15.768 21.9715 16.7955 22.4054C20.202 23.8416 23.6143 25.267 27.0462 26.6448C29.4904 27.6246 31.4237 26.7684 32.4609 24.3368C32.5544 24.1189 32.9095 23.2558 33 23.0369"\n              stroke="#A1A1AA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n            <path d="M31.0447 32.042H16.9555"\n              stroke="#A1A1AA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n          </svg>\n          ';
            m.forEach((e, t) => {
              const n = e.querySelector("svg");
              n && n.remove();
              const o = document.createElement("div");
              o.innerHTML = C.trim();
              const r = o.firstChild;
              e.insertBefore(r, e.firstChild);
            });
            const y = document.querySelectorAll(
                "#search-box #r-flight .destination-route .click-content label"
              ),
              g =
                '\n          <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M32.2651 18.8964C30.9973 19.4199 28.4715 20.4279 27.1823 20.9601C26.3903 19.0541 25.6148 17.1889 24.8082 15.2468C24.1953 15.5377 23.594 15.7644 23.0559 16.0943C22.4293 16.4796 22.2231 17.1441 22.1764 17.8437C22.0703 19.4462 21.9681 21.0506 21.902 22.655C21.8854 23.0617 21.7375 23.2466 21.3736 23.3877C20.3267 23.7934 19.2788 24.203 18.264 24.6798C17.0896 25.2305 15.8296 26.4272 16.6119 27.8196C17.2298 28.919 18.6999 28.9112 19.7352 28.4899C23.1688 27.0937 26.5985 25.6858 30.0068 24.2283C32.4354 23.1911 33.1992 21.2131 32.2106 18.7544C32.1211 18.5335 31.7611 17.6695 31.6706 17.4506" stroke="#A1A1AA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M31.5627 32.7532H17.4372" stroke="#A1A1AA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n</svg>\n\n          ';
            y.forEach((e, t) => {
              const n = e.querySelector("svg");
              n && n.remove();
              const o = document.createElement("div");
              o.innerHTML = g.trim();
              const r = o.firstChild;
              e.insertBefore(r, e.firstChild);
            });
            const v = document.querySelectorAll(
                "#search-box #r-flighthotel .destination-route .click-content label"
              ),
              b =
                '\n          <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M32.2651 18.8964C30.9973 19.4199 28.4715 20.4279 27.1823 20.9601C26.3903 19.0541 25.6148 17.1889 24.8082 15.2468C24.1953 15.5377 23.594 15.7644 23.0559 16.0943C22.4293 16.4796 22.2231 17.1441 22.1764 17.8437C22.0703 19.4462 21.9681 21.0506 21.902 22.655C21.8854 23.0617 21.7375 23.2466 21.3736 23.3877C20.3267 23.7934 19.2788 24.203 18.264 24.6798C17.0896 25.2305 15.8296 26.4272 16.6119 27.8196C17.2298 28.919 18.6999 28.9112 19.7352 28.4899C23.1688 27.0937 26.5985 25.6858 30.0068 24.2283C32.4354 23.1911 33.1992 21.2131 32.2106 18.7544C32.1211 18.5335 31.7611 17.6695 31.6706 17.4506" stroke="#A1A1AA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M31.5627 32.7532H17.4372" stroke="#A1A1AA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n</svg>\n\n          ';
            v.forEach((e, t) => {
              const n = e.querySelector("svg");
              n && n.remove();
              const o = document.createElement("div");
              o.innerHTML = b.trim();
              const r = o.firstChild;
              e.insertBefore(r, e.firstChild);
            });
            const S = document.querySelectorAll(
                "#search-box .passengers-field .border-type-1 label.float-right.w-full.cursor-pointer"
              ),
              E =
                '\n          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M23.9999 25.5266C21.4083 25.5266 19.3074 23.4257 19.3074 20.8341C19.3074 18.2425 21.4083 16.1416 23.9999 16.1416C26.5915 16.1416 28.6924 18.2425 28.6924 20.8341C28.6924 23.4257 26.5915 25.5266 23.9999 25.5266Z" stroke="#A1A1AA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M21.8621 25.5266H26.138C28.5631 25.5266 30.5291 27.4925 30.5291 29.9177C30.5291 30.0048 30.5299 30.0922 30.5311 30.1799C30.5441 31.1523 29.7541 31.8585 28.7816 31.8585H19.2186C18.246 31.8585 17.456 31.1523 17.469 30.1799C17.4702 30.0922 17.471 30.0048 17.471 29.9177C17.471 27.4925 19.437 25.5266 21.8621 25.5266Z" stroke="#A1A1AA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n</svg>';
            S.forEach((e, t) => {
              const n = e.querySelector("svg");
              n && n.remove();
              const o = document.createElement("div");
              o.innerHTML = E.trim();
              const r = o.firstChild;
              e.insertBefore(r, e.firstChild);
            });
            const A = document.querySelectorAll(
                "#search-box #r-tour .departure-route .click-content label"
              ),
              k =
                '\n          <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M32.3997 24.976C31.1367 24.4506 28.6429 23.3802 27.3595 22.847C28.1447 20.9439 28.9133 19.0806 29.7141 17.1423C29.0758 16.9156 28.493 16.6509 27.881 16.504C27.1668 16.3337 26.5519 16.6578 26.0264 17.118C24.8209 18.1737 23.6173 19.2333 22.4389 20.3182C22.1412 20.5936 21.9057 20.6189 21.5496 20.4613C20.525 20.0098 19.4975 19.5602 18.4447 19.1798C17.2285 18.74 15.4955 18.6952 15.0655 20.2297C14.7259 21.4401 15.768 22.4715 16.7955 22.9054C20.202 24.3416 23.6143 25.767 27.0462 27.1448C29.4904 28.1246 31.4237 27.2684 32.4609 24.8368C32.5544 24.6189 32.9095 23.7558 33 23.5369" stroke="#A1A1AA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M31.0444 32.542H16.9552" stroke="#A1A1AA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n</svg>\n\n          ';
            A.forEach((e, t) => {
              const n = e.querySelector("svg");
              n && n.remove();
              const o = document.createElement("div");
              o.innerHTML = k.trim();
              const r = o.firstChild;
              e.insertBefore(r, e.firstChild);
            });

            for (
              var n = t.getElementsByTagName("script"), o = 0;
              o < n.length;
              o++
            ) {
              var r = document.createElement("script");
              n[o].src
                ? ((r.src = n[o].src), (r.async = !1))
                : (r.text = n[o].textContent),
                document.head.appendChild(r).parentNode.removeChild(r);
            }
          }
        });
    } catch (e) {}
});
const navOpener = document.querySelector(".open-menu"),
  navCloser = document.querySelector(".nav-closer"),
  mobileMenu = document.querySelector(".menu-mob");
navOpener.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" }),
    (document.body.style.overflow = "hidden"),
    mobileMenu.classList.remove("translate-x-[7000px]");
}),
  navCloser.addEventListener("click", () => {
    mobileMenu.classList.add("translate-x-[7000px]"),
      (document.body.style.overflow = "");
  });
const header = document.querySelector(".main-header");
if (
  (window.addEventListener("scroll", () => {
    "/" === window.location.pathname
      ? (window.scrollY > 715
          ? header.classList.add("fixed", "top-0", "left-0", "shadow-md")
          : header.classList.remove("fixed", "top-0", "left-0", "shadow-md"),
        mobileMenu.classList.contains("translate-x-[7000px]") ||
          header.classList.remove("fixed", "top-0", "left-0", "shadow-md"))
      : header.classList.remove("fixed", "top-0", "left-0", "shadow-md");
  }),
  document.querySelectorAll(".swiper-forth").length > 0)
)
  var swiper = new Swiper(".swiper-forth", {
    slidesPerView: 4,
    speed: 400,
    centeredSlides: !1,
    spaceBetween: 15,
    grabCursor: !0,
    autoplay: { delay: 6500, disableOnInteraction: !1 },
    loop: 1,
    pagination: { el: ".swiper-pagination", clickable: !0 },
    navigation: {
      nextEl: ".swiper-button-next-f",
      prevEl: ".swiper-button-prev-f",
    },
    breakpoints: {
      640: { slidesPerView: 1, spaceBetween: 20 },
      768: { slidesPerView: 2, spaceBetween: 40 },
      1024: { slidesPerView: 4, spaceBetween: 15 },
    },
  });
if (document.querySelectorAll(".swiper-third").length > 0)
  swiper = new Swiper(".swiper-third", {
    slidesPerView: 3,
    speed: 1e3,
    centeredSlides: !1,
    spaceBetween: 15,
    grabCursor: !0,
    autoplay: { delay: 6500, disableOnInteraction: !1 },
    loop: 1,
    pagination: { el: ".swiper-pagination", clickable: !0 },
    navigation: {
      nextEl: ".swiper-button-next-f",
      prevEl: ".swiper-button-prev-f",
    },
    breakpoints: {
      640: { slidesPerView: 1, spaceBetween: 20 },
      768: { slidesPerView: 2, spaceBetween: 40 },
      1024: { slidesPerView: 3, spaceBetween: 15 },
    },
  });
if (document.querySelectorAll(".swiper-one").length > 0)
  swiper = new Swiper(".swiper-one", {
    slidesPerView: 1,
    speed: 1e3,
    centeredSlides: !1,
    spaceBetween: 15,
    grabCursor: !0,
    autoplay: { delay: 6500, disableOnInteraction: !1 },
    loop: 1,
    pagination: { el: ".swiper-pagination", clickable: !0 },
    navigation: {
      nextEl: ".swiper-button-next-f",
      prevEl: ".swiper-button-prev-f",
    },
    breakpoints: {
      640: { slidesPerView: 1, spaceBetween: 40 },
      768: { slidesPerView: 1, spaceBetween: 40 },
      1024: { slidesPerView: 1, spaceBetween: 15 },
    },
  });
if (document.querySelectorAll(".swiper-one-m").length > 0)
  swiper = new Swiper(".swiper-one-m", {
    slidesPerView: 1,
    speed: 900,
    centeredSlides: !1,
    spaceBetween: 35,
    grabCursor: !0,
    autoplay: { delay: 6500, disableOnInteraction: !1 },
    loop: 1,
    pagination: { el: ".swiper-pagination", clickable: !0 },
    navigation: {
      nextEl: ".swiper-button-next-f",
      prevEl: ".swiper-button-prev-f",
    },
    breakpoints: {
      640: { slidesPerView: 1, spaceBetween: 35 },
      768: { slidesPerView: 1, spaceBetween: 35 },
      1024: { slidesPerView: 1, spaceBetween: 35 },
    },
  });
if (document.querySelectorAll(".swiper-mob").length > 0)
  swiper = new Swiper(".swiper-mob", {
    slidesPerView: 1.2,
    speed: 900,
    centeredSlides: !1,
    spaceBetween: 15,
    grabCursor: !0,
    autoplay: { delay: 6500, disableOnInteraction: !1 },
    loop: 1,
    pagination: { el: ".swiper-pagination", clickable: !0 },
    navigation: {
      nextEl: ".swiper-button-next-f",
      prevEl: ".swiper-button-prev-f",
    },
    breakpoints: {
      640: { slidesPerView: 1.2, spaceBetween: 20 },
      768: { slidesPerView: 1.2, spaceBetween: 40 },
      1024: { slidesPerView: 1.2, spaceBetween: 15 },
    },
  });

document.addEventListener("DOMContentLoaded", function () {
  let e = document.querySelector(".fetch-content-tour"),
    t = document.querySelectorAll(".tour-li");
  if (e) {
    async function n(t = 214188) {
      e.innerHTML =
        '<div class="w-full flex justify-center p-5"><span class="loader"></span></div>';
      try {
        let n = await fetch(`/tour-load-items.bc?catid=${t}`);
        if (!n.ok) throw Error(`HTTP error! Status: ${n.status}`);
        let o = await n.text();
        (e.innerHTML = o),
          window.tourSwiper && window.tourSwiper.destroy(!0, !0),
          (window.tourSwiper = new Swiper("#tour-list-container", {
            slidesPerView: 4,
            speed: 900,
            centeredSlides: !1,
            spaceBetween: 15,
            grabCursor: !0,
            autoplay: { delay: 9500, disableOnInteraction: !1 },
            pagination: { el: ".swiper-pagination", clickable: !0 },
            navigation: {
              nextEl: ".swiper-button-next-f",
              prevEl: ".swiper-button-prev-f",
            },
            breakpoints: {
              640: { slidesPerView: 1.3, spaceBetween: 20 },
              768: { slidesPerView: 4, spaceBetween: 15 },
              1024: { slidesPerView: 4, spaceBetween: 15 },
            },
          }));
      } catch (t) {
        console.error("Fetch failed:", t),
          (e.innerHTML = `<p>Error loading data: ${t.message}</p>`);
      }
    }
    n(),
      t.forEach((e) => {
        e.addEventListener("click", function () {
          t.forEach((e) => {
            (e.style.backgroundColor = ""), (e.style.color = "");
          }),
            (e.style.backgroundColor = "#1647A9"),
            (e.style.color = "#fff"),
            n(e.getAttribute("data-id"));
        });
      });
  }
}),
  document.addEventListener("DOMContentLoaded", function () {
    let e = document.querySelector(".fetch-content-destination"),
      t = document.querySelectorAll(".destination-li");
    if (e) {
      async function n(t = 214216) {
        e.innerHTML =
          '<div class="w-full flex justify-center p-5"><span class="loader"></span></div>';
        try {
          let n = await fetch(`/destination-load-items.bc?catid=${t}`);
          if (!n.ok) throw Error(`HTTP error! Status: ${n.status}`);
          let o = await n.text();
          (e.innerHTML = o),
            window.destinationSwiper &&
              window.destinationSwiper.destroy(!0, !0),
            (window.destinationSwiper = new Swiper(
              "#destination-list-container",
              {
                slidesPerView: 3,
                speed: 900,
                centeredSlides: !1,
                spaceBetween: 15,
                grabCursor: !0,
                autoplay: { delay: 9500, disableOnInteraction: !1 },
                pagination: { el: ".swiper-pagination", clickable: !0 },
                navigation: {
                  nextEl: ".swiper-button-next-f",
                  prevEl: ".swiper-button-prev-f",
                },
                breakpoints: {
                  640: { slidesPerView: 1.3, spaceBetween: 20 },
                  768: { slidesPerView: 3, spaceBetween: 15 },
                  1024: { slidesPerView: 3, spaceBetween: 15 },
                },
              }
            ));
        } catch (t) {
          console.error("Fetch failed:", t),
            (e.innerHTML = `<p>Error loading data: ${t.message}</p>`);
        }
      }
      n(),
        t.forEach((e) => {
          e.addEventListener("click", function () {
            t.forEach((e) => {
              (e.style.backgroundColor = ""), (e.style.color = "");
            }),
              (e.style.backgroundColor = "#1647A9"),
              (e.style.color = "#fff"),
              n(e.getAttribute("data-id"));
          });
        });
    }
  }),
  document.addEventListener("DOMContentLoaded", function () {
    let e = document.querySelector(".fetch-content-toursecond"),
      t = document.querySelectorAll(".tour2-li");
    if (e) {
      async function n(t = 213829) {
        e.innerHTML =
          '<div class="w-full flex justify-center p-5"><span class="loader"></span></div>';
        try {
          let n = await fetch(`/toursecond-load-items.bc?catid=${t}`);
          if (!n.ok) throw Error(`HTTP error! Status: ${n.status}`);
          let o = await n.text();
          (e.innerHTML = o),
            window.toursecondSwiper && window.toursecondSwiper.destroy(!0, !0),
            (window.toursecondSwiper = new Swiper(
              "#toursecond-list-container",
              {
                slidesPerView: 4,
                speed: 900,
                centeredSlides: !1,
                spaceBetween: 15,
                grabCursor: !0,
                autoplay: { delay: 9500, disableOnInteraction: !1 },
                pagination: { el: ".swiper-pagination", clickable: !0 },
                navigation: {
                  nextEl: ".swiper-button-next-f",
                  prevEl: ".swiper-button-prev-f",
                },
                breakpoints: {
                  640: { slidesPerView: 1.3, spaceBetween: 20 },
                  768: { slidesPerView: 4, spaceBetween: 15 },
                  1024: { slidesPerView: 4, spaceBetween: 15 },
                },
              }
            ));
        } catch (t) {
          console.error("Fetch failed:", t),
            (e.innerHTML = `<p>Error loading data: ${t.message}</p>`);
        }
      }
      n(),
        t.forEach((e) => {
          e.addEventListener("click", function () {
            t.forEach((e) => {
              (e.style.backgroundColor = ""), (e.style.color = "");
            }),
              (e.style.backgroundColor = "#1647A9"),
              (e.style.color = "#fff"),
              n(e.getAttribute("data-id"));
          });
        });
    }
  }),
  document.addEventListener("DOMContentLoaded", function () {
    let e = document.querySelector(".fetch-content-hotel"),
      t = document.querySelectorAll(".hotel-li");
    if (e) {
      async function n(t = 214220) {
        e.innerHTML =
          '<div class="w-full flex justify-center p-5"><span class="loader"></span></div>';
        try {
          let n = await fetch(`/hotel-load-items.bc?catid=${t}`);
          if (!n.ok) throw Error(`HTTP error! Status: ${n.status}`);
          let o = await n.text();
          (e.innerHTML = o),
            window.hotelSwiper && window.hotelSwiper.destroy(!0, !0),
            (window.hotelSwiper = new Swiper("#hotel-list-container", {
              slidesPerView: 4,
              speed: 900,
              centeredSlides: !1,
              spaceBetween: 15,
              grabCursor: !0,
              autoplay: { delay: 9500, disableOnInteraction: !1 },
              pagination: { el: ".swiper-pagination", clickable: !0 },
              navigation: {
                nextEl: ".swiper-button-next-f",
                prevEl: ".swiper-button-prev-f",
              },
              breakpoints: {
                640: { slidesPerView: 1.3, spaceBetween: 20 },
                768: { slidesPerView: 4, spaceBetween: 15 },
                1024: { slidesPerView: 4, spaceBetween: 15 },
              },
            }));
        } catch (t) {
          console.error("Fetch failed:", t),
            (e.innerHTML = `<p>Error loading data: ${t.message}</p>`);
        }
      }
      n(),
        t.forEach((e) => {
          e.addEventListener("click", function () {
            t.forEach((e) => {
              (e.style.backgroundColor = ""), (e.style.color = "");
            }),
              (e.style.backgroundColor = "#1647A9"),
              (e.style.color = "#fff"),
              n(e.getAttribute("data-id"));
          });
        });
    }
  });
const container23 = document.querySelector(".current-discount");
if (container23) {
  const e = container23.querySelector("p"),
    t = container23.querySelector("b"),
    n = container23.querySelector("span"),
    o = e.textContent.trim(),
    r = o.indexOf("تخفیف");
  if (-1 !== r) {
    const i = o.slice(0, r + 5),
      c = o.slice(r + 5).trim();
    (t.textContent = i), (n.textContent = c);
  }
}
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".pure-date").forEach((e) => {
    const t = e.nextElementSibling;
    if (t && t.classList.contains("main-date")) {
      const n = e.textContent.trim();

      if (n === "") {
        t.textContent = "";
      } else {
        const [o, r, i] = n.split("/");
        const c = [
          "فروردین",
          "اردیبهشت",
          "خرداد",
          "تیر",
          "مرداد",
          "شهریور",
          "مهر",
          "آبان",
          "آذر",
          "دی",
          "بهمن",
          "اسفند",
        ][parseInt(r, 10) - 1];

        t.textContent = `${parseInt(i, 10)} ${c} ${o}`;
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let e = document.querySelector(".fetch-content-tourmob"),
    t = document.querySelectorAll(".tourmob-li");
  if (e) {
    async function n(t = 214188) {
      e.innerHTML =
        '<div class="w-full flex justify-center p-5"><span class="loader"></span></div>';
      try {
        let n = await fetch(`tour-load-items.bc?catid=${t}`);
        if (!n.ok) throw Error(`HTTP error! Status: ${n.status}`);
        let o = await n.text();
        (e.innerHTML = o),
          window.tourmobSwiper && window.tourmobSwiper.destroy(!0, !0),
          (window.tourmobSwiper = new Swiper("#tourmob-list-container", {
            slidesPerView: 1.2,
            speed: 900,
            centeredSlides: !1,
            spaceBetween: 15,
            grabCursor: !0,
            autoplay: { delay: 9500, disableOnInteraction: !1 },
            pagination: { el: ".swiper-pagination", clickable: !0 },
            navigation: {
              nextEl: ".swiper-button-next-f",
              prevEl: ".swiper-button-prev-f",
            },
            breakpoints: {
              640: { slidesPerView: 1.3, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 40 },
              1024: { slidesPerView: 4, spaceBetween: 15 },
            },
          }));
      } catch (t) {
        console.error("Fetch failed:", t),
          (e.innerHTML = `<p>Error loading data: ${t.message}</p>`);
      }
    }
    n(),
      t.forEach((e) => {
        e.addEventListener("click", function () {
          t.forEach((e) => {
            (e.style.backgroundColor = ""), (e.style.color = "");
          }),
            (e.style.backgroundColor = "#1647A9"),
            (e.style.color = "#fff"),
            n(e.getAttribute("data-id"));
        });
      });
  }
}),
  document.addEventListener("DOMContentLoaded", function () {
    let e = document.querySelector(".fetch-content-destinationmob"),
      t = document.querySelectorAll(".destinationmob-li");
    if (e) {
      async function n(t = 214216) {
        e.innerHTML =
          '<div class="w-full flex justify-center p-5"><span class="loader"></span></div>';
        try {
          let n = await fetch(`/destination-load-items.bc?catid=${t}`);
          if (!n.ok) throw Error(`HTTP error! Status: ${n.status}`);
          let o = await n.text();
          (e.innerHTML = o),
            window.destinationmobSwiper &&
              window.destinationmobSwiper.destroy(!0, !0),
            (window.destinationmobSwiper = new Swiper(
              "#destinationmob-list-container",
              {
                slidesPerView: 1.2,
                speed: 900,
                centeredSlides: !1,
                spaceBetween: 15,
                grabCursor: !0,
                autoplay: { delay: 9500, disableOnInteraction: !1 },
                pagination: { el: ".swiper-pagination", clickable: !0 },
                navigation: {
                  nextEl: ".swiper-button-next-f",
                  prevEl: ".swiper-button-prev-f",
                },
                breakpoints: {
                  640: { slidesPerView: 1.2, spaceBetween: 20 },
                  768: { slidesPerView: 3, spaceBetween: 40 },
                  1024: { slidesPerView: 3, spaceBetween: 15 },
                },
              }
            ));
        } catch (t) {
          console.error("Fetch failed:", t),
            (e.innerHTML = `<p>Error loading data: ${t.message}</p>`);
        }
      }
      n(),
        t.forEach((e) => {
          e.addEventListener("click", function () {
            t.forEach((e) => {
              (e.style.backgroundColor = ""), (e.style.color = "");
            }),
              (e.style.backgroundColor = "#1647A9"),
              (e.style.color = "#fff"),
              n(e.getAttribute("data-id"));
          });
        });
    }
  }),
  document.addEventListener("DOMContentLoaded", function () {
    let e = document.querySelector(".fetch-content-tourmobsecond"),
      t = document.querySelectorAll(".tourmob2-li");
    if (e) {
      async function n(t = 213829) {
        e.innerHTML =
          '<div class="w-full flex justify-center p-5"><span class="loader"></span></div>';
        try {
          let n = await fetch(`/toursecond-load-items.bc?catid=${t}`);
          if (!n.ok) throw Error(`HTTP error! Status: ${n.status}`);
          let o = await n.text();
          (e.innerHTML = o),
            window.tourmobsecondSwiper &&
              window.tourmobsecondSwiper.destroy(!0, !0),
            (window.tourmobsecondSwiper = new Swiper(
              "#tourmobsecond-list-container",
              {
                slidesPerView: 1.2,
                speed: 900,
                centeredSlides: !1,
                spaceBetween: 15,
                grabCursor: !0,
                autoplay: { delay: 9500, disableOnInteraction: !1 },
                pagination: { el: ".swiper-pagination", clickable: !0 },
                navigation: {
                  nextEl: ".swiper-button-next-f",
                  prevEl: ".swiper-button-prev-f",
                },
                breakpoints: {
                  640: { slidesPerView: 1.2, spaceBetween: 20 },
                  768: { slidesPerView: 3, spaceBetween: 40 },
                  1024: { slidesPerView: 4, spaceBetween: 15 },
                },
              }
            ));
        } catch (t) {
          console.error("Fetch failed:", t),
            (e.innerHTML = `<p>Error loading data: ${t.message}</p>`);
        }
      }
      n(),
        t.forEach((e) => {
          e.addEventListener("click", function () {
            t.forEach((e) => {
              (e.style.backgroundColor = ""), (e.style.color = "");
            }),
              (e.style.backgroundColor = "#1647A9"),
              (e.style.color = "#fff"),
              n(e.getAttribute("data-id"));
          });
        });
    }
  }),
  document.addEventListener("DOMContentLoaded", function () {
    let e = document.querySelector(".fetch-content-hotelmob"),
      t = document.querySelectorAll(".hotelmob-li");
    if (e) {
      async function n(t = 214220) {
        e.innerHTML =
          '<div class="w-full flex justify-center p-5"><span class="loader"></span></div>';
        try {
          let n = await fetch(`/hotel-load-items.bc?catid=${t}`);
          if (!n.ok) throw Error(`HTTP error! Status: ${n.status}`);
          let o = await n.text();
          (e.innerHTML = o),
            window.hotelmobSwiper && window.hotelmobSwiper.destroy(!0, !0),
            (window.hotelmobSwiper = new Swiper("#hotelmob-list-container", {
              slidesPerView: 1.2,
              speed: 900,
              centeredSlides: !1,
              spaceBetween: 15,
              grabCursor: !0,
              autoplay: { delay: 9500, disableOnInteraction: !1 },
              pagination: { el: ".swiper-pagination", clickable: !0 },
              navigation: {
                nextEl: ".swiper-button-next-f",
                prevEl: ".swiper-button-prev-f",
              },
              breakpoints: {
                640: { slidesPerView: 1.2, spaceBetween: 20 },
                768: { slidesPerView: 3, spaceBetween: 40 },
                1024: { slidesPerView: 4, spaceBetween: 15 },
              },
            }));
        } catch (t) {
          console.error("Fetch failed:", t),
            (e.innerHTML = `<p>Error loading data: ${t.message}</p>`);
        }
      }
      n(),
        t.forEach((e) => {
          e.addEventListener("click", function () {
            t.forEach((e) => {
              (e.style.backgroundColor = ""), (e.style.color = "");
            }),
              (e.style.backgroundColor = "#1647A9"),
              (e.style.color = "#fff"),
              n(e.getAttribute("data-id"));
          });
        });
    }
  });
const FetchPageNumPrev = async (e) => {
    let t = document.querySelector(".fetch-content-categories"),
      n = t.getAttribute("data-catid"),
      o = await fetch(`/article-load-cats.bc?catid=${n}&pagenum=${e}`),
      r = await o.text();
    t.innerHTML = r;
  },
  FetchPageNumNext = async (e) => {
    let t = document.querySelector(".fetch-content-categories"),
      n = t.getAttribute("data-catid"),
      o = await fetch(`/article-load-cats.bc?catid=${n}&pagenum=${e}`),
      r = await o.text();
    t.innerHTML = r;
  },
  FetchWithPageNum = async (e) => {
    let t = document.querySelector(".fetch-content-categories"),
      n = t.getAttribute("data-catid"),
      o = await fetch(`/article-load-cats.bc?catid=${n}&pagenum=${e}`),
      r = await o.text();
    t.innerHTML = r;
  };
if (
  (document.querySelector(".fetch-content-categories") &&
    document.addEventListener("DOMContentLoaded", function () {
      let e = document.querySelectorAll('input[type="radio"][name="radio"]'),
        t = document.querySelector(".fetch-content-categories");
      if (t) {
        let n = t.getAttribute("data-catid");
        (async function () {
          let e = await fetch(`/article-load-cats.bc?catid=${n}`),
            o = await e.text();
          t.innerHTML = o;
        })(),
          e.forEach((e) => {
            e.addEventListener("change", async function () {
              if (this.checked) {
                document
                  .querySelectorAll('input[type="radio"][name="radio"]')
                  .forEach((e) => {
                    const t = document.querySelector(`label[for="${e.id}"]`);
                    t &&
                      ((t.style.backgroundColor = "transparent"),
                      (t.style.color = "rgb(29, 119, 212)"));
                  });
                const e = document.querySelector(`label[for="${this.id}"]`);
                e &&
                  ((e.style.backgroundColor = "#1647A9"),
                  (e.style.color = "#ffffff"));
                let n = this.value;
                try {
                  t.innerHTML =
                    '<div class="w-full flex justify-center"><span class="loader"></span></div>';
                  let e = await fetch(`/article-load-cats.bc?catid=${n}`),
                    o = await e.text();
                  t.innerHTML = o;
                } catch (e) {
                  console.error("Error:", e),
                    (t.innerHTML =
                      '<div class="text-red-500">خطا در بارگذاری مقالات</div>');
                }
              }
            });
          });
      }
    }),
  document.getElementById("search-content-article"))
) {
  var input = document.getElementById("search-content-name"),
    isItemSelected = !1;
  if (input) {
    function contentSearched(e, t) {
      (input.value = e),
        (document.getElementById("catidsearched").value = t),
        document.querySelector(".search-content ul").classList.add("hidden"),
        document.querySelector(".search-content ul").classList.remove("flex"),
        (isItemSelected = !0);
    }
    input.onkeyup = function () {
      const dropdown = document.querySelector(".search-content ul");
      const items = document
        .querySelector(".search-content")
        .getElementsByTagName("li");

      const filter = this.value.trim().toUpperCase();
      isItemSelected = !1;

      if (filter.length > 0) {
        dropdown.classList.remove("hidden");
        dropdown.classList.add("flex");

        for (let i = 0; i < items.length; i++) {
          items[i].innerHTML.toUpperCase().includes(filter)
            ? (items[i].style.display = "list-item")
            : (items[i].style.display = "none");
        }
      } else {
        dropdown.classList.add("hidden");
        dropdown.classList.remove("flex");

        for (let i = 0; i < items.length; i++) {
          items[i].style.display = "list-item";
        }
      }
    };

    document
      .getElementById("search-content-article")
      .addEventListener("submit", function (e) {
        if (!isItemSelected) {
          e.preventDefault(),
            (document.getElementById("catidsearched").value = 0);
          for (
            var t = document
                .querySelector(".search-content")
                .getElementsByTagName("li"),
              n = 0;
            n < t.length;
            n++
          )
            t[n].style.display = "list-item";
          document
            .querySelector(".search-content ul")
            .classList.remove("hidden"),
            document.querySelector(".search-content ul").classList.add("flex");
        }
      });
    document.querySelectorAll(".search-drop-down li").forEach((e) => {
      const t = e.querySelector("span").innerText;
      e.addEventListener("click", () => {
        document.querySelector("#search-content-article").action = t;
      });
    });
  }
}
const formArticle = document.querySelectorAll("#search-content-article");
function uploadDocumentFooter(e) {
  document.querySelector("#contact-form-resize .Loading_Form").style.display =
    "block";
  let t = document
      .querySelector("#contact-form-resize")
      .querySelector("#captchaContainer input[name='captcha']").value,
    n = document
      .querySelector("#contact-form-resize")
      .querySelector("#captchaContainer input[name='captchaid']").value,
    o = JSON.stringify(e.source?.rows[0]);
  $bc.setSource("cms.uploadFooter", {
    value: o,
    captcha: t,
    captchaid: n,
    run: !0,
  });
}
function refreshCaptchaFooter(e) {
  $bc.setSource("captcha.refreshFooter", !0);
}
function captchaRenderedFooter() {
  document.querySelector("#contact-form-resize .contactUsInput").placeholder =
    "کد امنیتی";
}
async function OnProcessedEditObjectFooter(e) {
  const nameInput = document
    .querySelector("#contact-form-resize .name-ans input")
    .value.trim();
  const emailInput = document
    .querySelector("#contact-form-resize .email-ans input")
    .value.trim();

  const currentTime = new Date().getTime();
  const currentData = JSON.stringify({
    name: nameInput,
    email: emailInput,
  });

  if (
    lastSubmission.data === currentData &&
    currentTime - lastSubmission.timestamp < 60000
  ) {
    document.querySelector("#contact-form-resize .Loading_Form").style.display =
      "none";
    document.querySelector("#contact-form-resize .message-api").innerHTML =
      "شما همین اطلاعات را کمتر از یک دقیقه پیش ارسال کرده‌اید.";
    document
      .querySelector("#contact-form-resize .message-api")
      .classList.add("text-red-600");
    return;
  }

  lastSubmission.data = currentData;
  lastSubmission.timestamp = currentTime;

  "6" == (await e.response.json()).errorid
    ? ((document.querySelector(
        "#contact-form-resize .Loading_Form"
      ).style.display = "none"),
      (document.querySelector("#contact-form-resize .message-api").innerHTML =
        "درخواست شما با موفقیت ثبت شد."))
    : (refreshCaptchaFooter(),
      setTimeout(() => {
        (document.querySelector(
          "#contact-form-resize .Loading_Form"
        ).style.display = "none"),
          (document.querySelector(
            "#contact-form-resize .message-api"
          ).innerHTML = "خطایی رخ داده, لطفا مجدد اقدام کنید.");
      }, 2e3));
}
async function RenderFormFooter() {
  document
    .querySelector("#contact-form-resize .email-ans input[data-bc-text-input]")
    .setAttribute("placeholder", "Email"),
    document
      .querySelector("#contact-form-resize .name-ans input[data-bc-text-input]")
      .setAttribute("placeholder", "نام نام خانوادگی");
}
document.addEventListener("click", (e) => {
  formArticle.forEach((t) => {
    t.contains(e.target) || t.querySelector("ul").classList.add("hidden");
  });
}),
  document.addEventListener("DOMContentLoaded", () => {
    const e = document.querySelectorAll(".fade-target"),
      t = () => {
        e.forEach((e) => {
          const t = e.getBoundingClientRect(),
            n = 0.8 * window.innerHeight;
          t.top < n && t.bottom > 0 && e.classList.add("fade-in");
        });
      };
    window.addEventListener("scroll", t), t();
  });
const qstion = document.querySelectorAll(".common-qs .box-container");
qstion.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
qstion.forEach((item) => {
  document.addEventListener("click", (e) => {
    if (!item.contains(e.target)) {
      item.classList.remove("active");
    }
  });
});
let lastSubmission = {
  data: null,
  timestamp: 0,
};

// function handleFormSubmission() {
//   const nameInput = document
//     .querySelector("#contact-form-resize .name-ans input")
//     .value.trim();
//   const emailInput = document
//     .querySelector("#contact-form-resize .email-ans input")
//     .value.trim();

//   const currentTime = new Date().getTime();

//   const currentData = JSON.stringify({
//     name: nameInput,
//     email: emailInput,
//   });

//   if (
//     lastSubmission.data === currentData &&
//     currentTime - lastSubmission.timestamp < 60000
//   ) {
//     showMessage(
//       "شما همین اطلاعات را کمتر از یک دقیقه قبل ارسال کرده‌اید.",
//       "error"
//     );
//     document;

//     return;
//   }

//   lastSubmission.data = currentData;
//   lastSubmission.timestamp = currentTime;
// }

// function showMessage(msg, type) {
//   const messageContainer = document.querySelector(
//     "#contact-form-resize .message-api"
//   );
//   messageContainer.textContent = msg;
//   messageContainer.className = "message-api text-right";

//   if (type === "error") messageContainer.classList.add("text-red-600");
// }

// document
//   .querySelector("#contact-form-resize .data-body-btn ")
//   .addEventListener("click", handleFormSubmission);
