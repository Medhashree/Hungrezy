import React from "react";
import "./footer.css";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    accordion: {
        background: 'linear-gradient(45deg, #FFFFFF 30%, #FCF1EF 90%)',
    },
    accordionDetails: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        cursor: 'pointer',
        color: 'grey',
    }
});


const exploreOptions = [
    {
        id: 1,
        title: "Popular cuisines near me",
        content: [
            {
                id: 1,
                cuisine: "Bengali food near me"
            },
            {
                id: 2,
                cuisine: "Chinese food near me"
            },
            {
                id: 3,
                cuisine: "Mughlai food near me"
            },
            {
                id: 4,
                cuisine: "Desserts food near me"
            },
            {
                id: 5,
                cuisine: "Ice Cream food near me"
            },
        ]
    },
    {
        id: 2,
        title: "Popular restaurant types near me",
        content: [
            {
                id: 1,
                cuisine: "Bakeries near me"
            },
            {
                id: 2,
                cuisine: "Bars near me"
            },
            {
                id: 3,
                cuisine: "Clubs near me"
            },
            {
                id: 4,
                cuisine: "Cafés near me"
            },
            {
                id: 5,
                cuisine: "Pubs near me"
            },
        ]
    },
    {
        id: 3,
        title: "Top Restaurant Chains",
        content: [
            {
                id: 1,
                cuisine: "Burger King"
            },
            {
                id: 2,
                cuisine: "Domino's"
            },
            {
                id: 3,
                cuisine: "Haldiram's"
            },
            {
                id: 4,
                cuisine: "KFC"
            },
            {
                id: 5,
                cuisine: "McDonald's"
            },
        ]
    },
    {
        id: 4,
        title: "Cities We Deliver To",
        content: [
            {
                id: 1,
                cuisine: "Kolkata"
            },
            {
                id: 2,
                cuisine: "Pune"
            },
            {
                id: 3,
                cuisine: "Bangalore"
            },
            {
                id: 4,
                cuisine: "Chennai"
            },
            {
                id: 5,
                cuisine: "Manali"
            },
        ]
    }

];

const Footer = () => {
    const classes = useStyles();
    return (
        <div >
            <div className="max-width footer-begins">
                <div className="collection-title"><b>Explore options near me</b></div>
            </div>

            <div className="max-width footer-space">
                {exploreOptions.map((option) => {
                    return (
                        <div key={option.id} className="accordion">
                            <Accordion className={classes.accordion}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>{option.title}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    {option.content.map((list) => {
                                        return (
                                            <Typography className={classes.accordionDetails}>
                                                {list.cuisine}
                                            </Typography>
                                        )
                                    })}
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    )
                })}


                {/* <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Accordion 2</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Accordion 3</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion> */}
            </div>
        </div>
    )
}

export default Footer