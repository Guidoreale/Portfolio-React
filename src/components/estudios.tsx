import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

export default function Estudios() {
    return (
        <div className='py-20 dark:text-white'> {/* Wrap the JSX elements inside a div */}
            <h3 className='text-3xl py-1 dark:text-teal-600'>Estudios</h3>
            <Timeline position="alternate" className='py-10'>
                <TimelineItem>
                    <TimelineOppositeContent className='text-gray-600 dark:text-gray-400'>
                        2008 - 2015
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Bachillerato en economía - Colegio Don Bosco de Bahia Blanca</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent className='text-gray-600 dark:text-gray-400'>
                        2016 - 2020
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Derecho - Universidad Nacional del sur. 45% de avance.</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent className='text-gray-600 dark:text-gray-400'>
                        2021 - actualidad
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Ingenieria en sistemas de información - Universidad Nacional Del Sur. 45% de avance hasta el momento.</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent className='text-gray-600 dark:text-gray-400'>
                        2021 - actualidad
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Ingles - Nivel Intermedio</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent className='text-gray-600 dark:text-gray-400'>
                        2022
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>cursos de HTML y CSS de Google, partes 1 y 2.</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent className='text-gray-600 dark:text-gray-400'>
                        2023
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>curso de realidad virtual y aumentada en la escuela EATI de la Universidad Nacional Del Sur</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent className='text-gray-600 dark:text-gray-400'>
                        2023
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>curso de DevOps en la escuela EATI de la Universidad Nacional Del Sur</TimelineContent>
                </TimelineItem>
                
            </Timeline>
        </div>
    );
}