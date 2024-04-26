export default {
    name: 'Skills',
    color: '#81272e',
    text: "Some of my skills",
    children: [
        {
            name: 'Leadership',
            color: ' #a15755',
            text: `
            Lots of leadership:
            <ul>
                <li>10+ years of team</li>
                <li>Startup and CTO powers!</li>
            </ul>
            `,
            children: [
                {
                    name: 'Team Management',
                    color: 'green',
                    size: 1
                }, {
                    name: 'Vendor Relations',
                    color: 'pink',
                    size: 1
                }, {
                    name: 'Public Speaking',
                    color: 'grey',
                    size: 1
                }, {
                    name: 'Project managment',
                    color: 'red',
                    size: 1
                }, {
                    name: 'Hiring',
                    color: 'yellow',
                    size: 1
                }
            ]
        },{
        name: 'Individual Contribution',
        color: '#dfb591',
        children: [
            {
                name: 'Research',
                color: 'orange',
                children: [
                    {
                        name: 'Physics',
                        color: 'green',
                        size: 1
                    }, {
                        name: 'Mathematics',
                        color: 'pink',
                        size: 1
                    }, {
                        name: 'Quantum Computing',
                        color: 'pink',
                        size: 1
                    }, {
                        name: 'AI/Deep Learning',
                        color: 'red',
                        size: 1
                    }

                ]
            }, {
                name: 'Development',
                color: 'blue',
                children: [
                    {
                        name: 'Python',
                        color: 'green',
                        size: 1
                    }, {
                        name: 'C/C++',
                        color: 'pink',
                        size: 1
                    }, {
                        name: 'Javascript',
                        color: 'pink',
                        size: 1
                    }, {
                        name: 'Distributed Systems',
                        color: 'red',
                        size: 1
                    }

                ]
            }, {
                name: 'Devops',
                color: 'green',
                children: [
                    {
                        name: 'Ansible',
                        color: 'green',
                        size: 1
                    }, {
                        name: 'Terraform',
                        color: 'pink',
                        size: 1
                    }, {
                        name: 'AWS/CGP',
                        color: 'grey',
                        size: 1
                    }, {
                        name: 'Service Architecture',
                        color: 'silver',
                        size: 1
                    }, {
                        name: 'Docker',
                        color: 'gold',
                        size: 1
                    }
                ]
            }, {
                name: 'Data',
                color: 'grey',
                children: [
                    {
                        name: 'MongoDB',
                        color: 'green',
                        size: 1
                    }, {
                        name: 'Cassandra',
                        color: 'pink',
                        size: 1
                    }, {
                        name: 'Postgres',
                        color: 'orange',
                        size: 1
                    }, {
                        name: 'SQL',
                        color: 'blue',
                        size: 1
                    }
                ]
            }
        ]}
    ]
};