'use strict';


export function handler(event, context, callback) {
    console.log(JSON.parse(event.body).data);

}