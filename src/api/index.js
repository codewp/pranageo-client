import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use( VueResource )
Vue.http.options.emulateJSON = true
Vue.http.options.emulateHTTP = true

export function fetchItems() {
    return new Promise(
        (resolve, reject) => {
            Vue.http.get('http://localhost:8081/items').then(response => {
                // resolve(response.body.items);
                if (null != response.body.items) {
                    resolve(response.body.items);
                } else {
                    reject(false);
                }
            }, response => {
                reject(false);
            });
        }
    );
};
