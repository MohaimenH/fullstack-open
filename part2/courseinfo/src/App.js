import React from "react";

const Header = (props) => {
    return <h1>{props.header}</h1>;
};

const Part = (props) => (
    <p>
        {props.part} {props.exercise}
    </p>
);

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map((part) => (
                <Part
                    part={part.name}
                    exercise={part.exercises}
                    key={part.id}
                />
            ))}
        </div>
    );
};

const Total = ({ parts }) => {
    let total = parts.reduce((previousValue, currentValue) => {
        if (isNaN(previousValue)) {
            return previousValue.exercises + currentValue.exercises;
        }
        return previousValue + currentValue.exercises;
    });

    return <p style={{ fontWeight: 600 }}>Number of exercises {total}</p>;
};

const Course = ({ course }) => {
    return (
        <div>
            <Header header={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    );
};

const App = () => {
    const courses = [
        {
            name: "Half Stack application development",
            id: 1,
            parts: [
                {
                    name: "Fundamentals of React",
                    exercises: 10,
                    id: 1,
                },
                {
                    name: "Using props to pass data",
                    exercises: 7,
                    id: 2,
                },
                {
                    name: "State of a component",
                    exercises: 14,
                    id: 3,
                },
                {
                    name: "Redux",
                    exercises: 11,
                    id: 4,
                },
            ],
        },
        {
            name: "Node.js",
            id: 2,
            parts: [
                {
                    name: "Routing",
                    exercises: 3,
                    id: 1,
                },
                {
                    name: "Middlewares",
                    exercises: 7,
                    id: 2,
                },
            ],
        },
    ];

    return (
        <div>
            {courses.map((course) => (
                <Course key={course.id} course={course} />
            ))}
        </div>
    );
};

export default App;

// const App = () => {
//     const course = {
//         id: 1,
//         name: "Half Stack application development",
//         parts: [
//             {
//                 name: "Fundamentals of React",
//                 exercises: 10,
//                 id: 1,
//             },
//             {
//                 name: "Using props to pass data",
//                 exercises: 7,
//                 id: 2,
//             },
//             {
//                 name: "State of a component",
//                 exercises: 14,
//                 id: 3,
//             },
//         ],
//     };

//     return (

//     // <Course course={course} />
//     );
// };

// const App = () => {
//     const course = {
//         name: "Half Stack application development",

//         parts: [
//             {
//                 name: "Fundamentals of React",
//                 exercises: 10,
//             },

//             {
//                 name: "Using props to pass data",
//                 exercises: 7,
//             },
//             {
//                 name: "State of a component",
//                 exercises: 14,
//             },
//         ],
//     };

//     return (
//         <div>
//             <Header header={course.name} />
//             <Content parts={course.parts} />
//             <Total parts={course.parts} />
//         </div>
//     );
// };
