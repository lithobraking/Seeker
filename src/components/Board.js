import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Col, Container } from "react-bootstrap";
import { v4 as uuid } from "uuid";
import ApplicationCard from "./ApplicationCard";


const onDrop = (result, columns, setColumns) => {
    if (!result.destination) return;

    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
        const sourceCol = columns[source.droppableId];
        const destCol = columns[destination.droppableId];
        const sourceItems = [...sourceCol.items];
        const destItems = [...destCol.items];

        const [draggedItem] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, draggedItem);

        setColumns({
            ...columns,
            [source.droppableId]: {
                ...sourceCol,
                items: sourceItems
            },
            [destination.droppableId]: {
                ...destCol,
                items: destItems
            }
        })
    } else {
        const column = columns[source.droppableId];
        const newItems = [...column.items];
    
        const [draggedItem] = newItems.splice(source.index, 1);
        newItems.splice(destination.index, 0, draggedItem);
    
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...column,
                items: newItems
            }
        })
    }

}

const Board = () => {
    const [columns, setColumns] = useState(mockColumns);

    return (
        <Container className='d-flex justify-content-center h-100'>
            <DragDropContext onDragEnd={result => onDrop(result, columns, setColumns)}>
                {Object.entries(columns).map(([id, column]) => {
                    return (
                        <Droppable droppableId={id} key={id}>
                            {(provided, snapshot) => {
                                return (
                                    <div className='w-100 h-100 d-flex flex-column align-items-center'
                                        style={{
                                            minWidth: '40%',
                                            padding: 15
                                        }}>

                                        <h3>{column.name}</h3>

                                        <Col
                                            lg='auto'
                                            className='min-vh-100 w-100 m-3 '
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}
                                            style={{
                                                background: snapshot.isDraggingOver ?
                                                    '#dcecfc' : '#e9ecef',
                                                padding: 4,
                                                borderRadius: 20

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
                                    </div>
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
    },
    [uuid()]: {
        name: "Applied",
        items: []
    }
}
