fetch('https://reqres.in/api/users?page=1')
  .then((data1) => {
    return data1.json();
  }).then((completedata) => {
    var c=completedata.data;
    let data2="";
    c.map((values)=>{
      data2+=`
      <div class="card my-4" >
      <img src=${values.avatar} class="card-img-top" alt="..." >
      <div class="card-body">
        <p class="card-text"><small class="text-muted">${values.id}</small></p>
        <p class="card-text">${values.email}</p>
        <h5 class="card-title">${values.first_name+" "+values.last_name}</h5>
      </div>
      </div>
      `
      ;
    });
      document.getElementById("cards").innerHTML=data2;
    }).catch((err)=>
    {
      console.log(err);
    });
  