import React from "react";

export default function yellowbar(){
    return(
        <div className = "yellowbar">
            <div className="ABC_logo">ABC-MART</div>
            <div className="drop_down">                
                <ul className="main-menu">
                    <li>
                        RECRUIT
                    </li>
                    <li>
                        SUPPORT
                        <ul className="sup_sub">
                            <li><a href = ""></a></li>
                        </ul>
                    </li>
                    <li>
                        STORE
                    </li>
                    <li>                            
                        MEDIA
                    </li>
                    <li>
                        <a href="https://abcmartkorea.saramin.co.kr/main/index">COMPANY</a>
                    </li>
                </ul>
                
            </div>
        </div>
    )
}