
export default function SlotCSS({isGlobal}) {

    return (
        <style jsx global={isGlobal}>{`
      /**styles/auth.main.css**/
      .i {
        border: 1px solid red
    }
    
    body {
        position: static
    }
    
    h3>small {
        font-size: 50%;
        margin-top: 7px
    }
    
    .wrapper {
        width: 100%;
        border-radius: 7px;
        padding: 100px 0 0;/*
        background: url(/resources/img/bgwithtiger.jpg) no-repeat center;*/
        height: 100vh;
        background-size: cover
    }
    
    .text-center {
        text-align: center
    }
    
    .wrapper>.container {
        border-radius: inherit;
        width: 100%
    }
    
    a {
        color: #fff
    }
    
    a:hover {
        color: #f5f5f5;
        text-decoration: none
    }
    
    .alert {
        position: relative;
        bottom: -20px;
        width: 90%;
        margin: 0 auto
    }
    
    .auth-lang {
        position: relative;
        width: 100%;
        bottom: -10px;
        margin-left: auto;
        margin-right: auto;
        min-width: 450px;
        padding-right: 25px;
        text-align: right
    }
    
    .logo {
        text-align: center;
        position: relative;
        z-index: 1
    }
    
    .logo img {
        margin-top: 40px;
        margin-bottom: 0;
        max-width: 500px;
        width: 100%
    }
    
    .logincontainer {
        max-width: 400px
    }
    
    .auth-form {
        text-align: center
    }
    
    .auth-label {
        color: #fff
    }
    
    .registercontainer {
        max-width: 400px;
        margin-top: 40px
    }
    
    .auth-form-input,
    .auth-form-btn {
        min-width: 350px;
        white-space: nowrap;
        border-radius: 6px;
        text-align: center;
        border: none;
        width: 35%;
        padding: 10px 25px;
        color: inherit
    }
    
    .auth-form-input {
        font-size: 16px !important;
        border: 0 !important;
        background: #fff !important;
        outline: none !important;
        color: #000 !important;
        box-shadow: none !important;
        margin: 20px 0 11px !important;
        height: 50px !important;
        border-radius: 25px !important
    }
    
    .auth-form-col .def-btn {
        margin: 0 auto;
        min-height: 52px;
        line-height: 52px;
        font-size: 1rem;
        min-width: 100%;
        border-radius: 25px
    }
    
    .def-btn.def-blue {
        background-color: #363636;
        border: none
    }
    
    .def-btn.def-blue:hover {
        background-color: #000
    }
    
    .auth-form-label {
        margin-bottom: 20px;
        display: block;
        font-size: 16px;
        text-transform: uppercase
    }
    
    .auth-break {
        width: 30px;
        border-radius: 3px;
        border: 3px solid #fff;
        background: #fff;
        margin: 20px auto 15px
    }
    
    .auth-form-col {
        text-align: center;
        max-width: 400px;
        margin: 25px auto 0
    }
    
    .auth-reg-link a {
        margin: 12px 0 0;
        display: inline-block;
        font-size: 15px;
        text-transform: uppercase;
        font-weight: 700;
        opacity: .5
    }
    
    .auth-reg-link p {
        font-size: 12px
    }
    
    .auth-reg-link {
        margin-top: 35px
    }
    
    .auth-reg-link a:hover {
        color: #fff
    }
    
    .reg-form {
        text-align: center
    }
    
    .reg-form-upline {
        background: 0 0;
        border: 1px solid #eee;
        border-radius: 6px;
        text-align: center;
        width: 200px;
        padding: 5px 15px;
        font-size: 20pt;
        color: inherit;
        outline: none
    }
    
    .reg-form-btn {
        font-weight: 500;
        display: block;
        background: #00b0c2;
        padding: 10px;
        border-radius: 6px;
        margin: 10px auto;
        border: 0;
        width: 50%;
        min-width: 350px;
        white-space: nowrap;
        color: #fff
    }
    
    .reg-form-btn:hover {
        background: #00a6b7
    }
    
    .reg-form-btn:active {
        background: #0698a7
    }
    
    .reg-info {
        text-align: center;
        margin-top: 25px;
        border-top: 1px solid #29abe2
    }
    
    .reg-info a {
        display: inline-block;
        border-radius: 3px;
        margin: 5px
    }
    
    .reg-info>div {
        border-right: 1px solid #29abe2
    }
    
    .reg-info>div:last-child {
        border-right: 0
    }
    
    @media(max-width:770px) {
        .reg-info>div {
            border-right: 0
        }
    }
    
    .reg-auth-link {
        margin-top: 25px
    }
    
    .reg-auth-link a {
        font-size: 13pt
    }
    
    .await-confirmation {
        width: 90%;
        margin: 0 auto;
        background: rgba(0, 0, 0, .1);
        padding: 10px;
        border-radius: 20px;
        font-weight: 500
    }
    
    .guide {
        margin: 1px -15px 0;
        border-bottom-left-radius: inherit;
        border-bottom-right-radius: inherit;
        padding: 25px;
        text-align: justify;
        border-top: 1px solid rgba(0, 0, 0, .15);
        background-color: rgba(0, 0, 0, .1)
    }
    
    .guide a {
        color: #009fff
    }
    
    .guide-img {
        text-align: center
    }
    
    .guide-img img {
        margin: 15px auto;
        width: 90%;
        max-width: 250px
    }
    
    .guide-tip {
        text-align: justify;
        color: #eee;
        font-size: 11pt;
        line-height: 20px;
        margin-bottom: 15px
    }
    
    .guide-table {
        width: 100%
    }
    
    .guide-table td {
        border: 1px solid silver;
        padding: 3px 9px;
        margin-top: 15px
    }
    
    .reg-form__btn-comment {
        margin: 25px auto auto;
        text-align: center;
        display: none
    }
    
    .reg-form__btn-comment a {
        color: #0080cc
    }
    
    button.def-btn {
        border: 0;
        outline: none
    }
    
    .popup-trust_wrapper {
        max-width: 500px;
        padding: 0;
        background-color: transparent;
        display: none;
        overflow: hidden
    }
    
    .popup-auth {
        border-radius: 12px;
        background-color: #fff;
        padding: 30px
    }
    
    .popup-trust_subject_icon img {
        width: 80px
    }
    
    .popup-trust_subject {
        margin-bottom: 30px
    }
    
    .popup-trust_content {
        font-size: 15px;
        line-height: 23px;
        color: #444
    }
    
    .popup-auth .def-btn {
        margin: 30px 0;
        min-height: 52px;
        line-height: 52px;
        font-size: 1rem;
        min-width: 100%
    }
    
    .popup-trust_subject_icon {
        text-align: center
    }
    
    .fancybox-close-small {
        background: 0 0 !important
    }
    
    @media screen and (min-width:320px) and (max-width:767px) {
        .wrapper {/*
            margin-top: 130px;*/
            max-width: 96%;
            padding: 30px
        }
        .auth-form-col .def-btn {
            min-height: 62px;
            line-height: 62px;
            padding: 0
        }
        .auth-form-input,
        .auth-form-btn {
            min-width: inherit
        }
    }
    
    @media screen and (max-width:1200px) {
        .wrapper {/*
            margin-top: 130px*/
        }
        .header-wrap {
            justify-content: center
        }
        .header-wrap .header-logo {
            margin-right: 0
        }
    }
      `}</style>
    )
}