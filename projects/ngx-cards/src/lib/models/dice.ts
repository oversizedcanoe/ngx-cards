import { Subject } from "rxjs";
import { Die } from "./die";

export class Dice {
    private dice: Die[] = [];

    /**
     * Subject which is sent each time all dice have completed their roll.
     */
    public rolled: Subject<number> = new Subject<number>();

    /**
     * Create a group of die. To create an empty group, call the constructor with no parameters.
     * Custom die can be added with dice.addDie(new Die(2)), dice.addDie(new Die(4)), etc.
     * @param quantity Number of die in this group.
     * @param maxDieValue The max value for each die in this group.
     */
    constructor(quantity: number = 0, maxDieValue: number = 6) {
        for (let i = 0; i < quantity; i++) {
            this.dice.push(new Die(maxDieValue));
        }
    }

    /**
     * Adds a custom die to the group.
     * @param die Die to add to the group.
     */
    addDie(die: Die) {
        this.dice.push(die);
    }

    getDie(index: number) {
        if (index >= this.dice.length) {
            throw new Error('Index too large');
        }

        return this.dice[index];
    }

    rollDice() {
        this.dice.forEach((die) =>{
            die.roll();
        })

        this.rolled.next(this.getTotal());
    }

    getTotal() {
        let total = 0;

        this.dice.forEach((die) => {
            total += die.value;
        })

        return total;
    }
}