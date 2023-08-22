const noSkillButton = document.querySelector('.notQualifiedButton');
const skillsContainer = document.querySelector('.skills-container');

noSkillButton.addEventListener('click', () => {
    let newSkill = prompt('What does James need to learn to get hired');
    alert(`Oh, you must have missed it. I have ${newSkill} in my skills section`);
    //this if statement works well, but could i make a new array with the things in then add the new skill to the array and then have the if statement check against the array????
    if
        (newSkill.toLowerCase() !== 'react' &&
        newSkill.toLowerCase() !== 'css' &&
        newSkill.toLowerCase() !== 'html' &&
        newSkill.toLowerCase() !== 'javascript' &&
        newSkill.toLowerCase() !== 'nodejs') {
        skillsContainer.innerHTML += `<div class="skills-cards cards"><img class="skills-picture pictures" src="images/thumbsUp.jpg"
    alt="A new skill card suddenly appears">
    <h3>${newSkill}</h3>
    <p class="skills-text">He is very good at ${newSkill}...(or he will be soon)</p>
    </div>`}
})


