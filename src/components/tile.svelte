<script>
	export let header;
	export let value = '0';
	export let dynamicValue = 0;

	let dynamicColorText = '#EAEBED';
	if (dynamicValue != 0 && parseInt(value) > dynamicValue) dynamicColorText = '#FF0000';
</script>

<div class="flex flex-col m-2 p-8 rounded-3xl shadow-xl" style="background-color: #203354; color: #EAEBED">
	<div class="text-5xl resize" style="color: {dynamicColorText};">{header}</div>
	<div class="flex-grow text-8xl flex justify-center items-center">{value}</div>
</div>
