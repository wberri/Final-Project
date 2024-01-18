let selectedPiece = null;
let selectedDiv = null;


function shuffle(){
    let nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    
    for (let i = 1;i < 17;i++){
        console.log(nums);
        const img = document.getElementById(`p${i}`);
        const num = Math.floor(Math.random()*nums.length);
       img.src = `chicken${nums[num]}.png`;
        nums.splice(num,1);
    }
    
}

function selectPiece(){
    if (this.id.substring(0,1) != "p" || this.id.substring(0,2) == "ps"){
        return null;
    }
    selectedPiece = this;
    
    for (let i = 1; i< 17; i++){
        document.getElementById(`p${i}`).removeEventListener('click',selectPiece);
    }
    let num = selectedPiece.id.substring(1);
    selectedDiv = document.getElementById(`ps${num}`);
    selectedDiv.style.borderWidth = "5px 5px 5px 5px";
    selectedDiv.style.borderColor = "blue";
    for (let i = 1; i< 17; i++){
        document.getElementById(`p${i}`).addEventListener('click',placePiece);
    }
    console.log(selectedPiece.id);

}

function checkPuzzle(){
    for (let i = 1; i < 17; i++){
        let piece = document.getElementById(`p${i}`);
        if (piece.src.text != `chicken${i}`){
            return  false;
        }
    }
    return true;
}

function placePiece(){
    if (this.id.substring(0,1) != "p" || this.id.substring(0,2) == "ps"){
        return null;
    }
    for (let i = 1; i< 17; i++){
        document.getElementById(`p${i}`).removeEventListener('click',placePiece);
    }
    selectedDiv.style.borderWidth = "1.5px 1.5px 1.5px 1.5px";
    selectedDiv.style.borderColor = "black";
    let temp = selectedPiece.src;
    selectedPiece.src = this.src;
    this.src = temp;
    selectedPiece = null;
    selectedDiv = null;
    console.log(checkPuzzle());
    for (let i = 1; i< 17; i++){
        document.getElementById(`p${i}`).addEventListener('click',selectPiece);
    }

}

for (let i = 1; i< 17; i++){
    document.getElementById(`p${i}`).addEventListener('click',selectPiece);
}



shuffle();
