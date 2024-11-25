document.addEventListener("DOMContentLoaded", () => {
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    dropdownToggle.addEventListener("click", () => {
        dropdownMenu.style.display =
            dropdownMenu.style.display === "block" ? "none" : "block";
    });

    // Optional: Close dropdown when clicking outside
    document.addEventListener("click", (event) => {
        if (
            !dropdownMenu.contains(event.target) &&
            !dropdownToggle.contains(event.target)
        ) {
            dropdownMenu.style.display = "none";
        }
    });
});
