import React from "react";
import './feature-options.css';

const FeatureOptions = ({featureList}) => {
    return (
        <div className="features">
            {featureList && featureList.map((feature) => {
                return (
                    <button className="feature-item">
                    {feature.icon}
                    <div className="feature-name">{feature.title}</div>
                  </button>

                )
            })}
        </div>
    )
}

export default FeatureOptions