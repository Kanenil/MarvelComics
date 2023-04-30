import React from "react";
import Layout from "../layout/Layout";
import Statistic from "../components/Statistic";
import Mission from "../components/Mission";
import QuoteBox from "../components/QuoteBox";
import AboutBlock from '../components/AboutBlock';
import Founders from "../components/Founders";

function About() {
  return (
    <>
      <Layout> 
        <div className="relative">
          <Founders />

          <AboutBlock />
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
            <QuoteBox
              image="https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/osnmz38fuh0ks1yaoxes.jpg"
              quote="Marvel's mission is to tell great stories that reflect
                      the world we live in, to create characters that
                      inspire and entertain, and to push the boundaries of
                      what's possible in storytelling. We believe that
                      everyone deserves a hero, and we are dedicated to
                      creating heroes that represent the diversity and
                      complexity of the world around us."
              status="Kevin Feige, President of Marvel Studios"
            />

            <div className="relative mx-auto pb-12 max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
              <Mission />

              <Statistic />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default About;
