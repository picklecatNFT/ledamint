import React from 'react';
import { useEffect } from 'react';
import { SpotlightCard } from '../SpotlightCard';

export const Banner = (props: {
  src: string;
  useBannerBg: boolean;
  headingText: string;
  subHeadingText: string;
  actionComponent?: JSX.Element;
  children?: React.ReactNode;
}) => {
  useEffect(() => {
    const mainBg = document.getElementById('main-bg');
    const gradient = document.getElementById('bg-gradient');
    if (mainBg && props.useBannerBg) {
      mainBg.style.backgroundImage = `url(${props.src})`;
      mainBg.style.display = 'inline-block';
      if (gradient) {
        gradient.style.display = 'inline-block';
      }
    }

    return () => {
      const mainBg = document.getElementById('main-bg');
      const gradient = document.getElementById('bg-gradient');
      if (mainBg && props.useBannerBg) {
        mainBg.style.backgroundImage = '';
        mainBg.style.display = 'none';
      }
      if (gradient) gradient.style.display = 'none';
    };
  }, [props.src, props.useBannerBg]);

  return (
    <>
      <div id="mobile-banner">
        {/*<img className="banner-img" src={props.src} />*/}
        <div className="banner-content">
          <div id={'main-heading'}>{props.headingText}</div>
          <div id={'sub-heading'}>{props.subHeadingText}</div>
          {props.actionComponent}
        </div>
      </div>
      <div
        id={'current-banner'}
        style={{ backgroundImage: `url(${props.src})` }}
      >
        <span id={'gradient-banner'}></span>
        <div id="banner-inner" style={{ display: 'flex' }}>
          
            <div id={'message-container'}>
              <div id={'main-heading'}>{props.headingText}</div>
              <div id={'sub-heading'}>{props.subHeadingText}</div>
              {props.actionComponent}
            </div>
            <div style={{ width: '100%', margin: 'auto', placeItems: 'center', textAlign: 'center',display:'none' }}><SpotlightCard /></div>
          
          {props.children}
        </div>
      </div>
      <div className="powered-by" style={{marginLeft:'auto'}}>
        <span>
          POWERED BY <b>LEDAMINT</b> & <b>SAFECOIN</b>
        </span>
      </div>
    </>
  );
};
