export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review:
            'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];

export const myProjects = [

    {
        "title": "Rosell Shop - E-commerce Platform",
        "desc": "A fully-featured e-commerce platform that simplifies online shopping with a user-friendly interface and efficient backend management.",
        "subdesc": "Rosell Shop integrates Stripe for secure payments, using React, Redux for state management, and Node.js/Express for the backend. It ensures a seamless shopping experience and efficient cart management through API endpoints.",
        "href": "https://github.com/Fernando-00/rosell-shop-frontend",
        "texture": "/textures/project/project1.mp4",
        "logo": "/assets/project-logo1.png",
        "logoStyle": {
            "backgroundColor": "#FFFFFF",
            "border": "0.2px solid #CCCCCC",
            "boxShadow": "0px 0px 60px 0px #CCCCCC4D"
        },
        "spotlight": "/assets/spotlight1.png",
        "tags": [
            {
                "id": 1,
                "name": "React",
                "path": "/assets/react.svg"
            },
            {
                "id": 2,
                "name": "Redux",
                "path": "/assets/redux.png"
            },
            {
                "id": 3,
                "name": "Node.js",
                "path": "/assets/nodejs.png"
            },
            {
                "id": 4,
                "name": "sql",
                "path": "/assets/sql.png"
            }
        ]
    },

    {
        "title": "Photo App - Social Media Platform",
        "desc": "A photo-sharing app that allows users to create profiles, upload photos, and engage with a community through likes and comments.",
        "subdesc": "Built with a React frontend and a Flask backend, the app uses secure JWT authentication and PostgreSQL for data management. It provides a smooth user experience with well-defined API endpoints.",
        "href": "https://github.com/Fernando-00/photo-app",
        "texture": "/textures/project/project2.mp4",
        "logo": "/assets/project-logo2.png",
        "logoStyle": {
            "backgroundColor": "#13202F",
            "border": "0.2px solid #17293E",
            "boxShadow": "0px 0px 60px 0px #2F6DB54D"
        },
        "spotlight": "/assets/spotlight2.png",
        "tags": [
            {
                "id": 1,
                "name": "React",
                "path": "/assets/react.svg"
            },
            {
                "id": 2,
                "name": "sql",
                "path": "/assets/sql.png"
            },
            {
                "id": 3,
                "name": "Flask",
                "path": "/assets/flask.png"
            },
            {
                "id": 4,
                "name": "javascript",
                "path": "/assets/javascript.png"
            }
        ]
    },

    {
        "title": "Memory Recoil - 2D Top-Down Shooter",
        "desc": "An immersive 2D top-down shooter game where players fight to escape a lab swarmed by zombies, using strategy and power-ups to survive.",
        "subdesc": "Built in Unity, Memory Recoil challenges players to navigate through a maze-like lab, unlock doors, and fend off waves of zombies. Players can purchase power-ups to boost their chances of survival. Developed with iterative improvements based on weekly student feedback, the game offers a polished and engaging experience.",
        "href": "https://github.com/Fernando-00/memoryrecoil",
        "texture": "/textures/project/project3.mp4",
        "logo": "/assets/project-logo3.png",
        "logoStyle": {
            "backgroundColor": "#1A1A1D",
            "border": "0.2px solid #2E2E30",
            "boxShadow": "0px 0px 60px 0px #1A1A1D4D"
        },
        "spotlight": "/assets/spotlight6.png",
        "tags": [
            {
                "id": 1,
                "name": "Unity",
                "path": "/assets/unity.png"
            },
            {
                "id": 2,
                "name": "C#",
                "path": "/assets/csharp.png"
            },

        ],

    },


    {
        "title": "GameChat - Reddit-Like Social Media Platform",
        "desc": "A community-driven platform where gamers can discuss various gaming topics through interactive chat rooms.",
        "subdesc": "Built using Django, GameChat allows users to create profiles, connect their Steam accounts, and engage in discussions about their favorite games in real-time. The platform offers a seamless experience for exploring, searching, and participating in gaming conversations.",
        "href": "https://github.com/Fernando-00/gamechat",
        "texture": "/textures/project/project4.mp4",
        "logo": "/assets/project-logo5.png",
        "logoStyle": {
            "backgroundColor": "#2C3E50",
            "border": "0.2px solid #34495E",
            "boxShadow": "0px 0px 60px 0px #2C3E504D"
        },
        "spotlight": "/assets/spotlight5.png",
        "tags": [
            {
                "id": 1,
                "name": "Django",
                "path": "/assets/django.png"
            },
            {
                "id": 2,
                "name": "Python",
                "path": "/assets/python.png"
            },
            {
                "id": 3,
                "name": "HTML/CSS",
                "path": "/assets/html.png"
            }
        ],

    },

];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.8 : isMobile ? 1.2 : 2.3,
        deskPosition: isMobile ? [7.25, -2.7, 10] : [16.25, -7.7, 10],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [7, -8, 0] : isTablet ? [5, -5, 0] : [12, -7, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [14, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-18, -13, -10],
    };
};

export const workExperiences = [
    {
        "id": 1,
        "name": "Unfound",
        "pos": "Mobile Developer Intern",
        "duration": "September 2022 - January 2023",
        "title": "Integrated database information on restaurants with map functionality to enable users to discover and explore nearby dining options, complete with reviews and comments, resulting in a 15% increase in user engagement. Identified and resolved critical bugs in the Android version of the app that caused frequent crashes, improving stability and reducing crash rates by 70%, enhancing the overall user experience on mobile devices.",
        "icon": "/assets/unfound.png",
        "animation": "victory"
    },

    {
        "id": 2,
        "name": "Northwestern University CCL Lab",
        "pos": "Web Developer Intern",
        "duration": "July 2023 - September 2023",
        "title": "Utilized Django to create URL routes, establish class-based views, and design models to organize course data. Applied Canvas API to update student grades directly through the website. Developed a responsive user interface for professors that automated assignment grading pipelines, reducing manual workload by 5 hours per week.",
        "icon": "/assets/nu.png",
        "animation": "victory"
    },

    {
        "id": 3,
        "name": "Northwestern University",
        "pos": "Peer Mentor - Intro to Artificial Intelligence",
        "duration": "September 2023 - December 2023",
        "title": "Led weekly office hours to assist over 100 students with online questions regarding coding assignments and fundamental AI concepts covered in the course, receiving a 4.8/5 student satisfaction rating.",
        "icon": "/assets/nu.png",
        "animation": "victory"
    },

];