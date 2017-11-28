const [w, h, p] = [800, 600, 50];
const url = 'https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/cyclist-data.json';
d3.json(url, function(error, data) {
    if (error) throw error;

    const yScale = d3.scaleLinear()
                        .domain([0, d3.max(data, d=>d.Place)])
                        .range([h-p, p]);

    

    const xScale = d3.scaleLinear()
                        .domain([d3.min(data, d=>d.Seconds), d3.max(data, d=>d.Seconds)])
                        .range([p, w-p]);

    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    d3.select('svg')
        .append('g')
        .attr('transform', `translate(0 , ${h-p})`)
        .call(xAxis);

    d3.select('svg')
        .append('g')
        .attr('transform', `translate(${p}, 0)`)
        .call(yAxis);

    let svg = d3.select('svg')
                    .attr('width', w)
                    .attr('height', h);

        svg.selectAll('circle')
            .data(data)
            .enter()
            .append('circle')
                .attr('cx', d=>xScale(d.Seconds))
                .attr('cy', d=>yScale(d.Place))
                .attr('fill', 'blue')
                .attr('r', 5)
                .attr('stroke', '#fff');
})