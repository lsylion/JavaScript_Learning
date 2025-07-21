try{
    let res = displayMessage("Hello, World!");
    console.log(res);
}
catch(err) {
    console.error("An error occurred:", err.message);
}
finally {
    console.log("Execution completed.");
}


throw new Error("This is a custom error message.");