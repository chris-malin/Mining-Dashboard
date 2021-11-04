<script>
	import Tile from '../components/tile.svelte';
	import Loading from '../components/loading.svelte';
	import { getAllData } from '../api';

	let result = getAllData();
	setInterval(function () {
		result = getAllData();
		console.log('get new data');
	}, 60 * 1000);
</script>

<div class="h-screen w-screen text-white" style="background-color: #203354;">
	{#await result}
		<Loading />
	{:then data}
		<div class="h-screen" style="background-color: #2e3437;">
			<div class="grid grid-cols-3 p-5 gap-4 justify-center h-full">
				<Tile header="Ethereum" value={data.ethereum} />
				<Tile header="Hashrate/ETH" value={data.hashrate} />
				<Tile header="Expected Reward" value={data.daily} />
				
				<Tile header="RavenCoin" value={data.ravencoin} />
				<Tile header="Hashrate/RVN" value={data.currentHashrate}/>
				<Tile header="RVN 24h" value={data.hreward} />
				
				<Tile header="Chainlink" value={data.chainlink} />
				<Tile header="E-Radix" value={data.eradix} />
				<Tile header="TIME" value={data.wonderland} dynamicValue={1} />
				
			</div>
		</div>
	{:catch error}
		error
	{/await}
</div>
