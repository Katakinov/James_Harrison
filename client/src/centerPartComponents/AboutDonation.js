import React, { Component } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Facts from "../facts/factsComponent";
import factsArray from "../facts/factsArray"
import "./AboutDonation.css"

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

class AboutDonation extends Component{
    constructor(props) {
        super(props);
        this.state = {
            factsArray: factsArray
        }
    }
    render(){
        return(
            <div className="aboutDonation">
                <div className="gridContainer">
                    <Box sx={{width: 1 }}>
                        <Box display="grid" gridTemplateColumns="repeat(12, 2fr)" gap={4}>
                            {this.state.factsArray.map((item, index) => {
                                return(
                                    <Box gridColumn={item.size}>
                                        <Item><Facts factsTitle={item.title} factsText={item.text} key={index}/></Item>
                                    </Box>
                                )
                            })}
                        </Box>
                    </Box>
                </div>
            </div>
        )
    }
}

export default AboutDonation;