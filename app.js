        const heading = React.createElement('h1',{
            id:'rooting', 
            className: 'ivhs'
        },'Vishwajeet from react')

        const heading2 = React.createElement('h2', {
            id: 'heading'
        }, 'This is heading 2')

        const container = React.createElement('div', {
            id: 'container'
        },
        [heading, heading2])
        console.log(heading)
        console.log(heading2)
        const root = ReactDOM.createRoot(document.getElementById('root'))
        const root2 = ReactDOM.createRoot(document.getElementById('root2'))
        //passing a react element inside the root. 
        root.render(container)
        root2.render(container)