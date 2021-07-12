import React from "react";

const Header = (props) => {
    return <h1>{props.header}</h1>;
};

const Part = (props) => (
    <p>
        {props.part} {props.exercise}
    </p>
);

const Content = (props) => {
    return (
        <div>
            <Part
                part={props.parts[0].name}
                exercise={props.parts[0].exercises}
            />
            <Part
                part={props.parts[1].name}
                exercise={props.parts[1].exercises}
            />
            <Part
                part={props.parts[2].name}
                exercise={props.parts[1].exercises}
            />
        </div>
    );
};

const Total = (props) => {
    let total = 0;

    for (let part of props.parts) {
        total += Number(part.exercises);
    }

    return <p>Number of exercises {total}</p>;
};

const App = () => {
    const course = {
        name: "Half Stack application development",

        parts: [
            {
                name: "Fundamentals of React",
                exercises: 10,
            },

            {
                name: "Using props to pass data",
                exercises: 7,
            },
            {
                name: "State of a component",
                exercises: 14,
            },
        ],
    };

    return (
        <div>
            <Header header={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    );
};

export default App;
