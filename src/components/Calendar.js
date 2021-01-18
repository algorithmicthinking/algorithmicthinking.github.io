// import React, { useState } from 'react';
//
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Container from "react-bootstrap/Container";
//
// // dark theme toggle stuff
// import { ThemeProvider } from 'styled-components';
// import { lightTheme, darkTheme } from './Theme';
// import { useDarkMode } from './UseDarkMode';
//
// // const Calendar = () => {
// //     const [theme, toggleTheme, componentMounted] = useDarkMode();
// //
// //     const themeMode = theme === 'light' ? lightTheme : darkTheme;
// //
// //     if (!componentMounted) {
// //         return <div />
// //     };
// //
// //     const iframe = '<iframe\n' +
// //         '            src="https://calendar.google.com/calendar/embed?src=c_9acra227ucphcf4eq6m7theu3o%40group.calendar.google.com&ctz=America%2FLos_Angeles "\n' +
// //         '            style="border: 0" width="1080" height="800" frameBorder="0" scrolling="no">\n' +
// //         '        </iframe>'
// //
// //     function Iframe(props) {
// //         return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
// //     }
// //
// //     return (
// //         <Iframe iframe={iframe} />
// //     );
// // };
//
//
// import Calendar from "@ericz1803/react-google-calendar";
// import { css } from "@emotion/react";
//
// const API_KEY = ``;
//
// let calendars = [
//     {
//         calendarId: "c_48nj330uf8rqltmlkc8hc4aj5c@group.calendar.google.com"
//     }
// ];
//
// const [theme, toggleTheme, componentMounted] = useDarkMode();
//
// const themeMode = theme === 'light' ? lightTheme : darkTheme;
//
// let styles = {
//     //you can use object styles
//     calendar: {
//         borderWidth: "3px" //make outer edge of calendar thicker
//     },
//
//     //you can also use emotion's string styles (remember to add the line 'import { css } from "@emotion/react";')
//     today: css`
//     /* highlight today by making the text red and giving it a red border */
//     color: red;
//     border: 1px solid red;
//   `
// };
//
// export default function OHCalendar() {
//     if (!componentMounted) {
//         return <div />
//     }
//
//     return (
//             <div
//                 style={{
//                     width: "100%",
//                     paddingTop: "10px",
//                     paddingBottom: "10px",
//                     margin: "auto",
//                     maxWidth: "1080px"
//                 }}
//             >
//                 <ThemeProvider theme={themeMode}>
//                     <Calendar apiKey={API_KEY} calendars={calendars} styles={styles}/>
//                 </ThemeProvider>
//             </div>
//     )
// }


import React from "react";
// import "./styles.css";
import Calendar from "@ericz1803/react-google-calendar";
import { css } from "@emotion/react";

//put your google calendar api key here
const API_KEY = process.env.REACT_APP_CALENDAR_API_KEY;

//replace calendar id with one you want to test

let calendars = [
    { calendarId: "c_48nj330uf8rqltmlkc8hc4aj5c@group.calendar.google.com" }
];

let styles = {
    //you can use object styles
    calendar: {
        borderWidth: "3px" //make outer edge of calendar thicker
    },

    //you can also use emotion's string styles (remember to add the line 'import { css } from "@emotion/react";')
    today: css`
    /* highlight today by making the text red and giving it a red border */
    color: red;
    border: 1px solid red;
  `
};

export default function App() {
    console.log(process.env.REACT_APP_CALENDAR_API_KEY);
    return (
        <div className="App">
            <div
                style={{
                    width: "90%",
                    paddingTop: "50px",
                    paddingBottom: "50px",
                    margin: "auto",
                    maxWidth: "1200px"
                }}
            >
                <Calendar apiKey={API_KEY} calendars={calendars} styles={styles} />
            </div>
        </div>
    );
}
