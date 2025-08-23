# Usage

 - `npm install oversizedcanoe/ngx-cards`

 - Update your `angular.json` file in your project. Under `projects > project name > architect > build > options > assets`, add:
```
    {
    "glob": "**/*",
    "input": "node_modules/ngx-cards/dist/ngx-cards/assets/cards",
    "output": "/assets/cards"
    }
```
 
 - Reference code in your TypeScript files with
 
 ```
 import { Card, Suit } from 'ngx-cards'

/** stuff */

public card: Card = new Card(4, Suit.Club);
 ```

- Use the component in your HTML files with

```
<ngx-card [card]="card"></ngx-card>
```

### Making Changes
 - If you fork/pull this repo and make changes, you do not need to build the dist folder before commiting to the repo.
 - The repo has a `prepare` script defined, which means when the module is installed, the consuming app will automatically run the script defined (in this case, `ng build ngx-cards`) and output the proper dist files locally.

### Todo
 - Add more use cases with flipping cards, deck manipulation
 - Demo pics
 - Remove/clean up test project
 - Figure out better way to not require updating of consuming applications' `angular.json`
 - Remove dist folder from git

### Sources
Playing card PNG source [here](https://www.me.uk/cards/makeadeck.cgi).

