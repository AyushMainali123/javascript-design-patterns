// In Javascript, the codes (variables, functions, and classes) can be exported from one file(module) to another using syntax like: export, and export default.
// Doing so, the exported code can be imported using the import keyword and can be used in other Javascript files using import keyword.
// If we don't export the file, the file will be private to the module.


// In the following module, we are exporting the Counter class.


// This variable is not exported from the module. So, it cannot be imported from another module. So, it is a private variable.
const privateVariableScopedToModule = true;


// This varaible contains the export keyword. So, it can be imported from another module.
// This can be imported from other module as: import { exportableVariable } from "....";
export const exportableVariable = true;



function defaultExport() {
    console.log("Default Export");
}


// defaultExport is exported default from the module. 
// This can be imported by other modules as: import defaultExport from "....";
export default defaultExport;