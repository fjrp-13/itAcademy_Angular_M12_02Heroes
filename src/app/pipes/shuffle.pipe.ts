import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shuffle'
})
export class ShufflePipe implements PipeTransform {

  transform(values: any[], args:string[]): any[] {
	  
    // clone values array
    let shuffleValues: any[] = Array.from(values);
    
    // for(let i=0; i<values.length; i++){
    //   shuffleValues.push(values[i]);
    // }
    
    // shuffle the cloned array
    for (let i = shuffleValues.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffleValues[i], shuffleValues[j]] = [shuffleValues[j], shuffleValues[i]];
    }
    this.shuffle(shuffleValues);
    // return the shuffled cloned array
    return shuffleValues;
  }

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}