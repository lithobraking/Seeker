import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Col, Container } from "react-bootstrap";
import { v4 as uuid } from "uuid";
import ApplicationCard from "./ApplicationCard";


const onDragEnd = () => {
    return 'did it';
}

const Board = () => {
    const [columns, setColumns] = useState(mockColumns);
    return (
        <Container className='d-flex justify-content-center h-100'>
            <DragDropContext onDragEnd={result => console.log(result)}>
                {Object.entries(columns).map(([id, column]) => {
                    return (
                        <Droppable droppableId={id} key={id}>
                            {(provided, snapshot) => {
                                return (
                                    <Col
                                        lg='auto'
                                        className='min-vh-100 m-3 '
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                        style={{
                                            background: snapshot.isDraggingOver ?
                                                '#dcecfc' : '#e9ecef',
                                            padding: 4,
                                        }}>
                                        {column.items.map((item, index) => {
                                            return (
                                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                                    {(provided, snapshot) => {
                                                        return (
                                                            <div
                                                                className='mx-1 my-2 p-1'
                                                                ref={provided.innerRef}
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                                style={{
                                                                    userSelect: 'none',
                                                                    ...provided.draggableProps.style
                                                                }}>
                                                                <ApplicationCard data={item} />
                                                            </div>
                                                        )
                                                    }}

                                                </Draggable>
                                            )
                                        })}
                                        {provided.placeholder}
                                    </Col>
                                )
                            }}
                        </Droppable>
                    )
                })}
            </DragDropContext>
            </Container>
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
    }
}
