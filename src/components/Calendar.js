import React, { Component, useState } from 'react';

import { lightTheme, darkTheme } from './Theme';
import { useDarkMode } from './UseDarkMode';

const Calendar = () => {
    const [theme, toggleTheme, componentMounted] = useDarkMode();

    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    if (!componentMounted) {
        return <div />
    };

    const iframe = '<iframe\n' +
        '            src="https://calendar.google.com/calendar/embed?src=c_9acra227ucphcf4eq6m7theu3o%40group.calendar.google.com&ctz=America%2FLos_Angeles "\n' +
        '            style="border: 0" width="1080" height="800" frameBorder="0" scrolling="no">\n' +
        '        </iframe>'

    function Iframe(props) {
        return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
    }

    return (
        <Iframe iframe={iframe} />
    );
};

export default Calendar;
