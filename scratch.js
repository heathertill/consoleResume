


let name = 'Heather Till'

let career = 'Soon to be Junior Developer. Past elementary teacher. Full time student - there is too much in this world to ever be done learning.';

let aboutMe = 'I am a jack-of-all-trades. I am too curious, impatient, and cheap to pay some to do something I can do myself. Because of this I have learned how to find the information I need to solve most any problem that comes into my life. I have been married almost 21 years and have 3 children and 1 very spoiled black lab. They are 19, 16, and 12. I studied art all through high school and most of college. Because of this love of art and creating, I always have some creative project in the making.\n\n';

let interests = '\n* Knitting\n* Sewing\n* Photo editing\n* Graphic design\n* Travel\n\n';


let companyName = [
    'Clear Lake YMCA, Clear Lake City, TX', 
    'Garfield Elementary, Houston,TX', 
    'Birmingham Early Learning Center, Birmingham, AL'
];

let jobTitle = [
    'Lifeguard', '3rd grade teacher', 'Preschool Teacher'
];

let description = [
    'I lifeguarded and taught swim lessons at a number of area pools for 3 years.', 
    'I was the Gifted and Talented teacher for the 3rd grade for 2 years.', 
    'I taught the 3K class at the center for 1 year.'
]



let skills = "\n\* Painting\n* Baking and cooking\n* Appliance repair\n* Furniture making and reupholstery\n* Irrigation\n* General problem solving\n* Costume and stage design\n* Programming\n\n"





let stuff = [
    {
        skill: 'Painting',
        cool: 1
    }, {
        skill: 'Baking and cooking',
        cool: 0
    }, {
        skill: 'Appliance repair',
        cool: 0
    }, {
        skill: 'Furniture making and reupholstery',
        cool: 0
    }, {
        skill: 'Irrigation',
        cool: 0
    }, {
        skill: 'General problem solving',
        cool: 1
    }, {
        skill: 'Costume and stage design',
        cool: 1
    }, {
        skill: 'Programming',
        cool: 1
    }
]



console.log('My Skills:\n');

for (let eachSkill of stuff) {
    displaySkill(eachSkill.skill, eachSkill.cool)
}

function displaySkill(skill, cool) {
    if (cool === 1) {
        console.log('* BAM: ' + skill)
    } else if (cool == 0) {
        console.log('* ' + skill)
    }
}





console.log('Name: ', name.toUpperCase());

console.log('Career:  ', career);

console.log('About Me:  ', aboutMe);

console.log('Interests:  ', interests);

console.log('Skills:  ', skills);

function displayPosition(companyName, jobTitle, description) {
    console.log('My Previous Experience:\n* ' + jobTitle + ' at ' + companyName + ' - ' + description)
};

displayPosition(companyName[0], jobTitle[0], description[0]);
displayPosition(companyName[1], jobTitle[1], description[1]);
displayPosition(companyName[2], jobTitle[2], description[2]);




console.log('fail')