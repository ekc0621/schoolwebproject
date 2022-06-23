import React from "react";

export default function yellowbar(){
    return(
        <div className = "yellowbar">
            <div className="main-menu">
                <h1 className="ABC_logo">
                    ABC-MART
                </h1>
                {/* <div className="drop_down">                 */}
                    <ul className="drop">
                        <li className = "sub">
                            <a href="https://abcmartkorea.saramin.co.kr/main/index" className="rec">RECRUIT</a>
                        </li>
                        <li className = "sub">
                            SUPPORT
                            <ul className="sup_sub">
                                <li>
                                    <a href="http://www.abcmartkorea.com/%ec%98%a4%ec%8b%9c%eb%8a%94%ea%b8%b8/">고객센터 & 오시는길</a>
                                </li>
                                <li>
                                    <a href="http://www.abcmartkorea.com/%ec%98%81%ec%83%81%ec%a0%95%eb%b3%b4%ec%b2%98%eb%a6%ac%ea%b8%b0%ea%b8%b0-%ec%9a%b4%ec%98%81%e2%88%99%ea%b4%80%eb%a6%ac%eb%b0%a9%ec%b9%a8/">영상정보처리기기-운영∙관리방침</a>
                                </li>
                                <li>
                                    <a href="https://www.abcmartkorea.com/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4-%EC%B2%98%EB%A6%AC%EB%B0%A9%EC%B9%A8/">개인정보 처리방침</a>
                                </li>
                            </ul>
                        </li>
                        <li className = "sub">
                            STORE
                            <ul className="stor_sub">
                                <li>
                                    <a href="http://www.abcmartkorea.com/%ea%b4%91%ea%b3%a0/">광고</a>
                                </li>
                                <li>
                                    <a href="http://www.abcmartkorea.com/%eb%b3%b4%eb%8f%84%ec%9e%90%eb%a3%8c/">보도자료</a>
                                </li>
                            </ul>
                        </li>
                        <li className = "sub">                            
                            MEDIA
                            <ul className="med_sub">
                                <li>
                                    <a href="http://www.abcmartkorea.com/%eb%a7%a4%ec%9e%a5%ec%a0%95%eb%b3%b4/">매장정보</a>
                                </li>
                                <li>
                                    <a href="https://www.a-rt.com/board/store?track=W0008">매장찾기</a>
                                </li>
                            </ul>
                        </li>
                        <li className = "sub">
                            COMPANY
                            <ul className="com_sub">
                                <li>
                                    <a href = "http://www.abcmartkorea.com/%ed%9a%8c%ec%82%ac%ec%86%8c%ea%b0%9c/">회사소개</a>
                                </li>
                                <li>
                                    <a href="http://www.abcmartkorea.com/ceo-%eb%a9%94%ec%8b%9c%ec%a7%80/">CEO 메시지</a>
                                </li>
                                <li>
                                    <a href="http://www.abcmartkorea.com/%ed%9a%8c%ec%82%ac%ec%97%b0%ed%98%81/">회사연혁</a>
                                </li>
                                <li>
                                    <a href="http://www.abcmartkorea.com/%ec%82%ac%ed%9a%8c%ea%b3%b5%ed%97%8c%ed%99%9c%eb%8f%99/">사회공헌활동</a>
                                </li>
                                <li>
                                    <a href="http://www.abcmartkorea.com/%ec%9e%ac%eb%ac%b4%ec%83%81%ed%83%9c%ed%91%9c/">재무상태표</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                {/* </div> */}
            </div>
        </div>
    )
}