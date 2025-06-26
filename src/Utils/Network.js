// import  axios  from "axios";
import configs from "./configs";

// export function     postAPICall(url, param, callback, errorcallback, auth_id) {
//     const proxyUrl = 'http://localhost:3001/proxy-post';

//     fetch(proxyUrl, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             ...(auth_id && { 'auth_id': auth_id })
//         },
//         body: JSON.stringify({
//             url: url, 
//             param: param 
//         })
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => {
//         if (typeof callback === 'function') { 
//             callback(data);
//         }
//     })
//     .catch(error => {
//         if (typeof errorcallback === 'function') { 
//             errorcallback(error);
//         }
//     });
// }


  
//   export function getAPICall(url, config, callback, errorcallback) {
//     fetch(configs.AUTH_URL_GET, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ url, config }),
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         if (typeof callback === 'function') {
//           callback(data);
//         }
//       })
//       .catch(error => {
//         if (typeof errorcallback === 'function') {
//           errorcallback(error);
//         }
//       });
//   }
  
//actual API request


export function postAPICall(url, param, callback, errorcallback) {
    fetch(url, {
        method: 'POST',
        headers: {
           // 'auth_id':auth_id ,
            'Content-Type': 'application/json',

        },
            body: JSON.stringify(param)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        if (typeof callback === 'function') { 
            callback(data);
        }
    })
    .catch(error => {
        if (typeof errorcallback === 'function') { 
            errorcallback(error);
        }
    });
}


export function getAPICall(url, config, callback, errorcallback) {
    fetch(url, config)
    .then(data => {
        if (!data.ok) {
            throw new Error('Network response was not ok');
        }
        return data.json();
    })
    .then(data => {
        if (callback != null) {
            callback(data);
        }
    })
    .catch(error => {
        if (errorcallback != null) {
            errorcallback(error);
        }
    });
}



// export function postAPICall(url,param, callback, errorcallback,headers){
//     axios.post(url,param,{ headers })
//     .then(res => {
//       if(callback != null){
//          callback(res);
//       }
//     })
//     .catch(err => {
//       if(errorcallback != null){
      
//          errorcallback(err);
//          console.log(err);
//       }
//     })
// }


// export function getAPICall(url,config, callback, errorcallback){
   
//     axios.get(url, config)
//     .then(res => {
//       //do something
//       if(callback != null){
//          callback(res);
//       }
//     })
//     .catch(err => {
//       // catch error
//       if(errorcallback != null){
//          errorcallback(err);
//       }
//     })
//   }

