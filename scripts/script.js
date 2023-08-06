document.addEventListener("DOMContentLoaded", function () {
    const lis = document.querySelectorAll(".rating li");
    const submitBtn = document.querySelector(".submit-btn");
    const result = document.querySelector(".content");

    let selectedRating = 0;

    lis.forEach(li => {
        li.addEventListener("click", () => {
            selectedRating = parseInt(li.getAttribute("data-value"));
            updateSelected(selectedRating);
        });
    });

    submitBtn.addEventListener("click", () => {
        result.innerHTML="";
        if (selectedRating !== 0) {
            const imgDiv= document.createElement('div');
            const img = document.createElement('img')
            const score = document.createElement('p');
            const title = document.createElement('h1');
            const p = document.createElement('p');

            result.classList.add('thankfull');
            imgDiv.append(img);
            score.innerText = `You selected ${selectedRating} of 5`;
            title.innerText = "Thank you!"
            p.innerText="We appreciate you taking the time to give a rating.if you ever need more support, dont hesitate to get in touch!"

            result.append(imgDiv,score,title,p)

        } else {
            const msg = document.createElement('div')
            msg.classList.add('msg')
            msg.innerText = "Please select a rating before submitting.";
            result.append(msg)
        }
        setTimeout(() => {
            location.reload();
        }, 4000);
    });

    function updateSelected(selectedRating) {
        lis.forEach(li => {
            li.classList.remove("selected", "lower");
            if (parseInt(li.getAttribute("data-value")) < selectedRating) {
                li.classList.add("lower");
            } else if(parseInt(li.getAttribute("data-value")) === selectedRating) {
                li.classList.add("selected");
            }else{
                li.removeAttribute("class");
            }
        });
    }
});
