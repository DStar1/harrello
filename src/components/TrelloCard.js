import React from "react";
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const TrelloCard = ({text}) => {
    return (
        <div style={styles.cardContainer}>
            <Card>
                <Typography gutterBottom>{text}</Typography>
            </Card>
        </div>
    );
}

const styles = {
    cardContainer: {
        textAlign: 'center',
        // textIndent: 10,
        marginBottom: 7
    }
}

export default TrelloCard;