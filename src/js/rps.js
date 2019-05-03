count_draws = 0;
count_person = 0;
count_pc = 0;

let pc_selection = pc();

function pc() {

    let pc = Math.floor(Math.random() * 3 + 1);
    if (pc == 1) {
        pc = "rock";
    } else if (pc == 2) {
        pc = "scissors";
    } else {
        pc = "paper";
    }
    return pc;
}

function battle(person_selection, pc_selection){

        //Draft
        if (person_selection  === pc_selection) {
                let result = "Draw";  
                console.log(result);
                count_draws++;
                document.getElementById("battle_page_message").innerHTML = result;
                document.getElementById("icon_big_pc").innerHTML = "<button><span class='icon_draw_big'></span></button>";
                document.getElementById("icon_big_person").innerHTML = "<button><span class='icon_draw_big'></span></button>";
               
        }
    
        //Person selects rock
        if (person_selection  === "rock") {
                if (pc_selection === "scissors") {
                    let result = "You</br>win!";
                    console.log(result);
                    count_person++;
                    document.getElementById("battle_page_message").innerHTML = result;
                    document.getElementById("icon_big_pc").innerHTML = "<button><span class='icon_scissors_big opacity'></span></button>";
                    document.getElementById("icon_big_person").innerHTML = "<button><span class='icon_rock_big'></span></button>";
                    
                }
                else {
                    if (pc_selection === "paper") {
                    let result = "PC</br>win!";
                    console.log(result);
                    count_pc++;
                    document.getElementById("battle_page_message").innerHTML = result;
                    document.getElementById("icon_big_pc").innerHTML = "<button><span class='icon_paper_big'></span></button>";
                    document.getElementById("icon_big_person").innerHTML = "<button><span class='icon_rock_big opacity'></span></button>";
                       
                }
                }
        }
    
         //Person selects scissors
        if (person_selection  === "scissors") {
            if (pc_selection === "rock") {
                let result = "PC </br> win!";
                console.log(result);
                count_pc++;
                document.getElementById("battle_page_message").innerHTML = result;
                document.getElementById("icon_big_pc").innerHTML = "<button><span class='icon_rock_big'></span></button>";
                document.getElementById("icon_big_person").innerHTML = "<button><span class='icon_scissors_big opacity'></span></button>";
    
            }
            else {
                if (pc_selection === "paper") {
                let result = "You </br> win!";
                console.log(result);
                count_person++;
                document.getElementById("battle_page_message").innerHTML = result;
                document.getElementById("icon_big_pc").innerHTML = "<button><span class='icon_paper_big opacity'></span></button>";
                document.getElementById("icon_big_person").innerHTML = "<button><span class='icon_scissors_big'></span></button>";
                   
            }
            }
        }
    
         //Person selects paper
         if (person_selection  === "paper") {
            if (pc_selection === "rock") {
                let result = "You </br> win!";
                console.log(result);
                count_person++;
                document.getElementById("battle_page_message").innerHTML = result;
                document.getElementById("icon_big_pc").innerHTML = "<button><span class='icon_rock_big opacity'></span></button>";
                document.getElementById("icon_big_person").innerHTML = "<button><span class='icon_paper_big'></span></button>";
           
            }
            else {
                if (pc_selection === "scissors") {
                let result = "PC </br> win!";
                console.log(result);
                count_pc++;
                document.getElementById("battle_page_message").innerHTML = result;
                document.getElementById("icon_big_pc").innerHTML = "<button><span class='icon_scissors_big'></span></button>";
                document.getElementById("icon_big_person").innerHTML = "<button><span class='icon_paper_big opacity'></span></button>";
                   
            }
            }
        }
        
        
        
        document.getElementById("welcome").style.display = "none";
        document.getElementById("battle_page_PC").style.display = "flex";
        document.getElementById("play").style.display = "none";
        document.getElementById("play_again").style.display = "block";
        document.getElementById("count_person").innerHTML = "Your Wins " + count_person;
        document.getElementById("count_draws").innerHTML = "Draws " + count_draws;
        document.getElementById("count_pc").innerHTML = "PC Wins " + count_pc;
       
        }
    
    






function switch_pages(page){
    if (page === "battle_page") {   
        document.getElementById("landing_page").style.display = "block";
        document.getElementById("battle_page").style.display = "none";
    }
}




