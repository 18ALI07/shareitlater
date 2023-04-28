const Blockfrost = require("@blockfrost/blockfrost-js");

const API = new Blockfrost.BlockFrostAPI({
  projectId: 'preprodWM7tWLXV1F1xyDszN6Nxn8MhKtewv0Mi',
  isTestnet: true,
  baseUrl: 'https://cardano-preprod.blockfrost.io/api/v0',
});

async function runExample() {
  try {
    const latestBlock = await API.blocksLatest();
    const networkInfo = await API.network();
    const latestEpoch = await API.epochsLatest();
    const health = await API.health();
    const address = await API.addresses(
        "addr_test1qpr2lgw0sx80ca2ky7c0drtvvhdgr56r98g7xghrck0lx6ycmv0lucrznjzrux6z3vhkfvd7a6fm3rjn9rxmgr4mznssgp7yml"
    );
    const pools = await API.pools({ page: 1, count: 10, order: "asc" });

    console.log("pools", pools);
    console.log("address", address);
    console.log("networkInfo", networkInfo);
    console.log("latestEpoch", latestEpoch);
    console.log("latestBlock", latestBlock);
    console.log("health", health);
  } catch (err) {
    console.log("error", err);
  }
}

runExample();
const exampleModal = document.getElementById('exampleModal')

const secondModal = document.getElementById('exampleModalToggle2');
async function loadData(arr) {
    const url ='https://script.google.com/macros/s/AKfycbxgS9TAopiANg_7jAkC2Slf_xItyvs1SBW4LHgOqSli_bV6NcgevKn0uFVyPNOLlb-L/exec';
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      data.data.forEach(ele => {
        arr.push(ele);
        console.log(ele);
      });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

function eventtoggler(){
  alert("enter");
  const bool=verify();
  console.log(bool);
  if (bool){
    alert("true");
    const form = document.forms['submit-to-google-sheet'];
    
    form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        console.log(response);
      
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Network response was not ok.');
      }
    })
    .then(data => {
      console.log(data);
     
      
    })
    .catch(error => console.error('Error!', error.message));
});
exampleModal.setAttribute("data-bs-target","#exampleModalToggle2");
  }
  else{
    alert("enter something");
    exampleModal.setAttribute("data-bs-target","#exampleModalToggle1");
  }
  console.log(exampleModal.getAttribute("data-bs-target"));
}


async function verify() {
  let arr = [];
  loadData(arr)
    .then(() => {
      console.log(arr);
      var bool = false;
      arr.forEach(e => {
        if (e === document.getElementById('recipient-name').value) {
          bool = true;
        }
      });
      if(bool){
        exampleModal.setAttribute("data-bs-target","#exampleModalToggle2");
      }
      else{
        exampleModal.setAttribute("data-bs-target","#exampleModalToggle1");
      }
      console.log(bool);
     
    console.log(bool)
    
    
      return bool;
    })
    .catch(error => {
      console.error('Error verifying data:', error);
    });
}


const changes=document.getElementById('recipient-name');
    changes.addEventListener('change',()=>{
        
    const bool=verify();
    
    if (bool){
      
    
        
} 
else{
  alert("bsxjbs")
}
console.log(exampleModal.getAttribute("data-bs-target"));


});

const scriptURL = 'https://script.google.com/macros/s/AKfycbzFg4zKE2M6NIrluxnHfloS8vQpyvzGcTD6zJFq9swa9sD2V-6Pf4J-TZMrH9DdT8Ll/exec';


