/**
 * Populate the technologies section
 */

const technologies = [
    { name: 'HTML5', icon: 'nf-md-language_html5', color: '#E34F26' },
    { name: 'CSS3', icon: 'nf-md-language_css3', color: '#1572B6' },
    { name: 'JavaScript', icon: 'nf-md-language_javascript', color: '#F7DF1E' },
    { name: 'TypeScript', icon: 'nf-md-language_typescript', color: '#2f73be' },

    { name: 'React', icon: 'nf-md-react', color: '#61DAFB' },
    { name: 'Vue', icon: 'nf-md-vuejs', color: '#4FC08D' },
    { name: 'Angular', icon: 'nf-md-angular', color: '#DD0031' },
    { name: 'Svelte', icon: 'nf-seti-svelte', color: '#FF3E00' },

    { name: 'Node.js', icon: 'nf-md-nodejs', color: '#339933' },
    { name: 'Python', icon: 'nf-md-language_python', color: '#3776AB' },
    { name: 'Figma', icon: 'nf-oct-device_desktop', color: '#F24E1E' },
    { name: 'Git', icon: 'nf-md-git', color: '#F05032' },

    { name: 'Docker', icon: 'nf-md-docker', color: '#2496ED' },
    { name: 'Linux', icon: 'nf-dev-linux', color: '#FCC624' },
    { name: 'HUGO', icon: 'nf-fa-gears', color: '#FF4088' },
    { name: 'Express', icon: 'nf-md-api', color: '#ffffff' },

    { name: 'Firebase', icon: 'nf-md-firebase', color: '#FFCA28' },
    { name: 'MongoDB', icon: 'nf-dev-mongodb', color: '#47A248' },
    { name: 'Google Cloud', icon: 'nf-md-google_cloud', color: '#4285F4' },
    { name: 'AWS', icon: 'nf-md-aws', color: '#f6981b' }
];

const techGrid = document.querySelector('.tech__grid');

technologies.forEach(tech => {

    const techItem = document.createElement('div');
    techItem.classList.add('tech__grid__item');

    const techIcon = document.createElement('i');
    techIcon.classList.add('nf');
    techIcon.classList.add(tech.icon);
    techIcon.style.color = tech.color;

    const techName = document.createElement('p');
    techName.classList.add('tech__name');
    techName.textContent = tech.name;

    // set accent css var
    techItem.style.setProperty('--accent', tech.color);

    techItem.appendChild(techIcon);
    techItem.appendChild(techName);

    techGrid.appendChild(techItem);

});


