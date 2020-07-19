import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name : 'convertToSpace'
})
export class ConvertToSpacePipe implements PipeTransform{
    // convert a character to space 
    transform(target : string, char : string ):string {
      return target.replace(char,' ');
    }

}