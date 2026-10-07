// ================= PASSWORD ELEMENTS =================

const passwordInput = document.getElementById("password");

const togglePassword =
    document.getElementById("togglePassword");

const strengthBar =
    document.getElementById("strengthBar");

const strengthText =
    document.getElementById("strengthText");

const suggestion =
    document.getElementById("suggestion");


// ================= REQUIREMENT ELEMENTS =================

const lengthCheck =
    document.getElementById("lengthCheck");

const uppercaseCheck =
    document.getElementById("uppercaseCheck");

const lowercaseCheck =
    document.getElementById("lowercaseCheck");

const numberCheck =
    document.getElementById("numberCheck");

const specialCheck =
    document.getElementById("specialCheck");


// ================= SHOW / HIDE PASSWORD =================

togglePassword.addEventListener("click", function () {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        togglePassword.textContent = "🙈";

    } else {

        passwordInput.type = "password";

        togglePassword.textContent = "👁";

    }

});


// ================= PASSWORD ANALYZER =================

passwordInput.addEventListener("input", function () {

    const password = passwordInput.value;

    let score = 0;

    let suggestions = [];


    // Empty password
    if (password.length === 0) {

        strengthBar.style.width = "0%";

        strengthText.textContent =
            "Strength: Not Checked";

        suggestion.textContent =
            "Enter a password to get security suggestions.";

        resetChecks();

        return;
    }


    // ================= LENGTH =================

    if (password.length >= 8) {

        score++;

        lengthCheck.textContent =
            "✓ At least 8 characters";

    } else {

        lengthCheck.textContent =
            "✗ Use at least 8 characters";

        suggestions.push(
            "Use at least 8 characters."
        );
    }


    // ================= UPPERCASE =================

    if (/[A-Z]/.test(password)) {

        score++;

        uppercaseCheck.textContent =
            "✓ Contains uppercase letter";

    } else {

        uppercaseCheck.textContent =
            "✗ Add an uppercase letter";

        suggestions.push(
            "Add an uppercase letter."
        );
    }


    // ================= LOWERCASE =================

    if (/[a-z]/.test(password)) {

        score++;

        lowercaseCheck.textContent =
            "✓ Contains lowercase letter";

    } else {

        lowercaseCheck.textContent =
            "✗ Add a lowercase letter";

        suggestions.push(
            "Add a lowercase letter."
        );
    }


    // ================= NUMBER =================

    if (/[0-9]/.test(password)) {

        score++;

        numberCheck.textContent =
            "✓ Contains a number";

    } else {

        numberCheck.textContent =
            "✗ Add a number";

        suggestions.push(
            "Add a number."
        );
    }


    // ================= SPECIAL CHARACTER =================

    if (/[^A-Za-z0-9]/.test(password)) {

        score++;

        specialCheck.textContent =
            "✓ Contains special character";

    } else {

        specialCheck.textContent =
            "✗ Add a special character";

        suggestions.push(
            "Add a special character such as @, # or !."
        );
    }


    // ================= STRENGTH =================

    let percentage = (score / 5) * 100;

    strengthBar.style.width =
        percentage + "%";


    if (score <= 1) {

        strengthText.textContent =
            "Strength: Very Weak";

        strengthBar.style.background =
            "#ef4444";

    }

    else if (score === 2) {

        strengthText.textContent =
            "Strength: Weak";

        strengthBar.style.background =
            "#f97316";

    }

    else if (score === 3) {

        strengthText.textContent =
            "Strength: Medium";

        strengthBar.style.background =
            "#eab308";

    }

    else if (score === 4) {

        strengthText.textContent =
            "Strength: Strong";

        strengthBar.style.background =
            "#22c55e";

    }

    else {

        strengthText.textContent =
            "Strength: Very Strong";

        strengthBar.style.background =
            "#16a34a";

    }


    // ================= SUGGESTIONS =================

    if (suggestions.length === 0) {

        suggestion.textContent =
            "Excellent! Your password satisfies all basic strength checks.";

    } else {

        suggestion.textContent =
            suggestions.join(" ");

    }

});


// ================= RESET =================

function resetChecks() {

    lengthCheck.textContent =
        "○ At least 8 characters";

    uppercaseCheck.textContent =
        "○ Contains uppercase letter";

    lowercaseCheck.textContent =
        "○ Contains lowercase letter";

    numberCheck.textContent =
        "○ Contains a number";

    specialCheck.textContent =
        "○ Contains special character";

}