let boxes = document.querySelectorAll(".box");
let rb = document.querySelector(".reset");
let p1,p2,p3;
let turn = true;
let player;
const wp = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box) =>{
    box.addEventListener("click", () => {
        if(turn == true){
            box.innerText = "X";
            turn = false;
            player = "X";
            box.disabled = true;
        }
        else{
            box.innerText="O";
            turn = true;
            player = "O";
            box.disabled = true;
        }
        
        cw()

        rb.addEventListener("click", function reset(){
            for(let box of boxes){
                box.disabled = false;
                box.innerText = "";
                document.querySelector(".winner").innerText = "";
            }
        });
    });
});

function bd(){
    for(let box of boxes){
        box.disabled = true;
    }
}
function cw(){
    for(pattern of wp){
        console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        console.log(pattern[0],pattern[1],pattern[2]);
        p1 = boxes[pattern[0]].innerText;
        p2 = boxes[pattern[1]].innerText;
        p3 = boxes[pattern[2]].innerText;
        
        if(p1 != "" && p2 != "" && p3 != "" ){
            if(p1 == p2 && p2 == p3){
                console.log("winner");
                document.querySelector(".winner").innerText = "Winner is "+ player;
                bd()
            }
        }
    }
};
