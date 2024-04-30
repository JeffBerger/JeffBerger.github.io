let data = {
    name: 'Skills',
    color: '#81272e',
    text: "Some of my skills",
    children: [
        {
            name: 'Leadership',
            color: ' #a15755',
            text: "Click in to see some of my leadership skills",
            children: [
                {
                    name: 'Team Management',
                    color: 'green',
                    children: [
                        {
                            name: 'Team Building',
                            color: 'green',
                            size: 1
                        }, {
                            name: 'Mentoring',
                            color: 'pink',
                            size: 1
                        }, {
                            name: 'Technical Lead',
                            color: 'pink',
                            size: 1
                        }, {
                            name: 'CTO',
                            color: 'red',
                            size: 1
                        }
                    ]
                }, {
                    name: 'Vendor Relations',
                    color: 'pink',
                    children: [
                        {
                            name: 'Contract Negotiation',
                            color: 'green',
                            size: 1
                        }, {
                            name: 'Vendor Selection',
                            color: 'pink',
                            size: 1
                        }, {
                            name: 'Vendor Management',
                            color: 'pink',
                            size: 1
                        }
                    ]
                }, {
                    name: 'Public Speaking',
                    color: 'grey',
                    children: [
                        {
                            name: 'Conferences',
                            color: 'green',
                            size: 1
                        }, {
                            name: 'Meetups',
                            color: 'pink',
                            size: 1
                        }, {
                            name: 'Workshops',
                            color: 'pink',
                            size: 1
                        }
                    ]
                }, {
                    name: 'Project managment',
                    color: 'red',
                    children: [
                        {
                            name: 'Agile',
                            color: 'green',
                            size: 1
                        }, {
                            name: 'Scrum',
                            color: 'pink',
                            size: 1
                        }, {
                            name: 'Kanban',
                            color: 'pink',
                            size: 1
                        }
                    ]
                }, {
                    name: 'Hiring',
                    color: 'yellow',
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
