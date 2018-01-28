<template>
	<div class="container">
		<p v-show="wait">Please wait while loading.</p>
		<p v-show="errorMessage">Some errors occurred please try again!</p>
		<table v-show="items.length">
			<thead>
				<tr>
					<th>Name</th>
					<th>Download</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in items" :key="item.name">
					<td>{{ item.name }}</td>
					<td><a :href="item.link" target="_blank">Download</a></td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import {fetchItems} from '@/api'

export default {
	name : 'Home',

	data () {
		return {
			items : [],
			wait : true,
			errorMessage : false
		}
	},

	beforeMount () {
		fetchItems().then((val) => {
			this.wait = false;
			if ( val ) {
				this.items = val;
			} else {
				this.errorMessage = true;
			}
		});
	}
}
</script>
