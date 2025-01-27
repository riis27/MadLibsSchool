function generateStory() {
    const inputs = ['noun1', 'adjective1', 'noun2', 'noun3', 'noun4', 'noun5', 'presentParticiple', 'noun6', 'noun7', 'verb1', 'adjective2', 'verb2'];
    const values = {};

    // Gather all input values
    for (const input of inputs) {
        const element = document.getElementById(input);
        if (!element || !element.value) {
            alert(`Please fill in the ${input}`);
            return;
        }
        values[input] = element.value;
    }

    // Generate the story
    const story = `
        If I ran the school, I would make a few ${values.noun1} first.
        All classes would be ${values.adjective1}. Second, in all the ${values.noun2},
        I would install ${values.noun3}, which everyone would love.
        Third, I would remove ${values.noun4} from the cafeteria.
        Instead, I would serve ${values.noun5}. There would also be ${values.noun6}
        for kids to enjoy while they are ${values.presentParticiple}.
        Finally, on the playground, I would ban ${values.noun7}.
        I would make sure there were plenty of ${values.noun6}. As principal, I
        would NEVER ${values.verb1} anyone. Everyone was ${values.adjective2}, and every day they went home ${values.verb2}.
    `;

    // Display the story
    const storyContainer = document.getElementById('story-container');
    const storyText = document.getElementById('story-text');
    
    storyText.textContent = story;
    storyContainer.classList.remove('hidden');
}