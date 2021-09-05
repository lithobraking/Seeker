import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Col } from "react-bootstrap";
import { v4 as uuid } from "uuid";


const onDragEnd = () => {
    return 'did it';
}

const Board = () => {
    const [columns, setColumns] = useState(mockColumns);
    return (
        <div className='d-flex justify-content-center h-100'>
            <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns)}>
                {Object.entries(columns).map(([id, column]) => {
                    return (
                        <Droppable droppableId={id}>
                            {(provided, snapshot) => {
                                return (
                                    <Col
                                        className='min-vh-100 w-100 m-3 '
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                        style={{
                                            background: snapshot.isDraggingOver ?
                                                '#dcecfc' : '#e9ecef',
                                            padding: 4,
                                        }}>

                                    </Col>
                                )
                            }}
                        </Droppable>
                    )
                })}
            </DragDropContext>
        </div>
    )
}

export default Board;



const mockItems = [
    {
        id: uuid(),
        position: "job title",
        company: "company name",
        status: "applied",
        date: "date applied for job",
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
        position: "job title",
        company: "company name",
        status: "applied",
        date: "date applied for job",
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
        position: "job title",
        company: "company name",
        status: "not selected",
        date: "date applied for job",
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
        position: "job title",
        company: "company name",
        status: "interviewing",
        date: "date applied for job",
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

const mockColumns = {
    [uuid()]: {
        name: "Interested",
        items: mockItems
    },
    [uuid()]: {
        name: "Applied",
        items: mockItems
    }
}
