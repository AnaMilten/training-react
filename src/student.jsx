import React from 'react';

class Student extends React.Component {

    render() {
        const ListStudent = [{
            name: 'Bruce Banner',
            alias: 'Hulk',
            age: 28
        }, {
            name: 'Tony Stark',
            alias: 'Iron Man',
            age: 35
        }, {
            name: 'Henry Pym',
            alias: 'Ant Man',
            age: 29
        }, {
            name: 'Peter Parker',
            alias: 'Spiderman',
            age: 22
        }, {
            name: 'Peter Quill',
            alias: 'Star Lord',
            age: 26
        }, {
            name: 'James Howlett',
            alias: 'Wolverine',
            age: 33
        }, {
            name: 'Matt Murdok',
            alias: 'Daredevil',
            age: 34
        }];


        const eleve = ListStudent.map(list =>
            <div>
                <li>{list.name} - {list.alias} - {list.age}</li>
            </div>
        )


        const eleveName = eleve.sort(function (a, b) {
           return (a.name.localeCompare(b.name));
        });


        const eleveAlias = eleve.sort(function (a, b) {
            return (
                a.alias.localeCompare(b.alias)
            );
        });


        const eleveAge = eleve.sort(function (a, b) {
            return (
                a.age - b.alias
            );
        });

        
        return (
            <ul>{eleve}  {eleveName} {eleveAlias}  {eleveAge}</ul>
        );
    }
}




export default Student;