// heart count 
let count = 0;

  function addHeart() {
    count++;
    document.getElementById("count").
    innerText = count;
}

let coinCount = 100; 
const coinCounter = document.getElementById("coin-count");

const historyDiv = document.getElementById("history");
const copyCountDiv = document.getElementById("copy-count");  
let copyButtonClicks = 0; 
document.querySelectorAll(".call-btn").forEach(btn => {
    btn.addEventListener("click", function () {
        if (coinCount >= 20) {
            coinCount -= 20; 
            coinCounter.innerText = coinCount;

            const cardBody = btn.closest(".card-body");
            const name = cardBody.querySelector("h1.font-bold")?.innerText || "Unknown";
            const number = cardBody.querySelector(".phone-number").innerText;
            const time = new Date().toLocaleTimeString();

            
            const callItem = document.createElement("div");
            callItem.classList.add("bg-[#f2f2f2]", "rounded", "p-2", "shadow", "text-sm");

            callItem.innerHTML = `
                 <p><strong>${name}</strong></p>
                <p>${number}</p>
                
                <p class="text-right text-xs mb-8 flex justify-end   text-gray-500">${time}</p>
                
            `;

            
            historyDiv.prepend(callItem);

            
            alert(`emergency-service.netlify.app says\nNational Emergency: ${number}`);

        } else {
            
            alert("emergency-service.netlify.app says\nআপনার পর্যাপ্ত কয়েন নেই । কল করতে ২০ কয়েন প্রয়োজন।");
        }
    });
});


function clearAllHistory() {
    historyDiv.innerHTML = "";
}


document.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", function () {
        const number = btn.closest(".card-body").querySelector(".phone-number").innerText;

       
        navigator.clipboard.writeText(number).then(() => {
           
            alert(`Number copied: ${number}`);

            
            copyButtonClicks++;
            copyCountDiv.innerText = ` ${copyButtonClicks}`;  // 
        })
        
    });
});


