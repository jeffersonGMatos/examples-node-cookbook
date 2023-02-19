process.stdout.write("Qual é o seu nome: ");
process.stdin.on("data", (data) => {
    // Processing on each data event
    const name = data.toString().trim().toUpperCase();

    if (name !== "") {
        process.stdout.write(`Hello ${name}`)
    } else {
        process.stderr.write("Input was empty")
    }
});