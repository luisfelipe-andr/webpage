const source = document.getElementById('languagesTemp').innerHTML;
const template = Handlebars.compile(source);

const context = {
  languages: [
    {
      img: 'img/experience/html.svg',
      alt: 'HTML 5 image',
      name: 'HTML 5',
      level: 'Intermediate',
      update: 'Last updated 2020' 
    },
    {
      img: 'img/experience/css.svg',
      alt: 'CSS 3 image',
      name: 'CSS 3',
      level: 'Intermediate',
      update: 'Last updated 2020' 
    },
    {
      img: 'img/experience/js.svg',
      alt: 'JavaScript image',
      name: 'JavaScript',
      level: 'Beginner',
      update: 'Last updated 2020' 
    },
    {
      img: 'img/experience/sql.svg',
      alt: 'SQL image',
      name: 'SQL',
      level: 'Beginner',
      update: 'Last updated 2020' 
    },
  ]
};

const compiledHtml = template(context);

const displayGoals = document.getElementById('goals');
displayGoals.innerHTML = compiledHtml;