/* story-data.js */

// Local Storage Keys const SUBMITTED_STORIES_KEY = 'submittedStories'; const APPROVED_STORIES_KEY = 'approvedStories'; const HIGHLIGHT_STORIES_KEY = 'highlightStories';

// Retrieve data from Local Storage const getStories = (key) => JSON.parse(localStorage.getItem(key)) || []; const saveStories = (key, stories) => localStorage.setItem(key, JSON.stringify(stories));

// Submit a story function submitStory(title, content) { const newStory = { title, content }; const stories = getStories(SUBMITTED_STORIES_KEY); stories.push(newStory); saveStories(SUBMITTED_STORIES_KEY, stories); }

// Approve a story function approveStory(index) { const submittedStories = getStories(SUBMITTED_STORIES_KEY); const approvedStories = getStories(APPROVED_STORIES_KEY); const story = submittedStories.splice(index, 1)[0]; approvedStories.push(story); saveStories(SUBMITTED_STORIES_KEY, submittedStories); saveStories(APPROVED_STORIES_KEY, approvedStories); }

// Highlight a story function highlightStory(index) { const approvedStories = getStories(APPROVED_STORIES_KEY); const highlightStories = getStories(HIGHLIGHT_STORIES_KEY); const story = approvedStories[index]; highlightStories.push(story); saveStories(HIGHLIGHT_STORIES_KEY, highlightStories); }

// Get all stories const getSubmittedStories = () => getStories(SUBMITTED_STORIES_KEY); const getApprovedStories = () => getStories(APPROVED_STORIES_KEY); const getHighlightStories = () => getStories(HIGHLIGHT_STORIES_KEY);

