document.getElementById("submitButton").addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const q1 = parseInt(document.getElementById("q1").value, 10);
    const q2 = parseInt(document.getElementById("q2").value, 10);
    const q3 = parseInt(document.getElementById("q3").value, 10);
    const q4 = parseInt(document.getElementById("q4").value, 10);
    const q5 = parseInt(document.getElementById("q5").value, 10);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Prašome įvesti galiojantį el. pašto adresą.");
        return;
    }

    const phoneRegex = /^\+?[0-9\s\-()]{7,15}$/;
    if (!phoneRegex.test(phone)) {
        alert("Prašome įvesti galiojantį telefono numerį.");
        return;
    }

    if (address === "") {
        alert("Prašome įvesti adresą.");
        return;
    }

    const ratings = [q1, q2, q3, q4, q5];
    for (let i = 0; i < ratings.length; i++) {
        if (ratings[i] < 1 || ratings[i] > 10) {
            alert(`Vertinimas klausimui ${i + 1} turi būti tarp 1 ir 10.`);
            return;
        }
    }

    const formData = {
        name,
        surname,
        email,
        phone,
        address,
        ratings: { q1, q2, q3, q4, q5 },
    };

    const averageRating = (
        (q1 + q2 + q3 + q4 + q5) / 5
    ).toFixed(2);

    let color;
    if (averageRating < 4) {
        color = "red";
    } else if (averageRating < 7) {
        color = "orange";
    } else {
        color = "green";
    }

    console.log(formData);

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <p><strong>Vardas:</strong> ${name}</p>
        <p><strong>Pavardė:</strong> ${surname}</p>
        <p><strong>El. paštas:</strong> ${email}</p>
        <p><strong>Telefono numeris:</strong> ${phone}</p>
        <p><strong>Adresas:</strong> ${address}</p>
        <p><strong>Vidutinis įvertinimas:</strong> 
            <span style="color: ${color};">${averageRating}</span>
        </p>
        <p>${name} ${surname} (${email}): ${averageRating}</p>
    `;
});
