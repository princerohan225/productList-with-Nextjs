import Image from 'next/image'
import axios from 'axios'
import { useEffect, useState } from 'react'


export default function ShoppingList() {

    const [mydata, setMydata] = useState([]);

    useEffect(() => {
        axios.get("https://api.tjori.com/api/v7filters/na/women-all-products/?f_page=1&format=json")
            .then((res) => setMydata(res.data.data.products))
            .catch((err) => console.log(err))
    }, [])

    return (
        <>
            <div className="desktop---25">
                <div className="header">
                    <div className="rectangle-109"></div>

                    <div className="tann-trim">TANN TRIM</div>

                    <div className="group-284">
                        <div className="bags">Bags</div>

                        <div className="travel">Travel</div>

                        <div className="accesories">Accesories</div>

                        <div className="gifting">Gifting</div>

                        <div className="jewelery">Jewelery</div>
                    </div>

                    <div className="group-327">
                        <div className="frame-54">
                            <div className="shopping-bag">shopping-bag</div>
                        </div>
                    </div>
                </div>

                <div className="frame-467">
                    <div className="group-475">
                        <div className="all-bags">All Bags</div>

                        <div className="frame-461">
                            <div className="bagpack">
                                <svg className="bagpack2" width="43" height="65" viewBox="0 0 43 65" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M11.1742 9.06747V3.14C11.2563 2.32242 12.0114 0.68725 14.3752 0.68725C16.7391 0.68725 25.0454 0.68725 28.903 0.68725C29.888 0.619118 31.8578 1.01428 31.8578 3.14C31.8578 5.26571 31.8578 7.97736 31.8578 9.06747"
                                        stroke="#E5DFD9" strokeWidth="0.9" />
                                    <path
                                        d="M17.5763 25.5954H25.702M5.75705 8.82935H37.5212C39.7373 8.82935 40.476 9.80753 40.9685 11.7896C41.3967 13.5131 42.2817 45.7499 42.9383 61.62C43.0204 62.6067 43.4308 64.5802 40.2298 64.5802C38.6539 64.5802 15.3602 64.5802 3.04848 64.5802C0.339905 64.5802 0.339905 63.7908 0.339905 61.62C0.339905 59.4491 1.489 27.4952 2.06354 11.7896C2.06354 10.5476 2.55601 8.82935 5.75705 8.82935Z"
                                        stroke="#E5DFD9" strokeWidth="0.9" />
                                    <path
                                        d="M6.24951 64.5802L7.23445 36.2114C7.23445 34.2294 8.41637 33.4979 10.1893 33.4979C11.9621 33.4979 26.0303 33.4979 32.8428 33.4979C33.9098 33.4979 36.0438 34.0406 36.0438 36.2114C36.0438 38.3822 36.8646 56.0284 37.275 64.5802"
                                        stroke="#E5DFD9" strokeWidth="0.9" />
                                    <path d="M13.3903 33.7446V64.3335" stroke="#E5DFD9" strokeWidth="0.9" />
                                    <path d="M30.3804 33.4979V64.3335" stroke="#E5DFD9" strokeWidth="0.9" />
                                    <path
                                        d="M1.81732 19.6835C2.14563 20.5057 2.30979 22.1503 5.75706 22.1503C8.12091 22.1503 27.2615 22.1503 36.5363 22.1503C40.7223 22.1503 41.2147 20.415 41.461 19.4282"
                                        stroke="#E5DFD9" strokeWidth="0.9" />
                                </svg>
                            </div>
                            <svg className="vector-177" width="8" height="31" viewBox="0 0 8 31" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2.9401 3.48006L6.9001 0.0600586L7.3501 30.7501H3.9301L1.0501 28.5001L0.600098 23.5501V16.1701L1.5901 8.79006L2.9401 3.48006Z"
                                    fill="#0C0C0C" />
                            </svg>

                            <div className="duffle-bag">
                                <div className="duffle-bag2">
                                    <svg className="vector-62" width="49" height="29" viewBox="0 0 49 29" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M42.0232 0.817184C32.2559 -0.270616 16.56 -0.174592 7.62446 0.817172C4.02627 1.21654 4.02627 1.75488 3.34197 3.91632C1.35628 12.7178 0.859863 18.1724 0.859863 23.255C0.859863 27.9419 4.60198 28.0581 7.62446 28.3759C12.3405 28.8718 37.9673 28.3376 42.4351 28.0896C46.9029 27.8417 48.0199 26.5359 48.0199 23.255C48.0199 19.2705 46.8243 6.96335 45.9092 3.91632C45.3009 1.8908 45.1896 1.16983 42.0232 0.817184Z"
                                            stroke="#E5DFD9" strokeWidth="0.9" />
                                    </svg>
                                    <svg className="vector-61" width="13" height="6" viewBox="0 0 13 6" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M0.419037 5.01871V1.54228C0.467013 1.06277 0.908391 0.103758 2.2901 0.103758C3.6718 0.103758 8.52696 0.103758 10.7818 0.103758C11.3575 0.0637994 12.509 0.295562 12.509 1.54228C12.509 2.789 12.509 4.37937 12.509 5.01871"
                                            stroke="#E5DFD9" strokeWidth="0.9" />
                                    </svg>
                                    <svg className="vector-63" width="8" viewBox="0 0 8 0" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0H7.19638" stroke="#E5DFD9" strokeWidth="0.9" />
                                    </svg>
                                    <svg className="vector-64" height="12" viewBox="0 0 0 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0L3.06854e-07 11.285" stroke="#E5DFD9" strokeWidth="0.9" />
                                    </svg>
                                    <svg className="vector-65" height="12" viewBox="0 0 0 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0L3.06854e-07 11.285" stroke="#E5DFD9" strokeWidth="0.9" />
                                    </svg>

                                    <div className="ellipse-3"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="group-307">
                        <div className="frame-50">
                            <svg className="group-298" width="85" height="61" viewBox="0 0 85 61" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M84.4001 25.8788C59.7116 13.9039 15.0911 20.0043 2.86011 25.8788C4.67211 34.2387 15.5441 59.3183 18.7151 59.3183C25.0571 61.3518 63.3356 61.1259 69.9041 59.3183C72.8033 59.3183 82.3616 35.5944 84.4001 25.8788Z"
                                    stroke="#E5DFD9" strokeWidth="1.5" />
                                <path d="M36.88 25.6596H50.2" stroke="#E5DFD9" strokeWidth="1.5" />
                                <path
                                    d="M42.7102 1.26823C42.7105 1.26813 42.7095 1.27112 42.7065 1.27752C42.7086 1.27153 42.71 1.26833 42.7102 1.26823ZM42.4567 1.60839C42.4546 1.61063 42.4526 1.61289 42.4505 1.61516C42.1455 1.94902 41.6381 2.3922 40.9405 2.9291C39.5542 3.99589 37.5261 5.35 35.1602 6.81875C30.4331 9.7533 24.4264 13.1032 19.6749 15.4591C15.11 17.7225 11.0593 20.3752 8.01269 22.3704C7.84199 22.4822 7.67444 22.5919 7.51013 22.6994C6.19248 23.5612 5.10459 24.2641 4.26251 24.7387C4.63329 24.3937 5.08607 23.9997 5.61325 23.5632C7.39485 22.0882 9.9469 20.1929 12.8301 18.1861C18.6009 14.1694 25.6296 9.75364 30.3547 7.41082C32.5961 6.29949 34.47 5.33853 36.0406 4.53307C37.8448 3.60785 39.2489 2.8878 40.3504 2.38068C41.3714 1.91062 42.034 1.67222 42.4567 1.60839Z"
                                    stroke="#E5DFD9" strokeWidth="1.5" />
                            </svg>
                        </div>

                        <div className="vanity-pouch">Vanity Pouch</div>
                    </div>

                    <div className="group-300">
                        <div className="tote-bag">Tote Bag</div>

                        <div className="frame-49">
                            <div className="tote">
                                <svg className="tote2" width="64" height="88" viewBox="0 0 64 88" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M63.2865 29.854H0.515289V78.53C0.254827 86.0787 3.38036 87.3802 5.46406 87.3802H57.5563C62.3488 87.3802 63.547 82.4345 63.2865 78.53V29.854Z"
                                        fill="#E5DFD9" stroke="#E5DFD9" strokeWidth="1.5" />
                                    <path d="M17.1696 29.5937V16.7002C17.1696 -2.34425 46.3412 -3.44297 46.3412 16.7002V29.5937"
                                        stroke="#E5DFD9" strokeWidth="1.5" />
                                    <path d="M15.6068 29.5935V16.7734C15.6068 -4.3898 47.904 -5.61076 47.904 16.7734V29.5935" stroke="#E5DFD9"
                                        strokeWidth="1.5" />
                                    <path d="M56.4992 80.0918H44.7784" stroke="#0C0C0C" strokeWidth="1.5" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="group-301">
                        <div className="duffle-bag3">Duffle Bag</div>

                        <div className="frame-13">
                            <div className="duffle-bag4">
                                <div className="duffle-bag5">
                                    <svg className="vector-622" width="94" height="57" viewBox="0 0 94 57" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M81.6476 1.58988C62.4014 -0.543609 31.4729 -0.355279 13.8655 1.58986C6.77536 2.37313 6.77536 3.42898 5.42695 7.66819C1.51419 24.9305 0.536003 35.6285 0.536003 45.5969C0.536003 54.7893 7.90978 55.0173 13.8655 55.6406C23.1583 56.6131 73.6557 55.5653 82.4594 55.0791C91.2631 54.5928 93.464 52.0317 93.464 45.5969C93.464 37.7821 91.1082 13.6443 89.305 7.66819C88.1063 3.69556 87.887 2.28153 81.6476 1.58988Z"
                                            stroke="#E5DFD9" strokeWidth="1.5" />
                                    </svg>
                                    <svg className="vector-612" width="24" height="11" viewBox="0 0 24 11" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M0.136032 10.0238V3.20548C0.230568 2.26502 1.1003 0.384114 3.82292 0.384114C6.54555 0.384114 16.1126 0.384114 20.5557 0.384114C21.6902 0.305743 23.959 0.760296 23.959 3.20548C23.959 5.65066 23.959 8.76983 23.959 10.0238"
                                            stroke="#E5DFD9" strokeWidth="1.5" />
                                    </svg>
                                    <svg className="vector-632" width="15" viewBox="0 0 15 0" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0H14.1804" stroke="#E5DFD9" strokeWidth="1.5" />
                                    </svg>
                                    <svg className="vector-642" height="23" viewBox="0 0 0 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0L1.70474e-06 22.1331" stroke="#E5DFD9" strokeWidth="1.5" />
                                    </svg>
                                    <svg className="vector-652" height="23" viewBox="0 0 0 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0L1.70474e-06 22.1331" stroke="#E5DFD9" strokeWidth="1.5" />
                                    </svg>

                                    <div className="ellipse-32"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="group-302">
                        <div className="laptop-sleeve">Laptop Sleeve</div>

                        <div className="frame-492">
                            <div className="laptop-sleeve2">
                                <div className="laptop-sleeve3">
                                    <svg className="vector-71" width="84" height="59" viewBox="0 0 84 59" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M83.4001 0.620117H0.298086L0.0734863 55.1527C0.0734863 57.7228 0.298086 58.8403 2.88099 58.8403H81.2664C83.4001 58.8403 83.3252 56.3819 83.4001 55.1527V0.620117Z"
                                            stroke="#E5DFD9" strokeWidth="1.5" />
                                    </svg>
                                    <svg className="vector-72" width="77" height="54" viewBox="0 0 77 54" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M76.5817 0.301758H1.09562L0.891602 49.9149C0.891602 52.2532 1.09562 53.2699 3.44181 53.2699H74.6436C76.5817 53.2699 76.5137 51.0332 76.5817 49.9149V0.301758Z"
                                            stroke="#E5DFD9" strokeWidth="1.5" />
                                    </svg>

                                    <div className="rectangle-8"></div>
                                    <svg className="vector-73" width="12" viewBox="0 0 12 0" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0H11.7915" stroke="#E5DFD9" strokeWidth="1.5" />
                                    </svg>
                                </div>
                                <svg className="vector-142" width="8" height="12" viewBox="0 0 8 12" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6.64103 0.880371C0.953032 1.96037 -0.46895 7.72037 1.60103 11.3204C0.981319 5.83037 4.12103 2.32037 7.09103 2.32037L6.64103 0.880371Z"
                                        fill="#E5DFD9" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="group-303">
                        <div className="messenger-bags">Messenger Bags</div>

                        <div className="frame-493">
                            <div className="messenger">
                                <svg className="vector-22" width="94" height="7" viewBox="0 0 94 7" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M0.727997 0.319824C0.915342 2.14693 2.86374 6.07522 8.03447 6.07522C13.2052 6.07522 62.6457 6.07522 86.7196 6.07522C88.593 6.16658 92.1151 4.92414 93.464 0.319824"
                                        stroke="#E5DFD9" strokeWidth="1.5" />
                                </svg>
                                <svg className="vector-23" width="11" viewBox="0 0 11 0" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.56 0L-3.8147e-06 0" stroke="#E5DFD9" strokeWidth="1.5" />
                                </svg>
                                <svg className="vector-24" width="29" height="13" viewBox="0 0 29 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M0.751999 12.7441C3.85535 1.29387 4.70171 0.456053 7.52294 0.456055H22.4754C26.143 0.456055 25.5788 1.29386 28.4 12.7441"
                                        stroke="#E5DFD9" strokeWidth="1.5" />
                                </svg>
                                <svg className="vector-25" width="94" height="57" viewBox="0 0 94 57" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M93.464 0.74408H0.727997V50.0354C0.727997 53.6408 3.8192 56.2321 6.9104 56.2321H87.8436C92.3399 56.2321 93.464 51.5377 93.464 49.1904V0.74408Z"
                                        stroke="#E5DFD9" strokeWidth="1.5" />
                                </svg>

                                <div className="rectangle-20"></div>

                                <div className="rectangle-21"></div>

                                <div className="rectangle-22"></div>

                                <div className="rectangle-23"></div>
                            </div>
                        </div>
                    </div>

                    <div className="group-304">
                        <div className="slings-bgs">Slings Bgs</div>

                        <div className="frame-22">
                            <div className="sling">
                                <svg className="sling2" width="112" height="47" viewBox="0 0 112 47" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.5493 -0.000232515C29.5714 -56.3986 56.0736 -62.7701 67.0692 -0.000235796" stroke="#E5DFD9"
                                        strokeWidth="1.5" />
                                    <path
                                        d="M67.0486 0H20.5631C18.0305 6.50273 12.8019 30.7418 43.6833 29.8796C76.1169 28.9742 68.274 4.69185 67.0486 0Z"
                                        stroke="#E5DFD9" strokeWidth="1.5" />
                                    <path
                                        d="M18.8959 14.7339C18.1878 19.755 16.4863 30.8672 16.617 32.1843C16.8621 43.0496 24.1331 43.2965 33.5282 44.0373C42.3515 44.7331 57.6288 43.741 58.9359 43.5435C66.7788 42.885 70.6186 40.7448 70.6186 32.1843C70.2014 26.9985 70.038 25.8462 68.4041 14.7339"
                                        stroke="#E5DFD9" strokeWidth="1.5" />
                                    <path d="M21.8416 0.000228304C32.02 -58.6798 55.87 -56.8798 65.777 0.000211824" stroke="#E5DFD9"
                                        strokeWidth="1.5" />
                                    <path d="M55.2239 38.7002H63.8387" stroke="#E5DFD9" strokeWidth="1.5" />
                                    <path
                                        d="M40.2256 29.8933V31.3671C40.2256 32.4717 41.121 33.3671 42.2256 33.3671H44.9957C46.1003 33.3671 46.9957 32.4717 46.9957 31.3671V29.7104"
                                        stroke="#E5DFD9" strokeWidth="1.5" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="group-305">
                        <div className="handbags">Handbags</div>

                        <div className="frame-20">
                            <div className="handbag">
                                <svg className="handbag2" width="90" height="94" viewBox="0 0 90 94" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M72.6215 42.3317H16.741C6.75368 42.3317 5.10974 47.0002 4.48154 52.0263C3.34112 61.1507 1.35409 81.8593 0.775179 85.6724C0.19627 89.4854 1.6218 93.6562 4.48154 93.6562C27.9552 93.6562 79.3983 92.8095 83.7319 92.8095C88.0655 92.8095 90.0042 88.9152 89.1576 85.6724C88.2073 77.0233 86.0785 58.1853 85.1662 52.0263C84.2538 45.8674 81.4511 42.3317 72.6215 42.3317Z"
                                        stroke="#E5DFD9" strokeWidth="1.5" />
                                    <path d="M35.5493 85.6726H55.2215" stroke="#E5DFD9" strokeWidth="1.5" />
                                    <path d="M20.1536 42.1529C29.8472 -13.1635 58.9279 -14.0189 69.7618 42.1529" stroke="#E5DFD9"
                                        strokeWidth="1.5" />
                                    <path d="M24.7152 42.3316C32.626 -8.97559 56.3586 -9.76902 65.2001 42.3316" stroke="#E5DFD9"
                                        strokeWidth="1.5" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="group-306">
                        <div className="bucket-bag">Bucket Bag</div>

                        <div className="frame-46">
                            <div className="component-5">
                                <svg className="vector-9" width="56" height="35" viewBox="0 0 56 35" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.127136 33.8593C18.5141 -9.07153 36.8257 -12.8374 55.8155 34.0853" stroke="#E5DFD9"
                                        strokeWidth="1.5" />
                                </svg>
                                <svg className="vector-10" width="48" height="32" viewBox="0 0 48 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.19635 31.667C15.9458 -9.15502 31.9968 -9.53164 47.5956 30.9891" stroke="#E5DFD9"
                                        strokeWidth="1.5" />
                                </svg>
                                <svg className="vector-11" width="14" viewBox="0 0 14 0" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0H13.2896" stroke="#E5DFD9" strokeWidth="1.5" />
                                </svg>

                                <div className="ellipse-1"></div>

                                <div className="ellipse-6"></div>

                                <div className="ellipse-5"></div>
                                <svg className="vector-155" width="3" height="22" viewBox="0 0 3 22" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.45605 0.637695C1.60896 5.84693 1.87237 17.3757 1.70269 21.8171" stroke="#E5DFD9"
                                        strokeWidth="1.5" />
                                </svg>
                                <svg className="vector-156" width="3" height="16" viewBox="0 0 3 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.985596 0.214844C1.19707 3.89103 1.59012 12.0261 1.47051 15.157" stroke="#E5DFD9"
                                        strokeWidth="1.5" />
                                </svg>
                                <svg className="vector-157" width="3" height="19" viewBox="0 0 3 19" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.46631 0.160583C1.64828 4.60907 1.97602 14.4538 1.83119 18.2449" stroke="#E5DFD9"
                                        strokeWidth="1.5" />
                                </svg>
                                <svg className="vector-158" width="3" height="20" viewBox="0 0 3 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.64551 0.679626C1.8201 5.3213 2.1315 15.5937 1.98036 19.5499" stroke="#E5DFD9"
                                        strokeWidth="1.5" />
                                </svg>
                                <svg className="vector-159" width="2" height="25" viewBox="0 0 2 25" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M0.571106 0.00628662C0.947888 1.71348 1.67131 6.12205 1.55074 10.0988C1.40003 15.0697 0.118967 17.9318 1.55074 24.861"
                                        stroke="#E5DFD9" strokeWidth="1.5" />
                                </svg>
                                <svg className="vector-160" width="2" height="23" viewBox="0 0 2 23" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M0.296143 0.00628662C0.696438 1.55828 1.46501 5.56607 1.33691 9.1813C1.17679 13.7003 -0.184212 16.3022 1.33691 22.6015"
                                        stroke="#E5DFD9" strokeWidth="1.5" />
                                </svg>

                                <div className="ellipse-33"></div>
                                <svg className="vector-153" width="68" height="61" viewBox="0 0 68 61" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M0.400024 43.6765C0.400028 36.446 8.93403 14.7547 12.6265 4.28556C26.3226 -0.685388 38.5304 -0.459399 55.4856 4.28556C56.3295 6.15343 63.9506 30.1947 67.1658 42.5467C68.8237 51.2836 61.6475 56.3571 55.4856 58.3634C45.5385 61.602 22.0273 61.4514 11.9296 58.3634C1.53037 55.1832 0.400024 47.2962 0.400024 43.6765Z"
                                        stroke="#E5DFD9" strokeWidth="1.5" />
                                </svg>
                                <svg className="vector-154" width="45" height="19" viewBox="0 0 45 19" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M43.2732 6.13396L34.4113 11.6867C26.1536 16.274 27.8115 13.2613 31.3264 9.85255L33.8029 7.513C35.2593 6.18461 36.8713 4.11304 31.6686 6.45377L23.4408 9.85255C16.3573 13.1106 13.1276 12.5081 17.9197 9.82586L21.8583 7.25084C23.4503 6.15641 25.139 3.76641 20.5815 5.09985C16.024 6.43329 13.7132 7.08944 13.1276 7.25084C11.3524 7.61082 8.19542 7.9995 9.76898 6.67434L12.7582 4.7168C12.0052 4.7757 10.0013 5.13347 8.00896 6.09338C5.51855 7.29327 1.63453 9.38111 3.28147 7.61903C3.52494 7.02541 3.23042 6.11942 0.104634 7.24438"
                                        stroke="#E5DFD9" strokeWidth="1.5" />
                                </svg>
                                <svg className="vector-161" width="44" height="13" viewBox="0 0 44 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1.28599 4.031L0.532427 4.70886L0.381714 5.16076L0.984565 4.85949H2.71776L3.32062 5.16076L2.94383 6.06457L3.54668 6.29052L7.16379 4.40759L11.233 2.90124L11.5345 3.35315L9.42449 5.16076L9.95198 5.53735L13.5691 5.16076L21.1047 2.90124H23.3654V3.80505L22.7626 4.63354L20.5019 6.06457L16.0559 9.15258L15.6791 9.75512L16.0559 10.207L19.8237 9.37853L28.8664 5.61266L33.84 3.50378H34.9703L35.121 4.10632L32.6343 6.51647L29.3939 9.75512L28.2636 11.7134L28.8664 12.09L31.1271 11.3368L35.4978 9.15258L40.0192 6.29052L43.1088 4.25695L42.506 3.88037L39.1149 2.97656L32.6343 1.8468L28.2636 1.16894L22.5365 0.566406H18.3919L14.7748 0.942993L11.0823 1.47021L7.46522 2.2987L3.6974 3.27783L1.28599 4.031Z"
                                        fill="#E5DFD9" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="group-478">
                    <div className="frame-231">
                        <div className="bags2">Bags</div>

                        <div className="ellipse-35"></div>

                        <div className="backpacks">Backpacks</div>
                    </div>

                    <div className="_13-products">13 products</div>
                    <svg className="vector-4" width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.666687 8.78049V20H17.3334V8.78049M9.00002 13.6585V0M9.00002 0L14.4167 5.41667M9.00002 0L3.58335 5.41667"
                            stroke="#E5DFD9" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </div>

                {
                    mydata.map((person) => {
                        return (
                            <>
                                <div className="frame-477" key={person.id}>

                                    <div className="group-447">


                                        <div className="mask-group">
                                            <Image className='sipr04018_01-1' src={person.plpimaage} alt={person.name} width='300' height='300' loading='lazy'></Image>
                                        </div>

                                        <div className="the-brown-metro-movers">{person.name}</div>


                                        <div className="frame-367">
                                            <div className="_4899">{person.price} ₹</div>
                                        </div>

                                    </div>
                                </div>
                            </>
                        )
                    })
                }

            </div>
        </>
    )
}
