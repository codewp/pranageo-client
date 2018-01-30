<template>
	<div class="container">
		<h1>Just a Challenge!</h1>
		<p v-show="wait">Please wait while loading.</p>
		<p v-show="errorMessage">Some errors occurred please try again!</p>
		<table id="rmarkdown-items" v-show="items.length">
			<thead>
				<tr>
					<th>Manual Name</th>
					<th>Download as RMarkdown</th>
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

<style>
#rmarkdown-items {
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

#rmarkdown-items td, #rmarkdown-items th {
    border: 1px solid #ddd;
    padding: 8px;
}

#rmarkdown-items tr:nth-child(even){background-color: #f2f2f2;}

#rmarkdown-items tr:hover {background-color: #ddd;}

#rmarkdown-items th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #4CAF50;
    color: white;
}
</style>
