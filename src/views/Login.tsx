import React, { useState } from 'react';
import googlePlay from '../assets/images/google-play.png';
import appStore from '../assets/images/app-store.png';
import snapShort1 from '../assets/images/snapshot1.jpg';
import './Login.css';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [images] = useState([{ path: snapShort1 }]);

    const onHandleChange = (event: any) => {
        const { name, value } = event.target;
        let domInput;
        if (name === 'username') {
            setUsername(value);
            domInput = document.getElementsByClassName('f0n8F')[0];
        } else {
            setPassword(value);
            domInput = document.getElementsByClassName('f0n8F')[1];
        }

        if (value === '') {
            domInput.classList.remove('FATdn');
        } else {
            domInput.classList.add('FATdn');
        }
    };

    const onHandleFocus = (index: string) => {
        const dom = document.getElementsByClassName('_9GP1n')[Number(index)];
        dom.classList.add('HlU5H');
    }

    const onHandleBlur = () => {
        const dom = document.getElementsByClassName('_9GP1n HlU5H')[0];
        dom.classList.remove('HlU5H');
    }

    const onSubmit = (event: any) => {
        event.preventDefault();
    };

    return (
        <section className="_9eogI E3X2T">
            <div></div>
            <main className="SCxLW o64aR" role="main">
                <article className="_4_yKc">
                    <div className="yOZjD _80tAB">
                        <div className="V64Sp">
                            {
                                images.map((data: any, index: number) => (
                                    <img
                                        key={index}
                                        src={data.path}
                                        alt={''}
                                        className={'RP4i1 JtrJi'}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div className="rgFsT">
                        <div className="gr27e">
                            <h1 className="NXVPg Szr5J  coreSpriteLoggedOutWordmark">Instagram</h1>
                            <div className="EPjEi">
                                <form className="HmktE" id="loginForm" onClick={onSubmit}>
                                    <div className="Igw0E IwRSH eGOV_ _4EzTm kEKum">
                                        <div className="-MzZI">
                                            <div className="_9GP1n">
                                                <label className="f0n8F">
                                                    <span className="_9nyy2">
                                                        Phone number, username, or email
                                                    </span>
                                                    <input
                                                        aria-label="Phone number, username, or email"
                                                        aria-required="true"
                                                        autoCapitalize="off"
                                                        autoCorrect="off"
                                                        max="75"
                                                        name="username"
                                                        type="text"
                                                        className="_2hvTZ pexuQ zyHYP"
                                                        onFocus={() => onHandleFocus('0')}
                                                        onBlur={onHandleBlur}
                                                        onChange={onHandleChange}
                                                        value={username}
                                                    />
                                                </label>
                                                <div className="i24fI"></div>
                                            </div>
                                        </div>
                                        <div className="-MzZI">
                                            <div className="_9GP1n">
                                                <label className="f0n8F">
                                                    <span className="_9nyy2">
                                                        Password
                                                    </span>
                                                    <input
                                                        aria-label="Password"
                                                        aria-required="true"
                                                        autoComplete="off"
                                                        autoCapitalize="off"
                                                        autoCorrect="off"
                                                        name="password"
                                                        type="password"
                                                        className="_2hvTZ pexuQ zyHYP"
                                                        onFocus={() => onHandleFocus('1')}
                                                        onBlur={onHandleBlur}
                                                        onChange={onHandleChange}
                                                        value={password}
                                                    />
                                                </label>
                                                <div className="i24fI"></div>
                                            </div>
                                        </div>
                                        <div className="Igw0E IwRSH eGOV_ _4EzTm bkEs3 CovQj jKUp7 DhRcB">
                                            <button className="sqdOP L3NKy y3zKF" type="submit" disabled={!username || !password || (password.length < 8)}>
                                                <div className="Igw0E IwRSH eGOV_ _4EzTm">Log In</div>
                                            </button>
                                        </div>
                                        <div className="K-1uj Z7p_S">
                                            <div className="s311c"></div>
                                            <div className="_0tv-g">or</div>
                                            <div className="s311c"></div>
                                        </div>
                                        <div className="Igw0E IwRSH eGOV_ _4EzTm bkEs3 CovQj jKUp7 DhRcB">
                                            <button className="sqdOP yWX7d y3zKF" type="button">
                                                <span className="coreSpriteFacebookIcon AeB99"></span>
                                                <span className="KPnG0">Log in with Facebook</span>
                                            </button>
                                        </div>
                                        <a className="_2Lks6" href="/accounts/password/reset/">Forgot password?</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="gr27e">
                            <div className="_7UhW9 xLCgt yUEEX _0PwGv uL8Hv">
                                <p className="izU2O ">Don't have an account?&nbsp;
                                    <a href="/accounts/emailsignup/">
                                        <span className="_7UhW9 xLCgt qyrsm gtFbE se6yk">Sign up</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="APQi1">
                            <p className="b_nGN">Get the app.</p>
                            <div className="iNy2T">
                                <a className="z1VUo" href="https://play.google.com/store/apps/details?id=com.instagram.android&amp;referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DB69FC59F-3F31-47D6-AE0C-A1CBB49C532C%26utm_content%3Dlo%26utm_medium%3Dbadge">
                                    <img alt="Available on Google Play" className="Rt8TI " src={appStore} />
                                </a>
                                <a className="z1VUo" href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&amp;ct=igweb.loginPage.badge&amp;mt=8&amp;vt=lo">
                                    <img alt="Available on the App Store" className="Rt8TI " src={googlePlay} />
                                </a>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
            <footer className="_8Rna9 _3Laht" role="contentinfo">
                <div className="iseBh VWk7Y" style={{ maxWidth: '1012px' }}>
                    <nav className="uxKLF">
                        <ul className="ixdEe _9Rlzb">
                            <li className="K5OFK">
                                <a className="l93RR" href="https://about.instagram.com/" rel="nofollow noopener noreferrer" target="_blank">About</a>
                            </li>
                            <li className="K5OFK">
                                <a className="l93RR" href="https://help.instagram.com/">Help</a>
                            </li>
                            <li className="K5OFK">
                                <a className="l93RR" href="https://about.instagram.com/blog/">Press</a>
                            </li>
                            <li className="K5OFK">
                                <a className="l93RR" href="/developer/">API</a>
                            </li>
                            <li className="K5OFK">
                                <a className="l93RR" href="/about/jobs/">Jobs</a>
                            </li>
                            <li className="K5OFK">
                                <a className="l93RR" href="/legal/privacy/">Privacy</a>
                            </li>
                            <li className="K5OFK">
                                <a className="l93RR _vfM2" href="/legal/terms/">Terms</a>
                            </li>
                            <li className="K5OFK">
                                <a className="l93RR" href="/explore/locations/">Locations</a>
                            </li>
                            <li className="K5OFK">
                                <a className="l93RR" href="/directory/profiles/">Top Accounts</a>
                            </li>
                            <li className="K5OFK">
                                <a className="l93RR" href="/directory/hashtags/">Hashtags</a>
                            </li>
                            <li className="K5OFK">
                                <span className="_3G4x7  l93RR">Language</span>
                            </li>
                        </ul>
                    </nav>
                    <span className="DINPA">© 2020 Instagram from Facebook</span>
                </div>
            </footer>
        </section >
    )
}

export default Login;
