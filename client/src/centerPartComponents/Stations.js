import React from "react";
import Map from "../mapComponents/Map";
import "./Stations.css"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const mapData = [
    {
        address: "Октябрьская ул., 6, Владивосток, Приморский край, 690091",
        city: "Vdk",
        firstCoord: "43.02518741045164",
        secondCoord: "131.89433106179112"
    },
    {
        address: "ул. Льва Толстого, 6-8, Санкт-Петербург, 197022",
        city: "Spb",
        firstCoord: "59.964307743264655",
        secondCoord: "30.321685968502226"
    },
    {
        address: "ул. Петра Алексеева, д.87, Якутск, Респ. Саха (Якутия), 677005",
        city: "Ykt",
        firstCoord: "62.046652375083504",
        secondCoord: "129.71422653169765"
    }
]

class Stations extends React.Component {
    /*coordinateTake(){
        this.setState((state, props) => ({
            firstCoord: this.coord1
        }));
    }*/
    /*firstCode = (item1, item2) => {
        const a = item1
        const b = item2
        console.log(a)
    }*/

    //43.02518741045164, 131.89433106179112
    render() {
        return (
            <div className="stations">
                <div className="containerListAndMap">
                    <div className="stationsList">
                        <List
                            sx={{ width: '100%', maxWidth: 360, bgcolor: 'white' }}
                            aria-label="contacts"
                        >        
                            {
                                mapData.map((item, index) => {
                                    return(
                                        <ListItem button dense divider>
                                            <ListItemButton dense disableGutters>
                                                <ListItemText inset secondary={item.city} primary={item.address} key={index} />
                                            </ListItemButton>
                                        </ListItem>   
                                    )
                                })
                            }     
                        </List>
                    </div>
                    <div className="map">
                        <Map/>
                    </div>
                </div>
            </div>
        )
    }

}

export default Stations;