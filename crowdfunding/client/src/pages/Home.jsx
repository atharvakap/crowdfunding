import React, { useState, useEffect } from 'react'

import { DisplayCampaigns } from '../components';
import { useStateContext } from '../context'

const Home = ({searchQuery}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const [filteredCampaigns, setFilteredCampaigns] = useState([]);

  const { address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  }

  useEffect(() => {
    if(contract) fetchCampaigns();
  }, [address, contract]);

  useEffect(() => {
		const filtered = searchQuery
			? campaigns.filter((campaign) =>
					campaign.title.toLowerCase().includes(searchQuery.toLowerCase())
			  )
			: campaigns;
		setFilteredCampaigns(filtered);
	}, [searchQuery, campaigns]);

  return (
    <DisplayCampaigns 
      title="All Campaigns"
      isLoading={isLoading}
      campaigns={filteredCampaigns}
    />
  )
}

export default Home