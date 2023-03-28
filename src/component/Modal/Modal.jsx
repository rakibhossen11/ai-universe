import React from "react";

const Modal = (props) => {
  console.log(props.singleData);
  const { image_link, description, integrations, features } =
    props.singleData;
    // console.log(features);
  // console.log(Object.values(features || {}));
  return (
    <>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <div className="card-body border-2 border-error mr-2">
              <h2 className="card-title">
                {description ? description : "Not Found"}
              </h2>
              <div className="flex justify-between">
                <div>
                  <h1 className="text-3xl font-bold">Features</h1>
                  {
                    Object.values(features || {}).map(feature => <p>{feature.feature_name ? feature.feature_name : "Not Found"}</p>)
                  }
                </div>
                <div>
                  <h1 className="text-3xl font-bold">Integrations</h1>
                  {integrations && integrations.map(integration => <p>{integration ? integration : "Not Found"}</p>)}
                </div>
              </div>
            </div>
            <figure>
              <img
                className="w-full h-96"
                src={image_link && image_link[0]}
                alt="Album"
              />
            </figure>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
