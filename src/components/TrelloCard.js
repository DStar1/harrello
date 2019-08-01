import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import Icon from "@material-ui/core/Icon";
// import TrelloForm from "./TrelloForm";
import { editCard, deleteCard } from "../actions";
import { connect } from "react-redux";
// import TrelloButton from "./TrelloButton";

const CardContainer = styled.div`
    position: relative;
    max-width: 100%;
    word-wrap: break-word;
    margin-bottom: 7px;
`;

const EditButton = styled(Icon)`
  position: absolute;
  display: none;
  right: 5px;
  top: 5px;
  opacity: 0.5;
  ${CardContainer}:hover & {
    display: block;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`;

const DeleteButton = styled(Icon)`
  position: absolute;
  display: none;
  right: 5px;
  bottom: 5px;
  opacity: 0.5;
  ${CardContainer}:hover & {
    display: block;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`;

const TrelloCard = React.memo(({ text, id, listID, index, dispatch }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [cardText, setText] = useState(text);
  
    const closeForm = e => {
      setIsEditing(false);
    };
  
    const handleChange = e => {
      setText(e.target.value);
    };
  
    const saveCard = e => {
      e.preventDefault();
  
      dispatch(editCard(id, listID, cardText));
      setIsEditing(false);
    };
  
    const handleDeleteCard = e => {
      console.log(listID);
      dispatch(deleteCard(id, listID));
    };
  
    const renderEditForm = () => {
      return (
        console.log("Deleted")
        // <TrelloForm text={cardText} onChange={handleChange} closeForm={closeForm}>
        //   <TrelloButton onClick={saveCard}>Save</TrelloButton>
        // </TrelloForm>
      );
    };
  
    const renderCard = () => {
      return (
        <Draggable draggableId={String(id)} index={index}>
          {provided => (
            <CardContainer
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              onDoubleClick={() => setIsEditing(true)}
            >
              <Card>
                <EditButton
                  onMouseDown={() => setIsEditing(true)}
                  fontSize="small"
                >
                  edit
                </EditButton>
                <DeleteButton fontSize="small" onMouseDown={handleDeleteCard}>
                  delete
                </DeleteButton>
  
                <CardContent>
                  <Typography>{text}</Typography>
                </CardContent>
              </Card>
            </CardContainer>
          )}
        </Draggable>
      );
    };
  
    return isEditing ? renderEditForm() : renderCard();
  });
  
  export default connect()(TrelloCard);
// const TrelloCard = ({text, id, index, listID}) => {

//     const handleDeleteCard = e => {
//         console.log(listID, id);
//         // dispatch(deleteCard(id, listID));
//       };

//     return (
//         <Draggable draggableId={String(id)} index={index}>
//             {provided => (
//                 <CardContainer ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} onDoubleClick={() => console.log(`Editing ${String(id)}`)}>
//                     <Card >
//                         <EditButton
//                             // onMouseDown={() => setIsEditing(true)}
//                             fontSize="small"
//                         >
//                             edit
//                         </EditButton>
//                         <DeleteButton fontSize="small" 
//                             onMouseDown={handleDeleteCard}
//                             >
//                             delete
//                         </DeleteButton>
//                         <CardContent>
//                             <Typography gutterBottom>{text}</Typography>
//                         </CardContent>
//                     </Card>
//                 </CardContainer>
//             )}
//         </Draggable>
//     );
// }

// export default TrelloCard;
