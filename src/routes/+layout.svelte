<script>
	import "../app.css";
	import Header from "./Header.svelte";
	import * as HoverCard from "$lib/components/ui/hover-card/index";
	import * as Avatar from "$lib/components/ui/avatar/index";
</script>

<div class="app">
	<Header></Header>
	
	<main>
		<slot></slot>
	</main>
	
	<footer>
		<p>
			Made by 
			<HoverCard.Root>
				<HoverCard.Trigger
				href="https://www.qualk.xyz"
				target="_blank"
				rel="noreferrer noopener"
				class="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black"
				> 
				qualk
				</HoverCard.Trigger>
				<HoverCard.Content class="w-40">
					<div class="flex justify-between space-x-4">
					</div>
					<div class="space-y-1">
						<h4 class="text-sm">@qualk37</h4>
						<p class="text-sm">junior full-stack dev</p>
					</div>
				</HoverCard.Content>
			</HoverCard.Root>
			with
			<HoverCard.Root>
				<HoverCard.Trigger
					href="https://github.com/sveltejs"
					target="_blank"
					rel="noreferrer noopener"
					class="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black"
					>
					SvelteKit
				</HoverCard.Trigger>
				<HoverCard.Content class="w-80">
					<div class="flex justify-between space-x-4">
						<Avatar.Root>
							<Avatar.Image src="https://github.com/sveltejs.png" />
							<Avatar.Fallback>S</Avatar.Fallback>
						</Avatar.Root>
						<div class="space-y-1">
							<h4 class="text-sm font-semibold">@sveltejs</h4>
							<p class="text-sm">Cybernetically enhanced web apps.</p>
						</div>
					</div>
				</HoverCard.Content>
			</HoverCard.Root>
				and 
			<HoverCard.Root>
				<HoverCard.Trigger
					href="https://github.com/huntabyte/shadcn-svelte"
					target="_blank"
					rel="noreferrer noopener"
					class="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black"
					>
					shadcn-svelte
			</HoverCard.Trigger>
			<HoverCard.Content class="w-70">
				<div class="flex justify-between space-x-4">
					<Avatar.Root>
						<Avatar.Image src=https://raw.githubusercontent.com/huntabyte/shadcn-svelte/main/sites/docs/static/android-chrome-192x192.png/>
						<Avatar.Fallback>SS</Avatar.Fallback>
					</Avatar.Root>
					<div class="space-y-1">
						<h4 class="text-sm font-semibold">@shadcn-svelte</h4>
						<p class="text-sm">Beautifully designed components</p>
					</div>
				</div>
			</HoverCard.Content>
		</HoverCard.Root>
	</footer>
</div>


<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
	
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
	
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}
	
	/* footer a {
		font-weight: bold;
	} */
	
	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
