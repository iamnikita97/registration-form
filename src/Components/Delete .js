import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';                                                                                                                                                                                                                                                                                                                                                                                                                                                             
import { IconButton } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
    card: {
        maxWidth: "100%",
        marginBottom: "10px"


    }
});

export default function ImgMediaCard(props) {

    const classes = useStyles();
    // const { tabType } = props;
    const state = props.state;

    if (state.allRecords.length > 0) {

        return (
            state.allRecords.map((item, index) =>
                <Grid item xs={12} md={12} key={index.toString()}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardContent className={classes.root}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {item.firstName} {item.lastName}
                                    <br />
                                    {item.email}
                                    <br />
                                    {item.qualification}
                                    <br />
                                    {item.mobileNumber}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <IconButton size="small"
                                onClick={() => props.handleChangeData(item.firstName, item.counterId)}>
                            </IconButton>
                            <IconButton size="small"
                                onClick={() => props.handleRemover(item.counterId)}
                            >
                                <DeleteIcon />

                            </IconButton>
                            <IconButton size="small"
                                onClick={() => props.handleEdit(item.counterId)}
                            >
                                <EditIcon />

                            </IconButton>
                        </CardActions>
                    </Card>
                </Grid>
            )
        );
    } else {
        return (<center><h2>No records available</h2></center>);
    }

}


