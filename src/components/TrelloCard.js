import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from "@material-ui/core/CardContent";// padding around text
import Typography from '@material-ui/core/Typography';

const TrelloCard = ({text}) => {
    return (
        <div style={styles.cardContainer}>
            <Card>
                <CardContent>
                    <Typography gutterBottom>{text}</Typography>
                </CardContent>
            </Card>
        </div>
    );
}

const styles = {
    cardContainer: {
        marginBottom: 7
    }
}

export default TrelloCard;