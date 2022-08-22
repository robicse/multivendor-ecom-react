import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import MobileNavigationBar from "components/mobile-navigation/MobileNavigationBar";
import Sticky from "components/sticky/Sticky";
import Topbar from "components/topbar/Topbar";
import Head from "next/head";
import React, { Fragment, useCallback, useState } from "react";
/**
 *  Used:
 *  1. fashion-shop, gadget-shop, superstore-shop page
 *  2. product details page
 *  3. order-confirmation page
 *  4. product-search page
 *  5. shops and shops-details page
 *  6. checkoutNavLayout and CustomerDashboadLayout component
 */
// ===================================================

// ===================================================
const ShopLayout1 = ({
  navbar,
  children,
  generalSetting
  // title = "Ecommerce",
}) => {
  const [isFixed, setIsFixed] = useState(false);
  const toggleIsFixed = useCallback((fixed) => setIsFixed(fixed), []);
  return (
    <Fragment>
      <Head>
        <title>{generalSetting?.site_name}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Topbar generalSetting={generalSetting}/>

      <Sticky fixedOn={0} onSticky={toggleIsFixed}>
        <Header isFixed={isFixed}  generalSetting={generalSetting}/>
      </Sticky>

      {navbar && <div className="section-after-sticky">{navbar}</div>}
      {!navbar ? (
        <div className="section-after-sticky">{children}</div>
      ) : (
        children
      )}

      <MobileNavigationBar  generalSetting={generalSetting}/>
      <Footer generalSetting={generalSetting} />
    </Fragment>
  );
};

export default ShopLayout1;
