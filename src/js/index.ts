


let doItButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("DoIt");
doItButton.addEventListener("click", DoItButton)

function DoItButton(): void {

let inputField1: HTMLInputElement = <HTMLInputElement>document.getElementById("inputField1");
let inputField1String: string = inputField1.value;

let CaseOption: HTMLInputElement = <HTMLInputElement> document.getElementById("case");
let CaseOptionValue: string = CaseOption.value.toString();

let Result: string;

if(CaseOptionValue == "UpperCase")
{
  
  Result = inputField1String.toUpperCase();

  let element: HTMLDivElement = <HTMLDivElement> document.getElementById("content");
      element.innerHTML = Result;

}
else if(CaseOptionValue == "LowerCase"){
  Result = inputField1String.toLowerCase();
 
  let element: HTMLDivElement = <HTMLDivElement> document.getElementById("content");
      element.innerHTML = Result;
}
    
}