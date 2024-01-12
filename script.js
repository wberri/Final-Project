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

function movePiece(){
    
}

shuffle();
