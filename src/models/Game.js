export const Game_Server = {
    Players: [],
    Picture_Deck: [],
    Caption_Deck: [],
    Top_Of_Caption_Deck: 0,
    Top_Of_Picture_Deck: 0,

    Dealer: -1,
    Captions_In_Play: [], // strings
    Picture_In_Play: "",
    Caption_Chosen: -1,
Get_Hand(amount = 7){
    this.Top_Of_Caption_Deck += amount
    return this.Caption_Deck.slice(this.Top_Of_Caption_Deck - amount, this.Top_Of_Caption_Deck)
    }   
}

export const Game_Client = {
    Players: [
        { name: "Moshe", points: 0 },
        { name: "Bernie", points: 0 },
        { name: "Donald", points: 0 },
        { name: "Andrew", points: 0 },
    ],
    Dealer: -1,
    Captions_In_Play: [], // strings
    Picture_In_Play: "",
    Caption_Chosen: -1
}

export var My_Captions = [];

export class Player {
    name;
    points;
    captions;
}