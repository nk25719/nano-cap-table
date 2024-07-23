// Not a traditional server, these functions just provide a way to save current session to github

const GITHUB_API_URL = 'https://api.github.com';
const GITHUB_REPO = 'PubInv/nano-cap-table';
const GITHUB_FILE_PATH = 'cap_table.json';


// Update page details function that sets repository link and table name
function updatePageDetails(name) {
    document.getElementById('pageTitle').textContent = name + " - Nano Cap Table";
    document.getElementById('repoLink').setAttribute('href', `https://github.com/${GITHUB_REPO}`);
    document.getElementById('repoLink').textContent = `Visit ${name}`;
}

// Fetch cap_table.json from GitHub
async function fetchFromGitHub() {
    try {
        // Assuming GITHUB_FILE_URL directly points to the raw user content URL of the file in the GitHub repository
        const GITHUB_FILE_URL = `https://raw.githubusercontent.com/${GITHUB_REPO}/main/${GITHUB_FILE_PATH}`;
        
        const response = await fetch(GITHUB_FILE_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.text();
        const obj = JSON.parse(data);
        const capTable = new NanoCapTable(obj.name);
        capTable.table = obj.table;
        console.log("data", data);
        console.log(capTable)
        updatePageDetails(capTable.name);
        return capTable;
    } catch (error) {
        console.error('Error fetching from GitHub:', error);
    }
}

// Save cap_table.json to GitHub
async function saveToGitHub(capTable) {
   // const capTable = NanoCapTable.loadFromLocalStorage();
    const content = btoa(unescape(encodeURIComponent(JSON.stringify(capTable))));
    const message = 'Update cap table';
    let GITHUB_TOKEN = ''
    if (GITHUB_TOKEN === '') {
        //alert('Token Invalid')
        GITHUB_TOKEN = window.prompt('Enter a valid github token here')
    }
    try {
        const response = await fetch(`${GITHUB_API_URL}/repos/${GITHUB_REPO}/contents/${GITHUB_FILE_PATH}`, {
            headers: {
                'Authorization': `token ${GITHUB_TOKEN}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });
    
        if (!response.ok) {
            throw new Error(`Failed to fetch file details: ${response.statusText}`);
        }
    
        const data = await response.json();
        const sha = data.sha;
    
        const updateResponse = await fetch(`${GITHUB_API_URL}/repos/${GITHUB_REPO}/contents/${GITHUB_FILE_PATH}`, {
            method: 'PUT',
            headers: {
                'Authorization': `token ${GITHUB_TOKEN}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: message,
                content: content,
                sha: sha,
            }, null, 2)
        });
    
        if (!updateResponse.ok) {
            throw new Error(`Failed to update file: ${updateResponse.statusText}`);
        }
    
        alert('File updated successfully');
    } catch (error) {
        console.error(error);
        alert(`Error saving to GitHub: ${error.message}`);
    }
    
}
