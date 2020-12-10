export function getJSON(url){
    const promise = new Promise((res,rej) => {
      const handler = function(){
        if(this.readyState !== 4){
          return;
        }
        if(this.status === 200){
          res(this.response);
        }else{
          rej(new Error(this.statusText))
        }
      };
      const client = new XMLHttpRequest();
      client.open('GET',url);
      client.onreadystatechange = handler;
      client.setRequestHeader('Accept','application/json');
      client.send();
    });
    return promise;
  }

  // getJSON(url).then(value => console.log(value)).catch(err => console.log(err))

