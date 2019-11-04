import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';

const logo = inverted => {
  const color = inverted ? '#fff' : '#000';

  return `
  <svg width="96px" height="22px" viewBox="0 0 96 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Scaled---All-Outlines-Copy" fill="${color}" fill-rule="nonzero">
              <g id="Mark">
                  <g id="Group">
                      <polygon id="Line" transform="translate(7.066667, 7.202381) rotate(-47.000000) translate(-7.066667, -7.202381) " points="-1.06666667 8.9047619 15.2 8.9047619 15.2 5.5 -1.06666667 5.5"></polygon>
                      <polygon id="Line-Copy" transform="translate(8.933333, 14.797619) rotate(-47.000000) translate(-8.933333, -14.797619) " points="0.8 16.5 17.0666667 16.5 17.0666667 13.0952381 0.8 13.0952381"></polygon>
                  </g>
              </g>
              <path d="M28.1462857,8.20514286 C27.8697129,7.8531411 27.5082879,7.57342961 27.062,7.366 C26.6157121,7.15857039 26.1851449,7.05485714 25.7702857,7.05485714 C25.5565704,7.05485714 25.3397154,7.0737141 25.1197143,7.11142857 C24.8997132,7.14914305 24.7017152,7.22142804 24.5257143,7.32828571 C24.3497134,7.43514339 24.2020006,7.57342772 24.0825714,7.74314286 C23.9631423,7.91285799 23.9034286,8.12971297 23.9034286,8.39371429 C23.9034286,8.62000113 23.950571,8.80857067 24.0448571,8.95942857 C24.1391433,9.11028571 24.2774277,9.24228515 24.4597143,9.35542857 C24.6420009,9.46857199 24.8588559,9.57228524 25.1102857,9.66657143 C25.3617155,9.76085761 25.6445699,9.85828521 25.9588571,9.95885714 C26.4114308,10.109715 26.8828547,10.2762848 27.3731429,10.4585714 C27.863431,10.6408581 28.3097123,10.8828556 28.712,11.1845714 C29.1142877,11.4862872 29.4474273,11.8602835 29.7114286,12.3065714 C29.9754299,12.7528594 30.1074286,13.3091395 30.1074286,13.9754286 C30.1074286,14.7422895 29.9660014,15.4054258 29.6831429,15.9648571 C29.4002843,16.5242885 29.0200024,16.9862839 28.5422857,17.3508571 C28.064569,17.7154304 27.5177174,17.9857134 26.9017143,18.1617143 C26.2857143,18.3377152 25.6508604,18.4257143 24.9971429,18.4257143 C24.0417095,18.4257143 23.1177187,18.2591445 22.2251429,17.926 C21.332567,17.5928555 20.5908601,17.1182888 20,16.5022857 L22.112,14.3525714 C22.4388588,14.7548592 22.8694259,15.0911415 23.4037143,15.3614286 C23.9380027,15.6317156 24.4691402,15.7668571 24.9971429,15.7668571 C25.2360012,15.7668571 25.4685703,15.7417145 25.6948571,15.6914286 C25.921144,15.6411426 26.119142,15.5594291 26.2888571,15.4462857 C26.4585723,15.3331423 26.5937138,15.1822867 26.6942857,14.9937143 C26.7948576,14.8051419 26.8451429,14.5788585 26.8451429,14.3148571 C26.8451429,14.0634273 26.7822863,13.8497152 26.6565714,13.6737143 C26.5308565,13.4977134 26.3517154,13.3374293 26.1191429,13.1928571 C25.8865703,13.048285 25.5974303,12.9162863 25.2517143,12.7968571 C24.9059983,12.677428 24.5131451,12.5485721 24.0731429,12.4102857 C23.6457121,12.2719993 23.2277163,12.1085724 22.8191429,11.92 C22.4105694,11.7314276 22.0460016,11.48943 21.7254286,11.194 C21.4048555,10.89857 21.1471438,10.5402878 20.9522857,10.1191429 C20.7574276,9.69799789 20.66,9.1857173 20.66,8.58228571 C20.66,7.84056772 20.8108556,7.20571693 21.1125714,6.67771429 C21.4142872,6.14971165 21.8102833,5.7160017 22.3005714,5.37657143 C22.7908596,5.03714116 23.3439969,4.78885793 23.96,4.63171429 C24.5760031,4.47457064 25.1982826,4.396 25.8268571,4.396 C26.5811466,4.396 27.3511389,4.53428433 28.1368571,4.81085714 C28.9225754,5.08742995 29.6108542,5.4959973 30.2017143,6.03657143 L28.1462857,8.20514286 Z M35.4251429,11.0148571 L35.4251429,14.5977143 C35.4251429,15.0377165 35.5099992,15.3677132 35.6797143,15.5877143 C35.8494294,15.8077154 36.1542835,15.9177143 36.5942857,15.9177143 C36.7451436,15.9177143 36.9054277,15.905143 37.0751429,15.88 C37.244858,15.854857 37.3862851,15.8171431 37.4994286,15.7668571 L37.5371429,18.0297143 C37.3234275,18.1051432 37.0531445,18.1711426 36.7262857,18.2277143 C36.3994286,18.284286 36.0725731,18.3125714 35.7457143,18.3125714 C35.1171397,18.3125714 34.589145,18.2340008 34.1617143,18.0768571 C33.7342836,17.9197135 33.3917156,17.69343 33.134,17.398 C32.8762844,17.10257 32.6908577,16.7505735 32.5777143,16.342 C32.4645709,15.9334265 32.408,15.4777168 32.408,14.9748571 L32.408,11.0148571 L30.8994286,11.0148571 L30.8994286,8.69542857 L32.3891429,8.69542857 L32.3891429,6.22514286 L35.4251429,6.22514286 L35.4251429,8.69542857 L37.6314286,8.69542857 L37.6314286,11.0148571 L35.4251429,11.0148571 Z M44.6274286,13.9942857 L44.2314286,13.9942857 C43.8919983,13.9942857 43.5494303,14.0099998 43.2037143,14.0414286 C42.8579983,14.0728573 42.5500014,14.132571 42.2797143,14.2205714 C42.0094272,14.3085719 41.7862866,14.4374277 41.6102857,14.6071429 C41.4342848,14.776858 41.3462857,14.9999986 41.3462857,15.2765714 C41.3462857,15.4525723 41.3871424,15.6034279 41.4688571,15.7291429 C41.5505718,15.8548578 41.6542851,15.9554282 41.78,16.0308571 C41.9057149,16.1062861 42.0502849,16.1597141 42.2137143,16.1911429 C42.3771437,16.2225716 42.534285,16.2382857 42.6851429,16.2382857 C43.3137174,16.2382857 43.7945698,16.0654303 44.1277143,15.7197143 C44.4608588,15.3739983 44.6274286,14.9057172 44.6274286,14.3148571 L44.6274286,13.9942857 Z M38.9514286,9.97771429 C39.5045742,9.44971165 40.1488535,9.05371561 40.8842857,8.78971429 C41.619718,8.52571297 42.3708533,8.39371429 43.1377143,8.39371429 C43.9297182,8.39371429 44.5991401,8.49114188 45.146,8.686 C45.6928599,8.88085812 46.1359983,9.18256939 46.4754286,9.59114286 C46.8148588,9.99971633 47.0631421,10.5151397 47.2202857,11.1374286 C47.3774294,11.7597174 47.456,12.4982814 47.456,13.3531429 L47.456,18.0862857 L44.6274286,18.0862857 L44.6274286,17.0868571 L44.5708571,17.0868571 C44.3319988,17.4765734 43.9705738,17.7782846 43.4865714,17.992 C43.002569,18.2057154 42.4777171,18.3125714 41.912,18.3125714 C41.5348553,18.3125714 41.1451449,18.2622862 40.7428571,18.1617143 C40.3405694,18.0611424 39.9728588,17.8977154 39.6397143,17.6714286 C39.3065698,17.4451417 39.0331439,17.1434305 38.8194286,16.7662857 C38.6057132,16.389141 38.4988571,15.9240028 38.4988571,15.3708571 C38.4988571,14.6919966 38.6842839,14.1451449 39.0551429,13.7302857 C39.4260019,13.3154265 39.9037114,12.9948583 40.4882857,12.7685714 C41.0728601,12.5422846 41.723425,12.3914289 42.44,12.316 C43.156575,12.2405711 43.8542823,12.2028571 44.5331429,12.2028571 L44.5331429,12.052 C44.5331429,11.5868548 44.3697159,11.2442868 44.0428571,11.0242857 C43.7159984,10.8042846 43.3137167,10.6942857 42.836,10.6942857 C42.3959978,10.6942857 41.9717163,10.7885705 41.5631429,10.9771429 C41.1545694,11.1657152 40.8057157,11.3919987 40.5165714,11.656 L38.9514286,9.97771429 Z M53.008381,11.0148571 L53.008381,14.5977143 C53.008381,15.0377165 53.0932372,15.3677132 53.2629524,15.5877143 C53.4326675,15.8077154 53.7375216,15.9177143 54.1775238,15.9177143 C54.3283817,15.9177143 54.4886658,15.905143 54.658381,15.88 C54.8280961,15.854857 54.9695232,15.8171431 55.0826667,15.7668571 L55.120381,18.0297143 C54.9066656,18.1051432 54.6363826,18.1711426 54.3095238,18.2277143 C53.9826667,18.284286 53.6558112,18.3125714 53.3289524,18.3125714 C52.7003778,18.3125714 52.1723831,18.2340008 51.7449524,18.0768571 C51.3175217,17.9197135 50.9749537,17.69343 50.7172381,17.398 C50.4595225,17.10257 50.2740958,16.7505735 50.1609524,16.342 C50.047809,15.9334265 49.9912381,15.4777168 49.9912381,14.9748571 L49.9912381,11.0148571 L48.4826667,11.0148571 L48.4826667,8.69542857 L49.972381,8.69542857 L49.972381,6.22514286 L53.008381,6.22514286 L53.008381,8.69542857 L55.2146667,8.69542857 L55.2146667,11.0148571 L53.008381,11.0148571 Z M60.0232381,5.69714286 C60.0232381,5.93600119 59.9760957,6.15914182 59.8818095,6.36657143 C59.7875233,6.57400104 59.6618103,6.7531421 59.5046667,6.904 C59.347523,7.0548579 59.1589535,7.17428527 58.9389524,7.26228571 C58.7189513,7.35028615 58.489525,7.39428571 58.2506667,7.39428571 C57.747807,7.39428571 57.3266684,7.22771595 56.9872381,6.89457143 C56.6478078,6.56142691 56.4780952,6.16228804 56.4780952,5.69714286 C56.4780952,5.47085601 56.5220948,5.25400104 56.6100952,5.04657143 C56.6980957,4.83914182 56.8238087,4.66000075 56.9872381,4.50914286 C57.1506675,4.35828496 57.339237,4.23571476 57.5529524,4.14142857 C57.7666677,4.04714239 57.9992368,4 58.2506667,4 C58.489525,4 58.7189513,4.04399956 58.9389524,4.132 C59.1589535,4.22000044 59.347523,4.33942782 59.5046667,4.49028571 C59.6618103,4.64114361 59.7875233,4.82028468 59.8818095,5.02771429 C59.9760957,5.23514389 60.0232381,5.45828452 60.0232381,5.69714286 Z M56.704381,18.0862857 L56.704381,8.69542857 L59.7969524,8.69542857 L59.7969524,18.0862857 L56.704381,18.0862857 Z M68.1925714,11.7314286 C68.0165705,11.5051417 67.7777158,11.3228578 67.476,11.1845714 C67.1742842,11.046285 66.8662873,10.9771429 66.552,10.9771429 C66.2251412,10.9771429 65.9297156,11.0431422 65.6657143,11.1751429 C65.401713,11.3071435 65.1754295,11.4831418 64.9868571,11.7031429 C64.7982848,11.923144 64.650572,12.1777128 64.5437143,12.4668571 C64.4368566,12.7560014 64.3834286,13.0639984 64.3834286,13.3908571 C64.3834286,13.7177159 64.4337138,14.0257128 64.5342857,14.3148571 C64.6348576,14.6040014 64.7825705,14.8585703 64.9774286,15.0785714 C65.1722867,15.2985725 65.4048558,15.4714279 65.6751429,15.5971429 C65.9454299,15.7228578 66.250284,15.7857143 66.5897143,15.7857143 C66.9040016,15.7857143 67.2151413,15.7260006 67.5231429,15.6065714 C67.8311444,15.4871423 68.0794276,15.3142868 68.268,15.088 L69.984,17.1811429 C69.5942838,17.5582876 69.0914317,17.8537132 68.4754286,18.0674286 C67.8594255,18.2811439 67.2057177,18.388 66.5142857,18.388 C65.7725677,18.388 65.0811461,18.2748583 64.44,18.0485714 C63.7988539,17.8222857 63.2425738,17.4922879 62.7711429,17.0585714 C62.2997119,16.624855 61.9288585,16.1000031 61.6585714,15.484 C61.3882844,14.8679969 61.2531429,14.1702896 61.2531429,13.3908571 C61.2531429,12.6239962 61.3882844,11.9325745 61.6585714,11.3165714 C61.9288585,10.7005683 62.2997119,10.1757165 62.7711429,9.742 C63.2425738,9.30828355 63.7988539,8.97514402 64.44,8.74257143 C65.0811461,8.50999884 65.7662821,8.39371429 66.4954286,8.39371429 C66.8348588,8.39371429 67.1711412,8.42514254 67.5042857,8.488 C67.8374302,8.55085746 68.1579985,8.63571375 68.466,8.74257143 C68.7740015,8.84942911 69.0568559,8.98142779 69.3145714,9.13857143 C69.572287,9.29571507 69.7954276,9.46857049 69.984,9.65714286 L68.1925714,11.7314286 Z M79.5445714,18.0862857 L74.5851429,11.9388571 L74.5474286,11.9388571 L74.5474286,18.0862857 L71.3794286,18.0862857 L71.3794286,4.73542857 L74.5474286,4.73542857 L74.5474286,10.1662857 L74.604,10.1662857 L79.3748571,4.73542857 L83.4102857,4.73542857 L77.6588571,10.8828571 L83.7497143,18.0862857 L79.5445714,18.0862857 Z M87.9737143,5.69714286 C87.9737143,5.93600119 87.9265719,6.15914182 87.8322857,6.36657143 C87.7379995,6.57400104 87.6122865,6.7531421 87.4551429,6.904 C87.2979992,7.0548579 87.1094297,7.17428527 86.8894286,7.26228571 C86.6694275,7.35028615 86.4400012,7.39428571 86.2011429,7.39428571 C85.6982832,7.39428571 85.2771446,7.22771595 84.9377143,6.89457143 C84.598284,6.56142691 84.4285714,6.16228804 84.4285714,5.69714286 C84.4285714,5.47085601 84.472571,5.25400104 84.5605714,5.04657143 C84.6485719,4.83914182 84.7742849,4.66000075 84.9377143,4.50914286 C85.1011437,4.35828496 85.2897132,4.23571476 85.5034286,4.14142857 C85.7171439,4.04714239 85.949713,4 86.2011429,4 C86.4400012,4 86.6694275,4.04399956 86.8894286,4.132 C87.1094297,4.22000044 87.2979992,4.33942782 87.4551429,4.49028571 C87.6122865,4.64114361 87.7379995,4.82028468 87.8322857,5.02771429 C87.9265719,5.23514389 87.9737143,5.45828452 87.9737143,5.69714286 Z M84.6548571,18.0862857 L84.6548571,8.69542857 L87.7474286,8.69542857 L87.7474286,18.0862857 L84.6548571,18.0862857 Z M93.5554286,11.0148571 L93.5554286,14.5977143 C93.5554286,15.0377165 93.6402849,15.3677132 93.81,15.5877143 C93.9797151,15.8077154 94.2845692,15.9177143 94.7245714,15.9177143 C94.8754293,15.9177143 95.0357134,15.905143 95.2054286,15.88 C95.3751437,15.854857 95.5165709,15.8171431 95.6297143,15.7668571 L95.6674286,18.0297143 C95.4537132,18.1051432 95.1834302,18.1711426 94.8565714,18.2277143 C94.5297143,18.284286 94.2028588,18.3125714 93.876,18.3125714 C93.2474254,18.3125714 92.7194307,18.2340008 92.292,18.0768571 C91.8645693,17.9197135 91.5220013,17.69343 91.2642857,17.398 C91.0065701,17.10257 90.8211434,16.7505735 90.708,16.342 C90.5948566,15.9334265 90.5382857,15.4777168 90.5382857,14.9748571 L90.5382857,11.0148571 L89.0297143,11.0148571 L89.0297143,8.69542857 L90.5194286,8.69542857 L90.5194286,6.22514286 L93.5554286,6.22514286 L93.5554286,8.69542857 L95.7617143,8.69542857 L95.7617143,11.0148571 L93.5554286,11.0148571 Z" id="StaticKit"></path>
          </g>
      </g>
  </svg>
  `;
};

const AuthControls = ({ signedIn }) => {
  if (signedIn) {
    return (
      <a href="https://app.statickit.com/" className="ml-4 btn btn-sm">
        Dashboard
      </a>
    );
  }

  return (
    <>
      <a href="https://app.statickit.com/signin" className="px-2">
        Sign In
      </a>
      <a href="https://app.statickit.com/signup" className="ml-4 btn btn-sm">
        Sign Up
      </a>
    </>
  );
};

const Nav = () => {
  const [signedIn, setSignedIn] = useState(null);

  useEffect(() => {
    setSignedIn(
      document.cookie.split(';').filter(item => item.includes('signed_in=true'))
        .length > 0
    );
  });

  if (signedIn == null) {
    return <></>;
  }

  return (
    <>
      <Link href="/docs">
        <a className="px-2">Docs</a>
      </Link>

      <Link href="/pricing">
        <a className="px-2">Pricing</a>
      </Link>

      <AuthControls signedIn={signedIn} />
    </>
  );
};

export default props => (
  <header className="mx-auto container px-6 py-4">
    <Head>
      <title>{props.pageTitle} · StaticKit</title>
      <link rel="shortcut icon" href="/static/favicon.ico"></link>
    </Head>
    <div className="flex items-center h-10">
      <div className="flex-grow">
        <Link href="/">
          <a className="flex items-center">
            <span dangerouslySetInnerHTML={{ __html: logo(props.inverted) }} />
          </a>
        </Link>
      </div>
      <div className="hidden sm:block font-semibold text-gray-600 text-sm">
        <Nav />
      </div>
    </div>
  </header>
);
