let data = {
    name: 'Skills',
    color: '#81272e',
    text: "Some of my skills",
    children: [
        {
            name: 'Leadership',
            color: ' #81272e',
            text: "Click in for a leadership skills summary",
            children: [
                {
                    name: 'Team Management',
                    color: '#761500',
                    text: "I've been managing technical teams for about a decade",
                    children: [
                        {
                            name: 'Team Building',
                            text: "A lot more to building trust than buying some beers for a group of adults",
                            color: '#004f0f',
                            size: 1
                        }, {
                            name: 'Mentoring',
                            text: "I've been teaching in some capacity since 2004",
                            color: '#0d4217',
                            size: 1
                        }, {
                            name: 'Technical Lead',
                            text: "Making sure to remove technical blockers but let others run with a project when they can",
                            color: '#112915',
                            size: 1
                        }, {
                            name: 'CTO',
                            text: "Just beacuse you don't have an engineer above you doesn't mean that the other engineers have nothing to teach you.",
                            color: '#004f0f',
                            size: 1
                        }
                    ]
                }, {
                    name: 'Vendor Relations',
                    text: "A necessary evil",
                    color: '#004f0f',
                    children: [
                        {
                            name: 'Contract Negotiation',
                            text: "Mostly about buying only what we actually need",
                            color: '#161963',
                            size: 1
                        }, {
                            name: 'Vendor Selection',
                            text: "Probably the most important and hardest part of a vendor relationship",
                            color: '#020663',
                            size: 1
                        }, {
                            name: 'Vendor Management',
                            text: "Keeping everyone focused on the right task",
                            color: '#2e305f',
                            size: 1
                        }
                    ]
                }, {
                    name: 'Public Speaking',
                    color: '#121212',
                    text: "Giving presentations and talking to external parties is no problem",
                    children: [
                        {
                            name: 'Conferences',
                            text: "I've given many talks both acaedmic and engineering at conferences through the years",
                            color: '#761500',
                            size: 1
                        }, {
                            name: 'Meetups',
                            text: "Attending meetups to build the company's nextwork or being a speaker at one.",
                            color: '#81272e',
                            size: 1
                        }, {
                            name: 'Workshops',
                            text: "A good team outing that can build skills and networks at the same time",
                            color: '#5c1616',
                            size: 1
                        }
                    ]
                }, {
                    name: 'Project managment',
                    color: '#3b3b3b',
                    text: "Shipping things on time and keeping everyone pushing out code",
                    children: [
                        {
                            name: 'Agile',
                            color: '#81272e',
                            text: "I've managed some of my teams with the agile framework",
                            size: 1
                        }, {
                            name: 'Kanban',
                            text: "Some teams are small enough that a simple kanban board is all one needs",
                            color: '#020663',
                            size: 1
                        }
                    ]
                }, {
                    name: 'Hiring',
                    color: '#2e305f',
                    text: "I've built small teams out for "
                    children: [
                        {
                            name: 'Recruitment',
                            color: 'green',
                            size: 1
                        }, {
                            name: 'Interviewing',
                            color: 'pink',
                            size: 1
                        }, {
                            name: 'Onboarding',
                            color: 'pink',
                            size: 1
                        }
                    ]
                }, {
                    name: 'Systems Architecture',
                    color: 'silver',
                    children: [
                        {
                            name: 'Legacy System Rebuilds',
                            color: 'green',
                            size: 1
                        }, {
                            name: 'Microservices',
                            color: 'pink',
                            size: 1
                        }, {
                            name: 'Distributed Systems',
                            color: 'orange',
                            size: 1
                        }
                    ]
                }
            ]
        },{
        name: 'Individual Contribution',
        color: '#dfb591',
        text: "Click in to see some of my individual contribution skills",
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
                        children: [
                            {
                                name: 'Aiohttp',
                                color: 'green',
                                size: 1
                            }, {
                                name: 'Cython',
                                color: 'pink',
                                size: 1
                            }, {
                                name: 'FastAPI',
                                color: 'pink',
                                size: 1
                            }, {
                                name: 'Async Programming',
                                color: 'red',
                                size: 1
                            }, {
                                name: 'Numerical Programming',
                                color: 'pink',
                                size: 1
                            }
                        ]
                    }, {
                        name: 'C/C++',
                        color: 'pink',
                        children: [
                            {
                                name: 'Cython',
                                color: 'green',
                                size: 1
                            }, {
                                name: 'OpenMP',
                                color: 'pink',
                                size: 1
                            }, {
                                name: 'MPI',
                                color: 'pink',
                                size: 1
                            }
                        ]
                    }, {
                        name: 'Javascript',
                        color: 'pink',
                        children: [
                            {
                                name: 'React',
                                color: 'green',
                                size: 1
                            }, {
                                name: 'NextJS',
                                color: 'pink',
                                size: 1
                            }
                        ]
                    }
                ]
            }, {
                name: 'Devops',
                color: 'green',
                children: [
                    {
                        name: "CI/CD",
                        color: 'green',
                        size: 1,
                        children: [
                            {
                                name: 'Github Actions',
                                color: 'green',
                                size: 1
                            }, {
                                name: 'Bitbucket Pipelines',
                                color: 'pink',
                                size: 1
                            }, {
                                name: 'Teamcity',
                                color: 'orange',
                                size: 1
                            }
                        ]
                    },{
                        name: "Infrastucture as Code",
                        color: 'blue',
                        children: [
                            {
                                name: 'Ansible',
                                color: 'green',
                                size: 1
                            }, {
                                name: 'Terraform',
                                color: 'pink',
                                size: 1
                            },
                        ]
                    }, {
                        name: 'Cloud',
                        color: 'grey',
                        children: [
                            {
                                name: 'AWS',
                                color: 'green',
                                size: 3
                            }, {
                                name: 'GCP',
                                color: 'pink',
                                size: 1
                            }, {
                                name: 'Docker',
                                color: 'green',
                                size: 1
                            },
                        ]
                    }
                ]
            }, {
                name: 'Database Admin.',
                color: 'grey',
                children: [
                    {
                        name: 'MongoDB',
                        color: 'green',
                        size: 4
                    }, {
                        name: 'Cassandra',
                        color: 'pink',
                        size: 2
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

export default data;
