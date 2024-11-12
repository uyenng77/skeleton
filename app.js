// This is the central component which wires everything together and will be rendered to the root element that 
// is specified in the html section of this file.
const App = () => {
    
    const width = 960;
    const height = 500;
    const dateHistogramSize = 0.2;

    // TODO 4.1: Setup a state using React.useState similar to what we did for loading the data.
    
    // read world atlas data amd migrant data
    const worldAtlas = useWorldAtlas();
    const data = useData();
    // TODO 1.3: if the data was not loaded yet return an html element that indicates that the data is still loading.
    
    // TODO 4.1: define an accessor function that will be used when filtering the data. The function
    // 			 should extract the reported date of the incident.

    // TODO 4.1: Setup the filtered data. The data is filtered based on the extent of the brush.
    // 			 Use .filter on the data to only include values that are within the brush extent.
    // 			 Make sure to handle the situation when the brush extent is not yet defined.

    // TODO 1.2: Inside the returned react fragment and before the svg element add your new Introduction component in the same
    // way as the WorldGraticule element. You can omit the surrounding svg and g tags and you do not require the width and height
    // attributes.
    // TODO 1.4: Pass the data to the Introduction component just like width and height are passed to Histogram and WorldGraticule
    return (
        <>
            
            <svg width={width} height={height}>
                
                // TODO 1.5: remove width and height from the world graticule component
                <WorldGraticule width={width} height={height}/>
                // TODO 2.1: add the countries element and pass it the world Atlas
                // TODO 2.2: add the Bubbles element and pass it the data
                // TODO 4.1: Pass the filtered data to bubbles
                <g transform={`translate(0, ${height - dateHistogramSize * height})`}>
                    // TODO 3.1: create a Histogram element and pass it the width and height
                    // TODO 4.1: Pass the setter function of the brush extent to Histogram
                </g>
            </svg>
        </>
    );
    
};

// place the visualization into the root element
ReactDOM.render(<App/>, document.getElementById("root"));