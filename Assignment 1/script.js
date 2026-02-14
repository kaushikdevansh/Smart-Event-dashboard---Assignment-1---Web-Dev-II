const eventForm = document.getElementById("eventForm");
const eventTitle = document.getElementById("eventTitle");
const eventDate = document.getElementById("eventDate");
const eventCategory = document.getElementById("eventCategory");
const eventDescription = document.getElementById("eventDescription");
const clearAllBtn = document.getElementById("clearAllBtn");
const addSampleBtn = document.getElementById("addSampleBtn");
const eventContainer = document.getElementById("eventContainer");

let sampleEvent = [
    {
        title: "Web Dev Workshop",
        date: "2026-04-06",
        category: "Workshop",
        description: "Frontend basics"
    },
    {
        title: "Tech Conference",
        date: "2026-04-07",
        category: "Conference",
        description: "Latest tech trends"
    }
];

function createEventCard(eventData) {
    const Card = document.createElement("div");
    Card.className = "event-card";
    Card.innerHTML = `
        <h3>${eventData.title}</h3>
        <p><strong>Date:</strong> ${eventData.date}</p>
        <p><strong>Category:</strong> ${eventData.category}</p>
        <p><strong>Description:</strong> ${eventData.description}</p>
        <button class="delete-btn">Delete</button>
    `;
    return Card;
}

function addEvent(eventData) {
    const emptyState = document.querySelector(".empty-state");
    if (emptyState) {
        emptyState.remove();
    }
    const eventCard = createEventCard(eventData);
    eventContainer.appendChild(eventCard);
}

eventForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const eventData = {
        title: eventTitle.value,
        date: eventDate.value,
        category: eventCategory.value,
        description: eventDescription.value
    };
    addEvent(eventData);
    eventForm.reset();
});

eventContainer.addEventListener("click", (event) => {
    const Card = event.target.closest(".event-card");
    if (event.target.classList.contains("delete-btn")) {
        Card.remove();
    }
    if (!eventContainer.querySelector(".event-card")) {
        eventContainer.innerHTML = "<div class='empty-state'>No events yet. Add your first event!</div>";
    }
});

addSampleBtn.addEventListener("click", () => {
    sampleEvent.forEach(addEvent);
});

clearAllBtn.addEventListener("click", () => {
    eventContainer.innerHTML = "<div class='empty-state'>No events yet. Add your first event!</div>";
});

const original = document.getElementById("original");
const result = document.getElementById("result");
const showHtml = document.getElementById("showHtml");
const showText = document.getElementById("showText");
const showContent = document.getElementById("showContent");

showHtml.addEventListener("click", () => {
    result.innerHTML = original.innerHTML;
});

showText.addEventListener("click", () => {
    result.innerText = original.innerText;
});

showContent.addEventListener("click", () => {
    result.textContent = original.textContent;
});