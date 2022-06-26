import React from "react";

import FeatureOptions from "../shared/feature-options/feature-options";
import DeliveryCollection from "./deliveryCollections/deliveryCollections";
import TopBrands from "./topBrands/topBrands";
import {deliveryRestaurants} from "../../mock-data/mock-data-delivery";
import ExploreSection from "../shared/exploreSection/explore-section";

const deliveryFeatures = [
    {
      id: 1,
      icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
      title: "Filters",
    },
    {
      id: 2,
      icon: "",
      title: "Rating: 4.0+",
    },
    {
      id: 3,
      icon: "",
      title: "Safe and Hygienic",
    },
    {
      id: 4,
      icon: "",
      title: "Pure Veg",
    },
    {
      id: 5,
      icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
      title: "Delivery Time"
    },
    {
      id: 6,
      icon: "",
      title: "Great Offers",
    },
  ];

const Delivery = () => {
    return (
        <div>
            <div className="max-width">
                <FeatureOptions featureList = {deliveryFeatures} />
            </div>
            <DeliveryCollection/>
            <TopBrands/>
            <ExploreSection
        restaurants={deliveryRestaurants}
        collectionName="Delivery Restaurants in Kolkata"
      />
        </div>
    )
}

export default Delivery