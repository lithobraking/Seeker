import { v4 as uuid } from "uuid";

export const mockItems = [
    {
        id: uuid(),
        position: "Full Stack Engineer, Platform Services",
        company: "Zillow",
        status: "applied",
        date: "24 Oct 2022",
        contacts: [
            {
                name: "name",
                title: "job title",
                company: "company",
                email: "email address",
                phone: "phone number"
            }
        ],
        link: "link to job post",
        milestones: [
            {
                title: "milestone name",
                date: "scheduled date of milestone",
                details: "milestone details"
            }
        ],
        offer: {
            date: "date received offer",
            basePay: 0,
            stock: 0,
            bonus: 0
        },
        notes: "any additional notes or thoughts"
    },
    {
        id: uuid(),
        position: "UX Designer",
        company: "Twitter",
        status: "applied",
        date: "10 Oct 2022",
        contacts: [
            {
                name: "name",
                title: "job title",
                company: "company",
                email: "email address",
                phone: "phone number"
            }
        ],
        link: "link to job post",
        milestones: [
            {
                title: "milestone name",
                date: "scheduled date of milestone",
                details: "milestone details"
            }
        ],
        offer: {
            date: "date received offer",
            basePay: 0,
            stock: 0,
            bonus: 0
        },
        notes: "any additional notes or thoughts"
    },
    {
        id: uuid(),
        position: "Front End Developer",
        company: "Stitch Fix",
        status: "not selected",
        date: "20 Sep 2022",
        contacts: [
            {
                name: "name",
                title: "job title",
                company: "company",
                email: "email address",
                phone: "phone number"
            }
        ],
        link: "link to job post",
        milestones: [
            {
                title: "milestone name",
                date: "scheduled date of milestone",
                details: "milestone details"
            }
        ],
        offer: {
            date: "date received offer",
            basePay: 0,
            stock: 0,
            bonus: 0
        },
        notes: "any additional notes or thoughts"
    },
    {
        id: uuid(),
        position: "Back End Software Engineer",
        company: "Spotify",
        status: "interviewing",
        date: "26 Sep 2022",
        contacts: [
            {
                name: "name",
                title: "job title",
                company: "company",
                email: "email address",
                phone: "phone number"
            }
        ],
        link: "link to job post",
        milestones: [
            {
                title: "milestone name",
                date: "scheduled date of milestone",
                contacts: "milestone details"
            }
        ],
        offer: {
            date: "date received offer",
            contacts: 0,
            stock: 0,
            bonus: 0
        },
        notes: "any additional notes or thoughts"
    }
]

export const mockColumns = {
    [uuid()]: {
        name: "Interested",
        items: mockItems
    },
    [uuid()]: {
        name: "Applied",
        items: []
    }
}

