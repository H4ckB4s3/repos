// Select elements
const searchInput = document.getElementById("search-input");
const resultsContainer = document.getElementById("results-container");
const footer = document.getElementById("footer");

// Render search results
function renderResults(results) {
    resultsContainer.innerHTML = ""; // Clear previous results
    results.forEach(repo => {
        const item = document.createElement("div");
        item.classList.add("result-item");
        item.innerHTML = `
            <a href="${repo.url}" target="_blank">${repo.name}</a>
            <p>${repo.description}</p>
        `;
        // Make the entire div clickable
        item.addEventListener("click", () => {
            window.open(repo.url, "_blank");
        });
        resultsContainer.appendChild(item);
    });
}

// Handle search input
function handleSearch() {
    const query = searchInput.value.toLowerCase().trim(); // Trim spaces
    if (!query) {
        resultsContainer.innerHTML = ""; // Clear results if input is empty
        return;
    }
    const filteredRepos = repoData.filter(repo =>
        repo.name.toLowerCase().includes(query) || // Priority 1: Name
        repo.url.toLowerCase().includes(query) || // Priority 2: URL
        repo.description.toLowerCase().includes(query) || // Priority 3: Description
        repo.author.toLowerCase().includes(query) // Priority 4: Author (hidden in UI)
    );
    renderResults(filteredRepos);
}

// Attach event listener to search input
searchInput.addEventListener("input", handleSearch);


// Initialize footer
function initializeFooter() {
    const footerElement = document.querySelector('.footer');
    
    // Create the report link
    const reportLink = document.createElement('a');
    reportLink.href = "https://github.com/H4ckB4s3/repos";
    reportLink.classList.add('report-link');
    reportLink.textContent = "Report Missing or Broken Link";
    
    // Create the repo count span
    const repoCountElement = document.createElement('span');
    repoCountElement.classList.add('repo-count');
    repoCountElement.textContent = `Total Repos: ${repoData.length}`;

    // Append both elements to the footer
    footerElement.innerHTML = ''; // Clear existing content
    footerElement.appendChild(reportLink);
    footerElement.appendChild(repoCountElement);
}

// Add event listeners
searchInput.addEventListener("input", handleSearch);

// Initialize page
initializeFooter();
