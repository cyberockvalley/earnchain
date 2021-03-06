
export default function HomeCSS({isGlobal}) {

    return (
        <style jsx global={isGlobal}>{`
      /**styles/home.css**/
      @font-face {
        font-family: neuron_regular;
        src: url(/resources/assets/fonts/Neuron_Regular.eot);
        src: url(/resources/assets/fonts/Neuron_Regular.eot) format('embedded-opentype'), url(/resources/assets/fonts/Neuron_Regular.woff2) format('woff2'), url(/resources/assets/fonts/Neuron_Regular.woff) format('woff'), url(/resources/assets/fonts/Neuron_Regular.ttf) format('truetype'), url(/resources/assets/fonts/Neuron_Regular.svg#Neuron_Regular) format('svg')
      }
      
      @font-face {
        font-family: neuronangled;
        src: url(/resources/assets/fonts/NEURONANGLED.eot);
        src: url(/resources/assets/fonts/NEURONANGLED.eot) format('embedded-opentype'), url(/resources/assets/fonts/NEURONANGLED.woff2) format('woff2'), url(/resources/assets/fonts/NEURONANGLED.woff) format('woff'), url(/resources/assets/fonts/NEURONANGLED.ttf) format('truetype'), url(/resources/assets/fonts/NEURONANGLED.svg#NEURONANGLED) format('svg')
      }
      
      @font-face {
        font-family: neuron_angledbold;
        src: url(/resources/assets/fonts/neuronangledbold-webfont.eot);
        src: url(/resources/assets/fonts/neuronangledbold-webfont.eot?#iefix) format('embedded-opentype'), url(/resources/assets/fonts/neuronangledbold-webfont.woff2) format('woff2'), url(/resources/assets/fonts/neuronangledbold-webfont.woff) format('woff'), url(/resources/assets/fonts/neuronangledbold-webfont.ttf) format('truetype'), url(/resources/assets/fonts/neuronangledbold-webfont.svg#neuron_angledbold) format('svg');
        font-weight: 400;
        font-style: normal
      }
      
      .wrapper {
        overflow: hidden
      }
      
      body,
      html {
        font-size: 16px;
        line-height: 1;
        color: #fff;
        font-family: house-on-mars2, sans-serif
      }
      
      body {
        background-color: #000;
        position: relative;
        opacity: 0;
        -webkit-transition: opacity .5s ease-in-out;
        transition: opacity .5s ease-in-out
      }
      
      body.loaded {
        opacity: 1;
        -webkit-transition: .5s ease-in-out;
        transition: .5s ease-in-out
      }
      
      *,
      *:before,
      *:after {
        -webkit-box-sizing: border-box;
        box-sizing: border-box
      }
      
      h1,
      h2,
      h3,
      h4,
      p,
      ul,
      li,
      .section {
        padding: 0;
        margin: 0;
        font-family: house-on-mars2, sans-serif
      }
      
      img {
        max-width: 100%
      }
      
      .pt-5 {
        padding-top: 50px !important
      }
      
      .flex {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex
      }
      
      .centered {
        text-align: center
      }
      
      .limiter {
        max-width: 880px;
        margin-left: auto;
        margin-right: auto
      }
      
      @media(max-width:1175px) {
        #wrapper {
            overflow-x: hidden;
            overflow-y: hidden
        }
      }
      
      h1.global-title {
        font-size: 80px !important;
        letter-spacing: 16px;
        line-height: 42px;
        color: #fff;
        font-weight: 300;
        padding: 0 !important
      }
      
      h1.global-title span {
        color: #ffa243
      }
      
      @media(max-width:1500px) {
        h1.global-title {
            font-size: 3.7rem
        }
      }
      
      @media(max-width:1175px) {
        h1.global-title {
            font-size: 2.5rem
        }
      }
      
      h2.logo {
        font-size: 3.75rem;
        font-family: Montserrat, sans-serif;
        font-weight: 700
      }
      
      h2.global-subtitle {
        font-size: 30px;
        letter-spacing: 0;
        line-height: 42px;
        color: #ffeb5a;
        font-weight: 300
      }
      
      .heading-content h2.global-subtitle {
        margin: 40px 0 0
      }
      
      @media(max-width:1500px) {
        h2.global-subtitle {
            font-size: 1.5rem
        }
      }
      
      @media(max-width:1175px) {
        h2.global-subtitle {
            font-size: 1rem
        }
      }
      
      .default-title h2 {
        font-size: 40px !important;
        line-height: 42px;
        color: #fff;
        font-weight: 300;
        margin-bottom: 10px
      }
      
      .default-title h2 span {
        font-size: 30px;
        line-height: 42px;
        color: #999;
        font-weight: 300;
        display: block;
        margin-bottom: 8px
      }
      
      @media(max-width:1175px) {
        .default-title h2 {
            font-size: 2rem
        }
      }
      
      @media(max-width:1500px) {
        .default-title h2 {
            font-size: 2.5rem
        }
      }
      
      @media(max-width:1175px) {
        .default-title h2 {
            font-size: 30px !important
        }
      }
      
      .def-btn {
        min-width: 300px;
        min-height: 80px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        font-size: 20px;
        font-weight: 500;
        text-transform: uppercase;
        text-decoration: none;
        border-radius: 2px;
        line-height: 80px;
        color: #fff;
        -webkit-transition: background-color .3s ease-in-out;
        transition: background-color .3s ease-in-out
      }
      
      @media(max-width:1500px) {
        .def-btn {
            padding: 0 10px;
            min-height: 70px;
            line-height: 70px;
            font-size: 20px
        }
      }
      
      @media(max-width:1175px) {
        .def-btn {
            min-width: 260px;
            min-height: auto;
            padding: 17px 0 15px;
            line-height: 1;
            font-size: 18px
        }
      }
      
      .def-btn.def-blue {
        background-color: transparent;
        border: 2px solid #F0B90B
      }
      
      .def-btn.def-blue:hover {
        background-color: #F0B90B;
        -webkit-transition: .3s ease-in-out;
        transition: .3s ease-in-out
      }
      
      .def-btn.def-blue:focus,
      .def-btn.def-blue:active {
        background-color: #F0B90B;
        -webkit-transition: .3s ease-in-out;
        transition: .3s ease-in-out
      }
      
      .def-btn.def-trans {
        border: 2px solid rgba(255, 255, 255, .3)
      }
      
      .def-btn.def-trans:hover {
        background-color: #3b3b3b;
        -webkit-transition: .3s ease-in-out;
        transition: .3s ease-in-out
      }
      
      .def-btn.def-trans:focus,
      .def-btn.def-trans:active {
        background-color: #262626;
        -webkit-transition: .3s ease-in-out;
        transition: .3s ease-in-out
      }
      
      .def-btn.def-purple {
        background-image: linear-gradient(180deg,#F8D12F 0%,#F0B90B 100%);
      }
      
      .def-btn.def-purple:hover {
        background-image: linear-gradient(180deg,#F8D12F 0%,#F0B90B 100%);
        -webkit-transition: .3s ease-in-out;
        transition: .3s ease-in-out
      }
      
      .def-btn.def-purple:focus,
      .def-btn.def-purple:active {
        background-color: #F0B90B;
        -webkit-transition: .3s ease-in-out;
        transition: .3s ease-in-out
      }
      
      .header {
        position: absolute;
        z-index: 111;
        left: 0;
        right: 0;
        top: 0
      }
      
      .header-wrap {
        position: fixed;
        margin: 30px 60px 0;
        max-width: calc(100% - 120px);
        width: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center
      }
      
      .header-wrap .def-btn {
        width: 140px;
        height: 49px;
        border-radius: 25px;
        background-color: #363636;
        font-size: 14px;
        line-height: 49px;
        color: #fff;
        font-weight: 500;
        min-width: inherit;
        padding: 0;
        min-height: inherit;
        border: none
      }
      
      .header-wrap .heading-content__btns .btn-wrap {
        margin-right: 20px
      }
      
      @media(max-width:1400px) {
        .header-wrap {
            margin: 30px 30px 0;
            max-width: calc(100% - 60px)
        }
      }
      
      @media(max-width:1175px) {
        .header-wrap {
            position: absolute;
            margin: 20px 20px 0;
            max-width: calc(100% - 40px)
        }
      }
      
      .header-logo {
        margin-right: 0;
        width: 150px;
        -webkit-transform: translateX(-20px);
        transform: translateX(-20px);
        height: 130px;
        background: url(/resources/img/logo.png) no-repeat center;
        background-size: 100%
      }
      
      .header-logo h2 {
        display: none
      }
      
      @media(max-width:1175px) {
        .header-logo h2 {
            display: none
        }
      }
      
      .header-lang {
        position: relative;
        cursor: pointer;
        max-height: 47px;
        overflow: hidden;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column
      }
      
      .header-lang::after {
        content: '';
        position: absolute;
        top: 50%;
        right: 10px;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        width: 15px;
        height: 11px;
        pointer-events: none;
        background: url(/resources/img/icons/arrow_icon.svg) no-repeat center;
        -webkit-transition: -webkit-transform .3s ease-in-out;
        transition: -webkit-transform .3s ease-in-out;
        transition: transform .3s ease-in-out;
        transition: transform .3s ease-in-out, -webkit-transform .3s ease-in-out
      }
      
      .header-lang.opened {
        overflow: visible;
        border-radius: 24px
      }
      
      .header-lang.opened::after {
        -webkit-transform: rotate(180deg) translateY(50%);
        transform: rotate(180deg) translateY(50%);
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
        -webkit-transition: .3s ease-in-out;
        transition: .3s ease-in-out
      }
      
      .header-lang.opened .header-lang__option {
        border-radius: 0
      }
      
      .header-lang.opened .header-lang__option:not(.current) {
        border-bottom-left-radius: 24px;
        border-bottom-right-radius: 24px
      }
      
      .header-lang__option {
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        width: 100%;
        border-radius: 2px;
        padding: 10px;
        min-height: 47px
      }
      
      .header-lang__option.current {
        -webkit-box-ordinal-group: 0;
        -ms-flex-order: -1;
        order: -1;
        border: 1px solid #bbb
      }
      
      .header-lang__option-flag {
        min-width: 27px;
        min-height: 27px;
        max-width: 27px;
        max-height: 27px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 12px
      }
      
      .header-lang__option-flag img {
        width: 100%;
        height: 100%
      }
      
      .header-lang__option-name {
        font-size: 15px;
        font-family: Montserrat, sans-serif;
        font-weight: 500;
        text-transform: uppercase;
        margin-right: 25px
      }
      
      a.header-lang__option-name {
        color: #fff
      }
      
      .section {
        position: relative
      }
      
      .section-content {
        position: relative;
        z-index: 5
      }
      
      .section-bg {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        z-index: 1;
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat
      }
      
      .section-titling {
        position: absolute;
        left: -5vw;
        right: -5vw;
        z-index: 2;
        font-size: 25vw;
        color: rgba(255, 255, 255, .02);
        font-family: Montserrat, sans-serif;
        font-weight: 700;
        white-space: nowrap
      }
      
      .section-shadow {
        position: absolute;
        z-index: 3;
        width: 1623px;
        height: 1623px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center;
        pointer-events: none
      }
      
      .participants {
        background: #000;
        padding: 45px 0
      }
      
      .participants .container {
        width: 100%;
        max-width: 1170px
      }
      
      .participants .row {
        margin: 0;
        display: flex
      }
      
      .participants .row .participant_in {
        width: 100%;
        text-align: center;
        padding-top: 86px;
        background: url(/resources/img/tigericon.png) no-repeat top center
      }
      
      .participants .row .col-md-3 {
        width: 25%
      }
      
      .participant_in .stats-top_sum {
        font-size: 38px;
        margin-bottom: 5px;
        line-height: 40px;
        color: #F0B90B;
        font-weight: 700
      }
      
      .participant_in .stats-top_subject {
        font-size: 14px;
        line-height: 12px;
        color: #999;
        font-weight: 300
      }
      
      @media(max-width:1175px) {
        .section-shadow {
            display: none
        }
      }
      
      .section h1 {
        margin: 0;
        padding: .67em
      }
      
      .heading .fp-scroller {
        height: 100%
      }
      
      .heading-bg {
        background: #000
      }
      
      @media(max-width:1175px) {
        .heading-bg {
            background-size: cover
        }
        .heading-bg::after {
            content: '';
            position: absolute;
            width: 640px;
            height: 640px;
            background: url(/resources/img/backgrounds/shadow1_mobile.png) no-repeat center;
            left: -360px;
            bottom: -80px;
            pointer-events: none;
            background-size: 100% 100%
        }
      }
      
      @media(max-width:500px) {
        .heading-bg {
            background-size: 100% 280px;
            background-image: url(/resources/img/backgrounds/heading_bg--mobile.png) no-repeat;
            background-position-y: top
        }
      }
      
      @media(min-width:1175px) {
        .heading .heading-shadow2 {
            background-image: url(/resources/img/backgrounds/heading2-shadow.png);
            right: -50%;
            top: 248px;
            opacity: .1
        }
        .heading .heading-shadow3 {
            background-image: url(/resources/img/backgrounds/heading3-shadow.png);
            left: -733px;
            top: -726px;
            opacity: .4
        }
        .heading .heading-shadow4 {
            background-image: url(/resources/img/backgrounds/heading4-shadow.png);
            right: -677px;
            top: -795px;
            opacity: .5
        }
        .heading .heading-shadow5 {
            background-image: url(/resources/img/backgrounds/heading5-shadow.png);
            left: -594px;
            bottom: -582px;
            opacity: .3
        }
      }
      
      .heading-titling {
        top: 35%
      }
      
      @media(max-width:420px) {
        .heading-titling {
            top: 53%;
            font-size: 78px
        }
      }
      
      .heading-content {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        text-align: center;
        height: 100%
      }
      
      .homestats-top {
        position: absolute;
        top: 50%;
        z-index: 11;
        right: 50px;
        transform: translatey(-50%);
        width: 100%;
        max-width: 300px
      }
      
      .homestats-top.stats-top>div.row {
        margin-top: 7px;
        display: flex
      }
      
      .homestats-top .stats-top_sum {
        font-size: 24pt;
        white-space: nowrap;
        flex: 0 0 55%;
        max-width: 55%;
        text-align: right
      }
      
      .homestats-top .stats-top_subject {
        text-align: left;
        line-height: 14px;
        font-size: 14px;
        padding-left: 10px !important;
        white-space: nowrap;
        font-family: house-on-mars2, sans-serif;
        flex: 0 0 45%;
        max-width: 45%
      }
      
      @media(max-width:1175px) {
        .heading-content {
            padding-bottom: 25px;
            overflow: hidden
        }
      }
      
      .heading-content__cat {
        margin-top: 0;
        width: 100%;
        height: 82vh
      }
      
      .wrapper>.heading .heading-content__title {
        margin-top: -60px
      }
      
      @media(max-width:1000px) {
        .heading-content__cat {
            width: 561px;
            max-width: auto;
            max-height: auto;
            height: 620px;
            background: url(/resources/img/backgrounds/cat_figure--mobile.png) no-repeat center;
            background-size: 100% 100%;
            margin-top: 10px
        }
      }
      
      .heading-content__cat img {
        width: 100%;
        height: 100%
      }
      
      @media(max-width:1000px) {
        .heading-content__cat img {
            display: none
        }
      }
      
      .heading-content__title {
        margin: 30px 0 0
      }
      
      @media(max-height:1079px) and (min-width:1175px) {
        .heading-content__title {
            margin: 0 0 0
        }
      }
      
      @media(max-width:1175px) {
        .heading-content__title {
            margin: -50px auto 30px;
            width: calc(100% - 60px)
        }
      }
      
      .heading-content__subtitle {
        margin: 0 0 60px
      }
      
      @media(max-height:1079px) and (min-width:1175px) {
        .heading-content__subtitle {
            margin-bottom: 30px
        }
      }
      
      @media(max-width:1175px) {
        .heading-content__subtitle {
            margin: 0 auto 40px;
            width: calc(100% - 60px)
        }
      }
      
      .heading-content__btns {
        padding-bottom: 40px
      }
      
      @media(max-width:1175px) {
        .heading-content__btns {
            padding-bottom: 0
        }
      }
      
      .heading-content__btns .btn-wrap {
        margin-right: 40px
      }
      
      .heading-content__btns .btn-wrap:last-child {
        margin-right: 0
      }
      
      @media(max-width:1175px) {
        .heading-content__btns .btn-wrap {
            margin-right: 0;
            margin-bottom: 12px
        }
        .heading-content__btns .btn-wrap:last-child {
            margin-bottom: 0
        }
        .heading-content__btns .btn-wrap a {
            display: block;
            width: 100%;
            max-width: 100%
        }
      }
      
      @media(max-width:1175px) {
        .heading-content__btns {
            display: block;
            width: calc(100% - 60px);
            margin: 0 auto
        }
      }
      
      .advantagess {
        overflow: hidden
      }
      
      .advantages-bg {
        background-image: none
      }
      
      @media(max-width:1175px) {
        .advantages-bg {
            visibility: hidden
        }
        .advantages-bg::after {
            content: '';
            position: absolute;
            top: 0;
            left: -360px;
            width: 640px;
            visibility: visible;
            height: 640px;
            background: url(/resources/img/backgrounds/shadow2_mobile.png) no-repeat center;
            background-size: 100% 100%
        }
        .advantages-bg::before {
            content: '';
            position: absolute;
            top: 35%;
            right: -380px;
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
            width: 640px;
            height: 640px;
            visibility: visible;
            background: url(/resources/img/backgrounds/shadow3_mobile.png) no-repeat center;
            background-size: 100% 100%
        }
      }
      
      @media(min-width:1175px) {
        .advantagess .advantages-shadow1 {
            background-image: url(/resources/img/backgrounds/heading5-shadow.png);
            left: -594px;
            top: 11px
        }
        .advantagess .advantages-shadow2 {
            background-image: url(/resources/img/backgrounds/heading2-shadow.png);
            right: -50%;
            top: 2px;
            opacity: .25
        }
        .advantagess .advantages-shadow3 {
            background-image: url(/resources/img/backgrounds/advantages5-shadow.png);
            right: -598px;
            bottom: -587px
        }
        .advantagess .advantages-shadow3 {
            width: 1920px;
            height: 519px;
            background-image: url(/resources/img/backgrounds/advantages2-shadow.png);
            left: 50%;
            bottom: 0;
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%)
        }
      }
      
      .advantages-content {
        min-height: 70vh
      }
      
      @media(min-width:1175px) {
        .advantages-content {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between
        }
      }
      
      @media(max-width:1175px) {
        .advantages-content {
            padding-top: 25px
        }
      }
      
      .advantages-titling {
        bottom: 110px
      }
      
      @media(max-width:1175px) {
        .advantages-titling {
            bottom: 220px
        }
      }
      
      @media(max-width:650px) {
        .advantages-titling {
            bottom: 570px
        }
      }
      
      @media(max-width:420px) {
        .advantages-titling {
            bottom: 600px;
            text-align: center
        }
      }
      
      .advantages-list__title {
        text-align: center;
        padding: 130px 0 30px
      }
      
      @media(max-height:1079px) and (min-width:1175px) {
        .advantages-list__title {
            padding-top: 30px;
            padding-bottom: 10px
        }
      }
      
      @media(max-width:1175px) {
        .advantages-list__title {
            padding: 0;
            margin: 0 auto 30px;
            width: calc(100% - 60px)
        }
      }
      
      .advantages-list__subtitle {
        font-size: 16px;
        line-height: 28px;
        color: #999;
        font-weight: 300;
        text-align: center;
        margin: 10px auto 65px
      }
      
      .advantages-list__subtitle.smalldown {
        line-height: 22px;
        width: 55%
      }
      
      .advantages-list__subtitle small {
        font-size: 12px;
        font-weight: 400
      }
      
      @media(max-width:1175px) {
        .advantages-list__subtitle {
            margin: 0 auto 30px;
            width: calc(100% - 60px)
        }
      }
      
      .advantages-list-block {
        margin: 0 auto;
        padding-bottom: 0;
        margin-bottom: -20px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        max-width: 1170px;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between
      }
      
      @media(max-width:980px) {
        .advantages-list-block {
            max-width: calc(100% - 60px)
        }
      }
      
      .advantages-list-block .advantage {
        width: 32%;
        padding: 20px;
        margin: 0 7px 15px;
        position: relative;
        background-color: #1d1d1d
      }
      
      @media(max-width:1175px) {
        .advantages-list-block .advantage {
            width: 100%
        }
      }
      
      @media(max-width:1175px) {
        .advantages-list-block .advantage::before {
            top: -2px
        }
      }
      
      .advantages-list-block .advantage-title {
        margin-bottom: 20px;
        font-size: 18px;
        line-height: 42px;
        color: #F0B90B;
        font-weight: 500;
        text-transform: uppercase
      }
      
      @media(max-height:1079px) and (min-width:1175px) {
        .advantages-list-block .advantage-title {
            margin-bottom: 10px
        }
      }
      
      .advantages-list-block .advantage-text {
        font-size: 14px;
        line-height: 23px;
        color: #fff;
        font-weight: 300
      }
      
      .advantages-number {
        padding: 60px 0;
        position: relative
      }
      
      @media(max-height:1079px) and (min-width:1175px) {
        .advantages-number {
            padding-bottom: 60px;
            padding-top: 60px
        }
      }
      
      @media(max-width:1175px) {
        .advantages-number {
            padding: 0 0 30px
        }
      }
      
      @media(max-width:1175px) {
        .advantages-number {
            background-color: #23203a;
            margin-top: 120px
        }
      }
      
      .advantages-number-wrap {
        max-width: 1010px;
        margin: 0 auto;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        position: relative;
        z-index: 3
      }
      
      @media(max-width:1175px) {
        .advantages-number-wrap {
            -ms-flex-wrap: wrap;
            flex-wrap: wrap
        }
      }
      
      .advantages-number__item {
        text-align: center;
        position: relative;
        padding-right: 47px;
        margin-right: 47px
      }
      
      @media(max-width:1175px) {
        .advantages-number__item {
            width: calc(50% - 23.5px)
        }
        .advantages-number__item:first-child {
            margin-bottom: 30px
        }
        .advantages-number__item:nth-child(2) {
            padding-right: 0;
            margin-right: 0
        }
        .advantages-number__item:nth-child(2):after,
        .advantages-number__item:nth-child(2)::before {
            display: none
        }
      }
      
      .advantages-number__item:last-child {
        margin-right: 0;
        padding-right: 0
      }
      
      .advantages-number__item:last-child:after,
      .advantages-number__item:last-child::before {
        display: none
      }
      
      .advantages-number__item::after {
        position: absolute;
        content: '';
        width: 6px;
        height: 87px;
        background-color: #23203a;
        border: 2px solid #39364d;
        border-top-width: 20px;
        border-bottom-width: 20px;
        right: 1px;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%)
      }
      
      .advantages-number__item::before {
        content: '';
        position: absolute;
        right: 0;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        width: 8px;
        height: 8px;
        background-color: #9c9aa6;
        border-radius: 50%;
        z-index: 2
      }
      
      @media(max-width:650px) {
        .advantages-number__item {
            margin: 0 0 30px;
            padding: 0 0 30px;
            width: 100%
        }
        .advantages-number__item:first-child {
            margin: 0 0 30px
        }
        .advantages-number__item:last-child {
            margin: 0;
            padding: 0
        }
        .advantages-number__item:last-child::after {
            display: none !important
        }
        .advantages-number__item::after {
            display: block !important;
            width: auto;
            height: 6px;
            border-top-width: 2px;
            border-bottom-width: 2px;
            border-left: none;
            border-right: none;
            bottom: 0;
            top: auto;
            left: 30px;
            right: 30px
        }
        .advantages-number__item::before {
            display: none
        }
      }
      
      .advantages-number__item-title {
        font-size: 1.25rem;
        margin-bottom: 0;
        line-height: 120%
      }
      
      .advantages-number__item-content {
        color: #f3bf32;
        font-size: 2rem;
        font-weight: 700
      }
      
      @media(max-height:1079px) and (min-width:1175px) {
        .advantages-number__item-content {
            font-size: 2rem
        }
      }
      
      .advantages-number__item-content span {
        font-size: 2.5rem;
        color: #4e4c5f
      }
      
      @media(max-height:1079px) and (min-width:1175px) {
        .advantages-number__item-content span {
            font-size: 1.5rem
        }
      }
      
      @media(max-width:700px) {
        .results-second-bg {
            top: 0;
            -webkit-transform: translateY(0);
            transform: translateY(0);
            background-position-y: 240px
        }
      }
      
      .results-bg {
        background-color: #13134c
      }
      
      @media(max-width:1175px) {
        .results-bg {
            background-size: cover
        }
        .results-bg::after {
            content: '';
            position: absolute;
            bottom: -30%;
            right: -360px;
            width: 640px;
            visibility: visible;
            height: 640px;
            background: url(/resources/img/backgrounds/shadow2_mobile.png) no-repeat center;
            background-size: 100% 100%
        }
      }
      
      .results-title {
        text-align: center;
        padding-top: 50px;
        margin: 30px 0 20px
      }
      
      @media(max-height:1079px) and (min-width:1175px) {
        .results-title {
            padding-top: 40px;
            margin-bottom: 30px
        }
      }
      
      @media(max-width:1175px) {
        .results-title {
            padding-top: 50px;
            margin: 0 auto 30px;
            width: calc(100% - 60px)
        }
      }
      
      @media(max-height:1079px) and (min-width:1175px) {
        .results .fp-scroller {
            min-height: 100vh
        }
      }
      
      .results-subtitle {
        text-align: center;
        margin: 0 0 100px;
        font-size: 1.25rem;
        line-height: 120%
      }
      
      @media(max-height:1079px) and (min-width:1175px) {
        .results-subtitle {
            margin-bottom: 0
        }
      }
      
      @media(max-width:1175px) {
        .results-subtitle {
            margin: 0 auto;
            font-size: 1rem;
            width: calc(100% - 60px)
        }
      }
      
      .results-subtitle__text {
        color: rgba(255, 255, 255, .4);
        margin-bottom: 5px
      }
      
      .results-subtitle__info {
        color: rgba(255, 255, 255, .4)
      }
      
      @media(max-width:1175px) {
        .results-subtitle__info {
            display: none
        }
      }
      
      .results-content {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        height: 100%
      }
      
      @media(max-height:1079px) and (min-width:1175px) {
        .results-content {
            min-height: 100vh
        }
      }
      
      .results-content .fp-scroller {
        height: 100%
      }
      
      .carousel {
        margin-bottom: 60px;
        width: 100%;
        height: 600px
      }
      
      @media(max-height:1079px) and (min-width:1175px) {
        .carousel {
            margin-top: 30px;
            margin-bottom: 30px;
            height: 500px
        }
      }
      
      @media(max-width:1175px) {
        .carousel {
            margin: 30px 0;
            height: 580px
        }
      }
      
      .carousel .carousel-item {
        width: 300px;
        height: 600px;
        max-height: 600px;
        -webkit-transition: background-color .3s ease-in-out;
        transition: background-color .3s ease-in-out
      }
      
      @media(max-height:1079px) and (min-width:1175px) {
        .carousel .carousel-item {
            height: 450px;
            -webkit-box-shadow: none;
            box-shadow: none;
            max-height: 450px
        }
      }
      
      @media(max-width:1175px) {
        .carousel .carousel-item {
            width: 260px;
            height: 570px
        }
      }
      
      .carousel-item {
        background-color: #252571;
        padding: 30px 30px 30px 50px;
        border-radius: 2px;
        -webkit-box-shadow: 0 -30px 50px rgba(0, 0, 0, .35);
        box-shadow: 0 -30px 50px rgba(0, 0, 0, .35);
        position: relative;
        z-index: 10000;
        -webkit-transform: translateY(0);
        transform: translateY(0)
      }
      
      @media(max-height:1079px) and (min-width:1175px) {
        .carousel-item {
            padding: 15px 20px 30px 15px
        }
      }
      
      @media(max-width:1175px) {
        .carousel-item {
            padding: 23px 28px 32px 20px;
            max-height: 570px;
            -webkit-box-shadow: none;
            box-shadow: none
        }
      }
      
      .carousel-item::before {
        content: '';
        position: absolute;
        z-index: 11000;
        pointer-events: none;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: transparent;
        -webkit-transition: .3s ease-in-out;
        transition: .3s ease-in-out;
        background-color: rgba(19, 19, 22, .8)
      }
      
      .carousel-item.active::before {
        background-color: transparent
      }
      
      .carousel-item.dark {
        opacity: 1 !important
      }
      
      .carousel-item.dark::before {
        background-color: rgba(19, 19, 22, .5)
      }
      
      .carousel-item.darken {
        opacity: 1 !important
      }
      
      .carousel-item.darken::before {
        background-color: rgba(19, 19, 22, .8)
      }
      
      @media(max-width:560px) {
        .carousel-item.darken {
            opacity: 0 !important
        }
      }
      
      .carousel-item>div:not(.carousel-item__info) {
        position: relative
      }
      
      .carousel-item>div:not(.carousel-item__info)::before {
        content: '';
        position: absolute;
        left: 0;
        top: 8px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #fff
      }
      
      @media(max-width:1175px) {
        .carousel-item>div:not(.carousel-item__info)::before {
            top: 6px
        }
      }
      
      .carousel-item>div:not(.carousel-item__info)::after {
        content: '';
        position: absolute;
        top: 36px;
        left: 3px;
        bottom: 0;
        background-color: rgba(255, 255, 255, .2);
        width: 2px
      }
      
      @media(max-width:1175px) {
        .carousel-item>div:not(.carousel-item__info)::after {
            top: 34px
        }
      }
      
      .carousel-item::after {
        content: '';
        position: absolute;
        left: 30px;
        top: 30px;
        width: 20px;
        height: 34px;
        background: url(/resources/img/icons/etherium_icon.svg) no-repeat center;
        background-size: 100% 100%
      }
      
      @media(max-height:1079px) and (min-width:1175px) {
        .carousel-item::after {
            top: 15px
        }
      }
      
      .carousel-item__info {
        margin: 0 0 15px;
        text-align: right;
        font-size: 1rem;
        font-weight: 700
      }
      
      @media(max-height:1079px) and (min-width:1175px) {
        .carousel-item__info {
            font-size: 1rem
        }
      }
      
      @media(max-width:1175px) {
        .carousel-item__info {
            font-size: 1rem
        }
      }
      
      .carousel-item__info-id {
        margin: 0 0 10px
      }
      
      .carousel-item__info-users {
        position: relative;
        padding-left: 44px;
        display: inline-block
      }
      
      .carousel-item__info-users::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        width: 34px;
        height: 24px;
        background: url(/resources/img/icons/users_icon.svg) no-repeat center;
        background-size: 100% 100%;
        opacity: .4
      }
      
      .carousel-item__block {
        padding: 0 0 10px 38px;
        margin-bottom: 10px
      }
      
      @media(max-width:1175px) {
        .carousel-item__block {
            padding: 0 0 0 34px
        }
      }
      
      .carousel-item__block-title {
        font-size: 1rem;
        font-weight: 700;
        margin-bottom: 10px
      }
      
      @media(max-height:1079px) and (min-width:1175px) {
        .carousel-item__block-title {
            font-size: 1rem
        }
      }
      
      @media(max-width:1175px) {
        .carousel-item__block-title {
            font-size: 1rem
        }
      }
      
      .carousel-item__block-info {
        font-size: 1.5rem;
        color: #f3bf32;
        font-family: Montserrat, sans-serif;
        font-weight: 700
      }
      
      @media(max-height:1079px) and (min-width:1175px) {
        .carousel-item__block-info {
            font-size: 1.5rem
        }
      }
      
      @media(max-width:1175px) {
        .carousel-item__block-info {
            font-size: 2.5rem
        }
      }
      
      .carousel-item__block-info span {
        font-size: 1rem;
        color: #7c67ef
      }
      
      @media(max-width:1175px) {
        .carousel-item__block-info span {
            font-size: 1rem
        }
      }
      
      .carousel-item__subitem {
        margin: 0 0 25px;
        padding: 0 0 0 38px
      }
      
      @media(max-height:1079px) and (min-width:1175px) {
        .carousel-item__subitem {
            margin-bottom: 15px
        }
      }
      
      @media(max-width:1175px) {
        .carousel-item__subitem {
            margin-bottom: 20px
        }
      }
      
      .carousel-item__subitem:last-child {
        margin-bottom: 0
      }
      
      .carousel-item__subitem-title {
        font-size: 1rem;
        font-weight: 700;
        margin-bottom: 20px
      }
      
      @media(max-height:1079px) and (min-width:1175px) {
        .carousel-item__subitem-title {
            margin-bottom: 10px
        }
      }
      
      @media(max-width:1175px) {
        .carousel-item__subitem-title {
            font-size: 1.25rem
        }
      }
      
      .carousel-item__subitem-title span {
        color: #e7305b;
        font-family: Montserrat, sans-serif
      }
      
      .carousel-item__subitem-row {
        font-size: 1.5rem;
        color: #f3bf32;
        font-weight: 700;
        margin-bottom: 10px
      }
      
      .carousel-item__subitem-row:last-child {
        margin-bottom: 0
      }
      
      .carousel-item__subitem-row span {
        color: #7c67ef;
        font-size: 1rem
      }
      
      .carousel-nav {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding-bottom: 10px
      }
      
      @media(max-height:1079px) and (min-width:1175px) {
        .carousel-nav {
            padding-bottom: 10px
        }
      }
      
      @media(max-width:1175px) {
        .carousel-nav {
            padding-bottom: 0
        }
      }
      
      .carousel-nav-dots {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin: 0 60px
      }
      
      @media(max-width:1175px) {
        .carousel-nav-dots {
            margin: 0
        }
      }
      
      .carousel-nav-dots .dot {
        margin-right: 20px;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #fff;
        opacity: .5;
        -webkit-transition: opacity .3s ease-in-out;
        transition: opacity .3s ease-in-out;
        cursor: pointer
      }
      
      .carousel-nav-dots .dot:hover {
        opacity: .7;
        -webkit-transition: .3s ease-in-out;
        transition: .3s ease-in-out
      }
      
      .carousel-nav-dots .dot:last-child {
        margin-right: 0
      }
      
      .carousel-nav-dots .dot.current {
        opacity: 1;
        -webkit-transition: .3s ease-in-out;
        transition: .3s ease-in-out
      }
      
      .carousel-nav__arrow {
        width: 120px;
        height: 10px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center;
        cursor: pointer;
        -webkit-transition: -webkit-transform .3s ease-in-out;
        transition: -webkit-transform .3s ease-in-out;
        transition: transform .3s ease-in-out;
        transition: transform .3s ease-in-out, -webkit-transform .3s ease-in-out
      }
      
      @media(max-width:1175px) {
        .carousel-nav__arrow {
            display: none
        }
      }
      
      .carousel-nav__arrow.carousel-nav__prev {
        background-image: url(/resources/img/icons/carouselPrev_icon.png)
      }
      
      .carousel-nav__arrow.carousel-nav__prev:hover {
        -webkit-transform: translateX(-5px);
        transform: translateX(-5px);
        -webkit-transition: .3s ease-in-out;
        transition: .3s ease-in-out
      }
      
      .carousel-nav__arrow.carousel-nav__next {
        background-image: url(/resources/img/icons/carouselNext_icon@2x.png)
      }
      
      .carousel-nav__arrow.carousel-nav__next:hover {
        -webkit-transform: translateX(5px);
        transform: translateX(5px);
        -webkit-transition: .3s ease-in-out;
        transition: .3s ease-in-out
      }
      
      .examples-titling {
        top: 100px
      }
      
      @media(max-width:1175px) {
        .examples-titling {
            display: none
        }
      }
      
      .examples-bg {
        background-color: #13134c
      }
      
      @media(max-width:1175px) {
        .examples-bg {
            visibility: hidden
        }
        .examples-bg::after {
            content: '';
            visibility: visible;
            position: absolute;
            top: 290px;
            width: 640px;
            height: 640px;
            left: -360px;
            background: url(/resources/img/backgrounds/shadow4_mobile.png) no-repeat center;
            background-size: 100% 100%
        }
      }
      
      @media(min-width:1175px) {
        .exampless .examples-shadow1 {
            left: -680px;
            top: -1143px;
            background-image: url(/resources/img/backgrounds/results2-shadow.png);
            opacity: .1
        }
        .exampless .examples-shadow2 {
            right: -565px;
            top: -978px;
            background-image: url(/resources/img/backgrounds/results4-shadow.png)
        }
        .exampless .examples-shadow3 {
            right: -640px;
            bottom: -747px;
            background-image: url(/resources/img/backgrounds/examples1-shadow.png);
            opacity: .5
        }
        .exampless .examples-shadow4 {
            left: -650px;
            bottom: -870px;
            background-image: url(/resources/img/backgrounds/examples2-shadow.png);
            opacity: .5
        }
      }
      
      .examples-title {
        padding-top: 160px;
        margin: 0 0 60px;
        text-align: center
      }
      
      @media(max-height:1079px) and (min-width:1175px) {
        .examples-title {
            padding-top: 0;
            margin-bottom: 70px
        }
      }
      
      @media(max-width:1175px) {
        .examples-title {
            padding-top: 30px;
            width: calc(100% - 60px);
            margin: 0 auto 30px
        }
      }
      
      .section.examples {/*
        background: url(/resources/img/mainbg.jpg) fixed no-repeat top center;
        padding: 70px 0 110px;
        background-size: cover*/
      }
      
      .section.examples .def-btn.def-purple {
        background: #363636;
        border-radius: 50px
      }
      
      .examples-content {
        padding-bottom: 0
      }
      
      .faq-container .accordion-wrap {
        display: none
      }
      
      div#loadMore {
        margin: 50px auto auto;
        width: 140px;
        height: 49px;
        border-radius: 25px;
        background-color: #363636;
        font-size: 14px;
        line-height: 49px;
        color: #fff;
        font-weight: 500;
        min-width: inherit;
        padding: 0;
        min-height: inherit;
        border: none;
        text-align: center;
        cursor: pointer;
        text-transform: uppercase
      }
      
      div#loadMore:hover {
        background: #F0B90B
      }
      
      @media(max-height:1079px) and (min-width:1175px) {
        .examples-content {
            min-height: 100vh
        }
      }
      
      @media(max-width:1175px) {
        .examples-content {
            padding-bottom: 0
        }
      }
      
      .examples-blocks {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap
      }
      
      @media(max-width:930px) {
        .examples-blocks {
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: normal;
            -ms-flex-pack: normal;
            justify-content: normal
        }
      }
      
      .examples-blocks .example {
        margin-right: 25px;
        border-radius: 8px;
        padding: 0
      }
      
      @media(max-height:1079px) and (min-width:1175px) {
        .examples-blocks .example {
            padding: 0
        }
      }
      
      @media(max-width:930px) {
        .examples-blocks .example {
            width: 260px;
            padding: 30px 20px;
            margin: 0
        }
      }
      
      .examples-blocks .example:nth-child(2) {
        margin-right: 0
      }
      
      @media(max-width:930px) {
        .examples-blocks .example:first-child {
            -webkit-box-ordinal-group: 1;
            -ms-flex-order: 0;
            order: 0
        }
      }
      
      .examples-blocks .example:first-child .example-container {
        margin-top: 44px
      }
      
      @media(max-height:1079px) and (min-width:1175px) {
        .examples-blocks .example:first-child .example-container {
            margin-top: 20px
        }
      }
      
      @media(max-width:930px) {
        .examples-blocks .example:first-child .example-container {
            margin-top: 30px
        }
      }
      
      .examples-blocks .example:first-child .example-title {
        padding-bottom: 0
      }
      
      .examples-blocks .example .example-title {
        width: 485px;
        height: 325px
      }
      
      @media(max-width:930px) {
        .examples-blocks .example:first-child .example-title {
            padding-bottom: 0
        }
      }
      
      .examples-blocks .example:first-child .example-title::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: url(/resources/img/x3img.png) no-repeat center;
        background-size: 100% 100%
      }
      
      @media(max-width:930px) {}
      
      @media(max-width:930px) {
        .examples-blocks .example:nth-child(2) {
            -webkit-box-ordinal-group: 3;
            -ms-flex-order: 2;
            order: 2
        }
      }
      
      .examples-blocks .example:nth-child(2) .example-container {
        margin-top: 34px
      }
      
      @media(max-width:930px) {
        .examples-blocks .example:nth-child(2) .example-container {
            margin-top: 30px
        }
      }
      
      .examples-blocks .example:nth-child(2) .example-title {
        padding-bottom: 204px
      }
      
      @media(max-height:1079px) and (min-width:1175px) {
        .examples-blocks .example:nth-child(2) .example-title {
            padding-bottom: 180px
        }
      }
      
      @media(max-width:930px) {
        .examples-blocks .example:nth-child(2) .example-title {
            padding-bottom: 130px
        }
      }
      
      .examples-blocks .example:nth-child(2) .example-title::after {
        content: '';
        position: absolute;
        left: 0;
        right: 10px;
        bottom: 0;
        top: 0;
        background: url(/resources/img/x4img.png) no-repeat center;
        background-size: 100% 100%
      }
      
      @media(max-width:930px) {}
      
      .examples-blocks .example-title {
        text-align: right;
        font-size: 30px;
        font-weight: 300;
        position: relative
      }
      
      @media(max-height:1079px) and (min-width:1175px) {
        .examples-blocks .example-title {
            font-size: 30px
        }
      }
      
      @media(max-width:930px) {
        .examples-blocks .example-title {
            font-size: 1.875rem;
            font-weight: 400
        }
      }
      
      .examples-blocks .example-title span {
        display: block;
        color: #F8D12F;
        font-family: Montserrat, sans-serif
      }
      
      @media(max-width:930px) {
        .examples-blocks .example-title span {
            font-weight: 700
        }
      }
      
      .examples-blocks .example-row {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin-bottom: 20px
      }
      
      .examples-blocks .example-row span {
        margin: 0 0 0 20px;
        color: rgba(255, 255, 255, .3);
        font-size: 13px;
        line-height: 18px
      }
      
      @media(max-width:930px) {
        .examples-blocks .example-row span {
            font-size: .875rem
        }
      }
      
      .examples-blocks .example-row:last-child {
        margin-bottom: 0
      }
      
      .examples-more {
        width: 777px;
        margin: 0 calc((100% - 777px)/2);
        background: url(/resources/img/backgrounds/bottom-borders.png) no-repeat center;
        background-size: 100% 100%
      }
      
      @media(max-width:930px) {
        .examples-more {
            -webkit-box-ordinal-group: 2;
            -ms-flex-order: 1;
            order: 1;
            width: 260px;
            background-image: none;
            padding: 60px 0;
            position: relative;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column
        }
        .examples-more::before {
            content: '';
            left: 50%;
            position: absolute;
            top: 4px;
            bottom: calc(100% - 56px);
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
            width: 57px;/*
            background: url(/resources/img/backgrounds/bottom_border--mobile.png) no-repeat center;*/
            background-size: 100% 100%
        }
        .examples-more::after {
            content: '';
            left: 50%;
            position: absolute;
            bottom: 4px;
            top: calc(100% - 56px);
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
            width: 57px;
            background: url(/resources/img/backgrounds/bottom_border--mobile.png) no-repeat center;
            background-size: 100% 100%
        }
      }
      
      .examples-more__text {
        padding: 40px 0 10px;
        text-align: center;
        font-size: 18px;
        font-weight: 400;
        max-width: 430px;
        margin: 0 auto;
        line-height: 22px
      }
      
      @media(max-width:930px) {
        .examples-more__text {
            padding: 0;
            font-size: 1rem;
            margin: 0 0 6px
        }
        .examples-more__text br {
            display: none
        }
      }
      
      .examples-more__text span {
        color: #F8D12F
      }
      
      .examples-more__btn {
        max-width: 300px;
        margin: -8px auto 0
      }
      
      @media(max-width:930px) {
        .examples-more__btn {
            -webkit-box-ordinal-group: 0;
            -ms-flex-order: -1;
            order: -1;
            margin: 5px 0 20px
        }
      }
      
      .examples-more__btn a.def-btn {
        -webkit-transform: translateY(50%);
        transform: translateY(50%)
      }
      
      @media(max-width:930px) {
        .examples-more__btn a.def-btn {
            -webkit-transform: translate(0);
            transform: translate(0);
            background-color: #6149e1
        }
      }
      
      .faq {
        position: relative
      }
      
      .faq .fp-scroller {
        min-height: 100vh
      }
      
      .faq-content {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        height: 100%;
        position: relative;
        z-index: 5;
        background: #000
      }
      
      .faq-content:before {
        content: '';
        position: absolute;
        width: 603px;
        height: 552px;
        bottom: 0;
        right: -297.5px;
        z-index: -1;
        background: url(/resources/img/tiger.png) no-repeat center;
        background-size: 100% 100%;
        background-position-y: 158px;
        pointer-events: none;
        opacity: .3
      }
      
      .faq-content:after {
        content: '';
        position: absolute;
        width: 603px;
        height: 552px;
        bottom: 0;
        left: -297.5px;
        z-index: -1;
        background: url(/resources/img/tiger.png) no-repeat center;
        background-size: 100% 100%;
        background-position-y: 158px;
        pointer-events: none;
        opacity: .3
      }
      
      .faq-bg {
        background-color: #131350
      }
      
      @media(max-width:1175px) {
        .faq-bg {
            visibility: hidden
        }
      }
      
      .faq-title {
        padding: 70px 0 0;
        margin-bottom: 60px;
        text-align: center
      }
      
      @media(max-width:1175px) {
        .faq-title {
            padding-top: 30px;
            margin: 0 auto 30px;
            width: calc(100% - 60px)
        }
      }
      
      @media(min-width:1175px) and (max-height:780px) {
        .faq-title {
            padding-top: 70px
        }
      }
      
      .faq-container {
        padding-bottom: 125px
      }
      
      @media(max-width:1175px) {
        .faq-container {
            width: 100%
        }
      }
      
      @media(max-width:500px) {
        .faq-container {
            padding-bottom: 70px
        }
      }
      
      .pulse {
        cursor: pointer;
        box-shadow: 0 0 0 transparent;
        animation: pulse 2s infinite
      }
      
      .pulse:hover {
        animation: none
      }
      
      .accordion {
        background-color: #131313;
        border-radius: 2px;
        cursor: pointer;
        width: 100%
      }
      
      @media(max-width:1175px) {
        .accordion {
            width: 100%
        }
      }
      
      .accordion-wrap {
        width: 880px;
        margin: 0 auto 20px;
        position: relative
      }
      
      @media(max-width:1175px) {
        .accordion-wrap {
            padding-left: 0;
            width: calc(100% - 60px)
        }
        .accordion-wrap:before,
        .accordion-wrap:after {
            display: none
        }
      }
      
      .accordion-wrap:last-child {
        margin-bottom: 0
      }
      
      .accordion-wrap:last-child::after {
        display: none
      }
      
      .accordion-heading {
        font-size: 16px;
        text-transform: uppercase;
        padding: 22px 40px;
        font-weight: 400;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-transition: color .3s ease-in-out;
        transition: color .3s ease-in-out;
        border-left: 3px solid #F0B90B
      }
      
      @media(max-width:1175px) {
        .accordion-heading {
            padding: 20px 30px 12px
        }
      }
      
      .accordion-heading span {
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
        -webkit-transition: .3s ease-in-out;
        transition: .3s ease-in-out
      }
      
      .accordion-heading span svg {
        width: 11px;
        height: 15px;
        -webkit-transition: .3s ease-in-out;
        transition: .3s ease-in-out
      }
      
      .accordion-content {
        margin-top: 0;
        display: none;
        padding: 0 40px 32px;
        font-size: 14px;
        line-height: 23px;
        color: #fff;
        font-weight: 300;
        border-left: 3px solid #F0B90B
      }
      
      .accordion-content a {
        color: #F0B90B
      }
      
      @media(max-width:1175px) {
        .accordion-content {
            padding: 0 30px 30px
        }
      }
      
      .accordion.active .accordion-heading {
        color: #F8D12F;
        -webkit-transition: .3s ease-in-out;
        transition: .3s ease-in-out
      }
      
      .accordion.active .accordion-heading svg {
        fill: #ffa243;
        -webkit-transition: .3s ease-in-out;
        transition: .3s ease-in-out
      }
      
      .accordion.active .accordion-heading span {
        -webkit-transform: rotate(-90deg);
        transform: rotate(-90deg);
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
        -webkit-transition: .3s ease-in-out;
        transition: .3s ease-in-out
      }
      
      @media(max-height:750px) and (min-width:1175px) {
        .footer::after {
            padding-top: 270px
        }
      }
      
      .footer-wrap {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        width: 100%;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: end;
        -ms-flex-align: end;
        align-items: flex-end;
        position: relative;
        z-index: 5
      }
      
      @media(max-width:1175px) {
        .footer-wrap {
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            width: calc(100% - 60px);
            margin: 0 auto
        }
      }
      
      .footer-left {
        margin-bottom: 10px;
        text-align: center
      }
      
      .footer-left a {
        color: #F0B90B
      }
      
      @media(max-width:1175px) {
        .footer-left {
            margin-right: 0;
            width: 200px;
            margin-bottom: 45px;
            text-align: center
        }
      }
      
      .footer-left__logo {
        margin-bottom: 2px;
        font-size: 1.875rem;
        color: rgba(255, 255, 255, .1);
        font-family: Montserrat, sans-serif;
        font-weight: 700
      }
      
      @media(max-width:1175px) {
        .footer-left__logo {
            margin-bottom: 2px;
            font-size: 1.875rem
        }
      }
      
      .footer-left__address span {
        color: rgba(255, 255, 255, .5);
        font-size: 100%;
        display: block
      }
      
      .footer-left__address span:nth-child(2) {
        font-size: 1.25rem;
        margin: 5px 0
      }
      
      @media(max-width:1175px) {
        .footer-left__address span:nth-child(2) {
            font-size: 1rem;
            max-width: 240px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap
        }
      }
      
      .footer-right {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        margin-bottom: 15px
      }
      
      @media(max-width:1175px) {
        .footer-right {
            width: calc(100% - 60px);
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            margin: 30px auto 0
        }
      }
      
      @media(max-width:500px) {
        .footer-right {
            width: 100%;
            margin: 30px 0 0;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between
        }
      }
      
      .footer-media {
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 10px 0 20px
      }
      
      .footer-right__social {
        width: 58px;
        height: 58px;
        border-radius: 50%;
        background-color: #363636;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        margin-right: 20px;
        -webkit-transition: background-color .3s ease-in-out;
        transition: background-color .3s ease-in-out
      }
      
      .footer-right__social:hover {
        background-color: #F0B90B;
        -webkit-transition: .3s ease-in-out;
        transition: .3s ease-in-out
      }
      
      .topheader .footer-media {
        width: auto;
        float: right;
        margin-left: 20px;
        padding: 6px 0 10px
      }
      
      .footer-right__social {
        width: 38px;
        height: 38px;
        margin-right: 10px;
        min-width: inherit !important;
        min-height: inherit !important
      }
      
      .social_btns.heading-content__btns .btn-wrap {
        margin: 0 10px
      }
      
      .social_btns.heading-content__btns .btn-wrap img {
        margin: 0 10px 0 0;
        max-width: 26px
      }
      
      .social_btns.heading-content__btns .btn-wrap .def-btn {
        font-size: 17px !important;
        border-radius: 100px;
        min-height: 60px;
        line-height: 60px;
        min-width: 200px;
        display: flex;
        align-items: center
      }
      
      @media(max-width:1175px) {
        .footer-right__social {
            max-width: 50px;
            max-height: 50px;
            min-width: 50px;
            min-height: 50px
        }
      }
      
      .footer-right__social.tg img {
        width: 24px;
        height: 22px
      }
      
      .footer-right__social.tt img {
        width: 24px;
        height: 20px
      }
      
      .footer-right__social.yt img {
        width: 26px;
        height: 20px
      }
      
      .footer-right__social.mail img {
        width: 26px;
        height: 20px
      }
      
      .footer-right__social.git img {
        width: 24px;
        height: 22px
      }
      
      .footer-right__social:last-child {
        margin-right: 0
      }
      
      .heading.will-animate .section-shadow {
        opacity: 0;
        -webkit-transition: opacity .3s ease-in-out;
        transition: opacity .3s ease-in-out
      }
      
      .heading.will-animate .heading-shadow2 {
        opacity: .25 !important;
        -webkit-transition: .3s ease-in-out;
        transition: .3s ease-in-out
      }
      
      .heading.will-animate .heading-content__title {
        -webkit-transform: translateY(-200px);
        transform: translateY(-200px)
      }
      
      @media(max-width:600px) {
        .heading.will-animate .heading-content__title {
            -webkit-transform: translateY(-350px);
            transform: translateY(-350px)
        }
      }
      
      .heading.will-animate .heading-content__subtitle {
        -webkit-transform: translateY(-200px);
        transform: translateY(-200px)
      }
      
      @media(max-width:600px) {
        .heading.will-animate .heading-content__subtitle {
            -webkit-transform: translateY(-350px);
            transform: translateY(-350px)
        }
      }
      
      .heading.will-animate .heading-content__btns {
        -webkit-transform: translateY(100%);
        transform: translateY(100%)
      }
      
      .heading.will-animate .heading-content__btns .btn-wrap {
        -webkit-transform: scale(0);
        transform: scale(0)
      }
      
      .heading.will-animate .heading-content__cat {
        opacity: 0
      }
      
      .heading.will-animate .heading-bg {
        opacity: .1
      }
      
      .heading.will-animate .heading-titling {
        -webkit-transform: translateY(100%) scale(0);
        transform: translateY(100%) scale(0);
        opacity: 0
      }
      
      body.loaded .heading.will-animate .section-shadow {
        opacity: 1;
        -webkit-transition: 5s .3s ease-in-out;
        transition: 5s .3s ease-in-out
      }
      
      body.loaded .heading.will-animate .heading-content__title {
        -webkit-transform: translateY(0);
        transform: translateY(0)
      }
      
      body.loaded .heading.will-animate .heading-content__subtitle {
        -webkit-transform: translateY(0);
        transform: translateY(0)
      }
      
      body.loaded .heading.will-animate .heading-content__btns {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        -webkit-transition: 1s ease-in-out;
        transition: 1s ease-in-out;
        -webkit-transition-delay: .9s;
        transition-delay: .9s
      }
      
      body.loaded .heading.will-animate .heading-content__btns .btn-wrap {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transition: 1s ease-in-out;
        transition: 1s ease-in-out;
        -webkit-transition-delay: .9s;
        transition-delay: .9s
      }
      
      body.loaded .heading.will-animate .heading-content__cat {
        opacity: 1;
        background: url(/resources/img/tiger.png) no-repeat center;
        background-size: contain
      }
      
      body.loaded .heading.will-animate .heading-bg {
        opacity: 1;
        -webkit-transition: 3s ease-in-out;
        transition: 3s ease-in-out;
        -webkit-transition-delay: 1.3s;
        transition-delay: 1.3s
      }
      
      body.loaded .heading.will-animate .heading-titling {
        -webkit-transform: translateY(0) scale(1);
        transform: translateY(0) scale(1);
        opacity: 1;
        -webkit-transition: 7s ease-in-out;
        transition: 7s ease-in-out;
        -webkit-transition-delay: .5s;
        transition-delay: .5s
      }
      
      @-webkit-keyframes advTitle {
        0% {
            -webkit-transform: translateY(450px) scale(1.5) translateZ(300px);
            transform: translateY(450px) scale(1.5) translateZ(300px);
            letter-spacing: 10px;
            opacity: 0
        }
        40% {
            -webkit-transform: translateY(210px) scale(1) translateZ(0);
            transform: translateY(210px) scale(1) translateZ(0);
            letter-spacing: 0;
            opacity: 1
        }
        60% {
            -webkit-transform: translateY(210px) scale(1);
            transform: translateY(210px) scale(1);
            letter-spacing: 0;
            opacity: 1
        }
        100% {
            -webkit-transform: translateY(0) scale(1);
            transform: translateY(0) scale(1);
            letter-spacing: 0;
            opacity: 1
        }
      }
      
      @keyframes advTitle {
        0% {
            -webkit-transform: translateY(450px) scale(1.5) translateZ(300px);
            transform: translateY(450px) scale(1.5) translateZ(300px);
            letter-spacing: 10px;
            opacity: 0
        }
        40% {
            -webkit-transform: translateY(210px) scale(1) translateZ(0);
            transform: translateY(210px) scale(1) translateZ(0);
            letter-spacing: 0;
            opacity: 1
        }
        60% {
            -webkit-transform: translateY(210px) scale(1);
            transform: translateY(210px) scale(1);
            letter-spacing: 0;
            opacity: 1
        }
        100% {
            -webkit-transform: translateY(0) scale(1);
            transform: translateY(0) scale(1);
            letter-spacing: 0;
            opacity: 1
        }
      }
      
      @-webkit-keyframes bouncing {
        0% {
            -webkit-transform: scale(0);
            transform: scale(0)
        }
        30% {
            -webkit-transform: scale(1.1);
            transform: scale(1.1)
        }
        60% {
            -webkit-transform: scale(.9);
            transform: scale(.9)
        }
        85% {
            -webkit-transform: scale(1.07);
            transform: scale(1.07)
        }
        100% {
            -webkit-transform: scale(1);
            transform: scale(1)
        }
      }
      
      @keyframes bouncing {
        0% {
            -webkit-transform: scale(0);
            transform: scale(0)
        }
        30% {
            -webkit-transform: scale(1.1);
            transform: scale(1.1)
        }
        60% {
            -webkit-transform: scale(.9);
            transform: scale(.9)
        }
        85% {
            -webkit-transform: scale(1.07);
            transform: scale(1.07)
        }
        100% {
            -webkit-transform: scale(1);
            transform: scale(1)
        }
      }
      
      .marketing-video {
        background: #f9f9f9;
        text-align: center
      }
      
      .marketing-video [data-video_lang] {
        display: none
      }
      
      .marketing-video [data-video_lang].active {
        display: block
      }
      
      .marketing-video [data-video_lang].noactive {
        display: none
      }
      
      .marketing-video [data-video_lang] iframe {
        border: 6px solid #fff;
        border-radius: 3px;
        box-shadow: 1px 2px 3px silver
      }
      
      .marketing-video .list-lang {
        margin-top: 20px;
        margin-bottom: -10px;
        text-align: center
      }
      
      .marketing-video .list-lang>a {
        opacity: .65;
        margin-right: 25px
      }
      
      .marketing-video .list-lang>a.active {
        opacity: 1 !important
      }
      
      .marketing-video .block-copy {
        text-align: center;
        background: #fefefe;
        border: 1px solid #ededed;
        border-radius: 1px;
        width: 85%;
        max-width: 500px;
        min-width: 200px;
        margin: 0 auto;
        overflow: auto;
        padding: 15px 25px;
        color: #333;
        margin-bottom: 15px
      }
      
      .marketing-video .block-copy>.link {
        font-size: 14px
      }
      
      .marketing-video .block-copy>.copy {
        float: right;
        font-size: 13pt;
        cursor: pointer
      }
      
      .video-container {
        overflow: hidden;
        position: relative;
        width: 100%
      }
      
      .video-container::after {
        padding-top: 56.25%;
        display: block;
        content: ''
      }
      
      .video-container iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%
      }
      
      .modal {}
      
      .modal-close {
        position: absolute;
        top: 10px;
        right: 15px;
        font-size: 15pt
      }
      
      .modal-header {
        margin-top: -25px
      }
      
      @media(max-width:500px) {
        .fancybox-content {
            padding: 15px
        }
        .modal .modal-content {
            padding: 10px
        }
        .marketing-video .block-copy {
            width: 90%;
            padding: 10px 5px
        }
        .marketing-video .list-lang a {
            margin: 7px
        }
        .marketing-video .list-lang img {
            width: 30px;
            height: 30px
        }
      }
      
      [data-fancybox-close] {
        color: #333 !important
      }
      
      .spritespin {
        position: absolute !important;
        left: 0;
        right: 0;
        margin: 0 auto;
        top: 50%;
        margin-top: -300px;
        opacity: .3;
        transform: scale(.7)
      }
      
      .success,
      .notice__wrap {
        background: blue !important;
        z-index: 100000 !important
      }
      
      #particles-js {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;/*
        background: #000;*/
        z-index: -9
      }
      
      .full {
        width: 100%;
        height: 100vh;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        margin: 0 auto
      }
      
      .diamond-back {
        opacity: 1;
        width: 100%;
        height: 100vh;
        position: absolute;
        z-index: -1000;
        top: 0;
        left: 0;
        line-height: 100vh;
        transition: all 2s cubic-bezier(.43, .27, .43, .97), transform 1s cubic-bezier(.43, .27, .43, .97) .25s;
        text-align: center;
        overflow: hidden;/*
        background: url(/resources/img/mainbg.jpg) no-repeat center;*/
        background-size: 100% 100%
      }
      
      .diamond-back::after {
        content: "";
        width: 50%;
        height: 100%;
        top: 0;
        position: absolute;
        right: 0;
        transition: inherit;
        transform-origin: left center;
        opacity: .1;
        background-image: linear-gradient(to right, #000, transparent, transparent);
        display: none
      }
      
      .diamond-back div {
        vertical-align: middle;
        display: inline-block;
        position: relative;
        width: 60vw;
        height: 60vw;
        transition: inherit
      }
      
      .diamond-back div div {
        background-image: linear-gradient(-45deg, rgba(255, 255, 255, 0.15), transparent, transparent);
        transform-origin: 50%;
        position: absolute;
        width: 100%;
        height: 100%;
        transition: inherit;
        transform: rotate(-135deg);
        top: 0;
        left: 0
      }
      
      .diamond-back div div:last-of-type {
        top: auto;
        bottom: 0;
        transform: rotate(45deg)
      }
      
      .diamond-back div div::before,
      .diamond-back div div::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 90%;
        height: 90%;
        background-image: inherit;
        opacity: .5;
        transition: inherit;
        transition-delay: .25s
      }
      
      .diamond-back div div::after {
        width: 80%;
        height: 80%;
        opacity: .75
      }
      
      @media only screen and (orientation:landscape) {
        .diamond-back div {
            width: 40vw;
            height: 40vh
        }
        .diamond-back div div {
            height: 40vw
        }
        #loader .diamond-back>div {
            height: 10vh
        }
      }
      
      .section.advantages {
        padding-top: 70px;
        background: url(/resources/img/overlaybg.jpg) no-repeat top center;
        background-size: cover
      }
      
      @media screen and (min-width:768px) and (max-width:930px) {
        .examples-blocks .example .example-title {
            width: 100%;
            height: 175px
        }
      }
      
      @media screen and (min-width:768px) and (max-width:1175px) {
        .heading-content__btns.flex {
            display: flex;
            justify-content: flex-end;
            text-align: center
        }
        .heading-content__btns.flex.social_btns {
            justify-content: center
        }
        .heading-content__btns .btn-wrap a {
            padding: 0
        }
        .homefull {
            height: 80vh
        }
        .homefull .diamond-back {
            height: 100%
        }
        .header-wrap .def-btn {
            width: 120px;
            height: 44px;
            line-height: 44px
        }
        h1.global-title {
            font-size: 50px !important
        }
        h2.global-subtitle {
            margin-top: 0 !important;
            font-size: 30px !important
        }
        .participant_in .stats-top_subject {
            line-height: 22px
        }
        .advantages-list__subtitle.smalldown {
            margin-bottom: 0;
            padding-bottom: 30px
        }
      }
      
      @media screen and (min-width:320px) and (max-width:767px) {
        .diamond-back {
            height: 100%
        }
        .heading-content__cat {
            width: 100%;
            height: 370px;
            margin-top: 150px
        }
        h1.global-title {
            font-size: 40px !important;
            letter-spacing: 6px;
            line-height: 52px
        }
        h2.global-subtitle {
            font-size: 18px !important;
            letter-spacing: 6px;
            line-height: 27px
        }
        .heading-content h2.global-subtitle {
            margin-top: 0
        }
        .spritespin {
            width: 100% !important;
            height: 290px !important;
            margin-top: -180px
        }
        .section-content.heading-content.full {
            height: auto
        }
        .advantages-list__subtitle {
            line-height: 20px;
            margin-bottom: 0;
            padding-bottom: 40px
        }
        .advantages-list-block .advantage-title {
            line-height: 24px
        }
        .detcont .border-gradient {
            padding: 0
        }
        .detcont .border-gradient_content {
            padding: 0
        }
        .detcont .user-matrix_reinvest__nav-next {
            bottom: 12px
        }
        .detcont .btn-nav_prev,
        .detcont .btn-nav_next {
            top: 170px
        }
        .header-wrap {
            display: inline-block;
            text-align: center;
            margin-top: 10px
        }
        .header-logo {
            transform: none;
            display: inline-block;
            width: 100px;
            height: 80px
        }
        .heading-content__btns {
            justify-content: center;
            display: flex;
            width: 100%
        }
        .header-wrap .def-btn {
            padding: 0;
            text-align: center;
            min-width: 130px
        }
        .header-wrap .heading-content__btns .btn-wrap {
            margin-right: 10px
        }
        .heading-content__btns .btn-wrap:last-child {
            margin-right: 0
        }
        .heading-content__btns.social_btns {
            display: block;
            max-width: 200px;
            margin: 20px 0 0
        }
        .social_btns.heading-content__btns .btn-wrap {
            margin: 10px 0
        }
        .social_btns.heading-content__btns .btn-wrap .def-btn {
            padding: 0
        }
        .homestats-top {
            position: relative;
            transform: none;
            max-width: 100%;
            top: inherit;
            right: inherit;
            margin-top: 30px
        }
        .homestats-top .stats-top_sum {
            flex: 0 0 50%;
            max-width: 50%
        }
        .homestats-top .stats-top_subject {
            flex: 0 0 50%;
            max-width: 50%
        }
        .heading-content__subtitle {
            margin-bottom: 0
        }
        .participants .row {
            width: 100%;
            display: inline-block
        }
        .participants .row .col-md-3 {
            width: 100%;
            margin: 30px 0 0
        }
        .participants .row .col-md-3:first-child {
            margin-top: 0
        }
        .examples-blocks .example .example-title {
            width: 100%;
            height: 155px;
            padding: 0 !important
        }
      }
      
      @media screen and (min-width:320px) and (max-width:599px) {
        .detcont .btn-nav_page {
            min-width: inherit;
            padding: 7px 5px
        }
        .detcont .user-matrix_binary {
            position: relative;
            margin-top: 100px
        }
        .detcont .user-matrix__active {
            position: relative
        }
        .detcont .user-matrix_price {
            left: 50%;
            right: inherit;
            transform: translateX(-50%)
        }
        .detcont .user-matrix_ternary {
            margin-top: 100px;
            position: relative
        }
        .detcont .btn-nav_prev,
        .detcont .btn-nav_next {
            top: 260px
        }
        .detcont .user-matrix_reinvest {
            right: 110px;
            bottom: inherit;
            top: -60px
        }
        .detcont .user-matrix_partners {
            bottom: inherit;
            top: -60px
        }
        .detcont .user-matrix_reinvest__nav-next {
            bottom: 7px
        }
        .user-transactions.detuser-transactions {
            overflow-x: scroll;
            white-space: nowrap
        }
        .detuser-transactions .user-transactions__head {
            flex-wrap: nowrap;
            width: 580px;
            display: inline-block !important
        }
        .detuser-transactions .user-transactions__head .col-1.icon {
            width: 85px;
            float: left
        }
        .detuser-transactions .user-transactions__head .col-2.date {
            padding-left: 0;
            width: 120px;
            float: left
        }
        .detuser-transactions .user-transactions__head .col-2.user-id {
            width: 80px;
            float: left;
            text-align: left !important
        }
        .detuser-transactions .user-transactions__head .col-4.user-address {
            width: 170px;
            float: left
        }
        .detuser-transactions .user-transactions__head .col-3.profit {
            width: 120px;
            float: left
        }
        .detuser-transactions .user-transactions__head .col-1,
        .detuser-transactions .user-transactions__head .col-2,
        .detuser-transactions .user-transactions__head .col-3,
        .detuser-transactions .user-transactions__head .col-4,
        .detuser-transactions .user-transactions__head .col-5 {
            max-width: inherit;
            flex: auto
        }
        .detuser-transactions .user-transactions__body {
            overflow: visible;
            white-space: nowrap
        }
        .detuser-transactions .user-transactions__body .row {
            flex-wrap: nowrap;
            width: 580px;
            display: inline-block;
            text-align: left !important;
            float: left
        }
        .detuser-transactions .user-transactions__body>div>div {
            max-width: inherit;
            flex: auto;
            padding: 0 15px;
            font-size: 14px;
            white-space: nowrap
        }
        .detuser-transactions .user-transactions__body .row .col-1.icon {
            width: 85px;
            float: left
        }
        .detuser-transactions .user-transactions__body .row .col-2.user-id {
            width: 80px;
            float: left;
            text-align: left !important
        }
        .detuser-transactions .user-transactions__body .row .col-2.date {
            padding-left: 0;
            width: 120px;
            float: left
        }
        .detuser-transactions .user-transactions__body .row .col-4.user-address {
            width: 170px;
            float: left
        }
        .detuser-transactions .user-transactions__body .row .col-3.profit {
            width: 120px;
            float: left
        }
        .detuser-transactions .user-transactions_load {
            width: 100%;
            float: left
        }
      }
      
      @media screen and (min-width:481px) and (max-width:599px) {
        .spritespin {
            height: 390px !important;
            margin-top: -230px
        }
      }
      
      @media screen and (min-width:600px) and (max-width:767px) {
        .spritespin {
            height: 600px !important;
            margin-top: -340px
        }
        .detuser-transactions .user-transactions__body>div>div {
            font-size: 14px
        }
      }
      
      .buy__dots_xGold {
        min-height: 130px;
        display: flex;
        flex-flow: column;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center
      }
      
      .buy__dots_xGold-1,
      .buy__dots_xGold-2,
      .buy__dots_xGold-3,
      .buy__dots_xGold-4 {
        width: 100%;
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: center
      }
      
      .buy__dot_xGold:last-child {
        margin-right: 0 !important
      }
      
      .buy__dot_xGold:first-child {
        margin-left: 0 !important
      }
      
      .buy__dots_xGold-1 .buy__dot_xGold {
        position: relative;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        border: 1px solid rgb(255 255 255/64%);
        margin: 15px 13px 0
      }
      
      .buy__dots_xGold-2 .buy__dot_xGold {
        position: relative;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: 1px solid rgb(255 255 255/64%);
        margin: 10px 5.5px 0
      }
      
      .buy__dots_xGold-3 .buy__dot_xGold {
        position: relative;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        border: 1px solid rgb(255 255 255/64%);
        margin: 10px 2px 0
      }
      
      .buy__dots_xGold-4 .buy__dot_xGold {
        position: relative;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        border: 1px solid rgb(255 255 255/64%);
        margin-top: 10px
      }
      
      .buy__dots_xGold-4 .buy__dot_xGold:not(:last-child) {
        margin-right: 1px
      }
      
      .dot-xGold__overflow-leading {
        background-color: #ff4406
      }
      
      .dot-xGold__overflow-up {
        background-color: #fceabe
      }
      
      .dot-xGold__overflow-down {
        background-color: #e1b62d
      }
      
      .dot-xGold__personal {
        background-color: #F0B90B
      }
      
      .xGold-item {
        width: 100%;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        background: #1e1c2f;
        border-bottom-right-radius: 8px;
        border-bottom-left-radius: 8px;
        padding: 10px 2.5px 5px;
        margin-top: -5px;
        min-height: 140px
      }
      
      .buy_level_n-available {
        color: #fff;
        opacity: .3
      }
      
      .upgrade-level_available {
        cursor: pointer;
        color: #ffa243
      }
      
      .upgrade-level_available i {
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%
      }
      
      .upgrade-level_available i span {
        font-size: 16px;
        line-height: 14px;
        font-weight: 700;
        font-family: neuronangled;
        margin-top: 10px
      }
      
      .error_btn {
        margin-top: 20px;
        width: 30%
      }
      
      .buy_level_dots {
        width: 100%;
        display: flex;
        flex-flow: column;
        justify-content: space-around;
        align-items: center;
        font-size: 25px;
        margin-top: 10px
      }
      
      .upgrage__dots_xGold {
        width: 100%;
        max-width: 485px;
        margin-left: auto;
        margin-right: auto;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center
      }
      
      .upgrage__dot_xGold-lvl-1 {
        width: 80px;
        height: 80px
      }
      
      .upgrage__dot_xGold-lvl-2 {
        width: 70px;
        height: 70px
      }
      
      .upgrage__dot_xGold-lvl-3 {
        position: relative;
        width: 30px;
        height: 30px
      }
      
      .upgrage__dot_xGold-lvl-4 {
        position: relative;
        width: 20px;
        height: 20px
      }
      
      .upgrage__dot_xGold {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        border-radius: 50%;
        border: 1px solid #8395af;
        background-color: #16386a;
        margin-top: 30px;
        position: relative
      }
      
      .upgrage__dot_xGold-lvl-1:before,
      .upgrage__dot_xGold-lvl-2:before,
      .upgrage__dot_xGold-lvl-3:before,
      .upgrage__dot_xGold-lvl-4:before {
        content: '';
        position: absolute;
        height: 70px;
        bottom: 85%;
        left: 38px;
        border-left: 1px dashed #6d678f
      }
      
      .upgrage__dot_xGold-lvl-2:before {
        height: 50px;
        margin-bottom: 3px
      }
      
      .upgrage__dot_xGold-lvl-3:before {
        height: 40px;
        margin-bottom: 3px
      }
      
      .upgrage__dot_xGold-lvl-4:before {
        height: 30px;
        margin-bottom: 3px
      }
      
      .upgrage__dot_xGold-lvl-3:nth-of-type(even),
      .upgrage__dot_xGold-lvl-3:nth-of-type(odd) {
        z-index: 1
      }
      
      .upgrage__dot_xGold-lvl-2:nth-of-type(even),
      .upgrage__dot_xGold-lvl-2:nth-of-type(odd) {
        z-index: 2
      }
      
      .upgrage__dot_xGold-lvl-1:nth-of-type(1),
      .upgrage__dot_xGold-lvl-1:nth-of-type(2) {
        z-index: 3;
        margin-top: 50px
      }
      
      .upgrage__dot_xGold-lvl-1:nth-of-type(1):before {
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        margin-left: 50px
      }
      
      .upgrage__dot_xGold-lvl-1:nth-of-type(2):before {
        -webkit-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        transform: rotate(-45deg);
        margin-left: -50px
      }
      
      .upgrage__dot_xGold-lvl-2:nth-of-type(odd):before {
        -webkit-transform: rotate(40deg);
        -ms-transform: rotate(40deg);
        transform: rotate(40deg);
        margin-left: 24px
      }
      
      .upgrage__dot_xGold-lvl-2:nth-of-type(2n):before {
        -webkit-transform: rotate(-40deg);
        -ms-transform: rotate(-40deg);
        transform: rotate(-40deg);
        margin-left: -36px
      }
      
      .upgrage__dot_xGold-lvl-3:nth-of-type(odd):before {
        -webkit-transform: rotate(35deg);
        -ms-transform: rotate(35deg);
        transform: rotate(35deg);
        margin-left: -10px
      }
      
      .upgrage__dot_xGold-lvl-3:nth-of-type(even):before {
        -webkit-transform: rotate(-35deg);
        -ms-transform: rotate(-35deg);
        transform: rotate(-35deg);
        margin-left: -40px
      }
      
      .upgrage__dot_xGold-lvl-4:nth-of-type(odd):before {
        -webkit-transform: rotate(20deg);
        -ms-transform: rotate(20deg);
        transform: rotate(20deg);
        margin-left: -25px
      }
      
      .upgrage__dot_xGold-lvl-4:nth-of-type(even):before {
        -webkit-transform: rotate(-20deg);
        -ms-transform: rotate(-20deg);
        transform: rotate(-20deg);
        margin-left: -35px
      }
      
      .upgrade__dots_xGold_area-1,
      .upgrade__dots_xGold_area-2,
      .upgrade__dots_xGold_area-3,
      .upgrade__dots_xGold_area-4 {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center
      }
      
      .upgrade__dots_xGold_area-1 a:nth-of-type(1) {
        margin-right: 21.5%
      }
      
      .upgrade__dots_xGold_area-1 a:nth-of-type(2) {
        margin-left: 21.5%
      }
      
      .upgrade__dots_xGold_area-2 a:nth-of-type(1),
      .upgrade__dots_xGold_area-2 a:nth-of-type(3) {
        margin-right: 5%
      }
      
      .upgrade__dots_xGold_area-2 a:nth-of-type(2),
      .upgrade__dots_xGold_area-2 a:nth-of-type(4) {
        margin-left: 5%
      }
      
      .upgrade__dots_xGold_area-2 a:nth-of-type(2) {
        margin-right: 10%
      }
      
      .upgrade__dots_xGold_area-2 a:nth-of-type(3) {
        margin-left: 10%
      }
      
      .upgrade__dots_xGold_area-3 a:nth-of-type(1) {
        margin-right: 3%;
        margin-left: -2%
      }
      
      .upgrade__dots_xGold_area-3 a:nth-of-type(2),
      .upgrade__dots_xGold_area-3 a:nth-of-type(6) {
        margin-left: 3%;
        margin-right: 3%
      }
      
      .upgrade__dots_xGold_area-3 a:nth-of-type(3),
      .upgrade__dots_xGold_area-3 a:nth-of-type(7) {
        margin-left: 3%;
        margin-right: 3%
      }
      
      .upgrade__dots_xGold_area-3 a:nth-of-type(4) {
        margin-right: 8%;
        margin-left: 3%
      }
      
      .upgrade__dots_xGold_area-3 a:nth-of-type(5) {
        margin-left: 8%;
        margin-right: 3%
      }
      
      .upgrade__dots_xGold_area-3 a:nth-of-type(8) {
        margin-left: 3%;
        margin-right: -2%
      }
      
      .upgrade__dots_xGold_area-4 a:nth-of-type(1) {
        margin-right: 1%;
        margin-left: -5%
      }
      
      .upgrade__dots_xGold_area-4 a:nth-of-type(8) {
        margin-left: 1%;
        margin-right: 6%
      }
      
      .upgrade__dots_xGold_area-4 a:nth-of-type(9) {
        margin-right: 1%;
        margin-left: 6%
      }
      
      .upgrade__dots_xGold_area-4 a:nth-of-type(16) {
        margin-left: 1%;
        margin-right: -5%
      }
      
      .upgrade__dots_xGold_area-4 a:nth-of-type(2),
      .upgrade__dots_xGold_area-4 a:nth-of-type(10) {
        margin-right: 1%;
        margin-left: 1%
      }
      
      .upgrade__dots_xGold_area-4 a:nth-of-type(3),
      .upgrade__dots_xGold_area-4 a:nth-of-type(11) {
        margin-left: 1%;
        margin-right: 1%
      }
      
      .upgrade__dots_xGold_area-4 a:nth-of-type(4),
      .upgrade__dots_xGold_area-4 a:nth-of-type(12) {
        margin-right: 1%;
        margin-left: 1%
      }
      
      .upgrade__dots_xGold_area-4 a:nth-of-type(5),
      .upgrade__dots_xGold_area-4 a:nth-of-type(13) {
        margin-left: 1%;
        margin-right: 1%
      }
      
      .upgrade__dots_xGold_area-4 a:nth-of-type(6),
      .upgrade__dots_xGold_area-4 a:nth-of-type(14) {
        margin-right: 1%;
        margin-left: 1%
      }
      
      .upgrade__dots_xGold_area-4 a:nth-of-type(7),
      .upgrade__dots_xGold_area-4 a:nth-of-type(15) {
        margin-left: 1%;
        margin-right: 1%
      }
      
      .upgrade__dots_xGold_area-3 {}
      
      .upgrade__dots_xGold_area-4 {}
      
      .upgrage__dot_xGold_selected {
        background-color: #00b0c2;
        border-color: #00b0c2
      }
      
      .upgrage__dot_xGold-up {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        position: absolute;
        top: 0;
        right: -10px;
        width: 32px;
        height: 32px;
        -webkit-transition: .3s;
        -o-transition: .3s;
        transition: .3s;
        background-color: #f01b28;
        border-radius: 50%;
        cursor: pointer
      }
      
      .upgrage__dot_xGold-up:hover {
        -webkit-transform: scale(.8);
        -ms-transform: scale(.8);
        transform: scale(.8)
      }
      
      .upgrage__dot_xGold-count {
        text-align: center
      }
      
      .upgrage__dot_xGold-count .icon {
        margin-bottom: 3px
      }
      
      .upgrage__dot_xGold-count var {
        font-size: 20px;
        font-weight: 700;
        color: #23203a;
        display: block
      }
      
      .upgrage__dot_xGold-lvl-2 .upgrage__dot_xGold-count i {
        margin-bottom: 2px
      }
      
      .upgrage__dot_xGold-lvl-2 .upgrage__dot_xGold-count var {
        font-size: 15px;
        font-weight: 700;
        color: #23203a;
        display: block
      }
      
      .upgrage__dot_xGold-lvl-3 .upgrage__dot_xGold-count i,
      .upgrage__dot_xGold-lvl-4 .upgrage__dot_xGold-count i {
        margin-bottom: 0
      }
      
      .reg_mob_app_container {
        background-color: #23203a;
        width: 100%;
        border-radius: 6px;
        margin: 20px 0
      }
      
      @media(min-width:501px) {
        .reg_mob_app_container {
            display: flex;
            flex-flow: row;
            justify-content: space-around;
            align-items: center
        }
      }
      
      @media(max-width:500px) {
        .reg_mob_app_container {
            display: flex;
            flex-flow: column;
            justify-content: space-around;
            align-items: center
        }
      }
      
      .reg-app-os a:first-child {
        height: 40px;
        width: 50%;
        border-radius: 7px 0 0 7px;
        border: none;
        background-color: #552e7b;
        font-size: 16px;
        color: #fff;
        cursor: pointer;
        transition: .2s linear;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        border-right: 1px solid #ffff
      }
      
      .reg-app-os a:last-child {
        height: 40px;
        width: 50%;
        border-radius: 0 7px 7px 0;
        border: none;
        background-color: #552e7b;
        font-size: 16px;
        color: #fff;
        cursor: pointer;
        transition: .2s linear;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        text-decoration: none
      }
      
      .reg-app-os a:hover {
        background: #fff;
        color: #552e7b
      }
      
      .btn-reg-video {
        height: 40px;
        width: 100%;
        border-radius: 7px;
        border: none;
        background-color: #552e7b;
        font-size: 16px;
        color: #fff;
        cursor: pointer;
        margin-top: 8px;
        transition: .2s linear;
        display: flex;
        flex-flow: row;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        display: none
      }
      
      .btn-reg-video i {
        margin-right: 10px
      }
      
      .btn-reg-video:hover {
        background: #fff;
        color: #552e7b
      }
      
      .reg_mob_app {
        display: flex;
        flex-flow: row;
        justify-content: center;
        align-items: center
      }
      
      .reg_mob_app img {
        width: 50px;
        height: 50px;
        margin-bottom: 12px;
        background-color: #23203a
      }
      
      .reg_mob_app {
        display: flex;
        flex-flow: column;
        justify-content: space-around;
        align-items: center;
        margin: 0 20px;
        width: 150px;
        height: 175px
      }
      
      .reg_title_app {
        color: #fff;
        font-size: 20px
      }
      
      .reg-app-os {
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: center;
        width: 100%
      }
      
      .view_guest_matrix {
        position: absolute;
        width: 125px;
        left: 50%;
        right: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: -25px;
        background: #1e1c2f;
        border: 1px solid #333;
        border-radius: 8px;
        padding: 5px 10px;
        color: #ffa243;
        z-index: 2
      }
      
      .view_guest_matrix i {
        margin-right: 10px;
        margin-top: -2.5px
      }
      
      .view_guest_matrix a {
        color: #ffa243;
        border: 0
      }
      
      @media screen and (max-width:767px) {
        .buy__item {
            width: -webkit-calc(100%/4 - 27px);
            width: calc(100%/4 - 27px)
        }
      }
      
      @media screen and (max-width:590px) {
        .buy__item {
            width: -webkit-calc(100%/2 - 27px);
            width: calc(100%/2 - 27px)
        }
        .binary,
        .ternary {
            width: 45% !important
        }
        .row.datarow>.col {
            padding: 0 8px
        }
      }
      
      .case {
        position: relative;
        width: 1130px;
        padding-left: 15px;
        padding-right: 15px;
        margin: 0 auto
      }
      
      .row-r {
        -webkit-box-orient: horizontal;
        -webkit-box-direction: reverse;
        -webkit-flex-direction: row-reverse;
        -ms-flex-direction: row-reverse;
        flex-direction: row-reverse
      }
      
      .col-r {
        -webkit-box-orient: vertical;
        -webkit-box-direction: reverse;
        -webkit-flex-direction: column-reverse;
        -ms-flex-direction: column-reverse;
        flex-direction: column-reverse
      }
      
      .row.left,
      .col.left {
        -webkit-box-pack: start;
        -webkit-justify-content: flex-start;
        -ms-flex-pack: start;
        justify-content: flex-start
      }
      
      .row.right,
      .col.right {
        -webkit-box-pack: end;
        -webkit-justify-content: flex-end;
        -ms-flex-pack: end;
        justify-content: flex-end
      }
      
      .row.mid,
      .col.mid {
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center
      }
      
      .row.between,
      .col.between {
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between
      }
      
      .row.around,
      .col.around {
        -webkit-justify-content: space-around;
        -ms-flex-pack: distribute;
        justify-content: space-around
      }
      
      .no-wrap {
        -webkit-flex-wrap: nowrap;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap
      }
      
      .sale-overflow-up__dot_xGold {
        background: #fceabe;
        background: linear-gradient(180deg, rgba(252, 234, 190, 1) 0%, rgba(255, 247, 227, 1) 100%);
        border-color: #fceabe
      }
      
      .sale-overflow-down__dot_xGold {
        background: #efae1e !important;
        background: linear-gradient(0deg, #efae1e 0%, #ffd16b 100%);
        border-color: #efae1e !important
      }
      
      .i-top {
        -webkit-box-align: start;
        -webkit-align-items: flex-start;
        -ms-flex-align: start;
        align-items: flex-start
      }
      
      .i-bottom {
        -webkit-box-align: end;
        -webkit-align-items: flex-end;
        -ms-flex-align: end;
        align-items: flex-end
      }
      
      .i-mid {
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center
      }
      
      .i-baseline {
        -webkit-box-align: baseline;
        -webkit-align-items: baseline;
        -ms-flex-align: baseline;
        align-items: baseline
      }
      
      .i-strech {
        -webkit-box-align: stretch;
        -webkit-align-items: stretch;
        -ms-flex-align: stretch;
        align-items: stretch
      }
      
      var {
        font-style: normal
      }
      
      .input__wrap {
        position: relative
      }
      
      .input__area {
        display: block;
        font-size: 16px;
        font-family: neuronangled, sans-serif;
        background: #fff;
        width: 100%;
        color: #fff;
        border: 1px solid #fff
      }
      
      .input__area::-webkit-input-placeholder {
        opacity: 1;
        color: #6d678f
      }
      
      .input__area::-moz-placeholder {
        opacity: 1;
        color: #6d678f
      }
      
      .input__area:-ms-input-placeholder {
        opacity: 1;
        color: #6d678f
      }
      
      .input__area::-ms-input-placeholder {
        opacity: 1;
        color: #6d678f
      }
      
      .input__area::placeholder {
        opacity: 1;
        color: #6d678f
      }
      
      .input__icon {
        position: absolute;
        right: 20px;
        top: 50%;
        font-size: 0;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%)
      }
      
      .input__icon .icon {
        -webkit-transition: .3s;
        -o-transition: .3s;
        transition: .3s;
        font-size: 0
      }
      
      .input__icon .icon:nth-of-type(2) {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0
      }
      
      .input__icon:hover .icon:nth-of-type(1) {
        opacity: 0
      }
      
      .input__icon:hover .icon:nth-of-type(2) {
        opacity: 1
      }
      
      .input__select {
        z-index: 1;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        width: 81px
      }
      
      .input__select .select__block {
        border: 2px solid #656375;
        background-color: #393554;
        border-radius: 0 40px 40px 0;
        z-index: 1;
        position: relative;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        height: 48px;
        padding-left: 20px
      }
      
      .input__select .select__list {
        z-index: -1;
        padding-top: 5px;
        padding-bottom: 5px;
        background-color: #393554;
        margin-top: -20px;
        padding-top: 25px;
        border: 2px solid #656375;
        border-radius: 0 0 7px 7px
      }
      
      .input__select .select__item {
        padding: 5px 20px
      }
      
      .input__select.select_open .select__block {
        border-radius: 0 40px 40px 0
      }
      
      .input_md .input__area {
        height: 48px;
        text-align: center
      }
      
      .input_border-gray .input__area {
        border: 2px solid #656375;
        background-color: #1e1c2f
      }
      
      .input_color-violet .input__area {
        color: #6d678f
      }
      
      .input_disabled .input__area {
        border-color: #37344c
      }
      
      .input_radius .input__area {
        border-radius: 50px
      }
      
      .input_fz-sm .input__area {
        font-size: 14px
      }
      
      .input_padding-more .input__area {
        padding-left: 17px;
        padding-right: 17px
      }
      
      .input_error .input__area {
        border-color: red
      }
      
      .textarea {
        position: relative;
        width: 100%
      }
      
      .textarea__placeholder {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        -webkit-transition: .3s;
        -o-transition: .3s;
        transition: .3s;
        cursor: text
      }
      
      .textarea__area {
        display: block;
        font-size: 16px;
        font-family: neuronangled, sans-serif;
        background: #fff;
        width: 100%;
        resize: none;
        border: 1px solid #fff
      }
      
      .textarea_md .textarea__area {
        height: 193px;
        padding: 15px 20px
      }
      
      .textarea_border-gray .textarea__area {
        color: #fff;
        border: 2px solid #656375;
        background-color: #1e1c2f
      }
      
      .textarea_radius .textarea__area {
        border-radius: 27px
      }
      
      .textarea_error .textarea__area {
        border-color: red
      }
      
      .checkbox {
        position: relative
      }
      
      .checkbox__input {
        display: none
      }
      
      .checkbox__toggler {
        position: relative
      }
      
      .checkbox__toggler:before,
      .checkbox__toggler:after {
        content: '';
        position: absolute
      }
      
      .checkbox__toggler:before {
        z-index: 2
      }
      
      .checkbox__toggler:after {
        z-index: 1
      }
      
      .radio {
        position: relative
      }
      
      .radio__input {
        display: none
      }
      
      .radio__toggler {
        position: relative
      }
      
      .radio__toggler:before,
      .radio__toggler:after {
        content: '';
        position: absolute
      }
      
      .radio__toggler:before {
        z-index: 2
      }
      
      .radio__toggler:after {
        z-index: 1
      }
      
      .btn {
        position: relative;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        font-size: 16px;
        font-family: neuronangled, sans-serif;
        cursor: pointer;
        text-align: center;
        -webkit-transition: .3s;
        -o-transition: .3s;
        transition: .3s;
        font-weight: 700;
        background-color: transparent;
        border-bottom: none
      }
      
      .btn_md {
        height: 48px
      }
      
      .btn_border-gray {
        border: 2px solid rgb(251 251 251/48%);
        background-color: #16386a
      }
      
      .btn_bg-pink {
        color: #fff;
        background-color: #d03a94
      }
      
      .btn_bg-violet {
        color: #fff;
        background-color: #6149e1
      }
      
      .btn_bg-violet-light {
        color: #fff;
        background-color: #6149e1
      }
      
      .btn_bg-gray {
        color: rgba(255, 255, 255, .5);
        background-color: #37344c
      }
      
      .btn_bg-violet-light {
        color: #fff;
        background-color: #5c297f
      }
      
      .btn_bg-transparent {
        color: #827ea0;
        background-color: transparent;
        border: 2px solid #827ea0
      }
      
      .btn_bg-green {
        background-color: #619a1e
      }
      
      .btn_fz-lg {
        font-size: 24px
      }
      
      .btn_radius {
        border-radius: 50px
      }
      
      .btn u {
        top: -1px;
        font-size: 0;
        position: relative;
        margin-right: 9px
      }
      
      .btn u .icon {
        -webkit-transition: .3s;
        -o-transition: .3s;
        transition: .3s
      }
      
      .btn u .icon:nth-of-type(2) {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0
      }
      
      .btn_hover-bg-gray:hover {
        color: #6d678f;
        background-color: #fff;
        border-color: #fff
      }
      
      .btn_hover-bg-gray:hover u .icon:nth-of-type(1) {
        opacity: 0
      }
      
      .btn_hover-bg-gray:hover u .icon:nth-of-type(2) {
        opacity: 1
      }
      
      .input input,
      .textarea textarea {
        -webkit-transition: .3s;
        -o-transition: .3s;
        transition: .3s
      }
      
      input,
      .btn,
      .slick-slide,
      textarea {
        outline: none !important
      }
      
      .tal {
        text-align: left
      }
      
      .tac {
        text-align: center
      }
      
      .tar {
        text-align: right
      }
      
      .mid {
        margin-left: auto;
        margin-right: auto
      }
      
      .main-wrap {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        min-height: 100vh;
        background: url(/resources/img/bg-min.jpg) no-repeat center top;
        background-size: auto;
        background-color: #131315
      }
      
      .icon {
        position: relative;
        display: inline-block;
        vertical-align: middle;
        font-size: 0;
        background-repeat: no-repeat;
        background-position: center
      }
      
      .icon-eth {
        width: 15px;
        height: 16px;
        filter: brightness(.75);
        background-image: url(/resources/img/tron-logo-grey.svg)
      }
      
      .icon-eth.icon_md {
        width: 30px;
        height: 35px
      }
      
      .icon-eth.icon_sm {
        width: 14px;
        height: 16px
      }
      
      .icon-eth.icon_xs {
        width: 8px;
        height: 10px
      }
      
      .icon-eye {
        width: 24px;
        height: 24px;
        background-image: url(/resources/img/eye.svg)
      }
      
      .icon-switch-gray,
      .icon-switch-green,
      .icon-switch-red {
        width: 24px;
        height: 26px
      }
      
      .icon-switch-gray {
        background-image: url(/resources/img/switch-gray.svg)
      }
      
      .icon-switch-green {
        background-image: url(/resources/img/switch-green.svg)
      }
      
      .icon-switch-red {
        background-image: url(/resources/img/switch-red.svg)
      }
      
      .icon-alert-white,
      .icon-alert-gray,
      .icon-alert-yellow {
        width: 26px;
        height: 26px
      }
      
      .icon-alert-white {
        background-image: url(/resources/img/alert-white.svg)
      }
      
      .icon-alert-gray {
        background-image: url(/resources/img/alert-gray.svg)
      }
      
      .icon-alert-yellow {
        background-image: url(/resources/img/alert-yellow.svg)
      }
      
      .icon-partners-blue.icon_md,
      .icon-partners-gray.icon_md {
        width: 34px;
        height: 34px
      }
      
      .icon-partners-blue.icon_xs,
      .icon-partners-gray.icon_xs {
        width: 15px;
        height: 15px
      }
      
      .icon-partners-blue.icon_sm,
      .icon-partners-gray.icon_sm {
        width: 22px;
        height: 22px
      }
      
      .icon-partners-blue {
        background-image: url(/resources/img/partners-blue.svg)
      }
      
      .icon-partners-gray {
        background-image: url(/resources/img/partners-gray.svg)
      }
      
      .icon-telegram-white,
      .icon-telegram-gray {
        width: 19px;
        height: 19px
      }
      
      .icon-telegram-white {
        background-image: url(/resources/img/telegram-white.svg)
      }
      
      .icon-telegram-gray {
        background-image: url(/resources/img/telegram-gray.svg)
      }
      
      .icon-copy-white.icon_md,
      .icon-copy-gray.icon_md {
        width: 18px;
        height: 18px
      }
      
      .icon-copy-white.icon_xs,
      .icon-copy-gray.icon_xs {
        width: 14px;
        height: 14px;
        background-size: cover
      }
      
      .icon-copy-white {
        background-image: url(/resources/img/copy-white.svg)
      }
      
      .icon-copy-gray {
        background-image: url(/resources/img/copy-gray.svg)
      }
      
      .icon-link-white.icon_md,
      .icon-link-gray.icon_md {
        font-size: 18px
      }
      
      .icon-link-white.icon_xs,
      .icon-link-gray.icon_xs {
        font-size: 14px;
        background-size: cover
      }
      
      .icon-link-white {
        color: #ffff
      }
      
      .icon-link-gray {
        color: #6f6792
      }
      
      .icon-cart {
        width: 20px;
        height: 18px;
        background-image: url(/resources/img/cart.svg)
      }
      
      .icon-cart-yellow {
        width: 16px;
        height: 16px;
        background-image: url(/resources/img/cart-yellow.svg)
      }
      
      .icon-cart-buy {
        width: 35px;
        height: 35px;
        background-image: url(/resources/img/cart-cart.svg)
      }
      
      .icon-reinvest {
        background-image: url(/resources/img/reinvest.svg)
      }
      
      .icon-reinvest.icon_xs {
        width: 15px;
        height: 15px
      }
      
      .icon-reinvest.icon_sm {
        width: 22px;
        height: 22px
      }
      
      .icon-reinvest-green {
        background-image: url(/resources/img/reinvest-green.svg);
        width: 22px;
        height: 22px
      }
      
      .icon-reinvest-gray {
        width: 26px;
        height: 24px;
        background-image: url(/resources/img/reinvest-gray.svg)
      }
      
      .icon-chevron-white,
      .icon-chevron-gray {
        position: relative
      }
      
      .icon-chevron-white:before,
      .icon-chevron-white:after,
      .icon-chevron-gray:before,
      .icon-chevron-gray:after {
        position: absolute;
        content: '';
        width: 10px;
        height: 3px;
        border-radius: 50px;
        background-color: #fff;
        right: 0;
        top: 50%;
        margin-top: -2px;
        -webkit-transition: .3s;
        -o-transition: .3s;
        transition: .3s
      }
      
      .icon-chevron-white:before,
      .icon-chevron-gray:before {
        -webkit-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        transform: rotate(-45deg)
      }
      
      .icon-chevron-white:after,
      .icon-chevron-gray:after {
        margin-right: 6px;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg)
      }
      
      .icon-chevron-white.icon_md,
      .icon-chevron-gray.icon_md {
        width: 17px
      }
      
      .icon-chevron-white.icon_md:before,
      .icon-chevron-white.icon_md:after,
      .icon-chevron-gray.icon_md:before,
      .icon-chevron-gray.icon_md:after {
        width: 10px;
        height: 3px
      }
      
      .icon-chevron-white.icon_xs,
      .icon-chevron-gray.icon_xs {
        width: 12px
      }
      
      .icon-chevron-white.icon_xs:before,
      .icon-chevron-white.icon_xs:after,
      .icon-chevron-gray.icon_xs:before,
      .icon-chevron-gray.icon_xs:after {
        width: 7px;
        height: 2px
      }
      
      .icon-chevron-white.icon_xs:after,
      .icon-chevron-gray.icon_xs:after {
        margin-right: 4px
      }
      
      .icon-chevron-white.icon_xxs,
      .icon-chevron-gray.icon_xxs {
        width: 9px
      }
      
      .icon-chevron-white.icon_xxs:before,
      .icon-chevron-white.icon_xxs:after,
      .icon-chevron-gray.icon_xxs:before,
      .icon-chevron-gray.icon_xxs:after {
        width: 6px;
        height: 1px
      }
      
      .icon-chevron-white.icon_xxs:after,
      .icon-chevron-gray.icon_xxs:after {
        margin-right: 4px
      }
      
      .icon-chevron-gray:before,
      .icon-chevron-gray:after {
        background-color: #656375
      }
      
      .icon-chevron-gray.left {
        -webkit-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        transform: rotate(90deg);
        top: 8px;
        margin-right: 6px
      }
      
      .icon-chevron-gray.right {
        -webkit-transform: rotate(-90deg);
        -ms-transform: rotate(-90deg);
        transform: rotate(-90deg);
        top: -8px;
        margin-left: 6px
      }
      
      .icon-chevron-gray.top {
        -webkit-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        transform: rotate(180deg)
      }
      
      .icon-wallet-in {
        width: 24px;
        height: 24px;
        background-image: url(/resources/img/wallet-in.svg)
      }
      
      .icon-wallet-out {
        width: 24px;
        height: 24px;
        background-image: url(/resources/img/wallet-out.svg)
      }
      
      .icon-gift {
        width: 22px;
        height: 22px;
        background-image: url(/resources/img/gift.svg)
      }
      
      .icon-gift.icon_sm {
        width: 20px;
        height: 20px
      }
      
      .icon-question-gray,
      .icon-question-white {
        width: 24px;
        height: 24px
      }
      
      .icon-question-white {
        background-image: url(/resources/img/question-white.png)
      }
      
      .icon-question-gray {
        background-image: url(/resources/img/question-gray.png)
      }
      
      .icon-eth-color {
        width: 12px;
        height: 14px;
        background-image: url(/resources/img/tron-logo-color.svg)
      }
      
      .icon-arrow-top-gray {
        font-size: 20px;
        color: #a4b1c5
      }
      
      .icon-wallet {
        width: 32px;
        height: 24px;
        background-image: url(/resources/img/wallet.svg)
      }
      
      .icon-wallet-green {
        width: 16px;
        height: 12px;
        background-image: url(/resources/img/wallet-green.png)
      }
      
      .icon-minus {
        font-size: 20px;
        color: #69696a
      }
      
      .icon-minus.icon_xs {
        width: 16px;
        height: 16px;
        background-size: cover
      }
      
      .icon-arrow-top-white {
        font-size: 15px;
        color: #ffff
      }
      
      .icon-arrow-top-white.icon-xs {
        font-size: 10px;
        background-size: cover
      }
      
      .icon-user {
        font-size: 15px;
        color: #23203a
      }
      
      .icon-user-lvl-2 {
        font-size: 13px;
        color: #23203a
      }
      
      .icon-user-lvl-3 {
        font-size: 11px;
        color: #23203a
      }
      
      .icon-user-lvl-4 {
        font-size: 9px;
        color: #23203a
      }
      
      .icon-edit-gray,
      .icon-edit-white {
        width: 16px;
        height: 16px
      }
      
      .icon-edit-gray {
        background-image: url(/resources/img/edit-gray.png)
      }
      
      .icon-edit-white {
        background-image: url(/resources/img/edit-white.png)
      }
      
      .icon-bell {
        width: 30px;
        height: 32px;
        background-image: url(/resources/img/bell.png)
      }
      
      .icon-user-add {
        width: 16px;
        height: 16px;
        background-image: url(/resources/img/user-add.png)
      }
      
      .icon-x {
        position: relative;
        width: 22px;
        height: 22px;
        font-size: 0
      }
      
      .icon-x:before,
      .icon-x:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 22px;
        height: 22px;
        -webkit-transition: .3s;
        -o-transition: .3s;
        transition: .3s;
        background-repeat: no-repeat;
        background-position: center
      }
      
      .icon-x:before {
        background-image: url(/resources/img/x-gray.svg)
      }
      
      .icon-x:after {
        opacity: 0;
        background-image: url(/resources/img/x-white.svg)
      }
      
      .icon-alert {
        width: 40px;
        height: 37px;
        background-image: url(/resources/img/alert-white.svg)
      }
      
      .icon-crest {
        width: 40px;
        height: 40px;
        background-image: url(/resources/img/crest.svg)
      }
      
      .icon-bell-violet {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        font-size: 20px;
        color: #2e2b4a;
        background-color: #fff
      }
      
      .icon-check {
        width: 40px;
        height: 40px;
        background-image: url(/resources/img/check.svg)
      }
      
      .icon-list-white,
      .icon-list-gray {
        width: 16px;
        height: 12px
      }
      
      .icon-list-white {
        background-image: url(/resources/img/list-white.png)
      }
      
      .icon-list-gray {
        background-image: url(/resources/img/list-gray.png)
      }
      
      .icon-smile-white,
      .icon-smile-gray {
        width: 16px;
        height: 16px
      }
      
      .icon-smile-white {
        background-image: url(/resources/img/smile-white.png)
      }
      
      .icon-smile-gray {
        background-image: url(/resources/img/smile-gray.png)
      }
      
      .header {
        position: relative
      }
      
      .autorization {
        position: relative;
        text-align: center;
        padding: 6.5px 0 9.5px;
        background-color: #2d2948
      }
      
      .au {
        min-height: 24px;
        display: flex;
        flex-flow: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 100%
      }
      
      .au__name {
        font-weight: 700;
        text-transform: uppercase;
        margin-right: 15px;
        width: 174px
      }
      
      .au__name i {
        margin: 0 2px 2px 0
      }
      
      .au__token {
        font-size: 14px;
        color: #6d678f;
        margin-right: 15px
      }
      
      .au__token i {
        margin-right: 10px
      }
      
      .au__lang {
        width: 270px;
        font-weight: 700;
        text-align: center
      }
      
      .au__lang i {
        margin-right: 10px
      }
      
      .ap {
        min-height: 24px
      }
      
      .ap__title {
        font-weight: 700;
        text-transform: uppercase;
        margin-left: 9px
      }
      
      .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 176px;
        height: 100px;
        margin: -10px 0
      }
      
      .panel {
        -webkit-box-shadow: 0 0 40px rgba(0, 0, 0, .35);
        box-shadow: 0 0 40px rgba(0, 0, 0, .35);
        background-color: #231f3a
      }
      
      .pael__logo {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%
      }
      
      .panel__hum {
        display: none
      }
      
      .panel__nav {
        margin-left: auto;
        padding-right: 40px
      }
      
      .panel__btns {
        border-left: 1px solid #302b4a
      }
      
      .panel__btn {
        min-height: 80px;
        min-width: 86px;
        padding-left: 30px;
        padding-right: 30px;
        border-right: 1px solid #302b4a
      }
      
      .panel__socials {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center
      }
      
      .panel__socials li {
        margin-right: 30px
      }
      
      .panel__socials li:last-of-type {
        margin-right: 0
      }
      
      .panel__socials a {
        display: block;
        background-repeat: no-repeat;
        background-position: center;
        border-bottom: none
      }
      
      .panel__socials a svg path {
        -webkit-transition: .3s;
        -o-transition: .3s;
        transition: .3s
      }
      
      .panel__socials a[href*="t.me"] {
        width: 24px;
        height: 24px
      }
      
      .panel__socials a[href*="t.me"] svg {
        width: 24px;
        height: 24px
      }
      
      .panel__socials a[href*="youtube.com"] {
        width: 24px;
        height: 24px
      }
      
      .panel__socials a[href*="youtube.com"] svg {
        width: 24px;
        height: 24px
      }
      
      .panel__socials a:hover svg path {
        fill: #fff !important
      }
      
      .panel__auth {
        display: block;
        position: relative
      }
      
      .panel__auth .icon {
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transition: .3s;
        -o-transition: .3s;
        transition: .3s;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%)
      }
      
      .panel__auth .icon:nth-of-type(2),
      .panel__auth .icon:nth-of-type(3) {
        opacity: 0
      }
      
      .panel__auth:not(.panel__auth_exit):hover .icon:nth-of-type(2) {
        opacity: 1
      }
      
      .panel__auth_exit:hover .icon:nth-of-type(3) {
        opacity: 1
      }
      
      .lang {
        position: relative
      }
      
      .lang__current {
        z-index: 2;
        position: relative;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        width: 86px;
        height: 80px;
        margin-left: -30px;
        margin-right: -30px;
        background-color: #231f3a
      }
      
      .lang__current img {
        width: 26px;
        height: 26px
      }
      
      .lang__list {
        z-index: 1;
        position: absolute;
        top: 100%;
        left: -1px;
        right: -1px;
        padding-bottom: 10px;
        background-color: #231f3a;
        -webkit-box-shadow: 0 0 20px rgba(0, 0, 0, .5);
        box-shadow: 0 0 20px rgba(0, 0, 0, .5);
        -webkit-transition: .3s;
        -o-transition: .3s;
        transition: .3s;
        opacity: 0;
        visibility: hidden;
        -webkit-transform: translateY(10px);
        -ms-transform: translateY(10px);
        transform: translateY(10px);
        border: 1px solid #302b4a;
        border-top: none;
        border-radius: 0 0 5px 5px
      }
      
      .lang__item {
        padding: 7px 0;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-transition: .3s;
        -o-transition: .3s;
        transition: .3s;
        border-bottom: none
      }
      
      .lang__item img {
        width: 26px;
        height: 26px
      }
      
      .lang__item:hover {
        background-color: #4d4778
      }
      
      .lang:hover .lang__list {
        opacity: 1;
        visibility: visible;
        -webkit-transform: translateY(0px);
        -ms-transform: translateY(0px);
        transform: translateY(0px)
      }
      
      .nav>ul>li {
        position: relative;
        margin-right: 41px
      }
      
      .nav>ul>li:after {
        content: '';
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        height: 25px
      }
      
      .nav>ul>li:last-of-type {
        margin-right: 0
      }
      
      .nav>ul>li.has-nav>a {
        position: relative;
        padding-right: 25px
      }
      
      .nav>ul>li.has-nav>a:before,
      .nav>ul>li.has-nav>a:after {
        position: absolute;
        content: '';
        width: 10px;
        height: 3px;
        border-radius: 50px;
        background-color: #6d678f;
        right: 0;
        top: 50%;
        margin-top: -2px;
        -webkit-transition: .3s;
        -o-transition: .3s;
        transition: .3s
      }
      
      .nav>ul>li.has-nav>a:before {
        -webkit-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        transform: rotate(-45deg)
      }
      
      .nav>ul>li.has-nav>a:after {
        margin-right: 6px;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg)
      }
      
      .nav>ul>li.has-nav>ul {
        position: absolute;
        top: 100%;
        width: 160px;
        left: 50%;
        padding: 30px;
        border-radius: 10px;
        -webkit-transition: .3s;
        -o-transition: .3s;
        transition: .3s;
        opacity: 0;
        visibility: hidden;
        -webkit-transform: translateX(-50%) translateY(10px);
        -ms-transform: translateX(-50%) translateY(10px);
        transform: translateX(-50%) translateY(10px);
        -webkit-box-shadow: 0 0 20px rgba(0, 0, 0, .5);
        box-shadow: 0 0 20px rgba(0, 0, 0, .5);
        background-color: #4d4778;
        margin-top: 20px
      }
      
      .nav>ul>li.has-nav>ul:before {
        content: '';
        position: absolute;
        left: 50%;
        top: -10px;
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 9.5px 10px;
        border-color: transparent transparent #4d4778 transparent
      }
      
      .nav>ul>li.has-nav>ul li {
        margin-bottom: 10px
      }
      
      .nav>ul>li.has-nav>ul li:last-of-type {
        margin-bottom: 0
      }
      
      .nav>ul>li.has-nav>ul a {
        color: #968fc9
      }
      
      .nav>ul>li.has-nav>ul a:hover {
        color: #fff
      }
      
      .nav>ul>li>a {
        color: #6d678f
      }
      
      .nav>ul>li:hover>a,
      .nav>ul>li.selected>a {
        color: #fff
      }
      
      .nav>ul>li:hover>a:before,
      .nav>ul>li:hover>a:after,
      .nav>ul>li.selected>a:before,
      .nav>ul>li.selected>a:after {
        background-color: #fff
      }
      
      .nav>ul>li:hover>ul,
      .nav>ul>li.selected>ul {
        opacity: 1;
        visibility: visible;
        -webkit-transform: translateX(-50%) translateY(0px);
        -ms-transform: translateX(-50%) translateY(0px);
        transform: translateX(-50%) translateY(0px)
      }
      
      .nav li {
        font-size: 20px;
        font-weight: 700;
        text-transform: uppercase
      }
      
      .counts__item {
        width: 25%;
        padding-top: 37px;
        padding-bottom: 41px;
        text-align: center
      }
      
      .counts__title {
        font-size: 18px;
        line-height: 18px;
        font-weight: 700;
        margin-bottom: 8px
      }
      
      .counts__text {
        font-size: 45px;
        line-height: 50px;
        font-weight: 700;
        color: #ffa243
      }
      
      .page__aside {
        width: 255px
      }
      
      .page__section {
        width: -webkit-calc(100% - 255px - 20px);
        width: calc(100% - 255px - 20px);
        margin-left: auto
      }
      
      .block {
        border-radius: 8px;
        background-color: #23203a;
        margin-bottom: 20px
      }
      
      .block:last-of-type {
        margin-bottom: 0
      }
      
      .block__head,
      .block__body,
      .block__foot {
        padding: 30px
      }
      
      .block__head {
        position: relative
      }
      
      .block__head:before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: -40px;
        height: 40px;
        background: url(/resources/img/block-shadow.png) repeat-x left top
      }
      
      .block__head_btn .block__main-title {
        width: -webkit-calc(100% - 235px);
        width: calc(100% - 235px)
      }
      
      .block__data {
        margin-bottom: 24px;
        margin-top: -3px
      }
      
      .block__title {
        width: -webkit-calc(100% - 45px);
        width: calc(100% - 45px)
      }
      
      .block__main-title {
        width: -webkit-calc(100% - 110px);
        width: calc(100% - 110px);
        margin-top: -4px
      }
      
      .block__btn-chat {
        width: 235px
      }
      
      .block__drop {
        margin-top: -4px
      }
      
      .block__count {
        width: 45px;
        font-size: 24px;
        font-weight: 700;
        margin-top: -1px;
        text-align: right
      }
      
      .block__count .icon {
        position: relative;
        top: -1px
      }
      
      .block__text {
        line-height: 20px
      }
      
      .block__img {}
      
      .block__img img {
        border: 3px solid #fff;
        border-radius: 3px;
        box-shadow: 1px 2px 3px #000
      }
      
      .block__status {
        margin-top: 15px
      }
      
      .block__foot {
        position: relative
      }
      
      .block__foot:before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        height: 40px;
        background: url(/resources/img/block-shadow.png) repeat-x left top
      }
      
      .block__foot>div {
        position: relative;
        z-index: 1
      }
      
      .title {
        font-size: 36px;
        line-height: 28px;
        font-weight: 700
      }
      
      .subtitle {
        font-size: 24px;
        line-height: 24px;
        font-weight: 700;
        text-transform: uppercase
      }
      
      .eth__icon {
        width: 100px;
        height: 100%;
        z-index: 2
      }
      
      .eth__icon img {
        filter: brightness(.75);
        height: 80px
      }
      
      .eth__list {
        width: 100%;
        padding-left: 15px;
        z-index: 3;
        margin-top: -70px;
        margin-left: auto
      }
      
      .eth__item {
        font-size: 36px;
        line-height: 20px;
        font-weight: 700;
        margin-bottom: 17px;
        text-align: right
      }
      
      .eth__item:last-of-type {
        margin-bottom: 0
      }
      
      .eth__item .icon {
        position: relative;
        top: -2px;
        margin-right: 6px
      }
      
      .eth__btn-wrap {
        z-index: 5;
        position: relative;
        margin-top: 34px
      }
      
      .eth__btn-wrap:hover .eth__btn-toltip {
        opacity: 1;
        visibility: visible;
        -webkit-transform: translateY(0px);
        -ms-transform: translateY(0px);
        transform: translateY(0px)
      }
      
      .eth__btn {
        text-align: center;
        -webkit-box-pack: start;
        -webkit-justify-content: flex-center;
        -ms-flex-pack: start;
        justify-content: flex-center;
        cursor: default
      }
      
      .eth__btn u {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-right: 10px
      }
      
      .eth__btn a {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: -2px
      }
      
      .eth__btn span {
        text-align: center
      }
      
      .eth__btn-toltip {
        position: absolute;
        left: 19px;
        top: 45px;
        width: 240px
      }
      
      .toltip {
        padding: 18px 20px;
        line-height: 20px;
        -webkit-box-shadow: 0 0 20px rgba(0, 0, 0, .5);
        box-shadow: 0 0 20px rgba(0, 0, 0, .5);
        background-color: #4d4778;
        border-radius: 8px;
        text-align: center;
        visibility: hidden;
        -webkit-transition: .3s;
        -o-transition: .3s;
        transition: .3s;
        -webkit-transform: translateY(8px);
        -ms-transform: translateY(8px);
        transform: translateY(8px);
        opacity: 0
      }
      
      .toltip:before {
        position: absolute;
        left: 22px;
        top: -10px;
        content: '';
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 9.5px 10px;
        border-color: transparent transparent #4d4778 transparent
      }
      
      .currents__list {
        padding-bottom: 20px;
        margin-left: -7.5px;
        margin-right: -7.5px
      }
      
      .currents__list .slick-slide {
        padding-left: 7.5px;
        padding-right: 7.5px
      }
      
      .currents__list .slick-dots {
        font-size: 0;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        margin-top: 20px
      }
      
      .currents__list .slick-dots li {
        margin-left: 5px;
        margin-right: 5px
      }
      
      .currents__list .slick-dots li.slick-active button {
        background-color: #fff
      }
      
      .currents__list .slick-dots button {
        width: 7px;
        height: 7px;
        font-size: 0;
        border-radius: 50%;
        -webkit-transition: .3s;
        -o-transition: .3s;
        transition: .3s;
        cursor: pointer;
        background-color: #6d678f
      }
      
      .currents__item {
        display: -webkit-box !important;
        display: -webkit-flex !important;
        display: -ms-flexbox !important;
        display: flex !important;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        text-align: center;
        height: 30px;
        font-size: 18px;
        font-weight: 700;
        border-radius: 50px;
        color: #6d678f;
        -webkit-transition: .3s;
        -o-transition: .3s;
        transition: .3s;
        border: 1px solid rgba(255, 255, 255, .3);
        cursor: pointer
      }
      
      .currents__item:hover,
      .currents__item_current {
        color: #fff;
        background-color: rgba(109, 103, 143, .3)
      }
      
      .currents__item_current {
        cursor: default
      }
      
      .balance__item {
        padding-top: 30px;
        padding-bottom: 22px;
        border-top: 1px solid #4f4d61
      }
      
      .balance__logo {
        margin-left: -13px;
        max-width: 208px;
        margin-bottom: 27px
      }
      
      .balance__eth {
        color: #ffa243;
        font-size: 36px;
        line-height: 30px;
        font-weight: 700
      }
      
      .balance__count {
        font-size: 24px;
        font-weight: 700;
        text-transform: uppercase
      }
      
      .status {
        position: relative;
        width: 100%;
        height: 30px;
        border-radius: 50px;
        border: 2px solid rgba(255, 255, 255, .3);
        background: rgba(19, 19, 22, .3)
      }
      
      .status__count,
      .status__wrap {
        position: absolute;
        top: -2px;
        left: -2px;
        bottom: -2px;
        padding-left: 20px
      }
      
      .status__count {
        z-index: 2;
        font-size: 16px;
        font-weight: 700;
        color: #23203a;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center
      }
      
      .status__wrap {
        z-index: 1;
        border-radius: 50px;
        background-color: #ffa243
      }
      
      .block__body.buy__body {
        position: relative
      }
      
      .buy__logo {
        margin-left: -13px;
        width: 100%;
        position: relative;
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        align-items: center
      }
      
      .buy__logo_testnet {
        position: absolute;
        left: 5px;
        color: #6149e1;
        font-size: 20px;
        border: 1px solid #6149e1;
        border-radius: 5px;
        padding: 15px 0 30px 160px;
        width: 102%;
        height: 75px;
        z-index: 1
      }
      
      .buy__logo img {
        width: 235px
      }
      
      .buy__list {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        justify-content: center;
        margin-top: 27px;
        margin-left: -13.5px;
        margin-right: -13.5px;
        margin-bottom: -33px
      }
      
      .buy__list .coming {
        width: 100%;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 50px 10px;
        margin-top: -10px
      }
      
      .buy__list .coming h1 {
        text-align: center;
        color: #ffa243;
        text-transform: uppercase;
        font-size: 60px;
        letter-spacing: 10px;
        text-shadow: 0 0 30px rgba(255, 0, 84, .6), 0 0 60px rgba(255, 0, 84, .4), 0 0 100px rgba(255, 0, 84, .2), 0 0 90px rgba(255, 0, 84, .1)
      }
      
      .buy__item {
        width: -webkit-calc(100%/5 - 27px);
        width: calc(100%/5 - 27px);
        margin-left: 7.5px;
        margin-right: 7.5px;
        margin-bottom: 33px
      }
      
      .buy__item_selected .buy__wrap {
        background-color: #00b0c2
      }
      
      .buy__item.buy__item_selected .buy__dots {
        border: 1px solid #00b0c2
      }
      
      .buy__item_xGold.buy__item_selected .buy__wrap {
        background-color: #efae1e;
        background-image: linear-gradient(-5deg, #ff9000 0%, #efae1e 100%)
      }
      
      .buy__item_xGold.buy__item.buy__item_selected .buy__dots_xGold {
        border: 1px solid #efae1e
      }
      
      .buy__item .buy__dots {
        border: 1px solid #28668b
      }
      
      .buy__item:hover .buy__dots {
        border: 1px solid #00b0c2;
        transition: .3s
      }
      
      .buy__item_xGold:hover .buy__dots {
        border: 1px solid #ffa243;
        transition: .3s
      }
      
      .buy__item_xGold .buy__dots {
        border: 1px solid #ab6d2c
      }
      
      .buy__item_xGold .buy__wrap {
        background-color: #ab6d2c
      }
      
      .buy__wrap {
        z-index: 3;
        position: relative;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        background-color: #28668b;
        height: 48px;
        border-radius: 8px;
        -webkit-transition: .3s;
        -o-transition: .3s;
        transition: .3s;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0
      }
      
      .buy__item_xGold:hover .buy__wrap {
        color: #fff
      }
      
      .buy__number {
        position: absolute;
        left: 10px;
        top: 10px;
        font-size: 16px;
        line-height: 14px;
        font-weight: 700;
        color: #fff;
        opacity: .5
      }
      
      .buy__count {
        font-size: 18px;
        font-weight: 600;
        line-height: 20px;
        font-family: Arial;
        color: #f9f9f9
      }
      
      .buy__label {
        position: absolute;
        top: 0;
        right: 0
      }
      
      .buy__label_alert {
        margin-top: -10px
      }
      
      .buy__label_buy {
        margin-top: -10px;
        cursor: pointer
      }
      
      .buy__label_cart {
        margin-top: 5px;
        margin-right: 5px
      }
      
      .buy__dots {
        border-bottom-right-radius: 8px;
        border-bottom-left-radius: 8px;
        margin-top: -10px;
        padding: 10px 15px;
        padding-top: 7px
      }
      
      .buy__dots_3 {
        min-height: 100px;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between
      }
      
      .buy__dots_3 .buy__dot {
        position: relative;
        width: 21px;
        height: 21px;
        margin-top: 25px
      }
      
      .buy__dots_3 .buy__dot:nth-of-type(1) {
        margin-left: 5px
      }
      
      .buy__dots_3 .buy__dot:nth-of-type(3) {
        margin-right: 5px
      }
      
      .dot__desc {
        width: 65px;
        height: 30px;
        z-index: 999999;
        display: none;
        position: absolute;
        padding: 5px;
        font-size: 12.5px;
        color: #fff;
        background: #f3f3f3;
        text-align: center;
        line-height: normal
      }
      
      .upgrage__dot_xGold-desc {
        position: relative
      }
      
      .upgrage__dot_xGold-desc:hover .dot__desc {
        width: 70px;
        height: 70px;
        border: 1px solid #01b5c6;
        justify-content: center;
        align-items: center;
        z-index: 9999999;
        display: inline-flex;
        position: absolute;
        background-color: #01b5c6;
        border-radius: 50%
      }
      
      .buy__dot:hover .dot__desc {
        width: 65px;
        height: 25px;
        border: 1px solid gray;
        justify-content: center;
        align-items: center;
        z-index: 9999999;
        display: inline-flex;
        margin-top: 20px;
        margin-left: 15px;
        position: absolute;
        background-color: #222138;
        border-radius: 6px
      }
      
      .buy__dots_3 .buy__dot:nth-of-type(1):before {
        -webkit-transform: rotate(30deg);
        -ms-transform: rotate(30deg);
        transform: rotate(30deg);
        margin-left: 10px
      }
      
      .buy__dots_3 .buy__dot:nth-of-type(3):before {
        -webkit-transform: rotate(-30deg);
        -ms-transform: rotate(-30deg);
        transform: rotate(-30deg);
        margin-left: -10px
      }
      
      .buy__dots_2-2 {
        min-height: 120px;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center
      }
      
      .buy__dots_2-2 .buy__dot {
        position: relative;
        width: 17px;
        height: 17px;
        margin-top: 5px
      }
      
      .buy__dots_2-2 .buy__dot:before {
        left: 7px
      }
      
      .buy__dots_2-2 .buy__dot:nth-of-type(1),
      .buy__dots_2-2 .buy__dot:nth-of-type(2) {
        margin-top: 16px;
        z-index: 2
      }
      
      @media(min-width:1200px) {
        .buy__dots_2-2 .buy__dot:nth-of-type(1) {
            margin-right: 21.5px;
            margin-left: 10px
        }
        .buy__dots_2-2 .buy__dot:nth-of-type(2) {
            margin-left: 21.5px;
            margin-right: 10px
        }
      }
      
      @media(max-width:1199px) {
        .buy__dots_2-2 .buy__dot:nth-of-type(1) {
            margin-right: 16px;
            margin-left: 10px
        }
        .buy__dots_2-2 .buy__dot:nth-of-type(2) {
            margin-left: 16px;
            margin-right: 10px
        }
      }
      
      .buy__dots_2-2 .buy__dot:nth-of-type(4) {
        margin-right: auto;
        margin-left: 5px
      }
      
      .buy__dots_2-2 .buy__dot:nth-of-type(5) {
        margin-right: 5px
      }
      
      .buy__dots_2-2 .buy__dot:nth-of-type(1):before,
      .buy__dots_2-2 .buy__dot:nth-of-type(3):before,
      .buy__dots_2-2 .buy__dot:nth-of-type(5):before {
        -webkit-transform: rotate(25deg);
        -ms-transform: rotate(25deg);
        transform: rotate(25deg);
        margin-left: 8px
      }
      
      .buy__dots_2-2 .buy__dot:nth-of-type(2):before,
      .buy__dots_2-2 .buy__dot:nth-of-type(4):before,
      .buy__dots_2-2 .buy__dot:nth-of-type(6):before {
        -webkit-transform: rotate(-25deg);
        -ms-transform: rotate(-25deg);
        transform: rotate(-25deg);
        margin-left: -8px
      }
      
      .buy__dot {
        border: 1px solid #6d678f;
        background-color: #23203a;
        border-radius: 50%;
        -webkit-transition: .3s;
        -o-transition: .3s;
        transition: .3s;
        position: relative;
        cursor: pointer
      }
      
      .buy__dot:before {
        content: '';
        height: 25px;
        width: 1px;
        position: absolute;
        bottom: 105%;
        left: 9px;
        border-left: 1px dashed #6d678f
      }
      
      .buy__dot_selected,
      .buy__dot:hover {
        border-color: #00b0c2;
        background-color: #00b0c2
      }
      
      .buy__data {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        width: 100%;
        text-align: center;
        -webkit-box-pack: center;
        -webkit-justify-content: space-around;
        -ms-flex-pack: center;
        justify-content: space-around;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        height: 100%;
        font-size: 15px;
        margin-top: 10px
      }
      
      .buy__data-item {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center
      }
      
      .buy__data-count {
        font-size: 16px;
        margin-right: 3px
      }
      
      .buy__desc {
        margin-top: -2px;
        position: relative;
        z-index: 1
      }
      
      .buy__desc-list {
        margin-bottom: -15px
      }
      
      .buy__desc-item {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        margin-right: 30px;
        margin-bottom: 15px
      }
      
      .buy__desc-item:last-of-type {
        margin-right: 0
      }
      
      .buy__desc-icon {
        color: #00b0c2;
        font-size: 16px;
        font-weight: 700;
        margin-right: 10px
      }
      
      .buy__desc-title {
        color: #6d678f;
        text-transform: uppercase
      }
      
      .copy__input {
        margin-bottom: 20px
      }
      
      .designations__col {
        margin-bottom: -15px
      }
      
      .designations__col:nth-of-type(1) {
        width: 165px
      }
      
      .designations__col:nth-of-type(2) {
        width: 360px
      }
      
      .designations__col:nth-of-type(3) {
        width: 230px
      }
      
      .designations__item {
        padding-top: 5px;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        min-width: 155px;
        padding-right: 15px;
        margin-right: 15px;
        margin-bottom: 15px
      }
      
      .designations__item_zero {
        min-height: 23px
      }
      
      .designations__color {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center
      }
      
      .designations__color_blue {
        background-color: #00b0c2
      }
      
      .designations__color_blue-dark {
        background-color: #28668b
      }
      
      .designations__color_blue-light {
        background-color: #92c9da
      }
      
      .designations__color_pink {
        background-color: #ac9bfb
      }
      
      .designations__color_violet {
        background-color: #7164ad
      }
      
      .designations__title {
        padding-left: 10px;
        color: #6d678f
      }
      
      .drop {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        cursor: pointer
      }
      
      .drop__title {
        font-size: 20px;
        font-weight: 700;
        text-transform: uppercase;
        margin-right: 10px
      }
      
      .drop__icon {
        -webkit-transition: .3s;
        -o-transition: .3s;
        transition: .3s
      }
      
      .drop-wrap_open .drop__icon {
        -webkit-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        transform: rotate(180deg)
      }
      
      .filter {
        margin-top: -7px;
        margin-bottom: 27px;
        padding-bottom: 32px;
        border-bottom: 1px solid #4f4d61
      }
      
      .filter__list {
        margin-left: -15px;
        margin-right: -15px;
        margin-bottom: -15px
      }
      
      .filter__list_analytics,
      .filter__btns_analytics {
        display: flex;
        flex-flow: row;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        width: 100%
      }
      
      .filter__btns_analytics {
        margin-top: 30px
      }
      
      .filter__list_analytics .filter__item {
        width: calc(50% - 30px)
      }
      
      .filter__btns_analytics .filter__btn {
        width: calc(50% - 30px)
      }
      
      .filter__item {
        width: -webkit-calc(33.333% - 30px);
        width: calc(33.333% - 30px);
        margin-left: 15px;
        margin-right: 15px;
        margin-bottom: 15px
      }
      
      .filter__item_md {
        width: -webkit-calc((33.333% * 2) - 30px);
        width: calc((33.333% * 2) - 30px)
      }
      
      .filter__title {
        color: #6d678f;
        text-transform: uppercase;
        margin-bottom: 18px
      }
      
      .filter__btns {
        margin-left: -15px;
        margin-right: -15px;
        margin-top: 30px;
        -webkit-box-pack: end;
        -webkit-justify-content: flex-end;
        -ms-flex-pack: end;
        justify-content: flex-end
      }
      
      .filter__btn {
        width: -webkit-calc(33.333% - 30px);
        width: calc(33.333% - 30px);
        margin-left: 15px;
        margin-right: 15px
      }
      
      .select_border-gray .select__block {
        border: 2px solid #656375;
        background-color: #1e1c2f;
        border-radius: 50px
      }
      
      .select_border-gray .select__list {
        border: 2px solid #656375;
        border-top: none;
        background-color: #1e1c2f;
        border-radius: 0 0 20px 20px
      }
      
      .select_border-gray .select__item {
        padding: 5px 10px
      }
      
      .select_border-gray .select__item:hover {
        background-color: #4d4778
      }
      
      .select_md .select__block {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        padding-left: 20px;
        padding-right: 32px;
        height: 48px
      }
      
      .select_md .select__list {
        padding-top: 10px;
        padding-bottom: 10px
      }
      
      .select_md .select__item {
        padding: 5px 20px
      }
      
      .select_arrows .select__drop {
        -webkit-transform: translateY(-50%) !important;
        -ms-transform: translateY(-50%) !important;
        transform: translateY(-50%) !important
      }
      
      .select_arrows .select__drop .icon:before,
      .select_arrows .select__drop .icon:after {
        background-color: #fff
      }
      
      .select_arrows .select__drop .icon:nth-of-type(1) {
        top: -5px;
        left: 8px
      }
      
      .select_arrows .select__drop .icon:nth-of-type(2) {
        top: 5px
      }
      
      .select__inner {
        position: relative
      }
      
      .select__block {
        position: relative;
        -webkit-transition: .3s;
        -o-transition: .3s;
        transition: .3s;
        cursor: pointer
      }
      
      .select__drop {
        position: absolute;
        top: 50%;
        right: 20px;
        -webkit-transition: .3s;
        -o-transition: .3s;
        transition: .3s;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%)
      }
      
      .select__list {
        z-index: 5;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        -webkit-transition: .3s;
        -o-transition: .3s;
        transition: .3s;
        opacity: 0;
        visibility: hidden;
        -webkit-transform: translateY(10px);
        -ms-transform: translateY(10px);
        transform: translateY(10px)
      }
      
      .select__item {
        -webkit-transition: .3s;
        -o-transition: .3s;
        transition: .3s;
        cursor: pointer
      }
      
      .select__wrap {
        display: none
      }
      
      .select_open .select__block {
        border-radius: 20px 20px 0 0
      }
      
      .select_open .select__drop {
        -webkit-transform: translateY(-50%) rotate(180deg);
        -ms-transform: translateY(-50%) rotate(180deg);
        transform: translateY(-50%) rotate(180deg)
      }
      
      .select_open .select__list {
        opacity: 1;
        visibility: visible;
        -webkit-transform: translateY(0px);
        -ms-transform: translateY(0px);
        transform: translateY(0px)
      }
      
      .trans__title {
        margin-bottom: 9px
      }
      
      .trans__pagination {
        margin-top: 30px
      }
      
      .table {
        width: 100%;
        border-collapse: collapse
      }
      
      .table th {
        color: #6d678f;
        font-weight: 400;
        text-align: left;
        text-transform: uppercase
      }
      
      .table th,
      .table td {
        padding: 15px 5px
      }
      
      .table td {
        white-space: nowrap
      }
      
      .table tbody tr:nth-of-type(odd) td {
        background-color: #1e1c2f
      }
      
      .table tbody tr:nth-of-type(odd) td:first-of-type {
        border-radius: 6px 0 0 6px
      }
      
      .table tbody tr:nth-of-type(odd) td:last-of-type {
        border-radius: 0 6px 6px 0
      }
      
      .table u {
        display: inline-block;
        vertical-align: middle;
        position: relative;
        margin-right: 12px;
        font-size: 0;
        cursor: pointer
      }
      
      .table u.u_zero {
        margin-right: 0
      }
      
      .table u .icon:nth-of-type(2) {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0
      }
      
      .table u+u {
        margin-right: 16px
      }
      
      .table u .icon {
        -webkit-transition: .3s;
        -o-transition: .3s;
        transition: .3s
      }
      
      .table u:hover .icon:nth-of-type(1) {
        opacity: 0
      }
      
      .table u:hover .icon:nth-of-type(2) {
        opacity: 1
      }
      
      .table .icon-eth-color {
        margin-right: 4px;
        position: relative;
        top: -1px
      }
      
      .table .icon-partners-blue {
        margin-left: 7px
      }
      
      .table .inpt {
        color: #fff;
        font-size: 16px;
        font-family: neuronangled, sans-serif;
        background-color: transparent;
        width: 95px
      }
      
      .table .c {
        text-align: center
      }
      
      .table .c div {
        margin-left: auto;
        margin-right: auto
      }
      
      .table td.color-green {
        color: #8bc24a;
        font-weight: 700
      }
      
      .table td.col-turquoise {
        color: #00b0c2
      }
      
      .table td.col-blue {
        color: #3a89b6
      }
      
      .table td.color-pink {
        color: #d03a94
      }
      
      .pagination ul {
        margin-left: -5px;
        margin-right: -5px
      }
      
      .pagination li {
        margin-left: 5px;
        margin-right: 5px
      }
      
      .pagination li:hover a,
      .pagination li.selected a {
        background-color: #37344c
      }
      
      .pagination a {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        min-width: 36px;
        height: 36px;
        border: 2px solid #37344c;
        background-color: transparent;
        border-radius: 50px;
        padding-left: 12px;
        padding-right: 12px;
        -webkit-transition: .3s;
        -o-transition: .3s;
        transition: .3s
      }
      
      .partners__title {
        margin-bottom: 26px
      }
      
      .partners__copy {
        margin-bottom: 25px
      }
      
      .partners__copy-input {
        width: -webkit-calc(100% - 48px - 20px);
        width: calc(100% - 48px - 20px)
      }
      
      .partners__copy-btn {
        width: 48px;
        margin-left: auto
      }
      
      .partners__copy-btn u {
        margin-right: 0
      }
      
      .partners_ref_accounts {
        justify-content: space-around;
        align-items: center;
        width: 100%;
        margin-bottom: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid #4f4d61
      }
      
      .partners_ref_accounts_title {
        font-size: 20px;
        width: 100%;
        color: #fff;
        display: flex;
        flex-flow: row;
        justify-content: center;
        align-items: center;
        text-align: center
      }
      
      .partners_ref_accounts_content {
        display: flex;
        flex-flow: row;
        justify-content: center;
        align-items: center;
        width: 100%
      }
      
      .partners_ref_accounts_content .mt-1 {
        width: 80%
      }
      
      .partners_ref_accounts_coin {
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        background: #6149e1;
        border-radius: 50%;
        margin: 10px;
        color: #fff
      }
      
      .partners_ref_accounts_coin:nth-child(1) {
        margin-right: 20px
      }
      
      .partners_ref_accounts_coin:nth-child(2) {
        margin-left: 20px
      }
      
      .partners_ref_accounts_link {
        position: absolute
      }
      
      .partners_ref_accounts_link img {
        width: 60px;
        height: 60px;
        transform: rotate(45deg)
      }
      
      .partners_ref_accounts_coin img {
        margin-bottom: 5px;
        width: 50px;
        height: 50px
      }
      
      @media(max-width:700px) {
        .partners_ref_accounts {
            display: flex;
            flex-flow: column
        }
        .partners_ref_accounts_title {
            margin-bottom: 20px
        }
        .partners_ref_accounts_coin span {
            display: inline-flex
        }
      }
      
      @media(min-width:701px) {
        .partners_ref_accounts {
            display: flex;
            flex-flow: row
        }
        .partners_ref_accounts_title {
            margin-bottom: 0
        }
        .partners_ref_accounts_coin span {
            display: none
        }
        .partners_ref_accounts:hover .partners_ref_accounts_coin span {
            display: inline-flex
        }
      }
      
      @media(max-width:350px) {
        .partners_ref_accounts_coin {
            width: 70px;
            height: 70px
        }
      }
      
      @media(min-width:351px) {
        .partners_ref_accounts_coin {
            width: 100px;
            height: 100px
        }
      }
      
      .partners__data {
        padding-bottom: 30px;
        margin-bottom: 13px;
        border-bottom: 1px solid #4f4d61
      }
      
      .partners__data ul {
        -webkit-column-count: 2;
        -moz-column-count: 2;
        column-count: 2;
        display: inline-block;
        width: -webkit-calc(100% + 26px);
        width: calc(100% + 26px);
        margin-left: -13px;
        margin-right: -13px;
        margin-bottom: 0
      }
      
      .partners__data li {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        padding-left: 13px;
        padding-right: 13px;
        margin-bottom: 12px;
        width: 100%
      }
      
      .partners__data u {
        color: #6d678f;
        width: -webkit-calc(100% - 100px);
        width: calc(100% - 100px);
        display: inline-block;
        text-decoration: none
      }
      
      .partners__data i {
        text-align: right;
        width: 100px;
        font-style: normal
      }
      
      .pl__pagination {
        margin-top: 30px
      }
      
      .upgrage {
        position: relative
      }
      
      .upgrage__logo {
        margin-left: -13px;
        width: 169px;
        margin-bottom: 27px
      }
      
      .upgrage__wrap {
        position: relative;
        padding-bottom: 20px
      }
      
      .upgrage__lvl {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: end;
        -webkit-justify-content: flex-end;
        -ms-flex-pack: end;
        justify-content: flex-end;
        width: 275px;
        height: 80px;
        font-size: 36px;
        font-weight: 700;
        border-radius: 16px;
        color: rgb(255 255 255/62%);
        text-transform: uppercase;
        border: 2px solid rgb(255 255 255/55%);
        padding-left: 30px;
        padding-right: 30px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 20px
      }
      
      .upgrage__lvl var {
        margin-left: 20px
      }
      
      .upgrage__counts {
        width: 120px;
        height: 160px;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        position: absolute;
        top: 100px;
        left: 580px
      }
      
      .upgrage__counts-item {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        margin-bottom: 16px
      }
      
      .upgrage__counts-item:last-of-type {
        margin-bottom: 0
      }
      
      .upgrage__counts-icon {
        width: 20px;
        text-align: center
      }
      
      .upgrage__counts-number {
        font-size: 20px;
        padding-left: 11px;
        width: -webkit-calc(100% - 20px);
        width: calc(100% - 20px)
      }
      
      .upgrage__settings {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        justify-content: center;
        flex-flow: column;
        align-items: center;
        width: 100px;
        height: 150px;
        position: absolute;
        top: 100px;
        left: 175px
      }
      
      .upgrage__slider {
        display: none;
        width: 110px;
        font-size: 0;
        position: relative
      }
      
      .upgrage__slider .slick-arrow {
        background: 0 0;
        font-size: 0
      }
      
      .upgrage__slider-item {
        font-size: 20px;
        text-transform: uppercase;
        text-align: center
      }
      
      .upgrage__slider-arrows .slick-arrow {
        position: absolute;
        cursor: pointer
      }
      
      .upgrage__slider-arrows .slick-arrow:before,
      .upgrage__slider-arrows .slick-arrow:after {
        display: block !important;
        position: absolute;
        content: '';
        width: 10px;
        height: 2px;
        border-radius: 50px;
        background-color: #6d678f;
        right: 0;
        top: 50%;
        margin-top: -2px;
        -webkit-transition: .3s;
        -o-transition: .3s;
        transition: .3s
      }
      
      .upgrage__slider-arrows .slick-arrow:before {
        -webkit-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        transform: rotate(-45deg)
      }
      
      .upgrage__slider-arrows .slick-arrow:after {
        margin-right: 6px;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg)
      }
      
      .upgrage__slider-arrows .slick-arrow.slick-prev {
        -webkit-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        transform: rotate(180deg);
        top: -20px;
        left: 50%;
        margin-left: -5px
      }
      
      .upgrage__slider-arrows .slick-arrow.slick-next {
        bottom: -20px;
        left: 50%;
        margin-left: 12px
      }
      
      .upgrage__slider-arrows .slick-arrow:hover:before,
      .upgrage__slider-arrows .slick-arrow:hover:after {
        background-color: #fff
      }
      
      .upgrage__count .icon {
        position: relative;
        top: -1px
      }
      
      .upgrage__count var {
        font-size: 20px;
        margin-left: 10px
      }
      
      .upgrage__count .slick-arrow {
        background: 0 0;
        font-size: 0
      }
      
      .upgrage__slider-item {
        font-size: 20px;
        text-transform: uppercase;
        text-align: center
      }
      
      .upgrage__count-arrows {
        position: absolute
      }
      
      .upgrage__count-arrows .slick-arrow {
        width: 30px;
        height: 30px;
        position: absolute;
        cursor: pointer
      }
      
      .upgrage__count-arrows .slick-arrow:before,
      .upgrage__count-arrows .slick-arrow:after {
        display: block !important;
        position: absolute;
        content: '';
        width: 10px;
        height: 2px;
        border-radius: 50px;
        background-color: #6d678f;
        right: 0;
        top: 50%;
        margin-top: -2px;
        -webkit-transition: .3s;
        -o-transition: .3s;
        transition: .3s
      }
      
      .upgrage__count-arrows .slick-arrow:before {
        -webkit-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        transform: rotate(-45deg)
      }
      
      .upgrage__count-arrows .slick-arrow:after {
        margin-right: 6px;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg)
      }
      
      .upgrage__count-arrows .slick-arrow.slick-prev {
        -webkit-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        transform: rotate(180deg);
        top: -40px;
        left: 50%;
        margin-left: 35px
      }
      
      .upgrage__count-arrows .slick-arrow.slick-next {
        bottom: -60px;
        left: 10%;
        margin-left: 20px
      }
      
      .upgrage__count-arrows .slick-arrow:hover:before,
      .upgrage__count-arrows .slick-arrow:hover:after {
        background-color: #fff
      }
      
      .upgrage__arrow {
        width: 74px;
        color: #a6b3c6;
        -webkit-transition: .3s;
        -o-transition: .3s;
        transition: .3s;
        position: absolute;
        top: 155px
      }
      
      .upgrage__arrow_prev {
        left: 0
      }
      
      .upgrage__arrow_next {
        right: 0
      }
      
      .upgrage__arrow .icon:before,
      .upgrage__arrow .icon:after {
        -webkit-transition: .3s;
        -o-transition: .3s;
        transition: .3s;
        background-color: #a6b3c6
      }
      
      .upgrage__arrow var {
        -webkit-transition: .3s;
        -o-transition: .3s;
        transition: .3s;
        margin-left: 11px;
        margin-right: 11px
      }
      
      .upgrage__arrow:hover {
        border-color: #fff
      }
      
      .upgrage__arrow:hover var {
        color: #fff
      }
      
      .upgrage__arrow:hover .icon:before,
      .upgrage__arrow:hover .icon:after {
        background-color: #fff
      }
      
      .upgrage__dots_x3 {
        width: 100%;
        max-width: 485px;
        margin-left: auto;
        margin-right: auto;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center
      }
      
      .upgrage__dot_x3 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border: 2px solid #6d678f;
        background-color: #23203a;
        margin-top: 30px;
        position: relative
      }
      
      .upgrage__dot_x3:before {
        content: '';
        position: absolute;
        height: 64px;
        bottom: 100%;
        left: 38px;
        border-left: 2px dashed #6d678f
      }
      
      .upgrage__dot_x3:nth-of-type(1),
      .upgrage__dot_x3:nth-of-type(2),
      .upgrage__dot_x3:nth-of-type(3) {
        z-index: 1;
        margin-top: 50px
      }
      
      .upgrage__dot_x3:nth-of-type(1) {
        margin-right: 40px;
        margin-left: 0
      }
      
      .upgrage__dot_x3:nth-of-type(1):before {
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        margin-left: 40px;
        margin-bottom: -8px
      }
      
      .upgrage__dot_x3:nth-of-type(2):before {
        -webkit-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        transform: rotate(0deg);
        height: 45px;
        margin-left: -1px;
        margin-bottom: 5px
      }
      
      .upgrage__dot_x3:nth-of-type(3):before {
        -webkit-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        transform: rotate(-45deg);
        margin-left: -43px;
        margin-bottom: -5px
      }
      
      .upgrage__dot_x3:nth-of-type(2) {
        margin-left: 40px;
        margin-right: 40px
      }
      
      .upgrage__dot_x3:nth-of-type(3) {
        margin-left: 40px;
        margin-right: 0
      }
      
      .upgrage__dot_x3_selected {
        background-color: #00b0c2;
        border-color: #00b0c2
      }
      
      .upgrage__dot_x3-up {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        position: absolute;
        top: 0;
        right: -10px;
        width: 32px;
        height: 32px;
        -webkit-transition: .3s;
        -o-transition: .3s;
        transition: .3s;
        background-color: #7164ad;
        border-radius: 50%;
        cursor: pointer
      }
      
      .upgrage__dot_x3-up:hover {
        -webkit-transform: scale(.8);
        -ms-transform: scale(.8);
        transform: scale(.8)
      }
      
      .upgrage__dot_x3-count {
        text-align: center
      }
      
      .upgrage__dot_x3-count .icon {
        margin-bottom: 3px
      }
      
      .upgrage__dot_x3-count var {
        font-size: 20px;
        font-weight: 700;
        color: #23203a;
        display: block
      }
      
      .upgrage__dots_x4 {
        width: 100%;
        max-width: 485px;
        margin-left: auto;
        margin-right: auto;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center
      }
      
      .upgrage__dot_x4 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border: 2px solid #6d678f;
        background-color: #23203a;
        margin-top: 30px;
        position: relative
      }
      
      .upgrage__dot_x4:before {
        content: '';
        position: absolute;
        height: 70px;
        bottom: 100%;
        left: 38px;
        border-left: 2px dashed #6d678f
      }
      
      .upgrage__dot_x4-lvl-1 {
        width: 100%;
        display: flex;
        flex-flow: row;
        justify-content: space-around;
        align-items: center
      }
      
      .upgrage__dot_x4-lvl-2 {
        width: 100%;
        display: flex;
        flex-flow: row;
        justify-content: space-around;
        align-items: center
      }
      
      .upgrage__dot_x4-lvl-1 .upgrage__dot_x4 {
        z-index: 1;
        margin-top: 50px
      }
      
      .upgrage__dot_x4:nth-of-type(1):before,
      .upgrage__dot_x4:nth-of-type(3):before,
      .upgrage__dot_x4:nth-of-type(5):before {
        -webkit-transform: rotate(40deg);
        -ms-transform: rotate(40deg);
        transform: rotate(40deg);
        margin-left: 40px;
        margin-bottom: -4px
      }
      
      .upgrage__dot_x4:nth-of-type(2):before,
      .upgrage__dot_x4:nth-of-type(4):before,
      .upgrage__dot_x4:nth-of-type(6):before {
        -webkit-transform: rotate(-40deg);
        -ms-transform: rotate(-40deg);
        transform: rotate(-40deg);
        margin-left: -40px;
        margin-bottom: -4px
      }
      
      .upgrage__dot_x4_selected {
        background-color: #00b0c2;
        border-color: #00b0c2
      }
      
      .upgrage__dot_x4-up {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        position: absolute;
        top: 0;
        right: -10px;
        width: 32px;
        height: 32px;
        -webkit-transition: .3s;
        -o-transition: .3s;
        transition: .3s;
        background-color: #7164ad;
        border-radius: 50%;
        cursor: pointer
      }
      
      .upgrage__dot_x4-up:hover {
        -webkit-transform: scale(.8);
        -ms-transform: scale(.8);
        transform: scale(.8)
      }
      
      .upgrage__dot_x4-count {
        text-align: center
      }
      
      .upgrage__dot_x4-count .icon {
        margin-bottom: 3px
      }
      
      .upgrage__dot_x4-count var {
        font-size: 20px;
        font-weight: 700;
        color: #23203a;
        display: block
      }
      
      .wallet_xGold {
        width: 275px;
        height: 160px;
        border-radius: 16px;
        background-color: #efae1e;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        z-index: 2
      }
      
      .wallet {
        width: 275px;
        height: 160px;
        border-radius: 16px;
        background-color: #00b0c2;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        z-index: 2
      }
      
      .wallet__number {
        font-size: 48px;
        line-height: 30px;
        font-weight: 700;
        opacity: .5;
        color: #23203a;
        position: absolute;
        left: 32px;
        top: 30px
      }
      
      .wallet__text {
        text-align: right;
        padding-top: 30px;
        padding-right: 31px
      }
      
      .wallet__id {
        font-size: 28px;
        line-height: 24px;
        font-weight: 600;
        color: #fff !important;
        text-transform: uppercase;
        margin-bottom: 28px
      }
      
      .wallet__id a {
        color: #fff !important
      }
      
      .wallet__eth {
        font-size: 27px;
        line-height: 24px;
        font-weight: 600
      }
      
      .wallet__eth .icon {
        position: relative;
        top: -2px
      }
      
      .wallet__count {
        font-size: 20px;
        font-weight: 700
      }
      
      .wallet_upgrade_cart {
        margin-top: -20px;
        width: 275px;
        height: 120px;
        border-bottom-right-radius: 16px;
        border-bottom-left-radius: 16px;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        background: #1e1c2f
      }
      
      .wallet_upgrade_cart .buy_level_dots {
        height: 100%;
        width: 100%;
        display: flex;
        flex-flow: column;
        justify-content: space-around;
        align-items: center;
        font-size: 25px;
        margin-top: 10px
      }
      
      .stat__pagination {
        margin-top: 30px
      }
      
      .file__input {
        display: none
      }
      
      .file__wrap {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        text-align: center;
        width: 100%;
        height: 295px;
        border-radius: 27px;
        background-color: #1e1c2f;
        cursor: pointer
      }
      
      .file__title {
        max-width: 185px;
        margin-left: auto;
        margin-right: auto;
        color: #6d678f;
        opacity: .5;
        line-height: 20px;
        text-transform: uppercase
      }
      
      .file__title:before {
        display: block;
        content: '';
        width: 64px;
        height: 60px;
        background: url(/resources/img/picture.png) no-repeat center;
        margin-bottom: 20px;
        margin-left: auto;
        margin-right: auto
      }
      
      .add {
        margin-top: -8px;
        margin-left: -17.5px;
        margin-right: -17.5px;
        margin-bottom: -18px
      }
      
      .add__col {
        width: -webkit-calc(50% - 35px);
        width: calc(50% - 35px);
        margin-left: 17.5px;
        margin-right: 17.5px
      }
      
      .add__item {
        margin-bottom: 18px
      }
      
      .add__item_mt {
        margin-top: 36px
      }
      
      .add__item_mt-sm {
        margin-top: 30px
      }
      
      .add__title {
        color: #6d678f;
        text-transform: uppercase;
        margin-bottom: 18px
      }
      
      .add__wrap {
        width: 100%
      }
      
      .radios__item {
        margin-bottom: 10px
      }
      
      .radios__item:last-of-type {
        margin-bottom: 0
      }
      
      .radio input {
        display: none
      }
      
      .radio label {
        display: block;
        padding-left: 45px;
        position: relative;
        min-height: 24px;
        padding-top: 3px;
        cursor: pointer
      }
      
      .radio label:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 2px solid #656375;
        background-color: #1e1c2f
      }
      
      .radio label:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 24px;
        height: 24px;
        border-radius: 12px;
        border: 6px solid #ffa243;
        background-color: #201e34;
        -webkit-transition: .3s;
        -o-transition: .3s;
        transition: .3s;
        opacity: 0;
        -webkit-transform: scale(0);
        -ms-transform: scale(0);
        transform: scale(0)
      }
      
      .radio_checked label:after {
        opacity: 1;
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1)
      }
      
      .process {
        padding-top: 13px
      }
      
      .proc {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        margin-right: 33px
      }
      
      .proc__wrap {
        width: 255px;
        height: 12px;
        border: 1px solid rgba(255, 255, 255, .3);
        background-color: rgba(19, 19, 22, .3);
        border-radius: 50px
      }
      
      .proc__wrap div {
        position: relative;
        height: 16px;
        top: -3px;
        left: -2px;
        background-color: #ffa243;
        border-radius: 50px
      }
      
      .proc__count {
        font-weight: 700;
        margin-left: 19px;
        min-width: 33px
      }
      
      .notifications {
        z-index: 10;
        position: fixed;
        right: 7%;
        bottom: 7%
      }
      
      .notifications__toggle {
        position: relative;
        z-index: 2;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        width: 60px;
        height: 60px;
        -webkit-transition: .3s;
        -o-transition: .3s;
        transition: .3s;
        background-color: #ffa243;
        border-radius: 50%;
        cursor: pointer
      }
      
      .notifications__toggle:hover {
        -webkit-transform: scale(.9);
        -ms-transform: scale(.9);
        transform: scale(.9)
      }
      
      .notifications__toggle:before,
      .notifications__toggle:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        background-color: #ffa243;
        opacity: .1;
        width: 60px;
        height: 60px;
        border-radius: 50%
      }
      
      .notifications__scroll {
        height: 380px;
        overflow: auto;
        padding-right: 26px
      }
      
      .notifications__wrap {
        position: absolute;
        bottom: 80px;
        right: 0;
        width: 385px;
        padding: 20px;
        border-radius: 7px;
        background-color: #4d4778;
        -webkit-transition: .3s;
        -o-transition: .3s;
        transition: .3s;
        opacity: 0;
        visibility: hidden;
        -webkit-transform: translateY(-20px);
        -ms-transform: translateY(-20px);
        transform: translateY(-20px)
      }
      
      .notifications__wrap:before {
        content: '';
        position: absolute;
        bottom: -40px;
        height: 40px;
        left: 0;
        right: 0
      }
      
      .notifications__wrap:after {
        position: absolute;
        bottom: -10px;
        right: 21px;
        content: '';
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 10px 9.5px 0;
        border-color: #4d4778 transparent transparent transparent
      }
      
      .notifications__wrap_show {
        opacity: 1;
        visibility: visible;
        -webkit-transform: translateY(0px);
        -ms-transform: translateY(0px);
        transform: translateY(0px)
      }
      
      .notifications__main-title {
        text-transform: none;
        margin-bottom: 20px
      }
      
      .notifications__alert {
        z-index: 1;
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        width: 420px;
        padding-left: 20px;
        padding-right: 80px;
        background-color: #4d4778;
        border-radius: 50px;
        overflow: hidden;
        -webkit-transition: .3s;
        -o-transition: .3s;
        transition: .3s
      }
      
      .notifications__alert .notifications__item {
        border-top: none
      }
      
      .notifications__alert_hide {
        opacity: 0;
        width: 0;
        padding-left: 0;
        padding-right: 0
      }
      
      .notifications__item {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        padding-top: 15px;
        padding-bottom: 15px;
        border-top: 1px solid rgba(255, 255, 255, .2)
      }
      
      .notifications__item:last-of-type {
        padding-bottom: 0
      }
      
      .notifications__icon {
        width: 16px;
        position: relative;
        top: -3px
      }
      
      .notifications__text {
        line-height: 16px;
        padding-left: 9px;
        width: -webkit-calc(100% - 16px);
        width: calc(100% - 16px)
      }
      
      .notifications__title {
        font-size: 14px
      }
      
      .notifications__desc {
        font-size: 12px;
        color: #7d779c
      }
      
      .auth {
        padding-top: 100px;
        padding-bottom: 100px
      }
      
      .auth__alerts {
        max-width: 400px;
        margin-left: auto;
        margin-right: auto
      }
      
      .auth__alerts .alert {
        margin-bottom: 50px
      }
      
      .auth__data {
        max-width: 750px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 10px
      }
      
      .auth__lang {
        margin-left: auto
      }
      
      .auth__lang .lang__current {
        margin-left: 0;
        margin-right: 0;
        background: 0 0
      }
      
      .auth__lang .lang__list {
        padding-top: 10px;
        border-radius: 6px
      }
      
      .auth__block {
        width: 100%;
        max-width: 750px;
        margin-left: auto;
        margin-right: auto
      }
      
      .auth__block_main {
        margin-bottom: 30px
      }
      
      .auth__head {
        padding: 30px 50px
      }
      
      .auth__head-title {
        font-size: 20px;
        font-weight: 700;
        text-transform: uppercase;
        width: -webkit-calc(100% - 20px);
        width: calc(100% - 20px)
      }
      
      .auth__drop {
        text-align: right;
        z-index: 3
      }
      
      .auth__body {
        padding: 50px;
        line-height: 25px
      }
      
      .auth__col {
        width: 50%;
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        text-align: center
      }
      
      .auth__col_border {
        border-right: 1px solid #4f4d61
      }
      
      .auth__col:nth-of-type(odd) {
        padding-right: 50px
      }
      
      .auth__col:nth-of-type(even) {
        padding-left: 50px
      }
      
      .auth__main-title {
        line-height: 36px;
        max-width: 260px;
        margin-bottom: 20px;
        margin-top: -3px
      }
      
      .auth__text {
        color: #6d678f;
        line-height: 20px;
        width: 100%;
        margin-bottom: 29px
      }
      
      .auth__text a {
        color: #ffa243
      }
      
      .auth__text a:hover {
        border-color: #ffa243
      }
      
      .auth__btn {
        max-width: 275px
      }
      
      .auth__title {
        font-size: 26px;
        font-weight: 700;
        line-height: 28px;
        margin-top: -2px
      }
      
      .auth__input {
        margin-top: 20px
      }
      
      .auth__id {
        margin-top: 28px;
        margin-bottom: 20px
      }
      
      .auth__foot {
        padding: 50px;
        position: relative
      }
      
      .auth__foot:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 40px;
        background: url(/resources/img/block-shadow.png) repeat-x left top
      }
      
      .auth__sub-title {
        color: #6d678f;
        margin-bottom: 15px
      }
      
      .auth__link {
        font-size: 26px;
        font-weight: 700
      }
      
      .auth__link a:hover {
        border-color: transparent
      }
      
      .auth__link_yellow a {
        color: #ffa243;
        border-color: #ffa243
      }
      
      .auth__link_blue a {
        color: #3a89b6;
        border-color: #3a89b6
      }
      
      .auth__content {
        display: none;
        padding-top: 0;
        padding-left: 50px;
        padding-right: 50px
      }
      
      .auth__content p {
        margin-bottom: 10px
      }
      
      .auth__content p:last-of-type {
        margin-bottom: 0
      }
      
      .goals td strong {
        display: none
      }
      
      .alert {
        display: none;
        position: relative;
        padding: 26px 30px;
        border-radius: 8px;
        -webkit-box-shadow: 0 0 50px #000;
        box-shadow: 0 0 50px #000;
        width: 100%;
        max-width: 100%;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 20px
      }
      
      .alert:last-of-type {
        margin-bottom: 0
      }
      
      .alert_show {
        display: block
      }
      
      .alert_green {
        background-color: #619a1e
      }
      
      .alert_orange {
        background-color: #d25e00
      }
      
      .alert_violet {
        background-color: #4d4778
      }
      
      .alert_red {
        background-color: #c53535
      }
      
      .alert_btns .alert__text {
        max-width: 405px
      }
      
      .alert_btns .alert__btns {
        width: 230px;
        margin-left: auto;
        margin-right: 30px
      }
      
      .alert_btns .alert__btn {
        width: 105px
      }
      
      .alert_btns .alert__btn:nth-of-type(2) {
        margin-left: auto
      }
      
      .alert__icon {
        width: 40px
      }
      
      .alert__text {
        width: -webkit-calc(100% - 40px);
        width: calc(100% - 40px);
        padding-left: 20px;
        padding-right: 15px
      }
      
      .alert__title {
        font-size: 24px;
        line-height: 30px;
        margin-bottom: 2px
      }
      
      .alert__desc {
        opacity: .5
      }
      
      .alert__close {
        position: absolute;
        top: 16px;
        right: 16px;
        cursor: pointer
      }
      
      .alert__close .icon:before {
        opacity: 0
      }
      
      .alert__close .icon:after {
        opacity: .5
      }
      
      .alert__close:hover .icon:after {
        opacity: 1
      }
      
      .messages__item {
        position: relative;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        padding: 26.5px 30px;
        border-radius: 8px;
        -webkit-transition: .3s;
        -o-transition: .3s;
        transition: .3s;
        background-color: #2e2b4a;
        margin-bottom: 20px
      }
      
      .messages__item:last-of-type {
        margin-bottom: 0
      }
      
      .messages__item:hover {
        background-color: rgba(109, 103, 143, .3)
      }
      
      .messages__img {
        width: 32px;
        height: 32px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 50%
      }
      
      .messages__content {
        width: -webkit-calc(100% - 32px);
        width: calc(100% - 32px);
        padding-left: 20px
      }
      
      .messages__data {
        margin-bottom: 1px
      }
      
      .messages__id {
        font-weight: 700;
        color: #ffa243
      }
      
      .messages__date {
        opacity: .5;
        font-size: 12px;
        margin-left: auto
      }
      
      .messages__text {
        white-space: nowrap;
        overflow: hidden;
        max-width: 630px
      }
      
      .messages__status {
        position: absolute;
        bottom: 27px;
        right: 30px;
        width: 16px;
        height: 12px;
        background-image: url(/resources/img/lines-gray.svg);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover
      }
      
      .messages__pagination {
        margin-top: 30px
      }
      
      .messanger__list .scroll-content {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap
      }
      
      .messanger__data {
        margin-left: -17.5px;
        margin-right: -17.5px;
        padding-bottom: 30px
      }
      
      .messanger__data-item {
        width: -webkit-calc(50% - 35px);
        width: calc(50% - 35px);
        margin-left: 17.5px;
        margin-right: 17.5px
      }
      
      .messanger__data-title {
        color: #6d678f;
        text-transform: uppercase;
        margin-bottom: 20px
      }
      
      .messanger__data-btn {
        width: 165px
      }
      
      .messanger__data-btn:nth-of-type(even) {
        margin-left: auto
      }
      
      .messanger__body {
        position: relative;
        padding: 30px;
        margin-left: -30px;
        margin-right: -30px;
        height: 510px
      }
      
      .messanger__body:before,
      .messanger__body:after {
        z-index: 1;
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        height: 40px;
        background: url(/resources/img/block-shadow.png) repeat-x left top
      }
      
      .messanger__body:before {
        top: 0
      }
      
      .messanger__body:after {
        bottom: 0;
        -webkit-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        transform: rotate(180deg)
      }
      
      .messanger__list {
        position: relative;
        z-index: 2;
        width: 100%;
        height: 450px;
        padding-right: 36px
      }
      
      .messanger__list .scroll-content {
        width: 100%
      }
      
      .messanger__item {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        position: relative;
        padding: 30px;
        border-radius: 8px;
        background-color: #2e2b4a;
        margin-bottom: 30px;
        min-width: 325px;
        max-width: 520px
      }
      
      .messanger__item:last-of-type {
        margin-bottom: 0
      }
      
      .messanger__item_left {
        margin-left: auto
      }
      
      .messanger__name {
        color: #ffa243;
        font-weight: 700;
        margin-bottom: 4px
      }
      
      .messanger__name:before {
        content: '';
        display: inline-block;
        vertical-align: middle;
        width: 15px;
        height: 15px;
        position: relative;
        top: -2px;
        background: url(/resources/img/back.svg) no-repeat center;
        margin-right: 6px
      }
      
      .messanger__text {
        line-height: 20px
      }
      
      .messanger__date {
        font-size: 12px;
        opacity: .5;
        margin-top: 10px
      }
      
      .messanger__status {
        position: absolute;
        bottom: 30px;
        right: 30px;
        width: 16px;
        height: 12px;
        background-image: url(/resources/img/lines-gray.svg);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover
      }
      
      .messanger__foot {
        padding-top: 30px
      }
      
      .messanger__answer {
        margin-bottom: 20px
      }
      
      .messanger__input {
        width: -webkit-calc(100% - 235px - 30px);
        width: calc(100% - 235px - 30px)
      }
      
      .messanger__btn {
        width: 235px;
        margin-left: 30px
      }
      
      .answer {
        position: relative;
        border-radius: 50px;
        background-color: #37344c
      }
      
      .answer__content {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        white-space: nowrap;
        overflow: hidden;
        padding: 15px 40px 15px 20px
      }
      
      .answer__title {
        opacity: .5;
        font-weight: 400;
        margin-right: 8px
      }
      
      .answer__close {
        position: absolute;
        right: 20px;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        cursor: pointer
      }
      
      .answer__close .icon:before,
      .answer__close .icon:after {
        opacity: .5;
        background-color: #fff
      }
      
      .answer__close:hover .icon:before,
      .answer__close:hover .icon:after {
        opacity: 1
      }
      
      .footer {
        border-top: 1px solid #333;
        padding-top: 25px;
        padding-bottom: 30px;
        margin-top: auto
      }
      
      .footer__contact {
        display: flex;
        justify-content: center;
        align-items: center
      }
      
      .fc__forsage-aside {
        width: 255px;
        padding: 10px;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-flow: column
      }
      
      .fc__forsage-aside img {
        height: 35px
      }
      
      .fc__forsage-contracts {
        width: 100%;
        padding: 10px;
        height: 100%;
        display: flex;
        flex-flow: column;
        justify-content: space-around;
        align-items: center
      }
      
      .fc__forsage-contract {
        width: 100%;
        height: 40%;
        display: flex;
        flex-flow: column;
        justify-content: space-around;
        align-items: center;
        text-align: center
      }
      
      .fc_soc_list {
        width: 150px;
        height: 25px;
        display: flex;
        flex-flow: row;
        justify-content: center;
        align-items: center
      }
      
      .fc_soc_list a {
        width: 35px;
        height: 35px;
        display: inline-flex;
        justify-content: center;
        align-items: center
      }
      
      .fc__forsage-plfrms a {
        width: 90%;
        height: 90%;
        display: inline-flex;
        flex-flow: column;
        justify-content: space-around;
        align-items: center;
        text-align: center
      }
      
      .fc__forsage-plfrms a i {
        font-size: 25px
      }
      
      .fc_soc_list a:hover {
        border: 1px solid #4f4d61;
        border-radius: 2px
      }
      
      @media(min-width:1011px) {
        .footer__list {
            width: 100%;
            height: 250px;
            display: flex;
            flex-flow: row;
            justify-content: flex-start;
            align-items: center
        }
        .fc__forsage-main {
            height: 100%;
            width: calc(100% - 255px - 20px);
            margin-left: auto;
            display: flex;
            flex-flow: row;
            justify-content: space-between;
            align-items: center
        }
        .fc__forsage-contracts {
            order: 1
        }
        .fc__forsage-plfrms {
            order: 2
        }
        .fc__forsage-aside {
            order: 0;
            display: flex;
            justify-content: space-between;
            align-items: flex-start
        }
        .fc__forsage-plfrms {
            width: 100%;
            height: 100%;
            padding: 10px;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr
        }
      }
      
      @media(max-width:1010px) {
        .footer__list {
            width: 100%;
            display: flex;
            flex-flow: column;
            justify-content: flex-start;
            align-items: center
        }
        .fc__forsage-main {
            width: 100%;
            display: flex;
            flex-flow: column;
            justify-content: flex-start;
            align-items: center
        }
        .fc__forsage-contracts,
        .fc__forsage-plfrms,
        .fc__forsage-aside {
            height: 350px;
            width: 100%
        }
        .fc__forsage-contracts {
            order: 1
        }
        .fc__forsage-plfrms {
            order: 0
        }
        .fc__forsage-aside {
            order: 2;
            display: flex;
            justify-content: space-between;
            align-items: center
        }
        .fc__forsage-plfrms {
            padding: 10px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr
        }
      }
      
      .fc__title {
        font-weight: 700;
        margin-right: 9px;
        text-transform: uppercase
      }
      
      .fc__title,
      .fc__token {
        font-size: 15px
      }
      
      .fc__token {
        color: #6d678f
      }
      
      .popup {
        z-index: 100;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        padding: 65px 15px;
        -webkit-transition: .3s;
        -o-transition: .3s;
        transition: .3s;
        opacity: 0;
        visibility: hidden;
        overflow-y: auto
      }
      
      .popup_show {
        opacity: 1;
        visibility: visible
      }
      
      .popup_sm .popup__wrap {
        padding: 50px;
        max-width: 570px
      }
      
      .popup__wrap {
        z-index: 2;
        position: relative;
        border-radius: 8px;
        background-color: #23203a;
        -webkit-box-shadow: 0 0 50px #000;
        box-shadow: 0 0 50px #000
      }
      
      .popup__wrap:before {
        display: none;
        opacity: .8;
        z-index: -1;
        content: '';
        position: absolute;
        top: -255px;
        left: 50%;
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
        width: 534px;
        height: 255px;
        background-repeat: no-repeat;
        background-position: center
      }
      
      .popup-Code .popup__bg {
        background-color: none
      }
      
      .popup-Code .popup__wrap {
        width: 80%;
        height: 80%;
        overflow: scroll
      }
      
      .popup__close {
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer
      }
      
      .popup__close:hover .icon:before {
        opacity: 0
      }
      
      .popup__close:hover .icon:after {
        opacity: 1
      }
      
      .popup__img {
        height: 100px;
        margin-top: -100px;
        margin-bottom: 30px;
        position: relative
      }
      
      .popup__title {
        font-size: 24px;
        line-height: 30px;
        text-align: center;
        margin-bottom: 27px
      }
      
      .popup__btn {
        max-width: 275px;
        margin-left: auto;
        margin-right: auto
      }
      
      .popup__text {
        font-size: 20px;
        line-height: 24px;
        max-width: 380px;
        margin-top: 27px;
        text-align: center;
        margin-left: auto;
        margin-right: auto
      }
      
      .popup__text a {
        color: #ffa243;
        border-color: #ffa243
      }
      
      .popup__text a:hover {
        border-color: transparent
      }
      
      .popup__copy {
        margin-top: 30px;
        max-width: 275px;
        margin-left: auto;
        margin-right: auto
      }
      
      .popup__bg {
        z-index: 1;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, .65)
      }
      
      .popup_light-violet .popup__wrap:before {
        display: block;
        background-image: url(/resources/img/light-violet.png)
      }
      
      .popup_light-blue .popup__wrap:before {
        display: block;
        background-image: url(/resources/img/light-blue.png)
      }
      
      .main {
        margin-bottom: 20px
      }
      
      .m-nav {
        display: none
      }
      
      .alerts-list .alert {
        margin-bottom: 20px
      }
      
      .scrollbar-track-y {
        opacity: 1;
        display: block !important;
        visibility: visible !important;
        background-color: #3e3967;
        border-radius: 50px;
        width: 6px
      }
      
      .scrollbar-track-y .scrollbar-thumb {
        width: 100%;
        border-radius: 50px;
        background-color: #6b668c
      }
      
      @-webkit-keyframes pulse1 {
        0% {
            -webkit-transform: translate(-50%, -50%) scale(0);
            transform: translate(-50%, -50%) scale(0)
        }
        100% {
            opacity: 0;
            -webkit-transform: translate(-50%, -50%) scale(3);
            transform: translate(-50%, -50%) scale(3)
        }
      }
      
      @keyframes pulse1 {
        0% {
            -webkit-transform: translate(-50%, -50%) scale(0);
            transform: translate(-50%, -50%) scale(0)
        }
        100% {
            opacity: 0;
            -webkit-transform: translate(-50%, -50%) scale(3);
            transform: translate(-50%, -50%) scale(3)
        }
      }
      
      @-webkit-keyframes pulse2 {
        0% {
            -webkit-transform: translate(-50%, -50%) scale(0);
            transform: translate(-50%, -50%) scale(0)
        }
        100% {
            opacity: 0;
            -webkit-transform: translate(-50%, -50%) scale(4);
            transform: translate(-50%, -50%) scale(4)
        }
      }
      
      @keyframes pulse2 {
        0% {
            -webkit-transform: translate(-50%, -50%) scale(0);
            transform: translate(-50%, -50%) scale(0)
        }
        100% {
            opacity: 0;
            -webkit-transform: translate(-50%, -50%) scale(4);
            transform: translate(-50%, -50%) scale(4)
        }
      }
      
      .color-yellow {
        color: #ffa243
      }
      
      .hidden-lg {
        display: none
      }
      
      .news__item {
        position: relative;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        padding: 26.5px 30px;
        border-radius: 8px;
        -webkit-transition: .3s;
        -o-transition: .3s;
        transition: .3s;
        background-color: #2e2b4a;
        margin-bottom: 20px
      }
      
      .news__item:last-of-type {
        margin-bottom: 0
      }
      
      .news__item:hover {
        background-color: rgba(109, 103, 143, .3)
      }
      
      .news__content {
        width: -webkit-calc(100% - 32px);
        width: calc(100% - 32px);
        padding-right: 20px
      }
      
      .news_share {
        width: 32px;
        height: 32px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        margin-left: auto
      }
      
      .news__data {
        margin-bottom: 1px
      }
      
      .news__pencil {
        text-align: right;
        position: relative;
        bottom: -30px;
        right: 15px;
        z-index: 3
      }
      
      .news__pencil>a {}
      
      .news-history {
        margin-top: 15px
      }
      
      .news-history>a {
        display: block;
        border: 1px solid #656375;
        padding: 10px;
        margin-bottom: 5px;
        border-radius: 3px
      }
      
      .news-history>a>span {
        float: right
      }
      
      .news__id {
        font-weight: 1700;
        color: #ffa243;
        padding-bottom: 8px
      }
      
      .news__date {
        opacity: .5;
        font-size: 12px;
        padding: 2px 0 2px 2px
      }
      
      .news__view {
        opacity: .5;
        font-size: 12px;
        margin-top: 10px;
        padding: 2px 0 2px 2px
      }
      
      .news__text {
        max-width: calc(100% - 5px)
      }
      
      .news__text p {
        line-height: 1.035
      }
      
      .news__stat_one {
        font-size: 12px
      }
      
      .webinar__lang {
        position: relative;
        min-height: 80px;
        min-width: 86px;
        padding-left: 40px;
        padding-right: 40px;
        margin-left: auto
      }
      
      .webinar__current__lang img {
        width: 26px;
        height: 26px
      }
      
      .webinar__current__lang {
        z-index: 2;
        position: relative;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        width: 86px;
        height: 80px
      }
      
      .webinar__lang:hover {
        border: 1px solid #302b4a;
        -webkit-box-shadow: 0 0 40px rgba(0, 0, 0, .35);
        box-shadow: 0 0 40px rgba(0, 0, 0, .35);
        background-color: #231f3a
      }
      
      .webinar__item {
        position: relative;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        padding: 26.5px 30px;
        border-radius: 8px;
        -webkit-transition: .3s;
        -o-transition: .3s;
        transition: .3s;
        background-color: #2e2b4a;
        margin-bottom: 20px
      }
      
      .webinar__item:last-of-type {
        margin-bottom: 0
      }
      
      .webinar__item:hover {
        background-color: rgba(109, 103, 143, .3)
      }
      
      .webinar__content {
        width: -webkit-calc(100% - 32px);
        width: calc(100% - 32px);
        padding-left: 20px
      }
      
      .webinar__content div:not(:last-child) {
        margin-bottom: 10px
      }
      
      .webinar__id {
        font-weight: 1700;
        color: #ffa243
      }
      
      .webinar__date {
        opacity: .5;
        font-size: 12px;
        margin-left: auto
      }
      
      .webinar__type {
        width: -webkit-calc(100% - 32px);
        width: calc(100% - 32px)
      }
      
      .webinar__btn {
        height: 40px;
        min-width: 120px;
        width: 40%;
        margin-left: 20px;
        margin-bottom: 10px
      }
      
      .webinar__btn img {
        height: 20px;
        width: 20px;
        margin-right: 15px
      }
      
      .webinar__btn img:hover {
        background: #ffff
      }
      
      .webinar__buttons {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        flex-flow: row;
        margin-top: 20px
      }
      
      .webinar__lost {
        opacity: .5
      }
      
      .webinar__pack {
        float: right;
        position: absolute;
        left: 5px;
        top: 5px;
        padding: 7px 10px
      }
      
      .webinar-history {
        margin-top: 15px
      }
      
      .webinar-history>a {
        display: block;
        border: 1px solid #656375;
        padding: 10px;
        margin-bottom: 5px;
        border-radius: 3px
      }
      
      .webinar-history>a>span {
        float: right
      }
      
      .modal-info {
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        color: #ffff;
        height: 100%
      }
      
      .modal-page-number {
        display: flex;
        flex-flow: row;
        justify-content: center;
        align-items: center
      }
      
      .modal-page-block_active {
        background-color: #ffff;
        color: #6149e1;
        margin: 0 10px;
        border: 1px solid #6149e1;
        padding: 5px 12.5px;
        font: 12pt Arial;
        text-decoration: none;
        border-radius: 50px
      }
      
      .modal-page-block {
        margin: 0 10px;
        background-color: #6149e1;
        border: 1px solid #6149e1;
        padding: 5px 12.5px;
        font: 12pt Arial;
        text-decoration: none;
        border-radius: 50px
      }
      
      .modal-info__content {
        height: auto;
        margin: 5px auto;
        background-color: rgba(0, 0, 0, .4);
        background: 0 0
      }
      
      .modal-info-block {
        display: none;
        background: 0 0;
        line-height: 25px
      }
      
      .modal-info-block:first-child {
        display: flex
      }
      
      .modal-info a {
        color: #fff
      }
      
      .modal-info_steep {
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        align-items: center;
        text-align: center
      }
      
      .modal-info_steep>a {
        position: relative;
        background-color: #6149e1;
        padding: 10px 0;
        width: 100%;
        text-align: center;
        font: 11pt Arial;
        text-decoration: none;
        border-radius: 50px;
        margin: 0 10px
      }
      
      .modal-info_steep__next {
        margin-left: auto
      }
      
      @media(min-width:1011px) {
        .modal-1 {
            height: 450px;
            width: 50%;
            background: url(/img/lion-logo.svg) #23203a center no-repeat;
            background-size: 50%;
            border-radius: 9px;
            padding: 30px
        }
      }
      
      @media(max-width:1010px) {
        .modal-1 {
            height: 500px;
            width: 80%;
            background: url(/img/lion-logo.svg) #23203a center no-repeat;
            background-size: 50%;
            border-radius: 9px;
            padding: 30px
        }
      }
      
      @media(max-width:500px) {
        .modal-1 {
            height: 540px;
            width: 90%;
            background: url(/img/lion-logo.svg) #23203a center no-repeat;
            background-size: 50%;
            border-radius: 9px;
            padding: 30px
        }
      }
      
      .error-page-container {
        width: 100%;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        background: #23203a;
        border-radius: 8px
      }
      
      .error-page-title {
        color: #ffa243;
        font-size: 100px;
        margin-bottom: 20px
      }
      
      .error-page-desc {
        text-align: center
      }
      
      @media(min-width:751px) {
        .error-page-container {
            height: 800px
        }
        .error-page-title {
            font-size: 100px
        }
      }
      
      @media(max-width:700px) {
        .error-page-container {
            height: 400px
        }
        .error-page-title {
            font-size: 75px
        }
      }
      
      .buy__dots_xGold {
        min-height: 130px;
        display: flex;
        flex-flow: column;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center
      }
      
      .buy__dots_xGold-1,
      .buy__dots_xGold-2,
      .buy__dots_xGold-3,
      .buy__dots_xGold-4 {
        width: 100%;
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: center
      }
      
      .buy__dot_xGold:last-child {
        margin-right: 0 !important
      }
      
      .buy__dot_xGold:first-child {
        margin-left: 0 !important
      }
      
      .buy__dots_xGold-4 .buy__dot_xGold:not(:last-child) {
        margin-right: 1px
      }
      
      .xGold-item {
        width: 100%;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        background: #1e1c2f;
        border-bottom-right-radius: 8px;
        border-bottom-left-radius: 8px;
        padding: 10px 2.5px 5px;
        margin-top: -5px;
        min-height: 140px
      }
      
      .buy_level_n-available {
        color: #fff;
        opacity: .3
      }
      
      .upgrade-level_available {
        cursor: pointer;
        color: #ffa243
      }
      
      .upgrade-level_available i {
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%
      }
      
      .upgrade-level_available i span {
        font-size: 16px;
        line-height: 14px;
        font-weight: 700;
        font-family: neuronangled;
        margin-top: 10px
      }
      
      .error_btn {
        margin-top: 20px;
        width: 30%
      }
      
      .buy_level_dots {
        width: 100%;
        display: flex;
        flex-flow: column;
        justify-content: space-around;
        align-items: center;
        font-size: 25px;
        margin-top: 10px
      }
      
      .upgrage__dots_xGold {
        width: 100%;
        max-width: 485px;
        margin-left: auto;
        margin-right: auto;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center
      }
      
      .upgrage__dot_xGold-lvl-1 {
        width: 80px;
        height: 80px
      }
      
      .upgrage__dot_xGold-lvl-2 {
        width: 70px;
        height: 70px
      }
      
      .upgrage__dot_xGold-lvl-3 {
        position: relative;
        width: 30px;
        height: 30px
      }
      
      .upgrage__dot_xGold-lvl-4 {
        position: relative;
        width: 20px;
        height: 20px
      }
      
      .upgrage__dot_xGold {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        border-radius: 50%;
        border: 1px solid #8395af;
        background-color: #16386a;
        margin-top: 30px;
        position: relative
      }
      
      .upgrage__dot_xGold-lvl-1:before,
      .upgrage__dot_xGold-lvl-2:before,
      .upgrage__dot_xGold-lvl-3:before,
      .upgrage__dot_xGold-lvl-4:before {
        content: '';
        position: absolute;
        height: 70px;
        bottom: 85%;
        left: 38px;
        border-left: 1px dashed #6d678f
      }
      
      .upgrage__dot_xGold-lvl-2:before {
        height: 50px;
        margin-bottom: 3px
      }
      
      .upgrage__dot_xGold-lvl-3:before {
        height: 40px;
        margin-bottom: 3px
      }
      
      .upgrage__dot_xGold-lvl-4:before {
        height: 30px;
        margin-bottom: 3px
      }
      
      .upgrage__dot_xGold-lvl-3:nth-of-type(even),
      .upgrage__dot_xGold-lvl-3:nth-of-type(odd) {
        z-index: 1
      }
      
      .upgrage__dot_xGold-lvl-2:nth-of-type(even),
      .upgrage__dot_xGold-lvl-2:nth-of-type(odd) {
        z-index: 2
      }
      
      .upgrage__dot_xGold-lvl-1:nth-of-type(1),
      .upgrage__dot_xGold-lvl-1:nth-of-type(2) {
        z-index: 3;
        margin-top: 50px
      }
      
      .upgrage__dot_xGold-lvl-1:nth-of-type(1):before {
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        margin-left: 50px
      }
      
      .upgrage__dot_xGold-lvl-1:nth-of-type(2):before {
        -webkit-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        transform: rotate(-45deg);
        margin-left: -50px
      }
      
      .upgrage__dot_xGold-lvl-2:nth-of-type(odd):before {
        -webkit-transform: rotate(40deg);
        -ms-transform: rotate(40deg);
        transform: rotate(40deg);
        margin-left: 24px
      }
      
      .upgrage__dot_xGold-lvl-2:nth-of-type(2n):before {
        -webkit-transform: rotate(-40deg);
        -ms-transform: rotate(-40deg);
        transform: rotate(-40deg);
        margin-left: -36px
      }
      
      .upgrage__dot_xGold-lvl-3:nth-of-type(odd):before {
        -webkit-transform: rotate(35deg);
        -ms-transform: rotate(35deg);
        transform: rotate(35deg);
        margin-left: -10px
      }
      
      .upgrage__dot_xGold-lvl-3:nth-of-type(even):before {
        -webkit-transform: rotate(-35deg);
        -ms-transform: rotate(-35deg);
        transform: rotate(-35deg);
        margin-left: -40px
      }
      
      .upgrage__dot_xGold-lvl-4:nth-of-type(odd):before {
        -webkit-transform: rotate(20deg);
        -ms-transform: rotate(20deg);
        transform: rotate(20deg);
        margin-left: -25px
      }
      
      .upgrage__dot_xGold-lvl-4:nth-of-type(even):before {
        -webkit-transform: rotate(-20deg);
        -ms-transform: rotate(-20deg);
        transform: rotate(-20deg);
        margin-left: -35px
      }
      
      .upgrade__dots_xGold_area-1,
      .upgrade__dots_xGold_area-2,
      .upgrade__dots_xGold_area-3,
      .upgrade__dots_xGold_area-4 {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center
      }
      
      .upgrade__dots_xGold_area-1 a:nth-of-type(1) {
        margin-right: 21.5%
      }
      
      .upgrade__dots_xGold_area-1 a:nth-of-type(2) {
        margin-left: 21.5%
      }
      
      .upgrade__dots_xGold_area-2 a:nth-of-type(1),
      .upgrade__dots_xGold_area-2 a:nth-of-type(3) {
        margin-right: 5%
      }
      
      .upgrade__dots_xGold_area-2 a:nth-of-type(2),
      .upgrade__dots_xGold_area-2 a:nth-of-type(4) {
        margin-left: 5%
      }
      
      .upgrade__dots_xGold_area-2 a:nth-of-type(2) {
        margin-right: 10%
      }
      
      .upgrade__dots_xGold_area-2 a:nth-of-type(3) {
        margin-left: 10%
      }
      
      .upgrade__dots_xGold_area-3 a:nth-of-type(1) {
        margin-right: 3%;
        margin-left: -2%
      }
      
      .upgrade__dots_xGold_area-3 a:nth-of-type(2),
      .upgrade__dots_xGold_area-3 a:nth-of-type(6) {
        margin-left: 3%;
        margin-right: 3%
      }
      
      .upgrade__dots_xGold_area-3 a:nth-of-type(3),
      .upgrade__dots_xGold_area-3 a:nth-of-type(7) {
        margin-left: 3%;
        margin-right: 3%
      }
      
      .upgrade__dots_xGold_area-3 a:nth-of-type(4) {
        margin-right: 8%;
        margin-left: 3%
      }
      
      .upgrade__dots_xGold_area-3 a:nth-of-type(5) {
        margin-left: 8%;
        margin-right: 3%
      }
      
      .upgrade__dots_xGold_area-3 a:nth-of-type(8) {
        margin-left: 3%;
        margin-right: -2%
      }
      
      .upgrade__dots_xGold_area-4 a:nth-of-type(1) {
        margin-right: 1%;
        margin-left: -5%
      }
      
      .upgrade__dots_xGold_area-4 a:nth-of-type(8) {
        margin-left: 1%;
        margin-right: 6%
      }
      
      .upgrade__dots_xGold_area-4 a:nth-of-type(9) {
        margin-right: 1%;
        margin-left: 6%
      }
      
      .upgrade__dots_xGold_area-4 a:nth-of-type(16) {
        margin-left: 1%;
        margin-right: -5%
      }
      
      .upgrade__dots_xGold_area-4 a:nth-of-type(2),
      .upgrade__dots_xGold_area-4 a:nth-of-type(10) {
        margin-right: 1%;
        margin-left: 1%
      }
      
      .upgrade__dots_xGold_area-4 a:nth-of-type(3),
      .upgrade__dots_xGold_area-4 a:nth-of-type(11) {
        margin-left: 1%;
        margin-right: 1%
      }
      
      .upgrade__dots_xGold_area-4 a:nth-of-type(4),
      .upgrade__dots_xGold_area-4 a:nth-of-type(12) {
        margin-right: 1%;
        margin-left: 1%
      }
      
      .upgrade__dots_xGold_area-4 a:nth-of-type(5),
      .upgrade__dots_xGold_area-4 a:nth-of-type(13) {
        margin-left: 1%;
        margin-right: 1%
      }
      
      .upgrade__dots_xGold_area-4 a:nth-of-type(6),
      .upgrade__dots_xGold_area-4 a:nth-of-type(14) {
        margin-right: 1%;
        margin-left: 1%
      }
      
      .upgrade__dots_xGold_area-4 a:nth-of-type(7),
      .upgrade__dots_xGold_area-4 a:nth-of-type(15) {
        margin-left: 1%;
        margin-right: 1%
      }
      
      .upgrade__dots_xGold_area-3 {}
      
      .upgrade__dots_xGold_area-4 {}
      
      .upgrage__dot_xGold_selected {
        background-color: #00b0c2;
        border-color: #00b0c2
      }
      
      .upgrage__dot_xGold-up {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        position: absolute;
        top: 0;
        right: -10px;
        width: 32px;
        height: 32px;
        -webkit-transition: .3s;
        -o-transition: .3s;
        transition: .3s;
        background-color: #f01b28;
        border-radius: 50%;
        cursor: pointer
      }
      
      .upgrage__dot_xGold-up:hover {
        -webkit-transform: scale(.8);
        -ms-transform: scale(.8);
        transform: scale(.8)
      }
      
      .upgrage__dot_xGold-count {
        text-align: center
      }
      
      .upgrage__dot_xGold-count .icon {
        margin-bottom: 3px
      }
      
      .upgrage__dot_xGold-count var {
        font-size: 20px;
        font-weight: 700;
        color: #23203a;
        display: block
      }
      
      .upgrage__dot_xGold-lvl-2 .upgrage__dot_xGold-count i {
        margin-bottom: 2px
      }
      
      .upgrage__dot_xGold-lvl-2 .upgrage__dot_xGold-count var {
        font-size: 15px;
        font-weight: 700;
        color: #23203a;
        display: block
      }
      
      .upgrage__dot_xGold-lvl-3 .upgrage__dot_xGold-count i,
      .upgrage__dot_xGold-lvl-4 .upgrage__dot_xGold-count i {
        margin-bottom: 0
      }
      
      .reg_mob_app_container {
        background-color: #23203a;
        width: 100%;
        border-radius: 6px;
        margin: 20px 0
      }
      
      @media(min-width:501px) {
        .reg_mob_app_container {
            display: flex;
            flex-flow: row;
            justify-content: space-around;
            align-items: center
        }
      }
      
      @media(max-width:500px) {
        .reg_mob_app_container {
            display: flex;
            flex-flow: column;
            justify-content: space-around;
            align-items: center
        }
      }
      
      .reg-app-os a:first-child {
        height: 40px;
        width: 50%;
        border-radius: 7px 0 0 7px;
        border: none;
        background-color: #552e7b;
        font-size: 16px;
        color: #fff;
        cursor: pointer;
        transition: .2s linear;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        border-right: 1px solid #ffff
      }
      
      .reg-app-os a:last-child {
        height: 40px;
        width: 50%;
        border-radius: 0 7px 7px 0;
        border: none;
        background-color: #552e7b;
        font-size: 16px;
        color: #fff;
        cursor: pointer;
        transition: .2s linear;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        text-decoration: none
      }
      
      .reg-app-os a:hover {
        background: #fff;
        color: #552e7b
      }
      
      .btn-reg-video {
        height: 40px;
        width: 100%;
        border-radius: 7px;
        border: none;
        background-color: #552e7b;
        font-size: 16px;
        color: #fff;
        cursor: pointer;
        margin-top: 8px;
        transition: .2s linear;
        display: flex;
        flex-flow: row;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        display: none
      }
      
      .btn-reg-video i {
        margin-right: 10px
      }
      
      .btn-reg-video:hover {
        background: #fff;
        color: #552e7b
      }
      
      .reg_mob_app {
        display: flex;
        flex-flow: row;
        justify-content: center;
        align-items: center
      }
      
      .reg_mob_app img {
        width: 50px;
        height: 50px;
        margin-bottom: 12px;
        background-color: #23203a
      }
      
      .reg_mob_app {
        display: flex;
        flex-flow: column;
        justify-content: space-around;
        align-items: center;
        margin: 0 20px;
        width: 150px;
        height: 175px
      }
      
      .reg_title_app {
        color: #fff;
        font-size: 20px
      }
      
      .reg-app-os {
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: center;
        width: 100%
      }
      
      .view_guest_matrix {
        position: absolute;
        width: 125px;
        left: 50%;
        right: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: -25px;
        background: #1e1c2f;
        border: 1px solid #333;
        border-radius: 8px;
        padding: 5px 10px;
        color: #ffa243;
        z-index: 2
      }
      
      .view_guest_matrix i {
        margin-right: 10px;
        margin-top: -2.5px
      }
      
      .view_guest_matrix a {
        color: #ffa243;
        border: 0
      }
      
      @media screen and (max-width:767px) {
        .buy__item {
            width: -webkit-calc(100%/4 - 27px);
            width: calc(100%/4 - 27px)
        }
      }
      
      @media screen and (max-width:590px) {
        .buy__item {
            width: -webkit-calc(100%/2 - 27px);
            width: calc(100%/2 - 27px)
        }
        .binary,
        .ternary {
            width: 45% !important
        }
        .row.datarow>.col {
            padding: 0 8px
        }
      }
      
      @media screen and (min-width:320px) and (max-width:1100px){
        #home-page .participant_in .stats-top_sum{font-size:25px;}
      }
      #login-page .def-green {
        background-color: #8bc34a;
      }
      #dash-page .custom-border {
        position: relative;
        border: 1px solid #F0B90B;
        border-radius: 9px;
        box-shadow: inset 1.5px 1.5px 1.5px rgba(0, 0, 0, .25);
      }
      
      #countdown_dashboard .row .dash-glob {
        padding: 0 24px;
      }
      #countdown_dashboard .row {
        justify-content: center;
      }
      h4.matrix-name {
        color: #f2de55;
        font-size: 25px;
        margin-bottom: 26px !important;
      }
      
      #dash-page #countdown_dashboard {
        display: block;
        margin: 10px auto 0;     
        padding:45px 30px 40px;    
        background-image: linear-gradient(180deg,#F8D12F 0%,#F0B90B 100%);;
      }
      #dash-page #countdown_dashboard .dash-glob {
        border-left: none;
        text-align: center; 
      }
      #dash-page#countdown_dashboard .dash-glob.first-dash-glob {
          margin-left: 0;
          border-left: none; 
      }
      #dash-page #countdown_dashboard .dash-glob .dash {
          padding-bottom: 0;
          position: relative;
          width: 100%;
          opacity: 1; 
      }
      #dash-page #countdown_dashboard .dash-glob .dash .digit {
        color: #FFFFFF;
        font-size: 30px;
        font-weight: 500;
        display: inline-block;
        overflow: hidden;
        text-align: center;
        height: 30px;
        line-height: 30px;
        position: relative;
        vertical-align: middle;
        opacity: 1;
      }
      #dash-page #countdown_dashboard .dash-glob .dash .text-right {
        color: #FFFFFF;
        font-size: 1em;
        font-weight: 400;
        display: block;
        clear: both;
        overflow: hidden;
        text-align: center;
        height: auto;
        line-height: 2em;
        position: relative;
        vertical-align: middle; 
        text-align:center !important; 
      }
      #dash-page #countdown_dashboard .text-news {
        color: #FFFFFF;
        font-weight: 400;
        font-size: 50px;
        margin: 20px 0; 
      }
      #countdown_dashboard .text-news .point {
          color: #fff; 
      }
      `}</style>
    )
}