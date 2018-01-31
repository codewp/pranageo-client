import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use( VueResource )
Vue.http.options.emulateJSON = true
Vue.http.options.emulateHTTP = true

/**
 * Fetch items from RestApi.
 *
 * @since  1.0.0
 *
 * @return Promise
 */
export function fetchItems() {
    return new Promise(
        (resolve, reject) => {
            Vue.http.get('http://13.95.174.20:8080/items').then(response => {
                if (null != response.body.items) {
                    resolve(response.body.items);
                } else {
                    reject('items is empty!');
                }
            }, response => {
                reject('Error occurred in request to Rest Api.');
            });
        }
    );
};
