import React from "react";

const Card = ({ allcampaign, setOpenModel, setDonate, title }) => {
  const daysLeft = (deadline) => {
    const difference = new Date(deadline).getTime() - Date.now();
    const remainingDays = difference / (1000 * 3600 * 24);
    return remainingDays.toFixed(0);
  };

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <p className="py-16 text-2xl font-bold leading-5">{title}</p>
      <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {allcampaign?.map((campaign, i) => (
          <div
            onClick={() => {
              setDonate(campaign);
              setOpenModel(true);
            }}
            key={i + 1}
            className="cursor-pointer border overflow-hidden transition duration-700 ease-in-out will-change-transform bg-white text-black hover:bg-black hover:text-white rounded hover:shadow-lg hover:scale-105 transform"
          >
            <img
              src="https://t3.ftcdn.net/jpg/02/06/66/26/360_F_206662634_16JnrFAXoGVlBok3CEMX3oJdM7aqg5LX.jpg"
              className="object-cover w-full h-64 rounded-t"
              alt="campaign"
            />

            <div className="py-5 pl-4 pr-4 transition-colors duration-700 ease-in-out">
              <p className="mb-2 text-xs font-semibold uppercase">
                Days Left: {daysLeft(campaign.deadline)}
              </p>
              <a
                href="/"
                aria-label="Campaign title"
                className="inline-block mb-3"
              >
                <p className="text-2xl font-bold leading-5">{campaign.title}</p>
              </a>
              <p className="mb-4">{campaign.description}</p>
              <div className="flex space-x-4">
                <p className="font-semibold">
                  Target: {campaign.target} ETH
                </p>
                <p className="font-semibold">
                  Raised: {campaign.amountCollected} ETH
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;