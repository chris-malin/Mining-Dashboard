import axios from 'axios';

export const getAllData = async () => {
	try {
		const [daily, hashrate, wonderland, reward, ethereum, chainlink, eradix, ravencoin] = await Promise.all([
			axios.get('https://hiveon.net/api/v1/stats/miner/YOURWALLETADDRESS/ETH/billing-acc'),
			axios.get(
				`https://hiveon.net/api/v1/stats/hashrates?minerAddress=YOURWALLETADDRESS&coin=ETH&window=10m&limit=144&offset=0&worker=`
			),
			axios.get('https://api.coingecko.com/api/v3/simple/price?ids=wonderland&vs_currencies=usd'),
			axios.get('https://rvn.2miners.com/api/accounts/YOURWALLETADDRESS'),
			axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd'),
			axios.get('https://api.coingecko.com/api/v3/simple/price?ids=chainlink&vs_currencies=usd'),
			axios.get('https://api.coingecko.com/api/v3/simple/price?ids=e-radix&vs_currencies=usd'),
			axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ravencoin&vs_currencies=usd')
		]);

		reward.data.currentHashrate = (reward.data.currentHashrate / 1000000).toFixed(0)

		let result = {
			daily: daily.data.expectedReward24H.toFixed(5),
			hashrate: hashrate.data.items[1].hashrate.substring(0, 4) + ' MH/s',
			wonderland: '$ ' + wonderland.data.wonderland.usd.toFixed(2),
			hreward: reward.data["24hreward"].toString().substring(0, 2),
			currentHashrate: reward.data.currentHashrate + ' MH/s',
			ethereum: '$ ' + ethereum.data.ethereum.usd.toFixed(2),
			chainlink: '$ ' + chainlink.data.chainlink.usd.toFixed(2),
			eradix: '$ ' + eradix.data['e-radix'].usd.toFixed(2),
			ravencoin: '$ ' + ravencoin.data.ravencoin.usd.toFixed(2)
		};
		return result;
	} catch (error) {
		console.error(error);
	}
};
