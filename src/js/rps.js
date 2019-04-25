function rps()  {
    this.start = (number) => {
        return number;
    }
}


if (choice1 === "paper") {
    if (choice2 === "rock") {
        return "paper wins";
    } else {
        if (choice2 === "scissors") {
            return "scissors wins";
        }
    }
    if (choice1 === "scissors") {
        if (choice2 === "rock") {
            return "rock wins";
        } else {
            if (choice2 === "paper") {
                return "scissors wins";
            }
        }
    }
}