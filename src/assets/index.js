import sLogoPng from './logos/s.png'
import sLogoSvg from './logos/s.svg'
import logoPng from './logos/symphony.png'
import logoSvg from './logos/symphony.svg'
import amazonLogo from './logos/amazon_logo.png'
import neckband_nav from './navbar_categories/neckband_nav.png'
import w_earphone_nav from './navbar_categories/wired_earphone_nav.png'
import w_headphone_nav from './navbar_categories/wired_headphone_nav.png'
import wless_headphone_nav from './navbar_categories/wireless_headphone_nav.png'
import c_d1 from './corousel_imgs/Corousel_desktop_1.jpg'
import c_d2 from './corousel_imgs/Corousel_desktop_2.jpg'
import c_d3 from './corousel_imgs/Corousel_desktop_3.jpg'
import c_m1 from './corousel_imgs/Corousel_mobile_1.jpg'
import c_m2 from './corousel_imgs/Corousel_mobile_2.jpg'
import c_m3 from './corousel_imgs/Corousel_mobile_3.jpg'


const logos = {
    sLogoPng: sLogoPng,
    sLogoSvg: sLogoSvg, 
    logoPng: logoPng,
    logoSvg: logoSvg,
    amazonLogo: amazonLogo,
}

const nav_category_imgs = {
    neckband_n: neckband_nav,
    w_earphone_n: w_earphone_nav,
    w_headphone_n: w_headphone_nav,
    wless_headphone_n: wless_headphone_nav,
}

const corousel_imgs = [c_d1, c_d2, c_d3, c_m1, c_m2, c_m3]

export { logos, nav_category_imgs, corousel_imgs }