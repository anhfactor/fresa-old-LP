import React, { useEffect } from 'react';
import tw from "twin.macro";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import DownloadApp from "components/cta/DownloadApp.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import why1 from "images/why1.png";
import why2 from "images/why2.png";
import why3 from "images/why3.webp";
import banner from "images/banner.webp";
import banner2 from "images/banner2.webp";
import banner3 from "images/banner3.webp";
import SubscribeNewsLetterForm from "components/forms/SimpleSubscribeNewsletter.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ComponentRenderer from "ComponentRenderer.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import FeatureStats from "components/features/ThreeColCenteredStatsPrimaryBackground.js";
import LazyLoad from 'react-lazyload'
import Header from "./components/headers/light";

export default function App() {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const StyledDiv = tw.div`font-display min-h-screen text-secondary-500 p-8 overflow-hidden`;
  const HighlightedText = tw.span`text-primary-500`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;

  useEffect(() => {
    const loadScriptByURL = (id, url, callback) => {
      const isScriptExist = document.getElementById(id);

      if (!isScriptExist) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        script.id = id;
        script.onload = function () {
          if (callback) callback();
        };
        document.body.appendChild(script);
      }

      if (isScriptExist && callback) callback();
    }

    // load the script by passing the URL
    loadScriptByURL("recaptcha-key", `https://www.google.com/recaptcha/api.js?render=${process.env.REACT_APP_SITE_KEY}`, function () {
      console.log("Script loaded!");
    });
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/components/:type/:subtype/:name">
          <ComponentRenderer />
        </Route>
        <Route path="/:type/:name">
          <ComponentRenderer />
        </Route>
    <Route path="/">
      <StyledDiv>
        <Header />
        <LazyLoad height={200} throttle={100}><>
        <Hero 
          heading={<>DeFi Point-of-Sale remittance wallet.</>}
          highlight="Fresa Wallet"
          description="At Fresa, we are more than just a marketplace; we are the architects of a community-centric circular economy.
          Our mission is to transform surplus into opportunity, fostering sustainability and connection within our community. "
          imageSrc={banner}
          imageCss={imageCss}
          imageDecoratorBlob={true}
          primaryButtonText="Get it now"
          watchVideoButtonText="Video demo"
        />
        <MainFeature
          subheading={<Subheading>This PROBLEM includes food vendors and smallholder farmers.</Subheading>}
          heading={
            <>
              Fresa's platform is intuitively designed to bring surplus items to the forefront, 
              providing <HighlightedText>an innovative solution</HighlightedText> that benefits both sellers and buyers by maximizing the utility and lifecycle of food products. 
            </>
          }
          description={
            <Description>
            </Description>
          }
          buttonRounded={false}
          textOnLeft={false}
          primaryButtonText="Latest Offers"
          imageSrc={banner2}
          imageCss={imageCss}
          imageDecoratorBlob={true}
          imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
        />
        <FeatureStats/>
        <MainFeature2
          primaryButtonUrl="https://www.figma.com/proto/OP8fckKtfDJ0MWtc5aAHxz/Fresa?node-id=352%3A28&scaling=scale-down&page-id=88%3A2&starting-point-node-id=352%3A2"
          imageInsideDiv={false}
          imageSrc={banner3}
          imageCss={Object.assign(tw`bg-cover`, imageCss)}
          imageContainerCss={tw`md:w-1/2 h-auto`}
          imageDecoratorBlob={true}
          imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
          textOnLeft={true}
        />
        <Features
          heading={
            <>
              <HighlightedText>Why choose Fresa?</HighlightedText>
            </>
          }
          cards={[
            {
              imageSrc: why1,
              title: "Customer Service Excellence",
              description: "At Fresa, customer service is paramount. Our dedicated team will be on hand to assist with any inquiries, maintaining our promise of exceptional service and customer satisfaction.",
              url: "https://www.figma.com/proto/OP8fckKtfDJ0MWtc5aAHxz/Fresa?node-id=352%3A1005&scaling=scale-down&page-id=88%3A2&starting-point-node-id=352%3A2",
              type: "cross"
            },
            {
              imageSrc: why2,
              title: "Visual Engagement",
              description: "We will be enhancing our platform with vivid imagery that not only showcases our products but also tells their story, ensuring that every picture reflects our commitment to quality and sustainability, with real feedbacks.",
              url: "https://www.figma.com/proto/OP8fckKtfDJ0MWtc5aAHxz/Fresa?node-id=352%3A1005&scaling=scale-down&page-id=88%3A2&starting-point-node-id=352%3A2",
              type: "mobile"
            },
            {
              imageSrc: why3,
              title: "Discovery & Return",
              description: "The 'Top Find' feature will highlight unique items on our platform, while the 'Would You Shop Here Again' feature will capture customer feedback, ensuring we continually evolve to meet user needs so we can improve our AI features.",
              url: "https://www.figma.com/proto/OP8fckKtfDJ0MWtc5aAHxz/Fresa?node-id=352%3A1005&scaling=scale-down&page-id=88%3A2&starting-point-node-id=352%3A2",
              type: "food"
            }
          ]}

          imageContainerCss={tw`p-2!`}
          imageCss={tw`w-20! h-20!`}
        />
        {/* <TeamCardGrid /> */}
        <DownloadApp
          text={<>Mark your calendars for the LaunchDay event that will introduce you to the world of Fresa – 
          where every item has a story and every purchase supports a more sustainable future. </>}
        />
        <SubscribeNewsLetterForm />
        <ContactUsForm/>
        <Footer />
        </></LazyLoad>
      </StyledDiv>
      </Route>
      </Switch>
    </Router>
  );
}
