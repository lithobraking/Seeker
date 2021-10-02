import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Button, Col } from "react-bootstrap";
import ApplicationCard from "./ApplicationCard";
import NewColumnModal from "./NewColumnModal";
import { mockColumns } from '../mockData';
import NewItemModal from "./NewItemModal";


const onDrop = (result, columns, setColumns) => {
    if (!result.destination) return;

    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
        const sourceCol = columns[source.droppableId];
        const destCol = columns[destination.droppableId];
        const sourceItems = [...sourceCol.items];
        const destItems = [...destCol.items];

        const [draggedItem] = sourceItems.splice(source.index, 1);
        draggedItem.parent = destination.droppableId;
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
    const [modalShow, setModalShow] = useState(false);
    const [itemModalShow, setItemModalShow] = useState(false);
    const [currentColumnId, setCurrentColumnId] = useState('');
    const handleNewItemClick = (id) => {
        setCurrentColumnId(id);
        setItemModalShow(true);
    }

    return (
        <>
            <div
                className='d-flex h-100 w-auto'
                style={{
                    overflowX: 'auto',
                    overflowY: 'hidden'
                }}>
                <DragDropContext onDragEnd={result => onDrop(result, columns, setColumns)}>
                    {Object.entries(columns).map(([id, column]) => {
                        return (
                            <>
                                <Droppable droppableId={id} key={id}>
                                    {(provided, snapshot) => {
                                        return (
                                            <div className='h-50 d-flex flex-column align-items-center'
                                                style={{
                                                    maxWidth: '40%',
                                                    minWidth: '500px',
                                                    padding: 15
                                                }}>

                                                <Col
                                                    lg='auto'
                                                    className='h-100 w-50 m-3'
                                                    {...provided.droppableProps}
                                                    ref={provided.innerRef}
                                                    style={{
                                                        background: snapshot.isDraggingOver ?
                                                            '#dcecfc' : '#e9ecef',
                                                        padding: 4,
                                                        borderRadius: 20,
                                                        minWidth: '450px',
                                                        minHeight: '75vh',
                                                        overflowY: 'auto'

                                                    }}>
                                                    <div className='d-flex justify-content-between align-items-center m-3'>
                                                        <div>
                                                            <h3>{column.name}</h3>
                                                        </div>
                                                        <div>
                                                            <Button
                                                                variant='outline-primary'
                                                                size='sm'
                                                                onClick={() => handleNewItemClick(id)}
                                                            >Add Item</Button>
                                                        </div>
                                                    </div>
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
                                                                                ...provided.draggableProps.style,
                                                                                opacity: snapshot.isDragging ? '70%' : '100%'
                                                                            }}>
                                                                            <ApplicationCard
                                                                                data={item}
                                                                                columns={columns}
                                                                                setColumns={setColumns} />
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
                            </>
                        )
                    })}
                    <div className='w-100 h-100 d-flex flex-column align-items-center'
                        style={{
                            maxWidth: '500px',
                            padding: 15
                        }}>
                        <Button
                            className='w-50 m-3'
                            variant='outline-primary'
                            size='lg'
                            onClick={() => setModalShow(true)}
                            style={{
                                padding: 4,
                                borderRadius: 20,
                                minWidth: '450px'
                            }}>
                            <strong><h2><strong>+</strong></h2><h5>Add Column</h5></strong>
                        </Button>
                    </div>
                </DragDropContext>
                <NewColumnModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    columns={columns}
                    setColumns={setColumns}
                />
                <NewItemModal
                    show={itemModalShow}
                    onHide={() => setItemModalShow(false)}
                    columns={columns}
                    setColumns={setColumns}
                    parentId={currentColumnId}
                />
            </div >
        </>
    )
}

export default Board;
